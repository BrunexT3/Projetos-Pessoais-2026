const trips = [
    {
        month: "Janeiro",
        theme: "Praia",
        trips: [
            {
                title: "Maresias",
                subtitle: "Pousada Tambayba",
                description: "Viagem com hospedagem. Gostamos, provavelmente voltaremos.",
                type: "praia",
                status: "done",
                people: 6,
                origin: "Sorocaba",
                estimatedCost: null,
                mapsUrl: "https://maps.google.com/?q=Pousada+Tambayba+Maresias"
            }
        ]
    },
    {
        month: "Fevereiro",
        theme: "Sem viagem",
        trips: []
    },
    {
        month: "Marco",
        theme: "Gastronomia",
        trips: [
            {
                title: "Sao Roque",
                subtitle: "Rota do Vinho",
                description: "Bate e volta. Almoco e passeio pelas vinicolas. 1o final de semana do mes.",
                type: "gastronomia",
                status: "planned",
                people: 6,
                origin: "Sorocaba",
                estimatedCost: 200,
                mapsUrl: "https://maps.google.com/?q=Rota+do+Vinho+Sao+Roque"
            }
        ]
    },
    {
        month: "Abril",
        theme: "Natureza & Cultura",
        trips: [
            {
                title: "Itu",
                subtitle: "Parque Maeda",
                description: "Jardim Japones, Trenzinho e areas verdes. Otimo para criancas e idosos.",
                type: "natureza",
                status: "planned",
                people: 6,
                origin: "Sorocaba",
                estimatedCost: 150,
                mapsUrl: "https://maps.google.com/?q=Parque+Maeda+Itu"
            },
            {
                title: "Piedade",
                subtitle: "Colheita & Jardim Botanico",
                description: "Colheita de caqui na epoca ou visita ao Jardim Botanico.",
                type: "natureza",
                status: "planned",
                people: 6,
                origin: "Sorocaba",
                estimatedCost: 80,
                mapsUrl: "https://maps.google.com/?q=Piedade+SP"
            }
        ]
    },
    {
        month: "Maio",
        theme: "Aventura & Natureza",
        trips: [
            {
                title: "Salto",
                subtitle: "Cachoeira & Parque Rocha Moutonee",
                description: "Complexo da Cachoeira e parque tematico de dinossauros.",
                type: "natureza",
                status: "planned",
                people: 6,
                origin: "Sorocaba",
                estimatedCost: 100,
                mapsUrl: "https://maps.google.com/?q=Parque+Rocha+Moutonee+Salto"
            },
            {
                title: "Cotia",
                subtitle: "Animalia Park",
                description: "Zoologico interativo. Excelente para criancas.",
                type: "aventura",
                status: "planned",
                people: 6,
                origin: "Sorocaba",
                estimatedCost: 300,
                mapsUrl: "https://maps.google.com/?q=Animalia+Park+Cotia"
            }
        ]
    },
    {
        month: "Junho",
        theme: "Artesanato & Doces",
        trips: [
            {
                title: "Embu das Artes",
                subtitle: "Feira de Artesanato",
                description: "Maior feira de artesanato do estado. Cultura e gastronomia.",
                type: "cultura",
                status: "planned",
                people: 6,
                origin: "Sorocaba",
                estimatedCost: 120,
                mapsUrl: "https://maps.google.com/?q=Feira+de+Artesanato+Embu+das+Artes"
            },
            {
                title: "Tatui",
                subtitle: "Rota dos Doces Caseiros",
                description: "Degustacao de doces artesanais e compras.",
                type: "gastronomia",
                status: "planned",
                people: 6,
                origin: "Sorocaba",
                estimatedCost: 100,
                mapsUrl: "https://maps.google.com/?q=Tatui+SP"
            }
        ]
    },
    {
        month: "Julho",
        theme: "Ferias Escolares",
        trips: [
            {
                title: "Cabreuva",
                subtitle: "Fazenda do Chocolate",
                description: "Fabrica de chocolate artesanal. Otimo para ferias da Laura.",
                type: "gastronomia",
                status: "planned",
                people: 6,
                origin: "Sorocaba",
                estimatedCost: 150,
                mapsUrl: "https://maps.google.com/?q=Fazenda+do+Chocolate+Cabreuva"
            },
            {
                title: "Serra Negra",
                subtitle: "Fontana di Trevi & Centro",
                description: "Replica da Fontana di Trevi, lojas e restaurantes. Alternativa: Jundiai.",
                type: "cultura",
                status: "planned",
                people: 6,
                origin: "Sorocaba",
                estimatedCost: 200,
                mapsUrl: "https://maps.google.com/?q=Serra+Negra+SP"
            }
        ]
    },
    {
        month: "Agosto",
        theme: "Flores & Historia",
        trips: [
            {
                title: "Holambra",
                subtitle: "Cidade das Flores",
                description: "Arquitetura holandesa, campos de flores e gastronomia tipica.",
                type: "cultura",
                status: "planned",
                people: 6,
                origin: "Sorocaba",
                estimatedCost: 180,
                mapsUrl: "https://maps.google.com/?q=Holambra+SP"
            },
            {
                title: "Porto Feliz",
                subtitle: "Parque das Moncoes",
                description: "Parque historico as margens do Rio Tiete. Passeio tranquilo.",
                type: "historia",
                status: "planned",
                people: 6,
                origin: "Sorocaba",
                estimatedCost: 30,
                mapsUrl: "https://maps.google.com/?q=Parque+das+Moncoes+Porto+Feliz"
            }
        ]
    },
    {
        month: "Setembro",
        theme: "Primavera",
        trips: [
            {
                title: "Atibaia",
                subtitle: "Festa de Flores e Morangos",
                description: "Festival de primavera com flores e colheita de morangos.",
                type: "natureza",
                status: "planned",
                people: 6,
                origin: "Sorocaba",
                estimatedCost: 220,
                mapsUrl: "https://maps.google.com/?q=Atibaia+SP"
            },
            {
                title: "Jundiai",
                subtitle: "Jardim Botanico",
                description: "Jardim Botanico com trilhas acessiveis e area de piquenique.",
                type: "natureza",
                status: "planned",
                people: 6,
                origin: "Sorocaba",
                estimatedCost: 0,
                mapsUrl: "https://maps.google.com/?q=Jardim+Botanico+Jundiai"
            }
        ]
    },
    {
        month: "Outubro",
        theme: "Dia das Criancas",
        trips: [
            {
                title: "Guararema",
                subtitle: "Trem Turistico",
                description: "Passeio de trem turistico pela cidade. Otimo pra Laura.",
                type: "aventura",
                status: "planned",
                people: 6,
                origin: "Sorocaba",
                estimatedCost: 180,
                mapsUrl: "https://maps.google.com/?q=Trem+Turistico+Guararema"
            },
            {
                title: "Sao Paulo",
                subtitle: "Aquario de Sao Paulo",
                description: "Maior aquario da America Latina. Presente de Dia das Criancas.",
                type: "aventura",
                status: "planned",
                people: 6,
                origin: "Sorocaba",
                estimatedCost: 150,
                mapsUrl: "https://maps.google.com/?q=Aquario+de+Sao+Paulo"
            }
        ]
    },
    {
        month: "Novembro",
        theme: "Passeios Tranquilos",
        trips: [
            {
                title: "Indaiatuba",
                subtitle: "Parque Ecologico",
                description: "Parque Ecologico e Museu da Agua. Passeio gratuito e acessivel.",
                type: "natureza",
                status: "planned",
                people: 6,
                origin: "Sorocaba",
                estimatedCost: 0,
                mapsUrl: "https://maps.google.com/?q=Parque+Ecologico+Indaiatuba"
            },
            {
                title: "Aracoiaba da Serra",
                subtitle: "Fazenda Ipanema",
                description: "Fazenda historica com trilhas e ruinas. Patrimonio cultural.",
                type: "historia",
                status: "planned",
                people: 6,
                origin: "Sorocaba",
                estimatedCost: 50,
                mapsUrl: "https://maps.google.com/?q=Fazenda+Ipanema+Aracoiaba+da+Serra"
            }
        ]
    },
    {
        month: "Dezembro",
        theme: "Natal & Despedida do Ano",
        trips: [
            {
                title: "Itu",
                subtitle: "Luzes de Natal",
                description: "Decoracao natalina na praca central. Passeio noturno em familia.",
                type: "cultura",
                status: "planned",
                people: 6,
                origin: "Sorocaba",
                estimatedCost: 0,
                mapsUrl: "https://maps.google.com/?q=Praca+Padre+Miguel+Itu"
            },
            {
                title: "Maresias",
                subtitle: "Pousada Tambayba - Retorno",
                description: "Volta a Maresias para fechar o ano. Pousada que a familia gostou em janeiro.",
                type: "praia",
                status: "planned",
                people: 6,
                origin: "Sorocaba",
                estimatedCost: null,
                mapsUrl: "https://maps.google.com/?q=Pousada+Tambayba+Maresias"
            }
        ]
    }
];

