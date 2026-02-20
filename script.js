// ============================================================
// DATA
// ============================================================
const trips = [
    {
        id: "jan-1", month: "Janeiro", title: "Maresias", subtitle: "Pousada Tambayba",
        description: "Viagem com hospedagem. Gostamos, provavelmente voltaremos no final do ano.",
        type: "praia", status: "done", people: 6, estimatedCost: null,
        mapsUrl: "https://maps.google.com/?q=Pousada+Tambayba+Maresias",
        imageUrl: "",
        gradient: "linear-gradient(135deg, #0ea5e9, #06b6d4)",
        details: {
            departureTime: "", itinerary: [], restaurants: [],
            familyActivities: [], kidsActivities: [], citySummary: "", touristSpots: []
        }
    },
    {
        id: "mar-1", month: "Marco", title: "Sao Roque", subtitle: "Rota do Vinho",
        description: "Bate e volta no 1o final de semana. Almoco e passeio pelas vinicolas. ~60km de Sorocaba, 1h de carro.",
        type: "gastronomia", status: "planned", people: 6, estimatedCost: 250,
        mapsUrl: "https://maps.google.com/?q=Rota+do+Vinho+Sao+Roque+SP",
        imageUrl: "https://images.unsplash.com/photo-1464638681273-0962e9b53566?w=900&h=500&fit=crop&auto=format",
        gradient: "linear-gradient(135deg, #7f1d1d, #b91c1c)",
        details: {
            departureTime: "Sair de Sorocaba as 8h30. Chegada prevista as 9h30.",
            itinerary: [
                { time: "08:30", activity: "Saida de Sorocaba", desc: "Pegar SP-270 sentido Sao Paulo. Aproximadamente 1h de viagem." },
                { time: "09:30", activity: "Vinicola Goes", desc: "Tour gratuito pela fabrica com degustacao. Loja com precos de fabrica. Aberta sab/dom 9h-17h." },
                { time: "11:30", activity: "Almoco - Villa Don Patto", desc: "Restaurante italiano com pizzaria e emporio. Reservar com antecedencia. Preco medio R$80/pessoa." },
                { time: "13:30", activity: "Passeio pela Rota do Vinho", desc: "Circuito de 10km com vinicolas, adegas e emporios. Degustacao de vinhos (adultos) e sucos de uva (Laura)." },
                { time: "15:00", activity: "Ski Mountain Park", desc: "Pista de ski sintetico, alpine coaster e tirolesa. Ingressos a partir de R$60. Laura vai adorar." },
                { time: "17:00", activity: "Retorno a Sorocaba", desc: "Chegada prevista por volta das 18h." }
            ],
            restaurants: [
                { name: "Villa Don Patto", desc: "Complexo com restaurante italiano, pizzaria, emporio e degustacao de vinhos. Ambiente amplo e familiar. Reservar com antecedencia.", mapsUrl: "https://maps.google.com/?q=Villa+Don+Patto+Sao+Roque" },
                { name: "Quinta do Olivardo", desc: "Restaurante portugues premiado com vista para os vinhedos. Bacalhau e polvo sao destaques. Preco medio: R$90/pessoa.", mapsUrl: "https://maps.google.com/?q=Quinta+do+Olivardo+Sao+Roque" },
                { name: "Cantina Villa Arrieta", desc: "Cantina italiana tradicional com massas caseiras. Ambiente rustico e acolhedor. Bom custo-beneficio.", mapsUrl: "https://maps.google.com/?q=Cantina+Villa+Arrieta+Sao+Roque" },
                { name: "Emporio Sao Roque", desc: "Opcao mais rapida com lanches, queijos, embutidos e vinhos para degustacao. Bom para um pit stop.", mapsUrl: "https://maps.google.com/?q=Emporio+Sao+Roque" }
            ],
            familyActivities: [
                { name: "Rota do Vinho", desc: "Circuito com mais de 30 vinicolas e adegas. Degustacao de vinhos e sucos artesanais. Entrada gratuita na maioria." },
                { name: "Vinicola Goes", desc: "Maior vinicola da regiao com tour guiado gratuito. Degustacao inclusa." },
                { name: "Villa Don Patto - Passeio", desc: "Emporio gourmet, espaco para fotos e area verde. Da pra passar 1-2h." },
                { name: "Centro Historico", desc: "Caminhada pelo centro com igreja matriz e casaroes coloniais. Passeio curto de 30min." }
            ],
            kidsActivities: [
                { name: "Ski Mountain Park", desc: "Pista de ski sintetico, alpine coaster (montanha-russa), tirolesa e teleferico. Ingressos a partir de R$60." },
                { name: "Degustacao de Suco de Uva", desc: "Nas vinicolas, criancas podem degustar sucos de uva artesanais e ver a fabricacao." },
                { name: "Tour Vinicola Goes", desc: "Tour guiado mostra como o vinho e produzido. Educativo e interessante." }
            ],
            citySummary: "Sao Roque e conhecida como a Terra do Vinho no estado de Sao Paulo. Localizada a cerca de 60km de Sorocaba (~1h de carro pela SP-270), a cidade abriga a famosa Rota do Vinho com mais de 30 estabelecimentos entre vinicolas, adegas e restaurantes. Alem da gastronomia, destaca-se pelo Ski Mountain Park (unica pista de ski do estado) e pelo clima interiorano com forte influencia da colonizacao portuguesa e italiana.",
            touristSpots: [
                { name: "Rota do Vinho", desc: "Principal atracao. Circuito de 10km. Funciona aos finais de semana o dia todo.", mapsUrl: "https://maps.google.com/?q=Estrada+do+Vinho+Sao+Roque" },
                { name: "Vinicola Goes", desc: "Fundada em 1938. Tour gratuito com degustacao. Sab/dom 9h-17h.", mapsUrl: "https://maps.google.com/?q=Vinicola+Goes+Sao+Roque" },
                { name: "Ski Mountain Park", desc: "Ski sintetico, alpine coaster, teleferico e tirolesa. Sab/dom/feriados.", mapsUrl: "https://maps.google.com/?q=Ski+Mountain+Park+Sao+Roque" },
                { name: "Villa Don Patto", desc: "Complexo gastronomico. Um dos pontos mais visitados da rota.", mapsUrl: "https://maps.google.com/?q=Villa+Don+Patto+Sao+Roque" },
                { name: "Igreja Matriz", desc: "Igreja historica do seculo XVIII no centro da cidade.", mapsUrl: "https://maps.google.com/?q=Igreja+Matriz+Sao+Roque" }
            ]
        }
    },
    {
        id: "abr-1", month: "Abril", title: "Itu", subtitle: "Parque Maeda",
        description: "Jardim Japones, Trenzinho e areas verdes. Otimo para criancas e idosos.",
        type: "natureza", status: "planned", people: 6, estimatedCost: 150,
        mapsUrl: "https://maps.google.com/?q=Parque+Maeda+Itu",
        imageUrl: "", gradient: "linear-gradient(135deg, #065f46, #059669)",
        details: { departureTime: "", itinerary: [], restaurants: [], familyActivities: [], kidsActivities: [], citySummary: "", touristSpots: [] }
    },
    {
        id: "abr-2", month: "Abril", title: "Piedade", subtitle: "Colheita & Jardim Botanico",
        description: "Colheita de caqui na epoca ou visita ao Jardim Botanico.",
        type: "natureza", status: "planned", people: 6, estimatedCost: 80,
        mapsUrl: "https://maps.google.com/?q=Piedade+SP",
        imageUrl: "", gradient: "linear-gradient(135deg, #14532d, #16a34a)",
        details: { departureTime: "", itinerary: [], restaurants: [], familyActivities: [], kidsActivities: [], citySummary: "", touristSpots: [] }
    },
    {
        id: "mai-1", month: "Maio", title: "Salto", subtitle: "Cachoeira & Parque Rocha Moutonee",
        description: "Complexo da Cachoeira e parque tematico de dinossauros.",
        type: "natureza", status: "planned", people: 6, estimatedCost: 100,
        mapsUrl: "https://maps.google.com/?q=Parque+Rocha+Moutonee+Salto",
        imageUrl: "", gradient: "linear-gradient(135deg, #0c4a6e, #0284c7)",
        details: { departureTime: "", itinerary: [], restaurants: [], familyActivities: [], kidsActivities: [], citySummary: "", touristSpots: [] }
    },
    {
        id: "mai-2", month: "Maio", title: "Cotia", subtitle: "Animalia Park",
        description: "Zoologico interativo. Excelente para criancas.",
        type: "aventura", status: "planned", people: 6, estimatedCost: 300,
        mapsUrl: "https://maps.google.com/?q=Animalia+Park+Cotia",
        imageUrl: "", gradient: "linear-gradient(135deg, #9a3412, #ea580c)",
        details: { departureTime: "", itinerary: [], restaurants: [], familyActivities: [], kidsActivities: [], citySummary: "", touristSpots: [] }
    },
    {
        id: "jun-1", month: "Junho", title: "Embu das Artes", subtitle: "Feira de Artesanato",
        description: "Maior feira de artesanato do estado. Cultura e gastronomia.",
        type: "cultura", status: "planned", people: 6, estimatedCost: 120,
        mapsUrl: "https://maps.google.com/?q=Feira+de+Artesanato+Embu+das+Artes",
        imageUrl: "", gradient: "linear-gradient(135deg, #4c1d95, #7c3aed)",
        details: { departureTime: "", itinerary: [], restaurants: [], familyActivities: [], kidsActivities: [], citySummary: "", touristSpots: [] }
    },
    {
        id: "jun-2", month: "Junho", title: "Tatui", subtitle: "Rota dos Doces Caseiros",
        description: "Degustacao de doces artesanais e compras.",
        type: "gastronomia", status: "planned", people: 6, estimatedCost: 100,
        mapsUrl: "https://maps.google.com/?q=Tatui+SP",
        imageUrl: "", gradient: "linear-gradient(135deg, #881337, #e11d48)",
        details: { departureTime: "", itinerary: [], restaurants: [], familyActivities: [], kidsActivities: [], citySummary: "", touristSpots: [] }
    },
    {
        id: "jul-1", month: "Julho", title: "Cabreuva", subtitle: "Fazenda do Chocolate",
        description: "Fabrica de chocolate artesanal. Otimo para ferias da Laura.",
        type: "gastronomia", status: "planned", people: 6, estimatedCost: 150,
        mapsUrl: "https://maps.google.com/?q=Fazenda+do+Chocolate+Cabreuva",
        imageUrl: "", gradient: "linear-gradient(135deg, #451a03, #78350f)",
        details: { departureTime: "", itinerary: [], restaurants: [], familyActivities: [], kidsActivities: [], citySummary: "", touristSpots: [] }
    },
    {
        id: "jul-2", month: "Julho", title: "Serra Negra", subtitle: "Fontana di Trevi & Centro",
        description: "Replica da Fontana di Trevi, lojas e restaurantes.",
        type: "cultura", status: "planned", people: 6, estimatedCost: 200,
        mapsUrl: "https://maps.google.com/?q=Serra+Negra+SP",
        imageUrl: "", gradient: "linear-gradient(135deg, #312e81, #4338ca)",
        details: { departureTime: "", itinerary: [], restaurants: [], familyActivities: [], kidsActivities: [], citySummary: "", touristSpots: [] }
    },
    {
        id: "ago-1", month: "Agosto", title: "Holambra", subtitle: "Cidade das Flores",
        description: "Arquitetura holandesa, campos de flores e gastronomia tipica.",
        type: "cultura", status: "planned", people: 6, estimatedCost: 180,
        mapsUrl: "https://maps.google.com/?q=Holambra+SP",
        imageUrl: "", gradient: "linear-gradient(135deg, #c2410c, #f59e0b)",
        details: { departureTime: "", itinerary: [], restaurants: [], familyActivities: [], kidsActivities: [], citySummary: "", touristSpots: [] }
    },
    {
        id: "ago-2", month: "Agosto", title: "Porto Feliz", subtitle: "Parque das Moncoes",
        description: "Parque historico as margens do Rio Tiete. Passeio tranquilo.",
        type: "historia", status: "planned", people: 6, estimatedCost: 30,
        mapsUrl: "https://maps.google.com/?q=Parque+das+Moncoes+Porto+Feliz",
        imageUrl: "", gradient: "linear-gradient(135deg, #78350f, #92400e)",
        details: { departureTime: "", itinerary: [], restaurants: [], familyActivities: [], kidsActivities: [], citySummary: "", touristSpots: [] }
    },
    {
        id: "set-1", month: "Setembro", title: "Atibaia", subtitle: "Festa de Flores e Morangos",
        description: "Festival de primavera com flores e colheita de morangos.",
        type: "natureza", status: "planned", people: 6, estimatedCost: 220,
        mapsUrl: "https://maps.google.com/?q=Atibaia+SP",
        imageUrl: "", gradient: "linear-gradient(135deg, #be123c, #f43f5e)",
        details: { departureTime: "", itinerary: [], restaurants: [], familyActivities: [], kidsActivities: [], citySummary: "", touristSpots: [] }
    },
    {
        id: "set-2", month: "Setembro", title: "Jundiai", subtitle: "Jardim Botanico",
        description: "Jardim Botanico com trilhas acessiveis e area de piquenique.",
        type: "natureza", status: "planned", people: 6, estimatedCost: 0,
        mapsUrl: "https://maps.google.com/?q=Jardim+Botanico+Jundiai",
        imageUrl: "", gradient: "linear-gradient(135deg, #064e3b, #047857)",
        details: { departureTime: "", itinerary: [], restaurants: [], familyActivities: [], kidsActivities: [], citySummary: "", touristSpots: [] }
    },
    {
        id: "out-1", month: "Outubro", title: "Guararema", subtitle: "Trem Turistico",
        description: "Passeio de trem turistico pela cidade. Otimo pra Laura.",
        type: "aventura", status: "planned", people: 6, estimatedCost: 180,
        mapsUrl: "https://maps.google.com/?q=Trem+Turistico+Guararema",
        imageUrl: "", gradient: "linear-gradient(135deg, #713f12, #a16207)",
        details: { departureTime: "", itinerary: [], restaurants: [], familyActivities: [], kidsActivities: [], citySummary: "", touristSpots: [] }
    },
    {
        id: "out-2", month: "Outubro", title: "Sao Paulo", subtitle: "Aquario de Sao Paulo",
        description: "Maior aquario da America Latina. Presente de Dia das Criancas.",
        type: "aventura", status: "planned", people: 6, estimatedCost: 150,
        mapsUrl: "https://maps.google.com/?q=Aquario+de+Sao+Paulo",
        imageUrl: "", gradient: "linear-gradient(135deg, #1e3a5f, #1e40af)",
        details: { departureTime: "", itinerary: [], restaurants: [], familyActivities: [], kidsActivities: [], citySummary: "", touristSpots: [] }
    },
    {
        id: "nov-1", month: "Novembro", title: "Indaiatuba", subtitle: "Parque Ecologico",
        description: "Parque Ecologico e Museu da Agua. Passeio gratuito e acessivel.",
        type: "natureza", status: "planned", people: 6, estimatedCost: 0,
        mapsUrl: "https://maps.google.com/?q=Parque+Ecologico+Indaiatuba",
        imageUrl: "", gradient: "linear-gradient(135deg, #14532d, #15803d)",
        details: { departureTime: "", itinerary: [], restaurants: [], familyActivities: [], kidsActivities: [], citySummary: "", touristSpots: [] }
    },
    {
        id: "nov-2", month: "Novembro", title: "Aracoiaba da Serra", subtitle: "Fazenda Ipanema",
        description: "Fazenda historica com trilhas e ruinas. Patrimonio cultural.",
        type: "historia", status: "planned", people: 6, estimatedCost: 50,
        mapsUrl: "https://maps.google.com/?q=Fazenda+Ipanema+Aracoiaba+da+Serra",
        imageUrl: "", gradient: "linear-gradient(135deg, #44403c, #78716c)",
        details: { departureTime: "", itinerary: [], restaurants: [], familyActivities: [], kidsActivities: [], citySummary: "", touristSpots: [] }
    },
    {
        id: "dez-1", month: "Dezembro", title: "Itu", subtitle: "Luzes de Natal",
        description: "Decoracao natalina na praca central. Passeio noturno em familia.",
        type: "cultura", status: "planned", people: 6, estimatedCost: 0,
        mapsUrl: "https://maps.google.com/?q=Praca+Padre+Miguel+Itu",
        imageUrl: "", gradient: "linear-gradient(135deg, #991b1b, #dc2626)",
        details: { departureTime: "", itinerary: [], restaurants: [], familyActivities: [], kidsActivities: [], citySummary: "", touristSpots: [] }
    },
    {
        id: "dez-2", month: "Dezembro", title: "Maresias", subtitle: "Pousada Tambayba - Retorno",
        description: "Volta a Maresias para fechar o ano.",
        type: "praia", status: "planned", people: 6, estimatedCost: null,
        mapsUrl: "https://maps.google.com/?q=Pousada+Tambayba+Maresias",
        imageUrl: "", gradient: "linear-gradient(135deg, #0369a1, #f97316)",
        details: { departureTime: "", itinerary: [], restaurants: [], familyActivities: [], kidsActivities: [], citySummary: "", touristSpots: [] }
    }
];

