// ============================================================
// DATA
// ============================================================
const trips = [
    {
        id: "jan-1", month: "Janeiro", title: "Maresias", subtitle: "Pousada Tambayba",
        description: "Viagem com hospedagem na Pousada Tambayba. Gostamos muito, provavelmente voltaremos no final do ano.",
        type: "praia", status: "done", people: 6, estimatedCost: null,
        mapsUrl: "https://maps.google.com/?q=Pousada+Tambayba+Maresias",
        imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&h=500&fit=crop&auto=format",
        gradient: "linear-gradient(135deg, #0ea5e9, #06b6d4)",
        details: {
            departureTime: "Viagem com pernoite — horário flexível",
            itinerary: [
                { time: "08:00", activity: "Saída de Sorocaba", desc: "Pegar SP-270 até São Paulo, depois SP-055 (Rio-Santos). Aproximadamente 3h de viagem." },
                { time: "11:00", activity: "Check-in na Pousada Tambayba", desc: "Pousada aconchegante com café da manhã incluso. Ótima localização perto da praia." },
                { time: "12:00", activity: "Almoço na praia", desc: "Restaurantes e quiosques na orla de Maresias. Frutos do mar frescos." },
                { time: "14:00", activity: "Tarde na praia", desc: "Banho de mar, caminhada na areia. Praia com boa infraestrutura." },
                { time: "18:00", activity: "Pôr do sol", desc: "Maresias tem um dos pores do sol mais bonitos do litoral norte." }
            ],
            restaurants: [
                { name: "Restaurante Sirena", desc: "Frutos do mar e culinária praiana. Ambiente pé na areia com vista para o mar. Preço médio: R$90/pessoa.", mapsUrl: "https://maps.google.com/?q=Restaurante+Sirena+Maresias" },
                { name: "Bar do Celso", desc: "Petiscos e porções generosas. Ambiente descontraído, bom para famílias.", mapsUrl: "https://maps.google.com/?q=Bar+do+Celso+Maresias" },
                { name: "Manjuba Gastronomia", desc: "Cozinha autoral com ingredientes locais. Um dos melhores restaurantes da região.", mapsUrl: "https://maps.google.com/?q=Manjuba+Gastronomia+Maresias" }
            ],
            familyActivities: [
                { name: "Praia de Maresias", desc: "Praia principal com boa infraestrutura. Areia clara, mar com ondas moderadas." },
                { name: "Trilha de Maresias a Paúba", desc: "Trilha leve de 30 minutos pela costeira. Vista panorâmica do litoral." },
                { name: "Caminhada no calçadão", desc: "Passeio tranquilo pela orla com lojas, sorveterias e artesanato local." }
            ],
            kidsActivities: [
                { name: "Piscina da pousada", desc: "Pousada Tambayba tem piscina — ótimo para Júlia brincar com segurança." },
                { name: "Castelo de areia na praia", desc: "Área mais tranquila da praia para brincar na areia e tomar banho de mar." }
            ],
            citySummary: "Maresias é uma das praias mais famosas do litoral norte de São Paulo. Localizada em São Sebastião, a cerca de 180km de Sorocaba (~3h de carro), é conhecida pelas ondas perfeitas para o surfe, areia branca e águas cristalinas. A Pousada Tambayba fica em localização privilegiada, com café da manhã caprichado e ambiente familiar. A região também oferece trilhas, restaurantes de frutos do mar e um pôr do sol inesquecível.",
            touristSpots: [
                { name: "Praia de Maresias", desc: "Praia principal. Ondas boas, infraestrutura completa. Bandeira Azul.", mapsUrl: "https://maps.google.com/?q=Praia+de+Maresias" },
                { name: "Praia de Paúba", desc: "Praia vizinha mais tranquila. Boa para famílias com crianças.", mapsUrl: "https://maps.google.com/?q=Praia+de+Pauba" },
                { name: "Mirante de Maresias", desc: "Vista panorâmica da praia e da serra. Acesso pela trilha ou carro.", mapsUrl: "https://maps.google.com/?q=Mirante+Maresias" }
            ]
        }
    },
    {
        id: "mar-1", month: "Março", title: "São Roque", subtitle: "Rota do Vinho",
        description: "Bate e volta no 1º final de semana. Almoço e passeio pelas vinícolas. ~60km de Sorocaba, 1h de carro.",
        type: "gastronomia", status: "planned", people: 6, estimatedCost: 250,
        mapsUrl: "https://maps.google.com/?q=Rota+do+Vinho+Sao+Roque+SP",
        imageUrl: "https://images.unsplash.com/photo-1464638681273-0962e9b53566?w=900&h=500&fit=crop&auto=format",
        gradient: "linear-gradient(135deg, #7f1d1d, #b91c1c)",
        details: {
            departureTime: "Sair de Sorocaba às 8h30. Chegada prevista às 9h30.",
            itinerary: [
                { time: "08:30", activity: "Saída de Sorocaba", desc: "Pegar SP-270 sentido São Paulo. Aproximadamente 1h de viagem." },
                { time: "09:30", activity: "Vinícola Góes", desc: "Tour gratuito pela fábrica com degustação. Loja com preços de fábrica. Aberta sáb/dom 9h-17h." },
                { time: "11:30", activity: "Almoço - Villa Don Patto", desc: "Restaurante italiano com pizzaria e empório. Reservar com antecedência. Preço médio R$80/pessoa." },
                { time: "13:30", activity: "Passeio pela Rota do Vinho", desc: "Circuito de 10km com vinícolas, adegas e empórios. Degustação de vinhos (adultos) e sucos de uva (Júlia)." },
                { time: "15:00", activity: "Ski Mountain Park", desc: "Pista de ski sintético, alpine coaster e tirolesa. Ingressos a partir de R$60. Júlia vai adorar." },
                { time: "17:00", activity: "Retorno a Sorocaba", desc: "Chegada prevista por volta das 18h." }
            ],
            restaurants: [
                { name: "Villa Don Patto", desc: "Complexo com restaurante italiano, pizzaria, empório e degustação de vinhos. Ambiente amplo e familiar. Reservar com antecedência.", mapsUrl: "https://maps.google.com/?q=Villa+Don+Patto+Sao+Roque" },
                { name: "Quinta do Olivardo", desc: "Restaurante português premiado com vista para os vinhedos. Bacalhau e polvo são destaques. Preço médio: R$90/pessoa.", mapsUrl: "https://maps.google.com/?q=Quinta+do+Olivardo+Sao+Roque" },
                { name: "Cantina Villa Arrieta", desc: "Cantina italiana tradicional com massas caseiras. Ambiente rústico e acolhedor. Bom custo-benefício.", mapsUrl: "https://maps.google.com/?q=Cantina+Villa+Arrieta+Sao+Roque" },
                { name: "Empório São Roque", desc: "Opção mais rápida com lanches, queijos, embutidos e vinhos para degustação. Bom para um pit stop.", mapsUrl: "https://maps.google.com/?q=Emporio+Sao+Roque" }
            ],
            familyActivities: [
                { name: "Rota do Vinho", desc: "Circuito com mais de 30 vinícolas e adegas. Degustação de vinhos e sucos artesanais. Entrada gratuita na maioria." },
                { name: "Vinícola Góes", desc: "Maior vinícola da região com tour guiado gratuito. Degustação inclusa." },
                { name: "Villa Don Patto - Passeio", desc: "Empório gourmet, espaço para fotos e área verde. Dá pra passar 1-2h." },
                { name: "Centro Histórico", desc: "Caminhada pelo centro com igreja matriz e casarões coloniais. Passeio curto de 30min." }
            ],
            kidsActivities: [
                { name: "Ski Mountain Park", desc: "Pista de ski sintético, alpine coaster (montanha-russa), tirolesa e teleférico. Ingressos a partir de R$60." },
                { name: "Degustação de Suco de Uva", desc: "Nas vinícolas, crianças podem degustar sucos de uva artesanais e ver a fabricação." },
                { name: "Tour Vinícola Góes", desc: "Tour guiado mostra como o vinho é produzido. Educativo e interessante." }
            ],
            citySummary: "São Roque é conhecida como a Terra do Vinho no estado de São Paulo. Localizada a cerca de 60km de Sorocaba (~1h de carro pela SP-270), a cidade abriga a famosa Rota do Vinho com mais de 30 estabelecimentos entre vinícolas, adegas e restaurantes. Além da gastronomia, destaca-se pelo Ski Mountain Park (única pista de ski do estado) e pelo clima interiorano com forte influência da colonização portuguesa e italiana.",
            touristSpots: [
                { name: "Rota do Vinho", desc: "Principal atração. Circuito de 10km. Funciona aos finais de semana o dia todo.", mapsUrl: "https://maps.google.com/?q=Estrada+do+Vinho+Sao+Roque" },
                { name: "Vinícola Góes", desc: "Fundada em 1938. Tour gratuito com degustação. Sáb/dom 9h-17h.", mapsUrl: "https://maps.google.com/?q=Vinicola+Goes+Sao+Roque" },
                { name: "Ski Mountain Park", desc: "Ski sintético, alpine coaster, teleférico e tirolesa. Sáb/dom/feriados.", mapsUrl: "https://maps.google.com/?q=Ski+Mountain+Park+Sao+Roque" },
                { name: "Villa Don Patto", desc: "Complexo gastronômico. Um dos pontos mais visitados da rota.", mapsUrl: "https://maps.google.com/?q=Villa+Don+Patto+Sao+Roque" },
                { name: "Igreja Matriz", desc: "Igreja histórica do século XVIII no centro da cidade.", mapsUrl: "https://maps.google.com/?q=Igreja+Matriz+Sao+Roque" }
            ]
        }
    },
    {
        id: "abr-1", month: "Abril", title: "Itu", subtitle: "Parque Maeda",
        description: "Jardim Japonês, Trenzinho e áreas verdes. Ótimo para crianças e idosos.",
        type: "natureza", status: "planned", people: 6, estimatedCost: 150,
        mapsUrl: "https://maps.google.com/?q=Parque+Maeda+Itu",
        imageUrl: "", gradient: "linear-gradient(135deg, #065f46, #059669)",
        details: { departureTime: "", itinerary: [], restaurants: [], familyActivities: [], kidsActivities: [], citySummary: "", touristSpots: [] }
    },
    {
        id: "abr-2", month: "Abril", title: "Piedade", subtitle: "Colheita & Jardim Botânico",
        description: "Colheita de caqui na época ou visita ao Jardim Botânico.",
        type: "natureza", status: "planned", people: 6, estimatedCost: 80,
        mapsUrl: "https://maps.google.com/?q=Piedade+SP",
        imageUrl: "", gradient: "linear-gradient(135deg, #14532d, #16a34a)",
        details: { departureTime: "", itinerary: [], restaurants: [], familyActivities: [], kidsActivities: [], citySummary: "", touristSpots: [] }
    },
    {
        id: "mai-1", month: "Maio", title: "Salto", subtitle: "Cachoeira & Parque Rocha Moutonnée",
        description: "Complexo da Cachoeira e parque temático de dinossauros.",
        type: "natureza", status: "planned", people: 6, estimatedCost: 100,
        mapsUrl: "https://maps.google.com/?q=Parque+Rocha+Moutonee+Salto",
        imageUrl: "", gradient: "linear-gradient(135deg, #0c4a6e, #0284c7)",
        details: { departureTime: "", itinerary: [], restaurants: [], familyActivities: [], kidsActivities: [], citySummary: "", touristSpots: [] }
    },
    {
        id: "mai-2", month: "Maio", title: "Cotia", subtitle: "Animália Park",
        description: "Zoológico interativo. Excelente para crianças.",
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
        id: "jun-2", month: "Junho", title: "Tatuí", subtitle: "Rota dos Doces Caseiros",
        description: "Degustação de doces artesanais e compras.",
        type: "gastronomia", status: "planned", people: 6, estimatedCost: 100,
        mapsUrl: "https://maps.google.com/?q=Tatui+SP",
        imageUrl: "", gradient: "linear-gradient(135deg, #881337, #e11d48)",
        details: { departureTime: "", itinerary: [], restaurants: [], familyActivities: [], kidsActivities: [], citySummary: "", touristSpots: [] }
    },
    {
        id: "jul-1", month: "Julho", title: "Cabreúva", subtitle: "Fazenda do Chocolate",
        description: "Fábrica de chocolate artesanal. Ótimo para férias da Júlia.",
        type: "gastronomia", status: "planned", people: 6, estimatedCost: 150,
        mapsUrl: "https://maps.google.com/?q=Fazenda+do+Chocolate+Cabreuva",
        imageUrl: "", gradient: "linear-gradient(135deg, #451a03, #78350f)",
        details: { departureTime: "", itinerary: [], restaurants: [], familyActivities: [], kidsActivities: [], citySummary: "", touristSpots: [] }
    },
    {
        id: "jul-2", month: "Julho", title: "Serra Negra", subtitle: "Fontana di Trevi & Centro",
        description: "Réplica da Fontana di Trevi, lojas e restaurantes.",
        type: "cultura", status: "planned", people: 6, estimatedCost: 200,
        mapsUrl: "https://maps.google.com/?q=Serra+Negra+SP",
        imageUrl: "", gradient: "linear-gradient(135deg, #312e81, #4338ca)",
        details: { departureTime: "", itinerary: [], restaurants: [], familyActivities: [], kidsActivities: [], citySummary: "", touristSpots: [] }
    },
    {
        id: "ago-1", month: "Agosto", title: "Holambra", subtitle: "Cidade das Flores",
        description: "Arquitetura holandesa, campos de flores e gastronomia típica.",
        type: "cultura", status: "planned", people: 6, estimatedCost: 180,
        mapsUrl: "https://maps.google.com/?q=Holambra+SP",
        imageUrl: "", gradient: "linear-gradient(135deg, #c2410c, #f59e0b)",
        details: { departureTime: "", itinerary: [], restaurants: [], familyActivities: [], kidsActivities: [], citySummary: "", touristSpots: [] }
    },
    {
        id: "ago-2", month: "Agosto", title: "Porto Feliz", subtitle: "Parque das Monções",
        description: "Parque histórico às margens do Rio Tietê. Passeio tranquilo.",
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
        id: "set-2", month: "Setembro", title: "Jundiaí", subtitle: "Jardim Botânico",
        description: "Jardim Botânico com trilhas acessíveis e área de piquenique.",
        type: "natureza", status: "planned", people: 6, estimatedCost: 0,
        mapsUrl: "https://maps.google.com/?q=Jardim+Botanico+Jundiai",
        imageUrl: "", gradient: "linear-gradient(135deg, #064e3b, #047857)",
        details: { departureTime: "", itinerary: [], restaurants: [], familyActivities: [], kidsActivities: [], citySummary: "", touristSpots: [] }
    },
    {
        id: "out-1", month: "Outubro", title: "Guararema", subtitle: "Trem Turístico",
        description: "Passeio de trem turístico pela cidade. Ótimo pra Júlia.",
        type: "aventura", status: "planned", people: 6, estimatedCost: 180,
        mapsUrl: "https://maps.google.com/?q=Trem+Turistico+Guararema",
        imageUrl: "", gradient: "linear-gradient(135deg, #713f12, #a16207)",
        details: { departureTime: "", itinerary: [], restaurants: [], familyActivities: [], kidsActivities: [], citySummary: "", touristSpots: [] }
    },
    {
        id: "out-2", month: "Outubro", title: "São Paulo", subtitle: "Aquário de São Paulo",
        description: "Maior aquário da América Latina. Presente de Dia das Crianças.",
        type: "aventura", status: "planned", people: 6, estimatedCost: 150,
        mapsUrl: "https://maps.google.com/?q=Aquario+de+Sao+Paulo",
        imageUrl: "", gradient: "linear-gradient(135deg, #1e3a5f, #1e40af)",
        details: { departureTime: "", itinerary: [], restaurants: [], familyActivities: [], kidsActivities: [], citySummary: "", touristSpots: [] }
    },
    {
        id: "nov-1", month: "Novembro", title: "Indaiatuba", subtitle: "Parque Ecológico",
        description: "Parque Ecológico e Museu da Água. Passeio gratuito e acessível.",
        type: "natureza", status: "planned", people: 6, estimatedCost: 0,
        mapsUrl: "https://maps.google.com/?q=Parque+Ecologico+Indaiatuba",
        imageUrl: "", gradient: "linear-gradient(135deg, #14532d, #15803d)",
        details: { departureTime: "", itinerary: [], restaurants: [], familyActivities: [], kidsActivities: [], citySummary: "", touristSpots: [] }
    },
    {
        id: "nov-2", month: "Novembro", title: "Araçoiaba da Serra", subtitle: "Fazenda Ipanema",
        description: "Fazenda histórica com trilhas e ruínas. Patrimônio cultural.",
        type: "historia", status: "planned", people: 6, estimatedCost: 50,
        mapsUrl: "https://maps.google.com/?q=Fazenda+Ipanema+Aracoiaba+da+Serra",
        imageUrl: "", gradient: "linear-gradient(135deg, #44403c, #78716c)",
        details: { departureTime: "", itinerary: [], restaurants: [], familyActivities: [], kidsActivities: [], citySummary: "", touristSpots: [] }
    },
    {
        id: "dez-1", month: "Dezembro", title: "Itu", subtitle: "Luzes de Natal",
        description: "Decoração natalina na praça central. Passeio noturno em família.",
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
                    <span class="next-trip-label">Próxima viagem</span>
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
        html += `<section class="trip-list"><h3 class="section-title">Próximas viagens</h3>`;
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
                <div class="info-item">${svgIcon.clock}<div><strong>${d.departureTime ? d.departureTime.split('.')[0] : 'A definir'}</strong><small>Horário de saída</small></div></div>
                <div class="info-item">${svgIcon.people}<div><strong>${trip.people} pessoas</strong><small>Saindo de Sorocaba</small></div></div>
                <div class="info-item">${svgIcon.money}<div><strong>${costText(trip.estimatedCost)}</strong><small>Custo estimado</small></div></div>
            </div>

            ${trip.mapsUrl ? `
            <a href="${trip.mapsUrl}" target="_blank" rel="noopener" class="btn-navigate">
                ${svgIcon.nav} Navegar até o local
            </a>` : ''}

            ${d.citySummary ? `
            <section class="guide-section">
                <h3>Sobre a cidade</h3>
                <p class="city-text">${d.citySummary}</p>
            </section>` : `
            <section class="guide-section">
                <h3>Sobre a cidade</h3>
                <div class="placeholder">Conteúdo será adicionado</div>
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
                </div>` : '<div class="placeholder">Roteiro será definido</div>'}
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
                </div>` : '<div class="placeholder">Restaurantes serão adicionados</div>'}
            </section>

            <section class="guide-section">
                <h3>Passeios em família</h3>
                ${hasContent(d.familyActivities) ? `
                <div class="card-list">
                    ${d.familyActivities.map(a => `
                    <div class="info-card">
                        <div class="info-card-text"><strong>${a.name}</strong><p>${a.desc}</p></div>
                    </div>`).join('')}
                </div>` : '<div class="placeholder">Atividades serão adicionadas</div>'}
            </section>

            <section class="guide-section">
                <h3>Pra Júlia</h3>
                ${hasContent(d.kidsActivities) ? `
                <div class="card-list">
                    ${d.kidsActivities.map(a => `
                    <div class="info-card">
                        <div class="info-card-text"><strong>${a.name}</strong><p>${a.desc}</p></div>
                    </div>`).join('')}
                </div>` : '<div class="placeholder">Atividades serão adicionadas</div>'}
            </section>

            <section class="guide-section">
                <h3>Pontos turísticos</h3>
                ${hasContent(d.touristSpots) ? `
                <div class="card-list">
                    ${d.touristSpots.map(s => `
                    <div class="info-card">
                        <div class="info-card-text"><strong>${s.name}</strong><p>${s.desc}</p></div>
                        ${s.mapsUrl ? `<a href="${s.mapsUrl}" target="_blank" rel="noopener" class="info-card-pin" title="Ver no mapa">${svgIcon.pin}</a>` : ''}
                    </div>`).join('')}
                </div>` : '<div class="placeholder">Pontos turísticos serão adicionados</div>'}
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