// --- ICONS ---
const typeIcons = {
    praia: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="5" r="3"/><path d="M2 20c2-3 4-5 6-5s4 2 6 5"/><path d="M14 15c2-3 4-5 6-5"/></svg>',
    gastronomia: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 8h1a4 4 0 010 8h-1"/><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>',
    natureza: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M17 20H7l5-16 5 16z"/><path d="M12 13l-3 7"/><path d="M12 13l3 7"/><line x1="12" y1="20" x2="12" y2="24"/></svg>',
    cultura: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>',
    aventura: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
    historia: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 21h18"/><path d="M5 21V7l8-4v18"/><path d="M19 21V11l-6-4"/><path d="M9 9v.01"/><path d="M9 12v.01"/><path d="M9 15v.01"/><path d="M9 18v.01"/></svg>'
};

const typeColors = {
    praia: { bg: "#dbeafe", text: "#1e40af", accent: "#3b82f6" },
    gastronomia: { bg: "#fef3c7", text: "#92400e", accent: "#f59e0b" },
    natureza: { bg: "#d1fae5", text: "#065f46", accent: "#10b981" },
    cultura: { bg: "#ede9fe", text: "#5b21b6", accent: "#8b5cf6" },
    aventura: { bg: "#fee2e2", text: "#991b1b", accent: "#ef4444" },
    historia: { bg: "#f3e8ff", text: "#6b21a8", accent: "#a855f7" }
};

