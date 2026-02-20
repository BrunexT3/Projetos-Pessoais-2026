// ============================================================
// DATA
// ============================================================
const trips = [
    {
        month: "Janeiro", theme: "Praia",
        trips: [{
            id: "jan-1",
            title: "Maresias",
            subtitle: "Pousada Tambayba",
            description: "Viagem com hospedagem. Gostamos, provavelmente voltaremos no final do ano.",
            type: "praia",
            status: "done",
            people: 6,
            estimatedCost: null,
            mapsUrl: "https://maps.google.com/?q=Pousada+Tambayba+Maresias",
            imageUrl: "",
            gradient: "linear-gradient(135deg, #0ea5e9, #06b6d4, #22d3ee)",
            details: {
                departureTime: "",
                restaurants: [],
                familyActivities: [],
                kidsActivities: [],
                citySummary: "",
                touristSpots: []
            }
        }]
    },
    {
        month: "Fevereiro", theme: "Sem viagem",
        trips: []
    },
    {
        month: "Marco", theme: "Gastronomia",
        trips: [{
            id: "mar-1",
            title: "Sao Roque",
            subtitle: "Rota do Vinho",
            description: "Bate e volta no 1o final de semana. Almoco e passeio pelas vinicolas. ~60km de Sorocaba, 1h de carro.",
            type: "gastronomia",
            status: "planned",
            people: 6,
            estimatedCost: 250,
            mapsUrl: "https://maps.google.com/?q=Rota+do+Vinho+Sao+Roque+SP",
            imageUrl: "https://images.unsplash.com/photo-1560148218-1a83060f7b32?w=800&h=600&fit=crop&auto=format",
            gradient: "linear-gradient(135deg, #7f1d1d, #b91c1c, #dc2626)",
            details: {
                departureTime: "Sair de Sorocaba as 8h30. Chegada prevista as 9h30.",
                restaurants: [
                    { name: "Villa Don Patto", description: "Complexo com restaurante italiano, pizzaria, emporio e degustacao de vinhos. Ambiente amplo e familiar. Reservar com antecedencia." },
                    { name: "Quinta do Olivardo", description: "Restaurante portugues premiado com vista para os vinhedos. Bacalhau e polvo sao destaques. Preco medio: R$90/pessoa." },
                    { name: "Cantina Villa Arrieta", description: "Cantina italiana tradicional com massas caseiras. Ambiente rustico e acolhedor. Bom custo-beneficio." },
                    { name: "Emporio Sao Roque", description: "Opcao mais rapida com lanches, queijos, embutidos e vinhos para degustacao. Bom para um pit stop." }
                ],
                familyActivities: [
                    { name: "Rota do Vinho", description: "Circuito com mais de 30 vinicolas, adegas e restaurantes. Degustar vinhos (adultos) e sucos de uva artesanais (criancas). Entrada gratuita na maioria." },
                    { name: "Vinicola Goes", description: "Maior vinicola da regiao com tour guiado gratuito pela fabrica. Degustacao inclusa. Loja com precos de fabrica." },
                    { name: "Villa Don Patto - Passeio", description: "Alem do restaurante, tem emporio gourmet, espaco para fotos e area verde. Da pra passar 1-2h tranquilamente." },
                    { name: "Centro Historico", description: "Caminhada pelo centro de Sao Roque com igreja matriz e casaroes coloniais. Passeio curto de 30min." }
                ],
                kidsActivities: [
                    { name: "Ski Mountain Park", description: "Parque com pista de ski sintetico, alpine coaster (montanha-russa), tirolesa e teleférico. Laura vai adorar. Ingressos a partir de R$60." },
                    { name: "Degustacao de Suco de Uva", description: "Nas vinicolas, criancas podem degustar sucos de uva artesanais e acompanhar o processo de fabricacao." },
                    { name: "Vinicola Goes - Tour Educativo", description: "Tour guiado mostra como o vinho e produzido. Interessante e educativo para criancas mais velhas." }
                ],
                citySummary: "Sao Roque e conhecida como a Terra do Vinho no estado de Sao Paulo. Localizada a cerca de 60km de Sorocaba (~1h de carro pela SP-270), a cidade abriga a famosa Rota do Vinho com mais de 30 estabelecimentos entre vinicolas, adegas e restaurantes. Alem da gastronomia, destaca-se pelo Ski Mountain Park (unica pista de ski do estado) e pelo clima interiorano com forte influencia da colonizacao portuguesa e italiana. E um destino ideal para bate e volta em familia, com boa infraestrutura de banheiros e alimentacao ao longo da rota.",
                touristSpots: [
                    { name: "Rota do Vinho (Estrada do Vinho)", description: "Principal atracao. Circuito de 10km com vinicolas, restaurantes e empórios. Funciona aos finais de semana o dia todo." },
                    { name: "Vinicola Goes", description: "Fundada em 1938, e a maior e mais tradicional da regiao. Tour gratuito com degustacao. Aberta sab/dom das 9h as 17h." },
                    { name: "Ski Mountain Park", description: "Parque de aventura com pista de ski sintetico, alpine coaster, teleférico e tirolesa. Funciona sab/dom/feriados." },
                    { name: "Villa Don Patto", description: "Complexo gastronomico com restaurante, pizzaria, emporio e espaco de eventos. Um dos pontos mais visitados da rota." },
                    { name: "Igreja Matriz de Sao Roque", description: "Igreja historica no centro da cidade, construida no seculo XVIII. Vale uma visita rapida." }
                ]
            }
        }]
    },
    {
        month: "Abril", theme: "Natureza & Cultura",
        trips: [
            {
                id: "abr-1",
                title: "Itu",
                subtitle: "Parque Maeda",
                description: "Jardim Japones, Trenzinho e areas verdes. Otimo para criancas e idosos.",
                type: "natureza",
                status: "planned",
                people: 6,
                estimatedCost: 150,
                mapsUrl: "https://maps.google.com/?q=Parque+Maeda+Itu",
                imageUrl: "",
                gradient: "linear-gradient(135deg, #065f46, #059669, #34d399)",
                details: {
                    departureTime: "",
                    restaurants: [],
                    familyActivities: [],
                    kidsActivities: [],
                    citySummary: "",
                    touristSpots: []
                }
            },
            {
                id: "abr-2",
                title: "Piedade",
                subtitle: "Colheita & Jardim Botanico",
                description: "Colheita de caqui na epoca ou visita ao Jardim Botanico.",
                type: "natureza",
                status: "planned",
                people: 6,
                estimatedCost: 80,
                mapsUrl: "https://maps.google.com/?q=Piedade+SP",
                imageUrl: "",
                gradient: "linear-gradient(135deg, #14532d, #16a34a, #4ade80)",
                details: {
                    departureTime: "",
                    restaurants: [],
                    familyActivities: [],
                    kidsActivities: [],
                    citySummary: "",
                    touristSpots: []
                }
            }
        ]
    },
    {
        month: "Maio", theme: "Aventura & Natureza",
        trips: [
            {
                id: "mai-1",
                title: "Salto",
                subtitle: "Cachoeira & Parque Rocha Moutonee",
                description: "Complexo da Cachoeira e parque tematico de dinossauros.",
                type: "natureza",
                status: "planned",
                people: 6,
                estimatedCost: 100,
                mapsUrl: "https://maps.google.com/?q=Parque+Rocha+Moutonee+Salto",
                imageUrl: "",
                gradient: "linear-gradient(135deg, #0c4a6e, #0284c7, #38bdf8)",
                details: {
                    departureTime: "",
                    restaurants: [],
                    familyActivities: [],
                    kidsActivities: [],
                    citySummary: "",
                    touristSpots: []
                }
            },
            {
                id: "mai-2",
                title: "Cotia",
                subtitle: "Animalia Park",
                description: "Zoologico interativo. Excelente para criancas.",
                type: "aventura",
                status: "planned",
                people: 6,
                estimatedCost: 300,
                mapsUrl: "https://maps.google.com/?q=Animalia+Park+Cotia",
                imageUrl: "",
                gradient: "linear-gradient(135deg, #9a3412, #ea580c, #fb923c)",
                details: {
                    departureTime: "",
                    restaurants: [],
                    familyActivities: [],
                    kidsActivities: [],
                    citySummary: "",
                    touristSpots: []
                }
            }
        ]
    },
    {
        month: "Junho", theme: "Artesanato & Doces",
        trips: [
            {
                id: "jun-1",
                title: "Embu das Artes",
                subtitle: "Feira de Artesanato",
                description: "Maior feira de artesanato do estado. Cultura e gastronomia.",
                type: "cultura",
                status: "planned",
                people: 6,
                estimatedCost: 120,
                mapsUrl: "https://maps.google.com/?q=Feira+de+Artesanato+Embu+das+Artes",
                imageUrl: "",
                gradient: "linear-gradient(135deg, #4c1d95, #7c3aed, #a78bfa)",
                details: {
                    departureTime: "",
                    restaurants: [],
                    familyActivities: [],
                    kidsActivities: [],
                    citySummary: "",
                    touristSpots: []
                }
            },
            {
                id: "jun-2",
                title: "Tatui",
                subtitle: "Rota dos Doces Caseiros",
                description: "Degustacao de doces artesanais e compras.",
                type: "gastronomia",
                status: "planned",
                people: 6,
                estimatedCost: 100,
                mapsUrl: "https://maps.google.com/?q=Tatui+SP",
                imageUrl: "",
                gradient: "linear-gradient(135deg, #881337, #e11d48, #fb7185)",
                details: {
                    departureTime: "",
                    restaurants: [],
                    familyActivities: [],
                    kidsActivities: [],
                    citySummary: "",
                    touristSpots: []
                }
            }
        ]
    },
    {
        month: "Julho", theme: "Ferias Escolares",
        trips: [
            {
                id: "jul-1",
                title: "Cabreuva",
                subtitle: "Fazenda do Chocolate",
                description: "Fabrica de chocolate artesanal. Otimo para ferias da Laura.",
                type: "gastronomia",
                status: "planned",
                people: 6,
                estimatedCost: 150,
                mapsUrl: "https://maps.google.com/?q=Fazenda+do+Chocolate+Cabreuva",
                imageUrl: "",
                gradient: "linear-gradient(135deg, #451a03, #78350f, #a16207)",
                details: {
                    departureTime: "",
                    restaurants: [],
                    familyActivities: [],
                    kidsActivities: [],
                    citySummary: "",
                    touristSpots: []
                }
            },
            {
                id: "jul-2",
                title: "Serra Negra",
                subtitle: "Fontana di Trevi & Centro",
                description: "Replica da Fontana di Trevi, lojas e restaurantes. Alternativa: Jundiai.",
                type: "cultura",
                status: "planned",
                people: 6,
                estimatedCost: 200,
                mapsUrl: "https://maps.google.com/?q=Serra+Negra+SP",
                imageUrl: "",
                gradient: "linear-gradient(135deg, #312e81, #4338ca, #818cf8)",
                details: {
                    departureTime: "",
                    restaurants: [],
                    familyActivities: [],
                    kidsActivities: [],
                    citySummary: "",
                    touristSpots: []
                }
            }
        ]
    },
    {
        month: "Agosto", theme: "Flores & Historia",
        trips: [
            {
                id: "ago-1",
                title: "Holambra",
                subtitle: "Cidade das Flores",
                description: "Arquitetura holandesa, campos de flores e gastronomia tipica.",
                type: "cultura",
                status: "planned",
                people: 6,
                estimatedCost: 180,
                mapsUrl: "https://maps.google.com/?q=Holambra+SP",
                imageUrl: "",
                gradient: "linear-gradient(135deg, #c2410c, #f59e0b, #fbbf24)",
                details: {
                    departureTime: "",
                    restaurants: [],
                    familyActivities: [],
                    kidsActivities: [],
                    citySummary: "",
                    touristSpots: []
                }
            },
            {
                id: "ago-2",
                title: "Porto Feliz",
                subtitle: "Parque das Moncoes",
                description: "Parque historico as margens do Rio Tiete. Passeio tranquilo.",
                type: "historia",
                status: "planned",
                people: 6,
                estimatedCost: 30,
                mapsUrl: "https://maps.google.com/?q=Parque+das+Moncoes+Porto+Feliz",
                imageUrl: "",
                gradient: "linear-gradient(135deg, #78350f, #92400e, #d97706)",
                details: {
                    departureTime: "",
                    restaurants: [],
                    familyActivities: [],
                    kidsActivities: [],
                    citySummary: "",
                    touristSpots: []
                }
            }
        ]
    },
    {
        month: "Setembro", theme: "Primavera",
        trips: [
            {
                id: "set-1",
                title: "Atibaia",
                subtitle: "Festa de Flores e Morangos",
                description: "Festival de primavera com flores e colheita de morangos.",
                type: "natureza",
                status: "planned",
                people: 6,
                estimatedCost: 220,
                mapsUrl: "https://maps.google.com/?q=Atibaia+SP",
                imageUrl: "",
                gradient: "linear-gradient(135deg, #be123c, #f43f5e, #fda4af)",
                details: {
                    departureTime: "",
                    restaurants: [],
                    familyActivities: [],
                    kidsActivities: [],
                    citySummary: "",
                    touristSpots: []
                }
            },
            {
                id: "set-2",
                title: "Jundiai",
                subtitle: "Jardim Botanico",
                description: "Jardim Botanico com trilhas acessiveis e area de piquenique.",
                type: "natureza",
                status: "planned",
                people: 6,
                estimatedCost: 0,
                mapsUrl: "https://maps.google.com/?q=Jardim+Botanico+Jundiai",
                imageUrl: "",
                gradient: "linear-gradient(135deg, #064e3b, #047857, #34d399)",
                details: {
                    departureTime: "",
                    restaurants: [],
                    familyActivities: [],
                    kidsActivities: [],
                    citySummary: "",
                    touristSpots: []
                }
            }
        ]
    },
    {
        month: "Outubro", theme: "Dia das Criancas",
        trips: [
            {
                id: "out-1",
                title: "Guararema",
                subtitle: "Trem Turistico",
                description: "Passeio de trem turistico pela cidade. Otimo pra Laura.",
                type: "aventura",
                status: "planned",
                people: 6,
                estimatedCost: 180,
                mapsUrl: "https://maps.google.com/?q=Trem+Turistico+Guararema",
                imageUrl: "",
                gradient: "linear-gradient(135deg, #713f12, #a16207, #eab308)",
                details: {
                    departureTime: "",
                    restaurants: [],
                    familyActivities: [],
                    kidsActivities: [],
                    citySummary: "",
                    touristSpots: []
                }
            },
            {
                id: "out-2",
                title: "Sao Paulo",
                subtitle: "Aquario de Sao Paulo",
                description: "Maior aquario da America Latina. Presente de Dia das Criancas.",
                type: "aventura",
                status: "planned",
                people: 6,
                estimatedCost: 150,
                mapsUrl: "https://maps.google.com/?q=Aquario+de+Sao+Paulo",
                imageUrl: "",
                gradient: "linear-gradient(135deg, #1e3a5f, #1e40af, #3b82f6)",
                details: {
                    departureTime: "",
                    restaurants: [],
                    familyActivities: [],
                    kidsActivities: [],
                    citySummary: "",
                    touristSpots: []
                }
            }
        ]
    },
    {
        month: "Novembro", theme: "Passeios Tranquilos",
        trips: [
            {
                id: "nov-1",
                title: "Indaiatuba",
                subtitle: "Parque Ecologico",
                description: "Parque Ecologico e Museu da Agua. Passeio gratuito e acessivel.",
                type: "natureza",
                status: "planned",
                people: 6,
                estimatedCost: 0,
                mapsUrl: "https://maps.google.com/?q=Parque+Ecologico+Indaiatuba",
                imageUrl: "",
                gradient: "linear-gradient(135deg, #14532d, #15803d, #22c55e)",
                details: {
                    departureTime: "",
                    restaurants: [],
                    familyActivities: [],
                    kidsActivities: [],
                    citySummary: "",
                    touristSpots: []
                }
            },
            {
                id: "nov-2",
                title: "Aracoiaba da Serra",
                subtitle: "Fazenda Ipanema",
                description: "Fazenda historica com trilhas e ruinas. Patrimonio cultural.",
                type: "historia",
                status: "planned",
                people: 6,
                estimatedCost: 50,
                mapsUrl: "https://maps.google.com/?q=Fazenda+Ipanema+Aracoiaba+da+Serra",
                imageUrl: "",
                gradient: "linear-gradient(135deg, #44403c, #78716c, #a8a29e)",
                details: {
                    departureTime: "",
                    restaurants: [],
                    familyActivities: [],
                    kidsActivities: [],
                    citySummary: "",
                    touristSpots: []
                }
            }
        ]
    },
    {
        month: "Dezembro", theme: "Natal & Despedida do Ano",
        trips: [
            {
                id: "dez-1",
                title: "Itu",
                subtitle: "Luzes de Natal",
                description: "Decoracao natalina na praca central. Passeio noturno em familia.",
                type: "cultura",
                status: "planned",
                people: 6,
                estimatedCost: 0,
                mapsUrl: "https://maps.google.com/?q=Praca+Padre+Miguel+Itu",
                imageUrl: "",
                gradient: "linear-gradient(135deg, #991b1b, #dc2626, #16a34a)",
                details: {
                    departureTime: "",
                    restaurants: [],
                    familyActivities: [],
                    kidsActivities: [],
                    citySummary: "",
                    touristSpots: []
                }
            },
            {
                id: "dez-2",
                title: "Maresias",
                subtitle: "Pousada Tambayba - Retorno",
                description: "Volta a Maresias para fechar o ano. Pousada que a familia gostou em janeiro.",
                type: "praia",
                status: "planned",
                people: 6,
                estimatedCost: null,
                mapsUrl: "https://maps.google.com/?q=Pousada+Tambayba+Maresias",
                imageUrl: "",
                gradient: "linear-gradient(135deg, #0369a1, #0ea5e9, #f97316)",
                details: {
                    departureTime: "",
                    restaurants: [],
                    familyActivities: [],
                    kidsActivities: [],
                    citySummary: "",
                    touristSpots: []
                }
            }
        ]
    }
];