// ============================================================
// HELPERS
// ============================================================
const svgIcon = {
    back: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="15 18 9 12 15 6"/></svg>',
    pin: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    nav: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>',
    people: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v2"/><circle cx="9" cy="7" r="4"/></svg>',
    money: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>',
    clock: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    check: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>',
    arrow: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>',
};

function costText(cost) {
    if (cost === null) return "A definir";
    if (cost === 0) return "Gratuito";
    return `R$ ${cost}`;
}

function getNextTrip() {
    return trips.find(t => t.status === "planned");
}

function imgOrGradient(trip) {
    if (trip.imageUrl) return `<img class="hero-photo" src="${trip.imageUrl}" alt="${trip.title}">`;
    return '';
}

// ============================================================
// RENDER: HOME
// ============================================================
function renderHome() {
    const next = getNextTrip();
    const planned = trips.filter(t => t.status === "planned" && t !== next);
    const done = trips.filter(t => t.status === "done");
    const total = trips.length;
    const doneCount = done.length;

    let html = `
    <header class="home-header">
        <h1 class="home-logo">Viagens <span>2026</span></h1>
        <span class="home-counter">${doneCount}/${total}</span>
    </header>`;

    if (next) {
        html += `
        <section class="next-trip" onclick="openGuide('${next.id}')">
            <div class="next-trip-image" style="background: ${next.gradient};">
                ${imgOrGradient(next)}
                <div class="next-trip-overlay"></div>
                <div class="next-trip-content">
                    <span class="next-trip-label">Proxima viagem</span>
                    <h2>${next.title}</h2>
                    <p>${next.subtitle}</p>
                    <span class="next-trip-month">${next.month}</span>
                </div>
            </div>
            <div class="next-trip-footer">
                <div class="next-trip-meta">
                    <span>${svgIcon.people} ${next.people} pessoas</span>
                    <span>${svgIcon.money} ${costText(next.estimatedCost)}</span>
                    ${next.details.departureTime ? `<span>${svgIcon.clock} ${next.details.departureTime.split('.')[0]}</span>` : ''}
                </div>
                <button class="btn-open-guide">Abrir guia ${svgIcon.arrow}</button>
            </div>
        </section>`;
    }

    if (planned.length > 0) {
        html += `<section class="trip-list"><h3 class="section-title">Proximas viagens</h3>`;
        planned.forEach(t => {
            html += `
            <div class="trip-row" onclick="openGuide('${t.id}')">
                <div class="trip-row-color" style="background: ${t.gradient};"></div>
                <div class="trip-row-info">
                    <span class="trip-row-month">${t.month}</span>
                    <strong>${t.title}</strong>
                    <span class="trip-row-sub">${t.subtitle}</span>
                </div>
                <span class="trip-row-cost">${costText(t.estimatedCost)}</span>
                <span class="trip-row-arrow">${svgIcon.arrow}</span>
            </div>`;
        });
        html += `</section>`;
    }

    if (done.length > 0) {
        html += `<section class="trip-list"><h3 class="section-title">Realizadas</h3>`;
        done.forEach(t => {
            html += `
            <div class="trip-row done" onclick="openGuide('${t.id}')">
                <div class="trip-row-color" style="background: ${t.gradient};"></div>
                <div class="trip-row-info">
                    <span class="trip-row-month">${t.month}</span>
                    <strong>${t.title}</strong>
                    <span class="trip-row-sub">${t.subtitle}</span>
                </div>
                <span class="trip-row-check">${svgIcon.check}</span>
            </div>`;
        });
        html += `</section>`;
    }

    document.getElementById("app").innerHTML = html;
    window.scrollTo(0, 0);
}