const typeLabels = {
    praia: "Praia",
    gastronomia: "Gastronomia",
    natureza: "Natureza",
    cultura: "Cultura",
    aventura: "Aventura",
    historia: "Historia"
};

// --- STATE ---
let currentIndex = getCurrentMonthIndex();

function getCurrentMonthIndex() {
    const now = new Date();
    const currentMonth = now.getMonth(); // 0-indexed
    // Find the closest month in our trips array
    const monthNames = ["Janeiro", "Fevereiro", "Marco", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    const target = monthNames[currentMonth];
    const idx = trips.findIndex(t => t.month === target);
    return idx >= 0 ? idx : 0;
}

// --- RENDER ---
function renderSlides() {
    const wrapper = document.getElementById("slidesWrapper");
    wrapper.innerHTML = "";

    trips.forEach((monthData, i) => {
        const slide = document.createElement("div");
        slide.className = "slide";
        slide.dataset.index = i;

        const tripCount = monthData.trips.length;
        const doneCount = monthData.trips.filter(t => t.status === "done").length;

        let cardsHTML = "";
        if (tripCount === 0) {
            cardsHTML = `<div class="empty-month">
                <div class="empty-icon">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                </div>
                <p>Nenhuma viagem planejada para este mes.</p>
            </div>`;
        } else {
            monthData.trips.forEach(trip => {
                const colors = typeColors[trip.type] || typeColors.cultura;
                const icon = typeIcons[trip.type] || typeIcons.cultura;
                const label = typeLabels[trip.type] || trip.type;
                const isDone = trip.status === "done";
                const costText = trip.estimatedCost === null ? "A definir"
                    : trip.estimatedCost === 0 ? "Gratuito"
                    : `R$ ${trip.estimatedCost}`;

                cardsHTML += `
                <div class="trip-card ${isDone ? 'is-done' : ''}" style="--card-accent: ${colors.accent}; --card-bg: ${colors.bg}; --card-text: ${colors.text}">
                    <div class="card-status-bar"></div>
                    <div class="card-content">
                        <div class="card-top">
                            <span class="card-type-badge" style="background: ${colors.bg}; color: ${colors.text}">
                                ${icon} ${label}
                            </span>
                            ${isDone ? '<span class="card-done-badge">Realizada</span>' : '<span class="card-planned-badge">Planejada</span>'}
                        </div>
                        <h3 class="card-title">${trip.title}</h3>
                        <p class="card-subtitle">${trip.subtitle}</p>
                        <p class="card-description">${trip.description}</p>
                        <div class="card-meta">
                            <span class="meta-item">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
                                ${trip.people} pessoas
                            </span>
                            <span class="meta-item">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>
                                ${costText}
                            </span>
                        </div>
                        ${trip.mapsUrl ? `<a href="${trip.mapsUrl}" target="_blank" rel="noopener" class="card-map-link">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                            Ver no mapa
                        </a>` : ''}
                    </div>
                </div>`;
            });
        }

        slide.innerHTML = `
            <div class="slide-header">
                <span class="slide-month-label">${monthData.month}</span>
                <h2 class="slide-theme">${monthData.theme}</h2>
                ${tripCount > 0 ? `<div class="slide-stats">${doneCount}/${tripCount} ${tripCount === 1 ? 'viagem' : 'viagens'} ${doneCount === tripCount && tripCount > 0 ? '-- Completo!' : ''}</div>` : ''}
            </div>
            <div class="cards-grid ${tripCount === 1 ? 'single-card' : ''}">
                ${cardsHTML}
            </div>
        `;

        wrapper.appendChild(slide);
    });

    updateView(false);
}

function renderDots() {
    const dotsContainer = document.getElementById("monthDots");
    dotsContainer.innerHTML = "";
    trips.forEach((m, i) => {
        const dot = document.createElement("button");
        dot.className = "dot";
        dot.title = m.month;
        dot.dataset.index = i;

        const hasTrips = m.trips.length > 0;
        const allDone = hasTrips && m.trips.every(t => t.status === "done");
        if (allDone) dot.classList.add("done");
        if (!hasTrips) dot.classList.add("empty");

        dot.addEventListener("click", () => goTo(i));
        dotsContainer.appendChild(dot);
    });
}

function updateView(animate = true) {
    const slides = document.querySelectorAll(".slide");
    slides.forEach((slide, i) => {
        slide.classList.remove("active", "prev", "next");
        if (i === currentIndex) {
            slide.classList.add("active");
        } else if (i < currentIndex) {
            slide.classList.add("prev");
        } else {
            slide.classList.add("next");
        }
    });

    // Update dots
    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === currentIndex);
    });

    // Update counter
    const counter = document.getElementById("tripCounter");
    const total = trips.reduce((sum, m) => sum + m.trips.length, 0);
    const done = trips.reduce((sum, m) => sum + m.trips.filter(t => t.status === "done").length, 0);
    counter.textContent = `${done}/${total} viagens realizadas`;

    // Update arrows
    document.getElementById("prevBtn").disabled = currentIndex === 0;
    document.getElementById("nextBtn").disabled = currentIndex === trips.length - 1;
}

function goTo(index) {
    if (index < 0 || index >= trips.length) return;
    currentIndex = index;
    updateView(true);
}

function goNext() { goTo(currentIndex + 1); }
function goPrev() { goTo(currentIndex - 1); }

// --- KEYBOARD NAV ---
document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") goPrev();
    if (e.key === "ArrowRight") goNext();
});

// --- TOUCH/SWIPE ---
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

document.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
        if (diff > 0) goNext();
        else goPrev();
    }
}, { passive: true });

// --- INIT ---
document.getElementById("prevBtn").addEventListener("click", goPrev);
document.getElementById("nextBtn").addEventListener("click", goNext);

renderSlides();
renderDots();