// ============================================================
// TYPE CONFIG
// ============================================================
const typeConfig = {
    praia:       { label: "Praia",       color: "#0ea5e9", icon: "M2 20c2-3 4-5 6-5s4 2 6 5M14 15c2-3 4-5 6-5" },
    gastronomia: { label: "Gastronomia", color: "#dc2626", icon: "M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" },
    natureza:    { label: "Natureza",    color: "#16a34a", icon: "M12 3L4 14h5l-1 7 8-11h-5l1-7" },
    cultura:     { label: "Cultura",     color: "#7c3aed", icon: "M4 19.5A2.5 2.5 0 016.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" },
    aventura:    { label: "Aventura",    color: "#ea580c", icon: "M13 2L3 14h9l-1 10L21 10h-9l1-8" },
    historia:    { label: "Historia",    color: "#92400e", icon: "M3 21h18M5 21V7l8-4v18M19 21V11l-6-4" }
};

// ============================================================
// STATE
// ============================================================
let currentIndex = getCurrentMonthIndex();
let isAnimating = false;
let detailOpen = false;

function getCurrentMonthIndex() {
    const monthNames = ["Janeiro", "Fevereiro", "Marco", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    const now = new Date();
    const target = monthNames[now.getMonth()];
    const idx = trips.findIndex(t => t.month === target);
    return idx >= 0 ? idx : 0;
}

// ============================================================
// RENDER: MONTH NAV
// ============================================================
function renderMonthNav() {
    const nav = document.getElementById("monthNav");
    nav.innerHTML = "";
    trips.forEach((m, i) => {
        const btn = document.createElement("button");
        btn.className = "month-pill";
        btn.textContent = m.month.substring(0, 3);
        btn.dataset.index = i;

        const hasTrips = m.trips.length > 0;
        const allDone = hasTrips && m.trips.every(t => t.status === "done");
        if (allDone) btn.classList.add("done");
        if (!hasTrips) btn.classList.add("empty");
        if (i === currentIndex) btn.classList.add("active");

        btn.addEventListener("click", () => navigateTo(i));
        nav.appendChild(btn);
    });
}

// ============================================================
// RENDER: PROGRESS
// ============================================================
function renderProgress() {
    const total = trips.reduce((s, m) => s + m.trips.length, 0);
    const done = trips.reduce((s, m) => s + m.trips.filter(t => t.status === "done").length, 0);
    const pct = total > 0 ? (done / total) * 100 : 0;

    document.getElementById("progressFill").style.width = pct + "%";
    document.getElementById("progressText").textContent = `${done}/${total} realizadas`;
}

// ============================================================
// RENDER: SLIDES
// ============================================================
function renderSlides() {
    const track = document.getElementById("slidesTrack");
    track.innerHTML = "";

    trips.forEach((monthData, i) => {
        const slide = document.createElement("div");
        slide.className = "slide";
        slide.dataset.index = i;

        const tripCount = monthData.trips.length;
        const doneCount = monthData.trips.filter(t => t.status === "done").length;

        let cardsHTML = "";

        if (tripCount === 0) {
            cardsHTML = `
                <div class="empty-state">
                    <div class="empty-icon">
                        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                            <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
                            <line x1="3" y1="10" x2="21" y2="10"/>
                        </svg>
                    </div>
                    <p>Nenhuma viagem neste mes</p>
                </div>`;
        } else {
            monthData.trips.forEach((trip, ti) => {
                const cfg = typeConfig[trip.type] || typeConfig.cultura;
                const isDone = trip.status === "done";
                const costText = trip.estimatedCost === null ? "A definir"
                    : trip.estimatedCost === 0 ? "Gratuito"
                    : `R$ ${trip.estimatedCost}`;
                const bgStyle = trip.imageUrl
                    ? `background-image: url('${trip.imageUrl}'); background-size: cover; background-position: center;`
                    : `background: ${trip.gradient};`;

                cardsHTML += `
                <article class="trip-card ${isDone ? 'is-done' : ''}" data-trip-id="${trip.id}" style="animation-delay: ${0.1 + ti * 0.15}s">
                    <div class="card-image">
                        <div class="card-image-bg" style="${bgStyle}"></div>
                        <div class="card-image-overlay"></div>
                        <div class="card-badges">
                            <span class="badge-type" style="--badge-color: ${cfg.color}">${cfg.label}</span>
                            ${isDone
                                ? '<span class="badge-done">Realizada</span>'
                                : '<span class="badge-planned">Planejada</span>'}
                        </div>
                        <div class="card-image-title">
                            <h3>${trip.title}</h3>
                            <p>${trip.subtitle}</p>
                        </div>
                    </div>
                    <div class="card-body">
                        <p class="card-desc">${trip.description}</p>
                        <div class="card-meta">
                            <span class="meta">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
                                ${trip.people} pessoas
                            </span>
                            <span class="meta">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>
                                ${costText}
                            </span>
                        </div>
                        <div class="card-actions">
                            ${trip.mapsUrl ? `<a href="${trip.mapsUrl}" target="_blank" rel="noopener" class="btn-map" onclick="event.stopPropagation()">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                                Mapa
                            </a>` : ''}
                            <button class="btn-details" onclick="event.stopPropagation(); openDetail('${trip.id}')">
                                Ver detalhes
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
                            </button>
                        </div>
                    </div>
                </article>`;
            });
        }

        const statsText = tripCount > 0
            ? `${doneCount}/${tripCount} ${tripCount === 1 ? 'viagem' : 'viagens'}${doneCount === tripCount ? ' -- Completo!' : ''}`
            : '';

        slide.innerHTML = `
            <div class="slide-header">
                <span class="slide-month">${monthData.month}</span>
                <h2 class="slide-theme">${monthData.theme}</h2>
                ${statsText ? `<p class="slide-stats">${statsText}</p>` : ''}
            </div>
            <div class="cards-row ${tripCount === 1 ? 'single' : ''}">${cardsHTML}</div>
        `;

        track.appendChild(slide);
    });
}

// ============================================================
// NAVIGATION
// ============================================================
function navigateTo(index, direction) {
    if (index < 0 || index >= trips.length || index === currentIndex || isAnimating) return;
    isAnimating = true;

    const dir = direction || (index > currentIndex ? 1 : -1);
    const slides = document.querySelectorAll(".slide");
    const oldSlide = slides[currentIndex];
    const newSlide = slides[index];

    // Exit old slide
    oldSlide.classList.remove("active");
    oldSlide.classList.add(dir > 0 ? "exit-left" : "exit-right");

    // Enter new slide
    newSlide.classList.add(dir > 0 ? "enter-right" : "enter-left");

    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            newSlide.classList.remove("enter-right", "enter-left");
            newSlide.classList.add("active");
        });
    });

    currentIndex = index;
    updateNav();

    setTimeout(() => {
        oldSlide.classList.remove("exit-left", "exit-right");
        isAnimating = false;
    }, 600);
}