// ============================================================
// RENDER: GUIDE
// ============================================================
function renderGuide(tripId) {
    const trip = trips.find(t => t.id === tripId);
    if (!trip) return renderHome();

    const d = trip.details;
    const hasContent = (arr) => arr && arr.length > 0;

    let html = `
    <div class="guide">
        <div class="guide-hero" style="background: ${trip.gradient};">
            ${imgOrGradient(trip)}
            <div class="guide-hero-overlay"></div>
            <button class="guide-back" onclick="renderHome()">${svgIcon.back} Voltar</button>
            <div class="guide-hero-content">
                <span class="guide-month-tag">${trip.month}</span>
                <h1>${trip.title}</h1>
                <p>${trip.subtitle}</p>
            </div>
        </div>

        <div class="guide-body">
            <div class="guide-info-bar">
                <div class="info-item">${svgIcon.clock}<div><strong>${d.departureTime ? d.departureTime.split('.')[0] : 'A definir'}</strong><small>Horario de saida</small></div></div>
                <div class="info-item">${svgIcon.people}<div><strong>${trip.people} pessoas</strong><small>Saindo de Sorocaba</small></div></div>
                <div class="info-item">${svgIcon.money}<div><strong>${costText(trip.estimatedCost)}</strong><small>Custo estimado</small></div></div>
            </div>

            ${trip.mapsUrl ? `
            <a href="${trip.mapsUrl}" target="_blank" rel="noopener" class="btn-navigate">
                ${svgIcon.nav} Navegar ate o local
            </a>` : ''}

            ${d.citySummary ? `
            <section class="guide-section">
                <h3>Sobre a cidade</h3>
                <p class="city-text">${d.citySummary}</p>
            </section>` : `
            <section class="guide-section">
                <h3>Sobre a cidade</h3>
                <div class="placeholder">Conteudo sera adicionado</div>
            </section>`}

            <section class="guide-section">
                <h3>Roteiro do dia</h3>
                ${hasContent(d.itinerary) ? `
                <div class="timeline">
                    ${d.itinerary.map((item, i) => `
                    <div class="timeline-item">
                        <div class="timeline-dot ${i === 0 ? 'first' : ''} ${i === d.itinerary.length - 1 ? 'last' : ''}"></div>
                        <div class="timeline-time">${item.time}</div>
                        <div class="timeline-content">
                            <strong>${item.activity}</strong>
                            <p>${item.desc}</p>
                        </div>
                    </div>`).join('')}
                </div>` : '<div class="placeholder">Roteiro sera definido</div>'}
            </section>

            <section class="guide-section">
                <h3>Onde comer</h3>
                ${hasContent(d.restaurants) ? `
                <div class="card-list">
                    ${d.restaurants.map(r => `
                    <div class="info-card">
                        <div class="info-card-text">
                            <strong>${r.name}</strong>
                            <p>${r.desc}</p>
                        </div>
                        ${r.mapsUrl ? `<a href="${r.mapsUrl}" target="_blank" rel="noopener" class="info-card-pin" title="Ver no mapa">${svgIcon.pin}</a>` : ''}
                    </div>`).join('')}
                </div>` : '<div class="placeholder">Restaurantes serao adicionados</div>'}
            </section>

            <section class="guide-section">
                <h3>Passeios em familia</h3>
                ${hasContent(d.familyActivities) ? `
                <div class="card-list">
                    ${d.familyActivities.map(a => `
                    <div class="info-card">
                        <div class="info-card-text"><strong>${a.name}</strong><p>${a.desc}</p></div>
                    </div>`).join('')}
                </div>` : '<div class="placeholder">Atividades serao adicionadas</div>'}
            </section>

            <section class="guide-section">
                <h3>Pra Laura</h3>
                ${hasContent(d.kidsActivities) ? `
                <div class="card-list">
                    ${d.kidsActivities.map(a => `
                    <div class="info-card">
                        <div class="info-card-text"><strong>${a.name}</strong><p>${a.desc}</p></div>
                    </div>`).join('')}
                </div>` : '<div class="placeholder">Atividades serao adicionadas</div>'}
            </section>

            <section class="guide-section">
                <h3>Pontos turisticos</h3>
                ${hasContent(d.touristSpots) ? `
                <div class="card-list">
                    ${d.touristSpots.map(s => `
                    <div class="info-card">
                        <div class="info-card-text"><strong>${s.name}</strong><p>${s.desc}</p></div>
                        ${s.mapsUrl ? `<a href="${s.mapsUrl}" target="_blank" rel="noopener" class="info-card-pin" title="Ver no mapa">${svgIcon.pin}</a>` : ''}
                    </div>`).join('')}
                </div>` : '<div class="placeholder">Pontos turisticos serao adicionados</div>'}
            </section>
        </div>
    </div>`;

    document.getElementById("app").innerHTML = html;
    window.scrollTo(0, 0);
}

// ============================================================
// ROUTING
// ============================================================
function openGuide(tripId) {
    history.pushState({ tripId }, "", `#${tripId}`);
    renderGuide(tripId);
}

window.addEventListener("popstate", (e) => {
    if (e.state && e.state.tripId) {
        renderGuide(e.state.tripId);
    } else {
        renderHome();
    }
});

// Init
const hash = location.hash.replace("#", "");
if (hash && trips.find(t => t.id === hash)) {
    renderGuide(hash);
} else {
    renderHome();
}
