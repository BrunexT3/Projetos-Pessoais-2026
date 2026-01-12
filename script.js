document.addEventListener('DOMContentLoaded', () => {
    // --- ELEMENTOS DO DOM ---
    const monthNav = document.getElementById('month-nav');
    const contentArea = document.getElementById('content-area');
    const tripsCollection = db.collection('viagens');
    const monthOrder = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    let allTripsData = {}; // Cache para os dados dos passeios

    // --- FUNÇÕES DE RENDERIZAÇÃO ---

    const renderCard = (tripData, tripId) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('data-id', tripId);

        const monthAbbr = tripData.month.substring(0, 3).toUpperCase();
        const cost = tripData.estimatedCost > 0 ? `R$ ${tripData.estimatedCost.toFixed(2)}` : 'Grátis';
        const days = tripData.estimatedDays > 1 ? `${tripData.estimatedDays} dias` : `${tripData.estimatedDays} dia`;

        card.innerHTML = `
            <div class="card-header">
                <div class="card-month-abbr">${monthAbbr}</div>
                <h2 class="card-title">${tripData.title}</h2>
            </div>
            <div class="card-body">
                <p class="card-description">${tripData.description}</p>
                <div class="card-details">
                    <span><i class="las la-calendar"></i> ${days}</span>
                    <span><i class="las la-money-bill-wave"></i> ${cost}</span>
                </div>
            </div>
            <div class="card-footer">
                <a href="${tripData.googleMapsUrl}" target="_blank" class="card-action-link ${!tripData.googleMapsUrl ? 'disabled' : ''}">
                    <i class="las la-map-marker-alt"></i> Ver no Mapa
                </a>
                <button class="card-edit-button">
                    <i class="las la-pencil-alt"></i> Editar
                </button>
            </div>
        `;
        return card;
    };

    const renderContent = (groupedTrips) => {
        contentArea.innerHTML = '';
        const sortedMonths = Object.keys(groupedTrips).sort((a, b) => monthOrder.indexOf(a) - monthOrder.indexOf(b));

        if (sortedMonths.length === 0) {
            contentArea.innerHTML = '<p class="empty-message">Nenhum passeio encontrado. Edite os dados no Firebase!</p>';
            return;
        }

        for (const month of sortedMonths) {
            const monthSection = document.createElement('section');
            monthSection.classList.add('month-section');
            monthSection.id = `month-${month}`;
            
            const monthTitle = document.createElement('h2');
            monthTitle.classList.add('month-title');
            monthTitle.textContent = month;
            monthSection.appendChild(monthTitle);

            const cardsContainer = document.createElement('div');
            cardsContainer.classList.add('cards-container');
            groupedTrips[month].forEach(trip => {
                const cardElement = renderCard(trip.data, trip.id);
                cardsContainer.appendChild(cardElement);
            });

            monthSection.appendChild(cardsContainer);
            contentArea.appendChild(monthSection);
        }
    };

    const renderSidebar = (groupedTrips) => {
        monthNav.innerHTML = ''; // Limpa antes de renderizar
        const sortedMonths = Object.keys(groupedTrips).sort((a, b) => monthOrder.indexOf(a) - monthOrder.indexOf(b));

        const allLi = document.createElement('li');
        allLi.innerHTML = `<a href="#" class="month-link active" data-month="all">Mostrar Todos <span>${Object.values(groupedTrips).flat().length}</span></a>`;
        monthNav.appendChild(allLi);

        for (const month of sortedMonths) {
            const li = document.createElement('li');
            const tripCount = groupedTrips[month].length;
            li.innerHTML = `<a href="#" class="month-link" data-month="${month}">${month} <span>${tripCount}</span></a>`;
            monthNav.appendChild(li);
        }
    };

    // --- LÓGICA DE FILTRAGEM ---

    monthNav.addEventListener('click', (event) => {
        event.preventDefault();
        const link = event.target.closest('.month-link');
        if (!link) return;

        const selectedMonth = link.dataset.month;
        document.querySelectorAll('.month-link').forEach(l => l.classList.remove('active'));
        link.classList.add('active');

        document.querySelectorAll('.month-section').forEach(section => {
            section.classList.remove('visible');
            if (selectedMonth === 'all' || section.id === `month-${selectedMonth}`) {
                section.classList.add('visible');
            }
        });
    });

    // --- LÓGICA PRINCIPAL ---

    const loadTrips = async () => {
        try {
            const snapshot = await tripsCollection.get();
            if (snapshot.empty) {
                await seedDatabase();
                return loadTrips();
            }
            
            const trips = snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() }));
            allTripsData = trips.reduce((acc, trip) => {
                const month = trip.data.month;
                if (!acc[month]) acc[month] = [];
                acc[month].push(trip);
                acc[month].sort((a, b) => a.data.order - b.data.order);
                return acc;
            }, {});

            renderSidebar(allTripsData);
            renderContent(allTripsData);
            // Mostra todas as seções por padrão no carregamento inicial
            document.querySelectorAll('.month-section').forEach(s => s.classList.add('visible'));
            
        } catch (error) {
            console.error("Erro ao carregar os passeios: ", error);
            contentArea.innerHTML = '<p class="empty-message">Falha ao carregar passeios.</p>';
        }
    };

    loadTrips();

    // --- LÓGICA DO MODAL ---
    const modal = document.getElementById('editModal');
    const editForm = document.getElementById('editForm');
    const closeButton = modal.querySelector('.close-button');
    const cancelButton = modal.querySelector('.cancel-button');
    const tripIdInput = document.getElementById('tripId');
    const tripTitleInput = document.getElementById('tripTitle');
    const tripDescriptionInput = document.getElementById('tripDescription');
    const tripMonthInput = document.getElementById('tripMonth');
    const tripOrderInput = document.getElementById('tripOrder');
    const tripDaysInput = document.getElementById('tripDays');
    const tripCostInput = document.getElementById('tripCost');
    const tripMapsUrlInput = document.getElementById('tripMapsUrl');

    const openEditModal = async (tripId) => {
        try {
            const docRef = tripsCollection.doc(tripId);
            const doc = await docRef.get();
            if (!doc.exists) { console.error("Documento não encontrado!"); return; }
            const tripData = doc.data();

            tripIdInput.value = tripId;
            tripTitleInput.value = tripData.title;
            tripDescriptionInput.value = tripData.description;
            tripMonthInput.value = tripData.month;
            tripOrderInput.value = tripData.order;
            tripDaysInput.value = tripData.estimatedDays;
            tripCostInput.value = tripData.estimatedCost;
            tripMapsUrlInput.value = tripData.googleMapsUrl || '';

            modal.style.display = 'block';
        } catch (error) {
            console.error("Erro ao abrir o modal:", error);
        }
    };

    const closeEditModal = () => {
        modal.style.display = 'none';
        editForm.reset();
    };
    
    const updateCardInUI = (tripId, updatedData) => {
        const card = document.querySelector(`.card[data-id="${tripId}"]`);
        if (!card) return;
        
        const oldMonthSectionId = card.closest('.month-section').id;
        const newMonth = updatedData.month;
        
        // Se o mês mudou, a forma mais segura é recarregar tudo
        if (oldMonthSectionId !== `month-${newMonth}`) {
            loadTrips();
        } else {
            // Atualização otimizada se o mês não mudou
            const monthAbbr = updatedData.month.substring(0, 3).toUpperCase();
            const cost = updatedData.estimatedCost > 0 ? `R$ ${updatedData.estimatedCost.toFixed(2)}` : 'Grátis';
            const days = updatedData.estimatedDays > 1 ? `${updatedData.estimatedDays} dias` : `${updatedData.estimatedDays} dia`;

            card.querySelector('.card-month-abbr').textContent = monthAbbr;
            card.querySelector('.card-title').textContent = updatedData.title;
            card.querySelector('.card-description').textContent = updatedData.description;
            card.querySelector('.card-details').innerHTML = `
                <span><i class="las la-calendar"></i> ${days}</span>
                <span><i class="las la-money-bill-wave"></i> ${cost}</span>
            `;
            const mapsLink = card.querySelector('.card-action-link');
            mapsLink.href = updatedData.googleMapsUrl;
            mapsLink.classList.toggle('disabled', !updatedData.googleMapsUrl);
        }
    };

    contentArea.addEventListener('click', (event) => {
        const editButton = event.target.closest('.card-edit-button');
        if (editButton) {
            const tripId = editButton.closest('.card').dataset.id;
            openEditModal(tripId);
        }
    });

    closeButton.addEventListener('click', closeEditModal);
    cancelButton.addEventListener('click', closeEditModal);
    window.addEventListener('click', (event) => {
        if (event.target == modal) closeEditModal();
    });
    
    editForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const tripId = tripIdInput.value;
        const updatedData = {
            title: tripTitleInput.value,
            description: tripDescriptionInput.value,
            month: tripMonthInput.value,
            order: parseInt(tripOrderInput.value, 10),
            estimatedDays: parseInt(tripDaysInput.value, 10),
            estimatedCost: parseFloat(tripCostInput.value),
            googleMapsUrl: tripMapsUrlInput.value
        };

        try {
            await tripsCollection.doc(tripId).update(updatedData);
            closeEditModal();
            updateCardInUI(tripId, updatedData);
        } catch (error) {
            console.error("Erro ao salvar as alterações:", error);
        }
    });
});