function goNext() { navigateTo(currentIndex + 1, 1); }
function goPrev() { navigateTo(currentIndex - 1, -1); }

function updateNav() {
    // Month pills
    document.querySelectorAll(".month-pill").forEach((pill, i) => {
        pill.classList.toggle("active", i === currentIndex);
    });
    // Arrows
    document.getElementById("prevBtn").disabled = currentIndex === 0;
    document.getElementById("nextBtn").disabled = currentIndex === trips.length - 1;
}

// ============================================================
// DETAIL VIEW
// ============================================================
function findTrip(tripId) {
    for (const month of trips) {
        const found = month.trips.find(t => t.id === tripId);
        if (found) return { trip: found, month: month.month };
    }
    return null;
}

function openDetail(tripId) {
    const result = findTrip(tripId);
    if (!result) return;

    const { trip, month } = result;
    const cfg = typeConfig[trip.type] || typeConfig.cultura;
    const costText = trip.estimatedCost === null ? "A definir"
        : trip.estimatedCost === 0 ? "Gratuito"
        : `R$ ${trip.estimatedCost}`;
    const bgStyle = trip.imageUrl
        ? `background-image: url('${trip.imageUrl}'); background-size: cover; background-position: center;`
        : `background: ${trip.gradient};`;

    const hero = document.getElementById("detailHero");
    hero.style = bgStyle;

    document.getElementById("detailHeroContent").innerHTML = `
        <span class="detail-badge" style="--badge-color: ${cfg.color}">${cfg.label}</span>
        <h1>${trip.title}</h1>
        <p>${trip.subtitle}</p>
        <span class="detail-month-tag">${month}</span>
    `;

    const d = trip.details;

    const renderItemCards = (items, emptyMsg) => {
        if (items.length === 0) {
            return `<div class="placeholder-block"><p>${emptyMsg}</p></div>`;
        }
        return `<div class="item-cards">${items.map(item => `
            <div class="item-card">
                <div class="item-card-name">${item.name}</div>
                <div class="item-card-desc">${item.description}</div>
            </div>`).join('')}</div>`;
    };

    document.getElementById("detailBody").innerHTML = `
        <div class="detail-overview">
            <div class="detail-info-card">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v2"/><circle cx="9" cy="7" r="4"/></svg>
                <div><strong>${trip.people} pessoas</strong><br><small>Saindo de Sorocaba</small></div>
            </div>
            <div class="detail-info-card">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>
                <div><strong>${costText}</strong><br><small>Custo estimado</small></div>
            </div>
            <div class="detail-info-card">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                <div><strong>${d.departureTime || 'A definir'}</strong><br><small>Hora de saida</small></div>
            </div>
            <div class="detail-info-card">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <div><strong>${trip.status === 'done' ? 'Realizada' : 'Planejada'}</strong><br><small>Status</small></div>
            </div>
        </div>

        <section class="detail-section anim-section" style="animation-delay: 0.1s">
            <h3>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
                Resumo da Cidade
            </h3>
            ${d.citySummary
                ? `<p class="city-summary">${d.citySummary}</p>`
                : '<div class="placeholder-block"><p>Conteudo sera adicionado em breve</p></div>'}
        </section>

        <section class="detail-section anim-section" style="animation-delay: 0.2s">
            <h3>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8h1a4 4 0 010 8h-1"/><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/></svg>
                Onde Comer
            </h3>
            ${renderItemCards(d.restaurants, 'Restaurantes recomendados serao adicionados')}
        </section>

        <section class="detail-section anim-section" style="animation-delay: 0.3s">
            <h3>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
                Passeios em Familia
            </h3>
            ${renderItemCards(d.familyActivities, 'Atividades para toda a familia serao adicionadas')}
        </section>

        <section class="detail-section anim-section" style="animation-delay: 0.4s">
            <h3>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                Passeios para Criancas
            </h3>
            ${renderItemCards(d.kidsActivities, 'Atividades para a Laura serao adicionadas')}
        </section>

        <section class="detail-section anim-section" style="animation-delay: 0.5s">
            <h3>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                Principais Pontos Turisticos
            </h3>
            ${renderItemCards(d.touristSpots, 'Pontos turisticos serao adicionados')}
        </section>

        ${trip.mapsUrl ? `
        <div class="detail-map-link anim-section" style="animation-delay: 0.6s">
            <a href="${trip.mapsUrl}" target="_blank" rel="noopener">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                Abrir no Google Maps
            </a>
        </div>` : ''}
    `;

    const overlay = document.getElementById("detailOverlay");
    overlay.classList.add("open");
    detailOpen = true;
    document.body.style.overflow = "hidden";
}

