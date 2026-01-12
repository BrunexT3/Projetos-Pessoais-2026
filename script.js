document.addEventListener('DOMContentLoaded', () => {
    const timeline = document.querySelector('.timeline');
    const tripsCollection = db.collection('viagens');

    // Função para renderizar um único card
    const renderCard = (trip) => {
        const card = document.createElement('div');
        card.classList.add('card');
        
        card.innerHTML = `
            <div class="card-month">${trip.month}</div>
            <h2 class="card-title">${trip.title}</h2>
            <p class="card-description">${trip.description}</p>
        `;
        
        timeline.appendChild(card);
    };

    // Função para configurar as animações de scroll
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

    // Função para carregar os dados do Firestore
    const loadTrips = async () => {
        try {
            const snapshot = await tripsCollection.orderBy('order').get();

            if (snapshot.empty) {
                console.log('Coleção vazia. Populando o banco de dados com dados iniciais...');
                await seedDatabase();
                // Recarrega os dados após o 'seed'
                const newSnapshot = await tripsCollection.orderBy('order').get();
                newSnapshot.docs.forEach(doc => renderCard(doc.data()));
            } else {
                console.log('Dados carregados do Firestore.');
                snapshot.docs.forEach(doc => renderCard(doc.data()));
            }
            
            setupScrollAnimation();

        } catch (error) {
            console.error("Erro ao carregar os passeios: ", error);
            timeline.innerHTML = '<p style="color: red;">Não foi possível carregar os passeios. Verifique o console para mais detalhes.</p>';
        }
    };
    
    // Roda a função principal ao carregar a página
    loadTrips();

});

// Função para popular o banco de dados pela primeira vez (seed)
async function seedDatabase() {
    const initialTrips = [
        { month: 'Fevereiro', title: 'Salto', description: 'Complexo da Cachoeira e Parque Rocha Moutonnée (Dinossauros).', order: 1 },
        { month: 'Fevereiro', title: 'Águas de São Pedro', description: 'Thermas Water Park.', order: 2 },
        { month: 'Março', title: 'Itu', description: 'Parque Maeda (Jardim Japonês e Trencito).', order: 3 },
        { month: 'Março', title: 'Araçoiaba da Serra', description: 'Fazenda Ipanema (História).', order: 4 },
        { month: 'Abril', title: 'São Roque', description: 'Roteiro do Vinho.', order: 5 },
        { month: 'Abril', title: 'Piedade', description: 'Colheita de Caqui ou Jardim Botânico.', order: 6 },
        { month: 'Maio', title: 'Cotia', description: 'Animália Park.', order: 7 },
        { month: 'Maio', title: 'Indaiatuba', description: 'Parque Ecológico e Museu da Água.', order: 8 },
        { month: 'Junho', title: 'Embu das Artes', description: 'Feira de Artesanato.', order: 9 },
        { month: 'Junho', title: 'Tatuí', description: 'Rota dos Doces Caseiros.', order: 10 },
        { month: 'Julho', title: 'Cabreúva', description: 'Fazenda do Chocolate.', order: 11 },
        { month: 'Julho', title: 'Serra Negra', description: 'Fontana di Trevi (ou Jundiaí).', order: 12 },
        { month: 'Agosto', title: 'Porto Feliz', description: 'Parque das Monções.', order: 13 },
        { month: 'Agosto', title: 'Holambra', description: 'Arquitetura holandesa e flores.', order: 14 },
        { month: 'Setembro', title: 'Jundiaí', description: 'Jardim Botânico.', order: 15 },
        { month: 'Setembro', title: 'Atibaia', description: 'Festa de Flores e Morangos.', order: 16 },
        { month: 'Outubro', title: 'Guararema', description: 'Trem Turístico.', order: 17 },
        { month: 'Outubro', title: 'São Paulo', description: 'Aquário do Ipiranga.', order: 18 },
        { month: 'Novembro', title: 'Votorantim', description: 'Represa de Itupararanga.', order: 19 },
        { month: 'Novembro', title: 'Boituva', description: 'Parque Ecológico ou Balonismo (visual).', order: 20 },
        { month: 'Dezembro', title: 'Itu', description: 'Luzes de Natal na Praça.', order: 21 },
        { month: 'Dezembro', title: 'São Roque', description: 'Vila Don Patto (Decoração).', order: 22 }
    ];

    const batch = db.batch();
    const tripsCollection = db.collection('viagens');

    initialTrips.forEach(trip => {
        const docRef = tripsCollection.doc(); // Cria um novo documento com ID aleatório
        batch.set(docRef, trip);
    });

    await batch.commit();
    console.log('Banco de dados populado com sucesso!');
}
