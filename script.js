document.addEventListener('DOMContentLoaded', () => {
    // --- ELEMENTOS DO DOM ---
    const monthNav = document.getElementById('month-nav');
    const contentArea = document.getElementById('content-area');
    const newTripButton = document.getElementById('new-trip-button');
    const tripsCollection = db.collection('viagens');
    const monthOrder = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    let allTripsCache = {}; // Cache para os dados dos passeios
    let currentFilter = 'all'; // Filtro atual (all, 'Mês', 'done')

    // --- RENDERIZAÇÃO ---

    const renderCard = (tripData, tripId) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('data-id', tripId);
        if (tripData.isDone) {
            card.classList.add('is-done');
        }
        
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
                <div class="card-actions-left">
                    <a href="${tripData.googleMapsUrl}" target="_blank" class="card-action-link ${!tripData.googleMapsUrl ? 'disabled' : ''}" title="Ver no Mapa">
                        <i class="las la-map-marker-alt"></i>
                    </a>
                </div>
                <div class="card-actions-right">
                    <button class="card-action-button card-done-button" title="${tripData.isDone ? 'Marcar como Não Feito' : 'Marcar como Feito'}">
                        <i class="las la-${tripData.isDone ? 'check-circle' : 'circle'}"></i>
                    </button>
                    <button class="card-action-button card-edit-button" title="Editar">
                        <i class="las la-pencil-alt"></i>
                    </button>
                    <button class="card-action-button card-delete-button" title="Excluir">
                        <i class="las la-trash"></i>
                    </button>
                </div>
            </div>
        `;
        return card;
    };

    const renderContent = (groupedTrips) => {
        contentArea.innerHTML = '';
        const sortedMonths = Object.keys(groupedTrips).sort((a, b) => monthOrder.indexOf(a) - monthOrder.indexOf(b));

        if (sortedMonths.length === 0 && currentFilter !== 'done') {
            contentArea.innerHTML = '<p class="empty-message">Nenhum passeio encontrado. Clique em "Novo Passeio" para começar!</p>';
            return;
        } else if (sortedMonths.length === 0 && currentFilter === 'done') {
            contentArea.innerHTML = '<p class="empty-message">Nenhum passeio "Feito" encontrado.</p>';
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
                cardsContainer.appendChild(renderCard(trip.data, trip.id));
            });
            monthSection.appendChild(cardsContainer);
            contentArea.appendChild(monthSection);
        }
    };
    
    const renderSidebar = (trips) => {
        monthNav.innerHTML = '';
        const groupedTripsByMonth = trips.reduce((acc, trip) => {
            const month = trip.data.month;
            if (!acc[month]) acc[month] = [];
            acc[month].push(trip);
            return acc;
        }, {});

        const sortedMonths = Object.keys(groupedTripsByMonth).sort((a, b) => monthOrder.indexOf(a) - monthOrder.indexOf(b));
        
        // Link "Mostrar Todos"
        const allCount = trips.length;
        const allLi = document.createElement('li');
        allLi.innerHTML = `<a href="#" class="month-link active" data-filter="all">Mostrar Todos <span>${allCount}</span></a>`;
        monthNav.appendChild(allLi);

        // Link "Realizados"
        const doneCount = trips.filter(trip => trip.data.isDone).length;
        const doneLi = document.createElement('li');
        doneLi.innerHTML = `<a href="#" class="month-link" data-filter="done">Realizados <span>${doneCount}</span></a>`;
        monthNav.appendChild(doneLi);

        // Links dos meses
        for (const month of sortedMonths) {
            const monthTrips = groupedTripsByMonth[month];
            const monthCount = monthTrips.length;
            const li = document.createElement('li');
            li.innerHTML = `<a href="#" class="month-link" data-filter="${month}">${month} <span>${monthCount}</span></a>`;
            monthNav.appendChild(li);
        }
    };

    // --- LÓGICA PRINCIPAL ---

    const loadTrips = async () => {
        try {
            const snapshot = await tripsCollection.get();
            if (snapshot.empty) {
                await seedDatabase();
                return loadTrips();
            }
            
            const trips = snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() }));
            
            // Cache para uso nos filtros e sidebar
            allTripsCache = trips.reduce((acc, trip) => {
                const month = trip.data.month;
                if (!acc[month]) acc[month] = [];
                acc[month].push(trip);
                acc[month].sort((a, b) => a.data.order - b.data.order);
                return acc;
            }, {});

            renderSidebar(trips); // Passa a lista completa para o sidebar para contagens
            applyFilter(currentFilter); // Aplica o filtro atual
            
        } catch (error) {
            console.error("Erro ao carregar passeios: ", error);
            contentArea.innerHTML = '<p class="empty-message">Falha ao carregar passeios.</p>';
        }
    };

    const applyFilter = (filter) => {
        currentFilter = filter;
        document.querySelectorAll('.month-link').forEach(l => {
            if (l.dataset.filter === filter) {
                l.classList.add('active');
            } else {
                l.classList.remove('active');
            }
        });

        contentArea.innerHTML = ''; // Limpa antes de renderizar o conteúdo filtrado

        let tripsToRender = [];
        if (filter === 'all') {
            tripsToRender = Object.values(allTripsCache).flat();
        } else if (filter === 'done') {
            tripsToRender = Object.values(allTripsCache).flat().filter(trip => trip.data.isDone);
        } else { // Filtro por mês
            tripsToRender = allTripsCache[filter] || [];
        }
        
        // Agrupa os passeios filtrados para renderização
        const groupedFilteredTrips = tripsToRender.reduce((acc, trip) => {
            const month = trip.data.month;
            if (!acc[month]) acc[month] = [];
            acc[month].push(trip);
            acc[month].sort((a, b) => a.data.order - b.data.order);
            return acc;
        }, {});

        renderContent(groupedFilteredTrips);
        setupScrollAnimation();
    };


    loadTrips();

    // --- FILTROS E EVENTOS ---

    monthNav.addEventListener('click', (event) => {
        event.preventDefault();
        const link = event.target.closest('.month-link');
        if (!link) return;
        applyFilter(link.dataset.filter);
    });

    contentArea.addEventListener('click', (event) => {
        const card = event.target.closest('.card');
        if (!card) return;

        const tripId = card.dataset.id;

        const editButton = event.target.closest('.card-edit-button');
        if (editButton) { openEditModal(tripId); return; }

        const deleteButton = event.target.closest('.card-delete-button');
        if (deleteButton) { handleDelete(tripId); return; }

        const doneButton = event.target.closest('.card-done-button');
        if (doneButton) { handleToggleDone(tripId, card); return; }
    });

    // --- MODAL & AÇÕES CRUD ---

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
    const tripIsDoneInput = document.getElementById('tripIsDone');

    const openEditModal = async (tripId = null) => {
        editForm.reset();
        tripIdInput.value = ''; // Sempre limpa para novo
        if (tripId) {
            modalTitle.textContent = "Editar Passeio";
            try {
                const doc = await tripsCollection.doc(tripId).get();
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
                tripIsDoneInput.checked = tripData.isDone || false;

            } catch (error) {
                console.error("Erro ao carregar dados para edição:", error);
            }
        } else {
            modalTitle.textContent = "Novo Passeio";
            tripIsDoneInput.checked = false; // Novo passeio não começa como feito
        }
        modal.style.display = 'block';
    };

    const closeEditModal = () => {
        modal.style.display = 'none';
        editForm.reset();
    };
    
    // Nãousada, a renderização completa garante consistência.
    // const updateCardInUI = (tripId, updatedData) => { /* ... */ };

    const handleDelete = async (tripId) => {
        if (confirm("Tem certeza que deseja excluir este passeio?")) {
            try {
                await tripsCollection.doc(tripId).delete();
                loadTrips(); // Recarrega a UI
            } catch (error) {
                console.error("Erro ao excluir passeio: ", error);
            }
        }
    };

    const handleToggleDone = async (tripId, cardElement) => {
        try {
            const currentIsDone = cardElement.classList.contains('is-done');
            await tripsCollection.doc(tripId).update({ isDone: !currentIsDone });
            loadTrips(); // Recarrega para atualizar o sidebar e possível reordenação
        } catch (error) {
            console.error("Erro ao marcar/desmarcar como feito:", error);
        }
    };
    
    newTripButton.addEventListener('click', () => openEditModal());

    closeButton.addEventListener('click', closeEditModal);
    cancelButton.addEventListener('click', closeEditModal);
    window.addEventListener('click', (event) => {
        if (event.target == modal) closeEditModal();
    });
    
    editForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const tripId = tripIdInput.value;
        const newData = {
            title: tripTitleInput.value,
            description: tripDescriptionInput.value,
            month: tripMonthInput.value,
            order: parseInt(tripOrderInput.value, 10),
            estimatedDays: parseInt(tripDaysInput.value, 10),
            estimatedCost: parseFloat(tripCostInput.value),
            googleMapsUrl: tripMapsUrlInput.value,
            isDone: tripIsDoneInput.checked
        };

        try {
            if (tripId) { // Atualizar
                await tripsCollection.doc(tripId).update(newData);
            } else { // Criar
                await tripsCollection.add(newData);
            }
            closeEditModal();
            loadTrips(); // Recarrega a UI para refletir as mudanças
        } catch (error) {
            console.error("Erro ao salvar:", error);
        }
    });

    // Função de animação de scroll
    const setupScrollAnimation = () => {
        const cards = document.querySelectorAll('.card');
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        cards.forEach(card => { observer.observe(card); });
    };

});

// --- FUNÇÃO DE SEED (POPULAR O BANCO) ---
async function seedDatabase() {
    const initialTrips = [
        { month: 'Fevereiro', title: 'Salto', description: 'Complexo da Cachoeira e Parque Rocha Moutonnée.', order: 1, googleMapsUrl: '', estimatedDays: 1, estimatedCost: 100, isDone: false },
        { month: 'Fevereiro', title: 'Águas de São Pedro', description: 'Thermas Water Park.', order: 2, googleMapsUrl: '', estimatedDays: 1, estimatedCost: 250, isDone: false },
        { month: 'Março', title: 'Itu', description: 'Parque Maeda (Jardim Japonês e Trencito).', order: 3, googleMapsUrl: '', estimatedDays: 1, estimatedCost: 150, isDone: false },
        { month: 'Março', title: 'Araçoiaba da Serra', description: 'Fazenda Ipanema (História).', order: 4, googleMapsUrl: '', estimatedDays: 1, estimatedCost: 50, isDone: false },
        { month: 'Abril', title: 'São Roque', description: 'Roteiro do Vinho.', order: 5, googleMapsUrl: '', estimatedDays: 1, estimatedCost: 200, isDone: false },
        { month: 'Abril', title: 'Piedade', description: 'Colheita de Caqui ou Jardim Botânico.', order: 6, googleMapsUrl: '', estimatedDays: 1, estimatedCost: 80, isDone: false },
        { month: 'Maio', title: 'Cotia', description: 'Animália Park.', order: 7, googleMapsUrl: '', estimatedDays: 1, estimatedCost: 300, isDone: false },
        { month: 'Maio', title: 'Indaiatuba', description: 'Parque Ecológico e Museu da Água.', order: 8, googleMapsUrl: '', estimatedDays: 1, estimatedCost: 0, isDone: false },
        { month: 'Junho', title: 'Embu das Artes', description: 'Feira de Artesanato.', order: 9, googleMapsUrl: '', estimatedDays: 1, estimatedCost: 120, isDone: false },
        { month: 'Junho', title: 'Tatuí', description: 'Rota dos Doces Caseiros.', order: 10, googleMapsUrl: '', estimatedDays: 1, estimatedCost: 100, isDone: false },
        { month: 'Julho', title: 'Cabreúva', description: 'Fazenda do Chocolate.', order: 11, googleMapsUrl: '', estimatedDays: 1, estimatedCost: 150, isDone: false },
        { month: 'Julho', title: 'Serra Negra', description: 'Fontana di Trevi (ou Jundiaí).', order: 12, googleMapsUrl: '', estimatedDays: 1, estimatedCost: 200, isDone: false },
        { month: 'Agosto', title: 'Porto Feliz', description: 'Parque das Monções.', order: 13, googleMapsUrl: '', estimatedDays: 1, estimatedCost: 30, isDone: false },
        { month: 'Agosto', title: 'Holambra', description: 'Arquitetura holandesa e flores.', order: 14, googleMapsUrl: '', estimatedDays: 1, estimatedCost: 180, isDone: false },
        { month: 'Setembro', title: 'Jundiaí', description: 'Jardim Botânico.', order: 15, googleMapsUrl: '', estimatedDays: 1, estimatedCost: 0, isDone: false },
        { month: 'Setembro', title: 'Atibaia', description: 'Festa de Flores e Morangos.', order: 16, googleMapsUrl: '', estimatedDays: 1, estimatedCost: 220, isDone: false },
        { month: 'Outubro', title: 'Guararema', description: 'Trem Turístico.', order: 17, googleMapsUrl: '', estimatedDays: 1, estimatedCost: 180, isDone: false },
        { month: 'Outubro', title: 'São Paulo', description: 'Aquário do Ipiranga.', order: 18, googleMapsUrl: '', estimatedDays: 1, estimatedCost: 150, isDone: false },
        { month: 'Novembro', title: 'Votorantim', description: 'Represa de Itupararanga.', order: 19, googleMapsUrl: '', estimatedDays: 1, estimatedCost: 40, isDone: false },
        { month: 'Novembro', title: 'Boituva', description: 'Parque Ecológico ou Balonismo (visual).', order: 20, googleMapsUrl: '', estimatedDays: 1, estimatedCost: 100, isDone: false },
        { month: 'Dezembro', title: 'Itu', description: 'Luzes de Natal na Praça.', order: 21, googleMapsUrl: '', estimatedDays: 1, estimatedCost: 0, isDone: false },
        { month: 'Dezembro', title: 'São Roque', description: 'Vila Don Patto (Decoração).', order: 22, googleMapsUrl: '', estimatedDays: 1, estimatedCost: 250, isDone: false }
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