function closeDetail() {
    const overlay = document.getElementById("detailOverlay");
    overlay.classList.add("closing");
    setTimeout(() => {
        overlay.classList.remove("open", "closing");
        detailOpen = false;
        document.body.style.overflow = "";
    }, 400);
}

// ============================================================
// EVENTS
// ============================================================
document.getElementById("prevBtn").addEventListener("click", goPrev);
document.getElementById("nextBtn").addEventListener("click", goNext);
document.getElementById("detailBack").addEventListener("click", closeDetail);
document.getElementById("detailOverlay").addEventListener("click", (e) => {
    if (e.target === e.currentTarget) closeDetail();
});

document.addEventListener("keydown", (e) => {
    if (detailOpen) {
        if (e.key === "Escape") closeDetail();
        return;
    }
    if (e.key === "ArrowLeft") goPrev();
    if (e.key === "ArrowRight") goNext();
});

// Touch/Swipe
let touchStartX = 0;
document.addEventListener("touchstart", (e) => {
    if (detailOpen) return;
    touchStartX = e.changedTouches[0].screenX;
}, { passive: true });
document.addEventListener("touchend", (e) => {
    if (detailOpen) return;
    const diff = touchStartX - e.changedTouches[0].screenX;
    if (Math.abs(diff) > 60) {
        if (diff > 0) goNext();
        else goPrev();
    }
}, { passive: true });

// Card click -> detail
document.addEventListener("click", (e) => {
    const card = e.target.closest(".trip-card");
    if (card && !detailOpen) {
        openDetail(card.dataset.tripId);
    }
});

// ============================================================
// INIT
// ============================================================
renderSlides();
renderMonthNav();
renderProgress();

// Set initial active slide without animation
document.querySelectorAll(".slide").forEach((s, i) => {
    if (i === currentIndex) s.classList.add("active");
});
updateNav();