async function seedDatabase() {
    const initialTrips = [
        { month: 'Fevereiro', title: 'Salto', description: 'Complexo da Cachoeira e Parque Rocha Moutonnée.', order: 1, googleMapsUrl: '', estimatedDays: 1, estimatedCost: 100 },
        { month: 'Fevereiro', title: 'Águas de São Pedro', description: 'Thermas Water Park.', order: 2, googleMapsUrl: '', estimatedDays: 1, estimatedCost: 250 },
        { month: 'Março', title: 'Itu', description: 'Parque Maeda (Jardim Japonês e Trencito).', order: 3, googleMapsUrl: '', estimatedDays: 1, estimatedCost: 150 },
        { month: 'Março', title: 'Araçoiaba da Serra', description: 'Fazenda Ipanema (História).', order: 4, googleMapsUrl: '', estimatedDays: 1, estimatedCost: 50 },
        { month: 'Abril', title: 'São Roque', description: 'Roteiro do Vinho.', order: 5, googleMapsUrl: '', estimatedDays: 1, estimatedCost: 200 },
        { month: 'Abril', title: 'Piedade', description: 'Colheita de Caqui ou Jardim Botânico.', order: 6, googleMapsUrl: '', estimatedDays: 1, estimatedCost: 80 },
        { month: 'Maio', title: 'Cotia', description: 'Animália Park.', order: 7, googleMapsUrl: '', estimatedDays: 1, estimatedCost: 300 },
        { month: 'Maio', title: 'Indaiatuba', description: 'Parque Ecológico e Museu da Água.', order: 8, googleMapsUrl: '', estimatedDays: 1, estimatedCost: 0 },
        { month: 'Junho', title: 'Embu das Artes', description: 'Feira de Artesanato.', order: 9, googleMapsUrl: '', estimatedDays: 1, estimatedCost: 120 },
        { month: 'Junho', title: 'Tatuí', description: 'Rota dos Doces Caseiros.', order: 10, googleMapsUrl: '', estimatedDays: 1, estimatedCost: 100 },
        { month: 'Julho', title: 'Cabreúva', description: 'Fazenda do Chocolate.', order: 11, googleMapsUrl: '', estimatedDays: 1, estimatedCost: 150 },
        { month: 'Julho', title: 'Serra Negra', description: 'Fontana di Trevi (ou Jundiaí).', order: 12, googleMapsUrl: '', estimatedDays: 1, estimatedCost: 200 },
        { month: 'Agosto', title: 'Porto Feliz', description: 'Parque das Monções.', order: 13, googleMapsUrl: '', estimatedDays: 1, estimatedCost: 30 },
        { month: 'Agosto', title: 'Holambra', description: 'Arquitetura holandesa e flores.', order: 14, googleMapsUrl: '', estimatedDays: 1, estimatedCost: 180 },
        { month: 'Setembro', title: 'Jundiaí', description: 'Jardim Botânico.', order: 15, googleMapsUrl: '', estimatedDays: 1, estimatedCost: 0 },
        { month: 'Setembro', title: 'Atibaia', description: 'Festa de Flores e Morangos.', order: 16, googleMapsUrl: '', estimatedDays: 1, estimatedCost: 220 },
        { month: 'Outubro', title: 'Guararema', description: 'Trem Turístico.', order: 17, googleMapsUrl: '', estimatedDays: 1, estimatedCost: 180 },
        { month: 'Outubro', title: 'São Paulo', description: 'Aquário do Ipiranga.', order: 18, googleMapsUrl: '', estimatedDays: 1, estimatedCost: 150 },
        { month: 'Novembro', title: 'Votorantim', description: 'Represa de Itupararanga.', order: 19, googleMapsUrl: '', estimatedDays: 1, estimatedCost: 40 },
        { month: 'Novembro', title: 'Boituva', description: 'Parque Ecológico ou Balonismo (visual).', order: 20, googleMapsUrl: '', estimatedDays: 1, estimatedCost: 100 },
        { month: 'Dezembro', title: 'Itu', description: 'Luzes de Natal na Praça.', order: 21, googleMapsUrl: '', estimatedDays: 1, estimatedCost: 0 },
        { month: 'Dezembro', title: 'São Roque', description: 'Vila Don Patto (Decoração).', order: 22, googleMapsUrl: '', estimatedDays: 1, estimatedCost: 250 }
    ];
    const batch = db.batch();
    const tripsCollection = db.collection('viagens');
    for (const trip of initialTrips) {
        const docRef = tripsCollection.doc();
        batch.set(docRef, trip);
    }
    await batch.commit();
    console.log('Banco de dados populado com a nova estrutura de dados!');
}