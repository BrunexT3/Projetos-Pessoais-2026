document.addEventListener('DOMContentLoaded', () => {

    const trips = [
        { month: 'Fevereiro', title: 'Salto', description: 'Complexo da Cachoeira e Parque Rocha Moutonnée (Dinossauros).' },
        { month: 'Fevereiro', title: 'Águas de São Pedro', description: 'Thermas Water Park.' },
        { month: 'Março', title: 'Itu', description: 'Parque Maeda (Jardim Japonês e Trencito).' },
        { month: 'Março', title: 'Araçoiaba da Serra', description: 'Fazenda Ipanema (História).' },
        { month: 'Abril', title: 'São Roque', description: 'Roteiro do Vinho.' },
        { month: 'Abril', title: 'Piedade', description: 'Colheita de Caqui ou Jardim Botânico.' },
        { month: 'Maio', title: 'Cotia', description: 'Animália Park.' },
        { month: 'Maio', title: 'Indaiatuba', description: 'Parque Ecológico e Museu da Água.' },
        { month: 'Junho', title: 'Embu das Artes', description: 'Feira de Artesanato.' },
        { month: 'Junho', title: 'Tatuí', description: 'Rota dos Doces Caseiros.' },
        { month: 'Julho', title: 'Cabreúva', description: 'Fazenda do Chocolate.' },
        { month: 'Julho', title: 'Serra Negra', description: 'Fontana di Trevi (ou Jundiaí).' },
        { month: 'Agosto', title: 'Porto Feliz', description: 'Parque das Monções.' },
        { month: 'Agosto', title: 'Holambra', description: 'Arquitetura holandesa e flores.' },
        { month: 'Setembro', title: 'Jundiaí', description: 'Jardim Botânico.' },
        { month: 'Setembro', title: 'Atibaia', description: 'Festa de Flores e Morangos.' },
        { month: 'Outubro', title: 'Guararema', description: 'Trem Turístico.' },
        { month: 'Outubro', title: 'São Paulo', description: 'Aquário do Ipiranga.' },
        { month: 'Novembro', title: 'Votorantim', description: 'Represa de Itupararanga.' },
        { month: 'Novembro', title: 'Boituva', description: 'Parque Ecológico ou Balonismo (visual).' },
        { month: 'Dezembro', title: 'Itu', description: 'Luzes de Natal na Praça.' },
        { month: 'Dezembro', title: 'São Roque', description: 'Vila Don Patto (Decoração).' }
    ];

    const timeline = document.querySelector('.timeline');

    trips.forEach(trip => {
        const card = document.createElement('div');
        card.classList.add('card');
        
        card.innerHTML = `
            <div class="card-month">${trip.month}</div>
            <h2 class="card-title">${trip.title}</h2>
            <p class="card-description">${trip.description}</p>
        `;
        
        timeline.appendChild(card);
    });

    // Animação de scroll
    const cards = document.querySelectorAll('.card');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    cards.forEach(card => {
        observer.observe(card);
    });

});
