// ============================================================
// DATA
// ============================================================
const trips = [
    {
        id: "jan-1", month: "Janeiro", title: "Maresias", subtitle: "Pousada Tambayba",
        description: "Viagem com hospedagem na Pousada Tambayba. Gostamos muito, provavelmente voltaremos no final do ano.",
        type: "praia", status: "done", people: 6, distance: 180, estimatedCost: null,
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
        type: "gastronomia", status: "planned", people: 6, distance: 60, estimatedCost: 250,
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
        id: "abr-2", month: "Abril", title: "Piedade", subtitle: "Colheita & Jardim Botânico",
        description: "Colheita de caqui na época ou visita ao Jardim Botânico.",
        type: "natureza", status: "planned", people: 6, distance: 50, estimatedCost: 80,
        mapsUrl: "https://maps.google.com/?q=Piedade+SP",
        imageUrl: "https://images.unsplash.com/photo-1558293842-c0fd3db86157?w=900&h=500&fit=crop&auto=format",
        gradient: "linear-gradient(135deg, #14532d, #16a34a)",
        details: {
            departureTime: "Sair de Sorocaba às 8h30. Chegada prevista às 9h15.",
            itinerary: [
                { time: "08:30", activity: "Saída de Sorocaba", desc: "Pegar SP-270 sentido Piedade. Aproximadamente 45min de viagem por estrada tranquila." },
                { time: "09:15", activity: "Chegada em Piedade", desc: "Cidade pequena e acolhedora. Parar no centro para café da manhã." },
                { time: "09:45", activity: "Colheita de caqui", desc: "Visita a sítio com colheita de caqui (época: março a maio). Experiência rural para toda a família." },
                { time: "11:30", activity: "Jardim Botânico de Piedade", desc: "Passeio pelas trilhas e jardins. Área de piquenique disponível. Entrada gratuita." },
                { time: "13:00", activity: "Almoço em Piedade", desc: "Restaurantes no centro com comida caseira mineira. Preço acessível." },
                { time: "14:30", activity: "Mirante e cachoeiras", desc: "Visita a mirantes na região com vista para o vale. Cachoeiras próximas para contemplação." },
                { time: "16:00", activity: "Retorno a Sorocaba", desc: "Chegada prevista por volta das 16h45." }
            ],
            restaurants: [
                { name: "Restaurante Sabor da Roça", desc: "Comida caseira mineira com fogão a lenha. Frango caipira, tutu de feijão e couve. Preço médio: R$40/pessoa.", mapsUrl: "https://maps.google.com/?q=Restaurante+Sabor+da+Roca+Piedade" },
                { name: "Padaria Central de Piedade", desc: "Pães artesanais, bolos caseiros e café coado. Bom para café da manhã ou lanche da tarde.", mapsUrl: "https://maps.google.com/?q=Padaria+Central+Piedade+SP" },
                { name: "Recanto da Pedra", desc: "Restaurante com vista para a serra. Porções e pratos típicos do interior paulista.", mapsUrl: "https://maps.google.com/?q=Recanto+da+Pedra+Piedade" }
            ],
            familyActivities: [
                { name: "Colheita de caqui", desc: "Sítios abertos para colheita entre março e maio. Experiência rural educativa para Júlia e divertida para todos." },
                { name: "Jardim Botânico", desc: "Trilhas leves, jardins temáticos e área de piquenique. Acessível para os avós." },
                { name: "Mirantes da Serra", desc: "Pontos com vista panorâmica para o vale de Piedade. Fotos lindas em família." }
            ],
            kidsActivities: [
                { name: "Colher frutas no sítio", desc: "Júlia pode colher caquis direto do pé. Experiência educativa sobre de onde vem a comida." },
                { name: "Trilha no Jardim Botânico", desc: "Trilhas curtas e fáceis com identificação de plantas. Divertido e educativo." }
            ],
            citySummary: "Piedade é uma cidade rural tranquila localizada a cerca de 50km de Sorocaba (~45min de carro). Conhecida pela produção agrícola, especialmente caqui, uva e hortaliças, a cidade oferece turismo rural com experiências de colheita. O Jardim Botânico Municipal é um espaço verde bem cuidado com trilhas leves, ideal para famílias. A região também possui mirantes com vistas panorâmicas da Serra de Paranapiacaba e cachoeiras para contemplação.",
            touristSpots: [
                { name: "Jardim Botânico Municipal", desc: "Jardim com trilhas, plantas nativas e área de descanso. Entrada gratuita. Funciona diariamente.", mapsUrl: "https://maps.google.com/?q=Jardim+Botanico+Piedade+SP" },
                { name: "Sítios de colheita", desc: "Diversos sítios na região abrem para colheita de frutas da estação. Consultar disponibilidade.", mapsUrl: "https://maps.google.com/?q=Turismo+Rural+Piedade+SP" },
                { name: "Mirante de Piedade", desc: "Vista panorâmica do vale. Acesso por estrada de terra em bom estado.", mapsUrl: "https://maps.google.com/?q=Mirante+Piedade+SP" },
                { name: "Centro Histórico", desc: "Igreja Matriz e praça central. Passeio rápido e tranquilo.", mapsUrl: "https://maps.google.com/?q=Igreja+Matriz+Piedade+SP" }
            ]
        }
    },
    {
        id: "mai-1", month: "Maio", title: "Salto", subtitle: "Cachoeira & Parque Rocha Moutonnée",
        description: "Complexo da Cachoeira e parque temático de dinossauros.",
        type: "natureza", status: "planned", people: 6, distance: 80, estimatedCost: 100,
        mapsUrl: "https://maps.google.com/?q=Complexo+da+Cachoeira+Salto+SP",
        imageUrl: "https://images.unsplash.com/photo-1546587348-d12660c30c50?w=900&h=500&fit=crop&auto=format",
        gradient: "linear-gradient(135deg, #0c4a6e, #0284c7)",
        details: {
            departureTime: "Sair de Sorocaba às 8h. Chegada prevista às 9h15.",
            itinerary: [
                { time: "08:00", activity: "Saída de Sorocaba", desc: "Pegar SP-280 (Castelo Branco) até Itu, depois SP-79 até Salto. Aproximadamente 1h15 de viagem." },
                { time: "09:15", activity: "Complexo da Cachoeira", desc: "Chegada ao Complexo Turístico da Cachoeira. Estacionamento gratuito. Caminhada pela passarela com vista para a queda d'água no Rio Tietê." },
                { time: "10:30", activity: "Parque Rocha Moutonnée", desc: "Parque geológico com réplicas de dinossauros em tamanho real. Trilhas entre rochas com mais de 300 milhões de anos. Entrada gratuita." },
                { time: "12:00", activity: "Almoço em Salto", desc: "Restaurantes no centro da cidade. Comida caseira com bom custo-benefício." },
                { time: "13:30", activity: "Parque da Lavras", desc: "Ruínas históricas da antiga fábrica têxtil às margens do Tietê. Área verde para caminhada." },
                { time: "15:00", activity: "Centro de Salto", desc: "Caminhada pelo centro histórico, Igreja Matriz e praça principal." },
                { time: "16:00", activity: "Retorno a Sorocaba", desc: "Chegada prevista por volta das 17h15." }
            ],
            restaurants: [
                { name: "Restaurante Quintal da Vila", desc: "Comida caseira em ambiente acolhedor. Porções generosas e preço justo. Preço médio: R$45/pessoa.", mapsUrl: "https://maps.google.com/?q=Quintal+da+Vila+Salto+SP" },
                { name: "Cantina Don Rafhael", desc: "Massas artesanais e pizzas em forno a lenha. Ambiente familiar. Bom para almoço em grupo.", mapsUrl: "https://maps.google.com/?q=Cantina+Don+Rafhael+Salto" },
                { name: "Padaria Brasileira", desc: "Lanches rápidos, salgados e café. Boa opção para lanche da tarde antes de voltar.", mapsUrl: "https://maps.google.com/?q=Padaria+Brasileira+Salto+SP" }
            ],
            familyActivities: [
                { name: "Complexo da Cachoeira", desc: "Passarela sobre o Rio Tietê com vista para a cachoeira. Passeio acessível para todos, incluindo os avós." },
                { name: "Parque Rocha Moutonnée", desc: "Parque geológico único no Brasil. Rochas glaciais de 300 milhões de anos com réplicas de dinossauros. Entrada gratuita." },
                { name: "Parque da Lavras", desc: "Ruínas da antiga fábrica de tecidos. Área verde às margens do rio, boa para caminhada tranquila." },
                { name: "Centro Histórico", desc: "Arquitetura preservada, igreja matriz e praça arborizada. Passeio leve de 30min." }
            ],
            kidsActivities: [
                { name: "Dinossauros no Parque Rocha Moutonnée", desc: "Réplicas de dinossauros em tamanho real espalhadas pelo parque. Júlia vai adorar explorar e tirar fotos." },
                { name: "Passarela da Cachoeira", desc: "Caminhada pela passarela sobre o rio. Vista impressionante da queda d'água." },
                { name: "Playground do Complexo", desc: "Área de recreação infantil próxima ao Complexo da Cachoeira." }
            ],
            citySummary: "Salto é uma cidade histórica localizada a cerca de 80km de Sorocaba (~1h15 de carro). O principal atrativo é o Complexo Turístico da Cachoeira, com passarela sobre o Rio Tietê e vista para a impressionante queda d'água. O Parque Rocha Moutonnée é único no Brasil: um sítio geológico com rochas glaciais de mais de 300 milhões de anos e réplicas de dinossauros em tamanho real. A cidade também preserva ruínas industriais no Parque da Lavras e um centro histórico charmoso.",
            touristSpots: [
                { name: "Complexo da Cachoeira", desc: "Passarela sobre o Rio Tietê com vista para a cachoeira. Aberto diariamente. Gratuito.", mapsUrl: "https://maps.google.com/?q=Complexo+da+Cachoeira+Salto+SP" },
                { name: "Parque Rocha Moutonnée", desc: "Sítio geológico com dinossauros. Único no Brasil. Gratuito. Sáb/dom 8h-17h.", mapsUrl: "https://maps.google.com/?q=Parque+Rocha+Moutonnee+Salto" },
                { name: "Parque da Lavras", desc: "Ruínas históricas da fábrica têxtil. Área verde às margens do Tietê.", mapsUrl: "https://maps.google.com/?q=Parque+da+Lavras+Salto" },
                { name: "Igreja Matriz", desc: "Igreja Nossa Senhora da Ponte. Centro histórico de Salto.", mapsUrl: "https://maps.google.com/?q=Igreja+Matriz+Salto+SP" }
            ]
        }
    },
    {
        id: "mai-2", month: "Maio", title: "Cotia", subtitle: "Animália Park",
        description: "Zoológico interativo. Excelente para crianças.",
        type: "aventura", status: "planned", people: 6, distance: 90, estimatedCost: 300,
        mapsUrl: "https://maps.google.com/?q=Animalia+Park+Cotia",
        imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=900&h=500&fit=crop&auto=format",
        gradient: "linear-gradient(135deg, #9a3412, #ea580c)",
        details: {
            departureTime: "Sair de Sorocaba às 7h30. Chegada prevista às 9h.",
            itinerary: [
                { time: "07:30", activity: "Saída de Sorocaba", desc: "Pegar SP-270 (Raposo Tavares) sentido São Paulo. Aproximadamente 1h30 até Cotia." },
                { time: "09:00", activity: "Chegada ao Animália Park", desc: "Estacionamento no local (R$40). Abre às 9h. Comprar ingressos online com antecedência para evitar fila." },
                { time: "09:30", activity: "Safari de caminhão", desc: "Passeio de caminhão aberto pelo safari com animais soltos: girafas, zebras, avestruzes e outros. Duração ~40min." },
                { time: "10:30", activity: "Aquário e répteis", desc: "Área coberta com aquários e viveiros de répteis. Boa para dias quentes ou chuvosos." },
                { time: "11:30", activity: "Fazendinha", desc: "Área interativa onde Júlia pode alimentar e tocar animais domésticos: cabras, coelhos e galinhas." },
                { time: "12:30", activity: "Almoço no parque", desc: "Praça de alimentação com opções variadas. Preço médio: R$50/pessoa." },
                { time: "13:30", activity: "Trilha dos animais", desc: "Caminhada pelas áreas temáticas: aves, primatas e felinos. Placas educativas em todo o percurso." },
                { time: "15:30", activity: "Playground e fotos", desc: "Área de playground e últimas fotos com os animais." },
                { time: "16:30", activity: "Retorno a Sorocaba", desc: "Chegada prevista por volta das 18h." }
            ],
            restaurants: [
                { name: "Praça de Alimentação do Animália", desc: "Dentro do parque. Hambúrgueres, pizzas, lanches e opções infantis. Preço médio: R$50/pessoa.", mapsUrl: "https://maps.google.com/?q=Animalia+Park+Cotia" },
                { name: "Restaurante Rancho da Costela", desc: "Costela no bafo e churrasco na estrada de acesso ao parque. Parada boa no retorno. Preço médio: R$60/pessoa.", mapsUrl: "https://maps.google.com/?q=Rancho+da+Costela+Cotia" },
                { name: "Padaria Real Cotia", desc: "Opção rápida na saída. Salgados, lanches e café para a viagem de volta.", mapsUrl: "https://maps.google.com/?q=Padaria+Real+Cotia" }
            ],
            familyActivities: [
                { name: "Safari de caminhão", desc: "Passeio em caminhão aberto com animais soltos ao redor. Seguro e emocionante para todas as idades." },
                { name: "Trilha dos animais", desc: "Percurso a pé passando por aves, primatas e felinos. Placas educativas e guias no caminho." },
                { name: "Aquário", desc: "Área coberta com peixes tropicais e de água salgada. Bom para descansar do sol." },
                { name: "Área de descanso", desc: "Bancos e sombras espalhados pelo parque. Os avós podem descansar enquanto Júlia explora." }
            ],
            kidsActivities: [
                { name: "Fazendinha interativa", desc: "Júlia pode alimentar cabras, coelhos e galinhas. Experiência de contato direto com os animais." },
                { name: "Safari", desc: "Ver girafas, zebras e avestruzes de perto no caminhão aberto. Muito emocionante para crianças." },
                { name: "Playground temático", desc: "Área de brinquedos com tema de animais. Seguro e bem estruturado." }
            ],
            citySummary: "O Animália Park é um zoológico interativo localizado em Cotia, a cerca de 90km de Sorocaba (~1h30 pela SP-270). É um dos zoológicos mais modernos do estado de São Paulo, com conceito de imersão — os animais vivem em áreas abertas e o visitante percorre o espaço de caminhão ou a pé. Destaque para o safari com girafas e zebras, a fazendinha interativa e o aquário. É um passeio de dia inteiro, especialmente indicado para famílias com crianças.",
            touristSpots: [
                { name: "Animália Park", desc: "Zoológico interativo com safari, aquário e fazendinha. Funciona qua a dom, 9h-17h.", mapsUrl: "https://maps.google.com/?q=Animalia+Park+Cotia" },
                { name: "Safari de caminhão", desc: "Passeio incluso no ingresso. Girafas, zebras e avestruzes soltos.", mapsUrl: "https://maps.google.com/?q=Animalia+Park+Safari+Cotia" },
                { name: "Fazendinha", desc: "Área interativa com animais domésticos. Incluso no ingresso.", mapsUrl: "https://maps.google.com/?q=Animalia+Park+Fazendinha+Cotia" },
                { name: "Aquário", desc: "Área coberta com tanques de peixes tropicais e marinhos.", mapsUrl: "https://maps.google.com/?q=Animalia+Park+Aquario+Cotia" }
            ]
        }
    },
    {
        id: "jun-1", month: "Junho", title: "Embu das Artes", subtitle: "Feira de Artesanato",
        description: "Maior feira de artesanato do estado. Cultura e gastronomia.",
        type: "cultura", status: "planned", people: 6, distance: 100, estimatedCost: 120,
        mapsUrl: "https://maps.google.com/?q=Feira+de+Artesanato+Embu+das+Artes",
        imageUrl: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=900&h=500&fit=crop&auto=format",
        gradient: "linear-gradient(135deg, #4c1d95, #7c3aed)",
        details: {
            departureTime: "Sair de Sorocaba às 8h. Chegada prevista às 9h30.",
            itinerary: [
                { time: "08:00", activity: "Saída de Sorocaba", desc: "Pegar SP-270 (Raposo Tavares) sentido São Paulo. Aproximadamente 1h30 de viagem." },
                { time: "09:30", activity: "Chegada em Embu das Artes", desc: "Estacionar próximo ao centro histórico. Aos domingos a feira ocupa as ruas principais." },
                { time: "09:45", activity: "Feira de Artesanato", desc: "Maior feira de artesanato do estado. Centenas de barracas com cerâmica, madeira, tecidos, bijuterias e quadros. Funciona sáb/dom." },
                { time: "11:30", activity: "Galerias de Arte", desc: "Visita às galerias e ateliês no centro histórico. Pintura, escultura e arte popular brasileira." },
                { time: "12:30", activity: "Almoço", desc: "Restaurantes no centro com culinária variada. Opções desde comida caseira até gastronomia contemporânea." },
                { time: "14:00", activity: "Centro Histórico e igrejas", desc: "Caminhada pelo centro colonial. Igreja Nossa Senhora do Rosário (1690) e casarões históricos." },
                { time: "15:00", activity: "Compras e doces", desc: "Últimas compras na feira. Doces artesanais, geleias e produtos coloniais para levar." },
                { time: "16:00", activity: "Retorno a Sorocaba", desc: "Chegada prevista por volta das 17h30." }
            ],
            restaurants: [
                { name: "Restaurante O Garimpo", desc: "Cozinha brasileira contemporânea em casarão histórico. Ambiente charmoso com jardim interno. Preço médio: R$70/pessoa.", mapsUrl: "https://maps.google.com/?q=Restaurante+O+Garimpo+Embu+das+Artes" },
                { name: "Sushi Embu", desc: "Culinária japonesa no centro. Combinados e pratos quentes. Boa opção para variar. Preço médio: R$55/pessoa.", mapsUrl: "https://maps.google.com/?q=Sushi+Embu+das+Artes" },
                { name: "Creperia da Vila", desc: "Crepes doces e salgados em ambiente acolhedor. Bom para lanche no meio do passeio.", mapsUrl: "https://maps.google.com/?q=Creperia+da+Vila+Embu+das+Artes" },
                { name: "Barracas da feira", desc: "Espetinhos, pastéis, tapiocas e lanches rápidos nas barracas da própria feira. Preço acessível.", mapsUrl: "https://maps.google.com/?q=Feira+de+Artesanato+Embu+das+Artes" }
            ],
            familyActivities: [
                { name: "Feira de Artesanato", desc: "Centenas de artesãos expondo trabalhos originais. Ótimo para comprar lembranças e presentes." },
                { name: "Galerias de Arte", desc: "Ateliês e galerias com pinturas, esculturas e arte popular. Entrada gratuita na maioria." },
                { name: "Centro Histórico Colonial", desc: "Caminhada pelas ruas de paralelepípedo com casarões do século XVII. Fotos em família." },
                { name: "Igreja Nossa Senhora do Rosário", desc: "Igreja de 1690, uma das mais antigas da região metropolitana de São Paulo." }
            ],
            kidsActivities: [
                { name: "Artesanato interativo", desc: "Algumas barracas oferecem oficinas de artesanato para crianças. Pintura em cerâmica e modelagem." },
                { name: "Barracas de doces", desc: "Doces artesanais, brigadeiros gourmet e algodão-doce na feira. Júlia vai querer provar tudo." },
                { name: "Praça da feira", desc: "Espaço aberto com músicos de rua e apresentações ao vivo. Ambiente lúdico e colorido." }
            ],
            citySummary: "Embu das Artes é uma estância turística localizada a cerca de 100km de Sorocaba (~1h30 de carro). Conhecida mundialmente pela Feira de Artesanato que acontece aos finais de semana, a cidade reúne centenas de artesãos, galerias de arte e ateliês em um charmoso centro histórico colonial do século XVII. Além do artesanato, destaca-se pela gastronomia variada, igrejas históricas e um clima boêmio e cultural único no interior paulista.",
            touristSpots: [
                { name: "Feira de Artesanato", desc: "Maior feira de artesanato do estado. Sáb/dom das 9h às 17h. Entrada gratuita.", mapsUrl: "https://maps.google.com/?q=Feira+de+Artesanato+Embu+das+Artes" },
                { name: "Igreja Nossa Senhora do Rosário", desc: "Igreja de 1690 no centro histórico. Uma das mais antigas de SP.", mapsUrl: "https://maps.google.com/?q=Igreja+Nossa+Senhora+do+Rosario+Embu+das+Artes" },
                { name: "Museu de Arte Sacra", desc: "Acervo de arte sacra colonial. Junto à Igreja do Rosário. Entrada gratuita.", mapsUrl: "https://maps.google.com/?q=Museu+de+Arte+Sacra+Embu+das+Artes" },
                { name: "Centro Histórico", desc: "Ruas de paralelepípedo, casarões coloniais e ateliês de artistas.", mapsUrl: "https://maps.google.com/?q=Centro+Historico+Embu+das+Artes" }
            ]
        }
    },
    {
        id: "jun-2", month: "Junho", title: "Tatuí", subtitle: "Rota dos Doces Caseiros",
        description: "Degustação de doces artesanais e compras.",
        type: "gastronomia", status: "planned", people: 6, distance: 50, estimatedCost: 100,
        mapsUrl: "https://maps.google.com/?q=Tatui+SP",
        imageUrl: "https://images.unsplash.com/photo-1534445867742-43195f401b6c?w=900&h=500&fit=crop&auto=format",
        gradient: "linear-gradient(135deg, #881337, #e11d48)",
        details: {
            departureTime: "Sair de Sorocaba às 9h. Chegada prevista às 9h45.",
            itinerary: [
                { time: "09:00", activity: "Saída de Sorocaba", desc: "Pegar SP-127 sentido Tatuí. Estrada tranquila, aproximadamente 45min de viagem." },
                { time: "09:45", activity: "Chegada em Tatuí", desc: "Estacionar no centro. Cidade pequena e fácil de circular a pé." },
                { time: "10:00", activity: "Rota dos Doces Caseiros", desc: "Visita às fábricas e ateliês de doces artesanais. Degustação de cocadas, doces de leite, compotas e geleias." },
                { time: "11:30", activity: "Conservatório de Tatuí", desc: "Visita ao maior conservatório musical da América Latina. Apresentações gratuitas aos finais de semana." },
                { time: "12:30", activity: "Almoço em Tatuí", desc: "Restaurantes no centro com comida caseira do interior. Preço acessível." },
                { time: "14:00", activity: "Centro Histórico", desc: "Caminhada pelo centro com casarões coloniais, Igreja Matriz e Praça da Matriz." },
                { time: "15:00", activity: "Compras de doces", desc: "Última parada para comprar doces, geleias e produtos artesanais para levar para casa." },
                { time: "15:30", activity: "Retorno a Sorocaba", desc: "Chegada prevista por volta das 16h15." }
            ],
            restaurants: [
                { name: "Restaurante Sabor Caipira", desc: "Comida caseira do interior: frango caipira, mandioca frita, feijão tropeiro. Preço médio: R$40/pessoa.", mapsUrl: "https://maps.google.com/?q=Restaurante+Sabor+Caipira+Tatui" },
                { name: "Pizzaria Tutti Buoni", desc: "Pizzas em forno a lenha e massas caseiras. Ambiente familiar. Boa opção para almoço em grupo.", mapsUrl: "https://maps.google.com/?q=Pizzaria+Tutti+Buoni+Tatui" },
                { name: "Doceria da Praça", desc: "Café colonial com doces artesanais, bolos e tortas caseiras. Perfeito para o lanche da tarde.", mapsUrl: "https://maps.google.com/?q=Doceria+Tatui+SP" }
            ],
            familyActivities: [
                { name: "Rota dos Doces", desc: "Circuito de fábricas e ateliês de doces caseiros. Degustação gratuita em vários pontos. Ótimo para compras." },
                { name: "Conservatório de Tatuí", desc: "Maior conservatório musical da América Latina. Apresentações gratuitas aos sáb/dom. Cultura para toda a família." },
                { name: "Centro Histórico", desc: "Casarões coloniais e praça arborizada. Passeio tranquilo acessível para os avós." },
                { name: "Compras de artesanato", desc: "Além dos doces, lojas com artesanato local, bordados e produtos coloniais." }
            ],
            kidsActivities: [
                { name: "Degustação de doces", desc: "Júlia vai adorar provar cocadas, brigadeiros e doces de leite nas fábricas artesanais." },
                { name: "Apresentação musical", desc: "Apresentações de alunos do conservatório. Instrumentos variados — educativo e divertido." },
                { name: "Praça da Matriz", desc: "Praça central com espaço para correr e brincar. Sorveterias ao redor." }
            ],
            citySummary: "Tatuí é conhecida como a Capital da Música, abrigando o maior conservatório musical da América Latina — o Conservatório Dramático e Musical Dr. Carlos de Campos. Localizada a apenas 50km de Sorocaba (~45min pela SP-127), a cidade é famosa pela Rota dos Doces Caseiros, com dezenas de fábricas artesanais de cocadas, doces de leite, compotas e geleias. O centro histórico preserva casarões coloniais e uma praça arborizada agradável para passeios em família.",
            touristSpots: [
                { name: "Rota dos Doces Caseiros", desc: "Circuito com dezenas de fábricas de doces artesanais. Degustação e compras.", mapsUrl: "https://maps.google.com/?q=Rota+dos+Doces+Tatui" },
                { name: "Conservatório de Tatuí", desc: "Maior conservatório da América Latina. Apresentações gratuitas aos finais de semana.", mapsUrl: "https://maps.google.com/?q=Conservatorio+de+Tatui" },
                { name: "Igreja Matriz", desc: "Igreja do século XIX na praça central de Tatuí.", mapsUrl: "https://maps.google.com/?q=Igreja+Matriz+Tatui" },
                { name: "Praça da Matriz", desc: "Praça central arborizada com coreto e bancos. Coração da cidade.", mapsUrl: "https://maps.google.com/?q=Praca+da+Matriz+Tatui" }
            ]
        }
    },
    {
        id: "jul-1", month: "Julho", title: "Cabreúva", subtitle: "Fazenda do Chocolate",
        description: "Fábrica de chocolate artesanal. Ótimo para férias da Júlia.",
        type: "gastronomia", status: "planned", people: 6, distance: 70, estimatedCost: 150,
        mapsUrl: "https://maps.google.com/?q=Fazenda+do+Chocolate+Cabreuva",
        imageUrl: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=900&h=500&fit=crop&auto=format",
        gradient: "linear-gradient(135deg, #451a03, #78350f)",
        details: {
            departureTime: "Sair de Sorocaba às 8h30. Chegada prevista às 9h30.",
            itinerary: [
                { time: "08:30", activity: "Saída de Sorocaba", desc: "Pegar SP-280 (Castelo Branco) até Itu, depois seguir para Cabreúva. Aproximadamente 1h de viagem." },
                { time: "09:30", activity: "Fazenda do Chocolate", desc: "Chegada ao complexo. Tour guiado pela fábrica mostrando todo o processo de produção do chocolate artesanal." },
                { time: "10:30", activity: "Degustação e oficina", desc: "Degustação de chocolates variados. Oficina de chocolate para crianças (verificar disponibilidade)." },
                { time: "11:30", activity: "Loja da fábrica", desc: "Compras de chocolates, trufas, bombons e cacau em pó com preços de fábrica." },
                { time: "12:30", activity: "Almoço", desc: "Restaurante dentro do complexo ou opções na cidade de Cabreúva." },
                { time: "14:00", activity: "Cachoeira do Jacaré", desc: "Cachoeira de fácil acesso na região. Trilha curta e banho refrescante (julho pode estar frio — avaliar)." },
                { time: "15:30", activity: "Centro de Cabreúva", desc: "Caminhada pelo centro histórico. Igreja Matriz e praça principal." },
                { time: "16:30", activity: "Retorno a Sorocaba", desc: "Chegada prevista por volta das 17h30." }
            ],
            restaurants: [
                { name: "Restaurante da Fazenda do Chocolate", desc: "Dentro do complexo. Pratos com ingredientes locais e sobremesas com chocolate artesanal. Preço médio: R$55/pessoa.", mapsUrl: "https://maps.google.com/?q=Fazenda+do+Chocolate+Cabreuva" },
                { name: "Restaurante Recanto das Pedras", desc: "Comida caseira do interior com fogão a lenha. Frango caipira e mandioca. Ambiente rústico.", mapsUrl: "https://maps.google.com/?q=Recanto+das+Pedras+Cabreuva" },
                { name: "Padaria Cabreúva", desc: "Pães artesanais, bolos e café coado. Bom para lanche rápido.", mapsUrl: "https://maps.google.com/?q=Padaria+Cabreuva+SP" }
            ],
            familyActivities: [
                { name: "Tour pela fábrica de chocolate", desc: "Visita guiada pelo processo de produção. Educativo para todas as idades. Inclui degustação." },
                { name: "Loja da fábrica", desc: "Chocolates, trufas e bombons artesanais com preços de fábrica. Ótimo para presentes." },
                { name: "Cachoeira do Jacaré", desc: "Cachoeira de fácil acesso com trilha curta. Boa para contemplação (banho depende do clima em julho)." },
                { name: "Centro Histórico", desc: "Igreja Matriz e casarões antigos. Passeio leve e acessível para os avós." }
            ],
            kidsActivities: [
                { name: "Oficina de chocolate", desc: "Júlia pode fazer seu próprio chocolate na oficina interativa. Diversão garantida nas férias." },
                { name: "Degustação", desc: "Provar vários tipos de chocolate: ao leite, amargo, branco, com frutas. Paraíso para crianças." },
                { name: "Trilha da cachoeira", desc: "Trilha curta e fácil até a Cachoeira do Jacaré. Aventura ao ar livre." }
            ],
            citySummary: "Cabreúva é uma cidade tranquila localizada a cerca de 70km de Sorocaba (~1h de carro). O destaque é a Fazenda do Chocolate, um complexo com fábrica de chocolate artesanal, tour guiado, degustação e loja. Ideal para as férias de julho da Júlia, combina diversão (oficina de chocolate) com natureza (cachoeiras na região). A cidade também possui um centro histórico charmoso e é cercada por mata atlântica preservada.",
            touristSpots: [
                { name: "Fazenda do Chocolate", desc: "Fábrica artesanal com tour, degustação e loja. Funciona sáb/dom/feriados e diariamente nas férias.", mapsUrl: "https://maps.google.com/?q=Fazenda+do+Chocolate+Cabreuva" },
                { name: "Cachoeira do Jacaré", desc: "Cachoeira de fácil acesso. Trilha curta de 15min.", mapsUrl: "https://maps.google.com/?q=Cachoeira+do+Jacare+Cabreuva" },
                { name: "Igreja Matriz", desc: "Igreja histórica no centro de Cabreúva.", mapsUrl: "https://maps.google.com/?q=Igreja+Matriz+Cabreuva" },
                { name: "Mirante de Cabreúva", desc: "Vista panorâmica da região com serra e mata atlântica.", mapsUrl: "https://maps.google.com/?q=Mirante+Cabreuva+SP" }
            ]
        }
    },
    {
        id: "jul-2", month: "Julho", title: "Serra Negra", subtitle: "Fontana di Trevi & Centro",
        description: "Réplica da Fontana di Trevi, lojas e restaurantes.",
        type: "cultura", status: "planned", people: 6, distance: 170, estimatedCost: 200,
        mapsUrl: "https://maps.google.com/?q=Serra+Negra+SP",
        imageUrl: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=900&h=500&fit=crop&auto=format",
        gradient: "linear-gradient(135deg, #312e81, #4338ca)",
        details: {
            departureTime: "Sair de Sorocaba às 7h. Chegada prevista às 9h30.",
            itinerary: [
                { time: "07:00", activity: "Saída de Sorocaba", desc: "Viagem mais longa: SP-280 até Campinas, depois SP-360 até Serra Negra. Aproximadamente 2h30." },
                { time: "09:30", activity: "Fontana di Trevi", desc: "Réplica da famosa fonte italiana no centro da cidade. Jogar moedinha e fazer pedido. Fotos em família." },
                { time: "10:15", activity: "Rua do Comércio", desc: "Lojas de malhas, chocolates, queijos e artesanato. Serra Negra é famosa pelas malharias com preços de fábrica." },
                { time: "11:30", activity: "Teleférico", desc: "Passeio de teleférico com vista panorâmica da serra e da cidade. Aproximadamente 15min de percurso." },
                { time: "12:30", activity: "Almoço", desc: "Restaurantes variados no centro. Culinária italiana e mineira são destaques." },
                { time: "14:00", activity: "Telefone de Lata", desc: "Instalação artística gigante — dois telefones de lata conectados entre morros. Experiência única e divertida." },
                { time: "15:00", activity: "Parque da Fonte", desc: "Fonte de água mineral natural no centro. Área verde para descanso." },
                { time: "16:00", activity: "Retorno a Sorocaba", desc: "Chegada prevista por volta das 18h30." }
            ],
            restaurants: [
                { name: "Cantina Don Carlini", desc: "Culinária italiana com massas caseiras e molhos artesanais. Ambiente acolhedor. Preço médio: R$65/pessoa.", mapsUrl: "https://maps.google.com/?q=Cantina+Don+Carlini+Serra+Negra" },
                { name: "Restaurante Sabor da Serra", desc: "Comida mineira com fogão a lenha. Buffet variado. Bom custo-benefício. Preço médio: R$45/pessoa.", mapsUrl: "https://maps.google.com/?q=Sabor+da+Serra+Serra+Negra" },
                { name: "Chocolateria Serra Negra", desc: "Café e chocolateria artesanal. Fondue de chocolate, tortas e bebidas quentes. Perfeito para o frio de julho.", mapsUrl: "https://maps.google.com/?q=Chocolateria+Serra+Negra" }
            ],
            familyActivities: [
                { name: "Fontana di Trevi", desc: "Réplica da fonte romana. Tradição de jogar moedinha e fazer pedido. Cenário bonito para fotos." },
                { name: "Teleférico", desc: "Vista panorâmica da cidade e da serra. Acessível para os avós. Duração ~15min." },
                { name: "Compras de malhas", desc: "Lojas de malharia com preços de fábrica. Blusas, casacos e mantas — ótimo para o inverno." },
                { name: "Parque da Fonte", desc: "Fonte de água mineral natural. Área verde tranquila no centro da cidade." }
            ],
            kidsActivities: [
                { name: "Telefone de Lata", desc: "Instalação gigante entre dois morros. Júlia pode falar no telefone de lata e ouvir do outro lado. Muito divertido." },
                { name: "Teleférico", desc: "Passeio de teleférico com vista da cidade. Emocionante para crianças." },
                { name: "Fondue de chocolate", desc: "Na Chocolateria Serra Negra, fondue com frutas e marshmallow. Programa perfeito para Júlia no frio." }
            ],
            citySummary: "Serra Negra é uma estância hidromineral localizada a cerca de 170km de Sorocaba (~2h30 de carro), no Circuito das Águas Paulista. A cidade é famosa pela réplica da Fontana di Trevi, pelo teleférico com vista panorâmica e pelo Telefone de Lata (instalação artística gigante). Destaca-se também pelas malharias com preços de fábrica e pela gastronomia italiana. No inverno de julho, o clima frio torna a visita ainda mais aconchegante, com chocolaterias e fondues.",
            touristSpots: [
                { name: "Fontana di Trevi", desc: "Réplica da fonte italiana. Centro da cidade. Acesso livre.", mapsUrl: "https://maps.google.com/?q=Fontana+di+Trevi+Serra+Negra" },
                { name: "Teleférico", desc: "Vista panorâmica da serra. Funciona sáb/dom/feriados e diariamente nas férias.", mapsUrl: "https://maps.google.com/?q=Teleferico+Serra+Negra" },
                { name: "Telefone de Lata", desc: "Instalação artística entre dois morros. Experiência única. Gratuito.", mapsUrl: "https://maps.google.com/?q=Telefone+de+Lata+Serra+Negra" },
                { name: "Parque da Fonte", desc: "Fonte de água mineral natural e área verde no centro.", mapsUrl: "https://maps.google.com/?q=Parque+da+Fonte+Serra+Negra" }
            ]
        }
    },
    {
        id: "ago-1", month: "Agosto", title: "Holambra", subtitle: "Cidade das Flores",
        description: "Arquitetura holandesa, campos de flores e gastronomia típica.",
        type: "cultura", status: "planned", people: 6, distance: 120, estimatedCost: 180,
        mapsUrl: "https://maps.google.com/?q=Holambra+SP",
        imageUrl: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=900&h=500&fit=crop&auto=format",
        gradient: "linear-gradient(135deg, #c2410c, #f59e0b)",
        details: {
            departureTime: "Sair de Sorocaba às 7h30. Chegada prevista às 9h15.",
            itinerary: [
                { time: "07:30", activity: "Saída de Sorocaba", desc: "Pegar SP-280 até Campinas, depois SP-340 até Holambra. Aproximadamente 1h45 de viagem." },
                { time: "09:15", activity: "Chegada em Holambra", desc: "Cidade com arquitetura holandesa. Moinhos de vento e jardins floridos em todo lugar." },
                { time: "09:30", activity: "Campos de flores", desc: "Visita aos campos de flores e estufas. Girassóis, tulipas, rosas e orquídeas. Cenário perfeito para fotos." },
                { time: "11:00", activity: "Moinho Povos Unidos", desc: "Moinho de vento holandês autêntico. Museu sobre a imigração holandesa no Brasil." },
                { time: "12:00", activity: "Almoço", desc: "Restaurantes com culinária holandesa e brasileira. Queijos e cervejas artesanais." },
                { time: "13:30", activity: "Decky Shopping de Flores", desc: "Centro de compras de flores, plantas, vasos e decoração de jardim. Preços direto do produtor." },
                { time: "15:00", activity: "Praça central e sorvetes", desc: "Praça com arquitetura típica. Sorveteria artesanal e lojas de souvenirs." },
                { time: "16:00", activity: "Retorno a Sorocaba", desc: "Chegada prevista por volta das 17h45." }
            ],
            restaurants: [
                { name: "Restaurante De Kookpot", desc: "Culinária holandesa autêntica. Croquetes, panquecas holandesas e sopas. Ambiente temático. Preço médio: R$65/pessoa.", mapsUrl: "https://maps.google.com/?q=De+Kookpot+Holambra" },
                { name: "Cervejaria Holambier", desc: "Cervejas artesanais e petiscos. Ambiente descontraído com jardim externo.", mapsUrl: "https://maps.google.com/?q=Holambier+Holambra" },
                { name: "Lunchroom Holambra", desc: "Café e bistrô com tortas holandesas, waffles e café especial. Bom para lanche.", mapsUrl: "https://maps.google.com/?q=Lunchroom+Holambra" }
            ],
            familyActivities: [
                { name: "Campos de flores", desc: "Estufas e campos abertos com flores de todas as cores. Fotos incríveis em família." },
                { name: "Moinho Povos Unidos", desc: "Moinho de vento holandês com museu da imigração. Educativo e bonito." },
                { name: "Compras de flores e plantas", desc: "Flores, mudas e vasos direto do produtor. Preços muito abaixo do mercado." },
                { name: "Passeio pela cidade", desc: "Arquitetura holandesa, praças floridas e lojas temáticas. Cidade inteira é fotogênica." }
            ],
            kidsActivities: [
                { name: "Campos de girassóis", desc: "Júlia vai adorar caminhar entre os girassóis gigantes. Fotos lindas." },
                { name: "Moinho de vento", desc: "Ver de perto um moinho holandês de verdade. Subir e conhecer por dentro." },
                { name: "Sorvete artesanal", desc: "Sorveteria na praça central com sabores de flores e frutas." }
            ],
            citySummary: "Holambra é a Cidade das Flores, uma colônia holandesa fundada em 1948. Localizada a cerca de 120km de Sorocaba (~1h45 de carro), é o maior polo produtor de flores da América Latina. A cidade encanta com sua arquitetura holandesa, moinhos de vento, campos de flores coloridos e gastronomia típica. É sede da Expoflora (setembro), mas os campos de flores e as atrações funcionam o ano todo. Destino perfeito para fotos em família e compras de plantas.",
            touristSpots: [
                { name: "Campos de flores", desc: "Estufas e campos abertos. Girassóis, rosas e orquídeas. Aberto diariamente.", mapsUrl: "https://maps.google.com/?q=Campos+de+Flores+Holambra" },
                { name: "Moinho Povos Unidos", desc: "Moinho holandês autêntico com museu. Entrada paga.", mapsUrl: "https://maps.google.com/?q=Moinho+Povos+Unidos+Holambra" },
                { name: "Decky Shopping de Flores", desc: "Centro de compras com flores e plantas direto do produtor.", mapsUrl: "https://maps.google.com/?q=Decky+Shopping+Flores+Holambra" },
                { name: "Praça Central", desc: "Arquitetura holandesa, lojas e restaurantes temáticos.", mapsUrl: "https://maps.google.com/?q=Praca+Central+Holambra" }
            ]
        }
    },
    {
        id: "ago-2", month: "Agosto", title: "Porto Feliz", subtitle: "Parque das Monções",
        description: "Parque histórico às margens do Rio Tietê. Passeio tranquilo.",
        type: "historia", status: "planned", people: 6, distance: 30, estimatedCost: 30,
        mapsUrl: "https://maps.google.com/?q=Parque+das+Moncoes+Porto+Feliz",
        imageUrl: "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=900&h=500&fit=crop&auto=format",
        gradient: "linear-gradient(135deg, #78350f, #92400e)",
        details: {
            departureTime: "Sair de Sorocaba às 9h. Chegada prevista às 9h30.",
            itinerary: [
                { time: "09:00", activity: "Saída de Sorocaba", desc: "Porto Feliz fica a apenas 30km. Estrada rápida, aproximadamente 30min de viagem." },
                { time: "09:30", activity: "Parque das Monções", desc: "Parque histórico às margens do Rio Tietê. Marco das expedições monçoeiras do século XVIII." },
                { time: "10:30", activity: "Museu das Monções", desc: "Museu com acervo sobre as expedições fluviais e a história da região. Entrada gratuita." },
                { time: "11:30", activity: "Caminhada pelo rio", desc: "Passeio pela margem do Tietê. Área verde com bancos e sombra. Tranquilo para os avós." },
                { time: "12:00", activity: "Almoço em Porto Feliz", desc: "Restaurantes no centro com comida caseira do interior." },
                { time: "13:30", activity: "Centro Histórico", desc: "Igreja Matriz, praça central e casarões coloniais. Cidade com história rica." },
                { time: "14:30", activity: "Retorno a Sorocaba", desc: "Chegada prevista por volta das 15h. Passeio leve de meio dia." }
            ],
            restaurants: [
                { name: "Restaurante Porto Grill", desc: "Churrascaria e grill com carnes nobres. Ambiente familiar. Preço médio: R$55/pessoa.", mapsUrl: "https://maps.google.com/?q=Porto+Grill+Porto+Feliz" },
                { name: "Padaria Estrela", desc: "Padaria tradicional com salgados, bolos caseiros e café. Bom para lanche rápido.", mapsUrl: "https://maps.google.com/?q=Padaria+Estrela+Porto+Feliz" },
                { name: "Restaurante Sabor Caseiro", desc: "Buffet de comida caseira por quilo. Frango caipira, arroz com feijão e saladas. Preço acessível.", mapsUrl: "https://maps.google.com/?q=Sabor+Caseiro+Porto+Feliz" }
            ],
            familyActivities: [
                { name: "Parque das Monções", desc: "Parque histórico com monumentos e área verde às margens do Tietê. Acessível para os avós." },
                { name: "Museu das Monções", desc: "Acervo sobre expedições fluviais. Educativo e interessante para todas as idades." },
                { name: "Caminhada no rio", desc: "Passeio tranquilo pela margem do Tietê com paisagem bonita." },
                { name: "Centro Histórico", desc: "Igreja Matriz do século XVIII e casarões coloniais. Passeio leve." }
            ],
            kidsActivities: [
                { name: "Parque e playground", desc: "Área de recreação no Parque das Monções. Espaço para Júlia correr e brincar." },
                { name: "Museu interativo", desc: "Peças e maquetes sobre as expedições de canoa pelo Tietê. Educativo para Júlia." }
            ],
            citySummary: "Porto Feliz é uma cidade histórica localizada a apenas 30km de Sorocaba (~30min de carro), o que a torna o destino mais próximo do roteiro. Conhecida como o Porto das Monções, foi ponto de partida das expedições fluviais pelo Rio Tietê no período colonial. O Parque das Monções preserva essa história com monumentos, museu e área verde às margens do rio. É um passeio leve e curto, ideal para um meio-dia tranquilo em família.",
            touristSpots: [
                { name: "Parque das Monções", desc: "Parque histórico às margens do Tietê. Monumentos e área verde. Gratuito.", mapsUrl: "https://maps.google.com/?q=Parque+das+Moncoes+Porto+Feliz" },
                { name: "Museu das Monções", desc: "Acervo sobre expedições fluviais coloniais. Gratuito.", mapsUrl: "https://maps.google.com/?q=Museu+das+Moncoes+Porto+Feliz" },
                { name: "Igreja Matriz", desc: "Igreja do século XVIII no centro histórico.", mapsUrl: "https://maps.google.com/?q=Igreja+Matriz+Porto+Feliz" },
                { name: "Rio Tietê", desc: "Margem preservada com passeio e vista para o rio.", mapsUrl: "https://maps.google.com/?q=Rio+Tiete+Porto+Feliz" }
            ]
        }
    },
    {
        id: "set-1", month: "Setembro", title: "Atibaia", subtitle: "Festa de Flores e Morangos",
        description: "Festival de primavera com flores e colheita de morangos.",
        type: "natureza", status: "planned", people: 6, distance: 130, estimatedCost: 220,
        mapsUrl: "https://maps.google.com/?q=Atibaia+SP",
        imageUrl: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=900&h=500&fit=crop&auto=format",
        gradient: "linear-gradient(135deg, #be123c, #f43f5e)",
        details: {
            departureTime: "Sair de Sorocaba às 7h. Chegada prevista às 9h.",
            itinerary: [
                { time: "07:00", activity: "Saída de Sorocaba", desc: "Pegar SP-280 até SP-348 (Bandeirantes), depois SP-065 até Atibaia. Aproximadamente 2h de viagem." },
                { time: "09:00", activity: "Festa de Flores e Morangos", desc: "Evento anual de setembro. Exposição de flores, colheita de morangos e barracas gastronômicas." },
                { time: "10:30", activity: "Colheita de morangos", desc: "Experiência de colher morangos direto do pé nos sítios da região. Paga por quilo colhido." },
                { time: "11:30", activity: "Jardins e exposição de flores", desc: "Exposição com arranjos florais, orquídeas e jardins temáticos. Cenário lindo para fotos." },
                { time: "12:30", activity: "Almoço", desc: "Barracas gastronômicas no evento ou restaurantes na cidade. Opções variadas." },
                { time: "14:00", activity: "Pedra Grande", desc: "Mirante natural com vista panorâmica de 360°. Acesso de carro até o topo. Imperdível." },
                { time: "15:30", activity: "Centro de Atibaia", desc: "Passeio pelo centro com lojas de artesanato, geleias e produtos coloniais." },
                { time: "16:30", activity: "Retorno a Sorocaba", desc: "Chegada prevista por volta das 18h30." }
            ],
            restaurants: [
                { name: "Restaurante Dona Chica", desc: "Comida caipira com fogão a lenha. Frango com polenta, leitão e mandioca. Preço médio: R$50/pessoa.", mapsUrl: "https://maps.google.com/?q=Restaurante+Dona+Chica+Atibaia" },
                { name: "Cervejaria Wolkenburg", desc: "Cervejaria artesanal com cozinha alemã. Salsichas, batatas e cervejas premiadas. Preço médio: R$70/pessoa.", mapsUrl: "https://maps.google.com/?q=Cervejaria+Wolkenburg+Atibaia" },
                { name: "Café da Roça", desc: "Café colonial com bolos, pães, geleias e café coado. Ambiente rural acolhedor.", mapsUrl: "https://maps.google.com/?q=Cafe+da+Roca+Atibaia" }
            ],
            familyActivities: [
                { name: "Festa de Flores e Morangos", desc: "Evento anual de setembro. Exposição de flores, gastronomia e colheita. Ideal para toda a família." },
                { name: "Pedra Grande", desc: "Mirante a 1.450m de altitude com vista de 360°. Acesso de carro. Acessível para os avós." },
                { name: "Colheita de morangos", desc: "Sítios na região permitem colher morangos frescos. Experiência rural divertida." },
                { name: "Compras de produtos coloniais", desc: "Geleias, compotas, queijos e doces artesanais. Ótimo para levar para casa." }
            ],
            kidsActivities: [
                { name: "Colher morangos", desc: "Júlia pode colher morangos direto do pé e comer na hora. Diversão garantida." },
                { name: "Pedra Grande", desc: "Vista impressionante do topo. Júlia vai adorar ver a paisagem de cima." },
                { name: "Barracas de doces", desc: "Fondue de morango, sorvete artesanal e doces na festa. Paraíso para crianças." }
            ],
            citySummary: "Atibaia é uma estância climática localizada a cerca de 130km de Sorocaba (~2h de carro). Conhecida como a Cidade das Flores, é sede da tradicional Festa de Flores e Morangos em setembro. O destaque natural é a Pedra Grande, mirante a 1.450m de altitude com vista panorâmica de 360° — acessível de carro. A região é repleta de sítios que oferecem colheita de morangos e produtos coloniais. Clima agradável na primavera, ideal para passeio ao ar livre em família.",
            touristSpots: [
                { name: "Festa de Flores e Morangos", desc: "Festival anual em setembro. Flores, colheita e gastronomia.", mapsUrl: "https://maps.google.com/?q=Festa+de+Flores+e+Morangos+Atibaia" },
                { name: "Pedra Grande", desc: "Mirante natural a 1.450m. Vista 360°. Acesso de carro. Gratuito.", mapsUrl: "https://maps.google.com/?q=Pedra+Grande+Atibaia" },
                { name: "Sítios de colheita", desc: "Morangos, amoras e outras frutas da estação. Consultar horários.", mapsUrl: "https://maps.google.com/?q=Colheita+de+Morangos+Atibaia" },
                { name: "Museu de História Natural", desc: "Acervo de fósseis e minerais. Entrada gratuita.", mapsUrl: "https://maps.google.com/?q=Museu+Historia+Natural+Atibaia" }
            ]
        }
    },
    {
        id: "set-2", month: "Setembro", title: "Jundiaí", subtitle: "Jardim Botânico",
        description: "Jardim Botânico com trilhas acessíveis e área de piquenique.",
        type: "natureza", status: "planned", people: 6, distance: 100, estimatedCost: 0,
        mapsUrl: "https://maps.google.com/?q=Jardim+Botanico+Jundiai",
        imageUrl: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=900&h=500&fit=crop&auto=format",
        gradient: "linear-gradient(135deg, #064e3b, #047857)",
        details: {
            departureTime: "Sair de Sorocaba às 8h. Chegada prevista às 9h30.",
            itinerary: [
                { time: "08:00", activity: "Saída de Sorocaba", desc: "Pegar SP-280 (Castelo Branco) até Jundiaí. Aproximadamente 1h30 de viagem." },
                { time: "09:30", activity: "Jardim Botânico de Jundiaí", desc: "Entrada gratuita. Trilhas acessíveis, lagos, jardim sensorial e área de piquenique." },
                { time: "10:30", activity: "Trilha do Lago", desc: "Trilha leve ao redor do lago principal. Pontes de madeira, peixes e tartarugas. Acessível para os avós." },
                { time: "11:30", activity: "Jardim Sensorial", desc: "Espaço com plantas aromáticas e texturas diferentes. Educativo para Júlia." },
                { time: "12:30", activity: "Almoço em Jundiaí", desc: "Restaurantes próximos ao jardim e no centro. Opções de comida italiana e brasileira." },
                { time: "14:00", activity: "Serra do Japi", desc: "Mirante com vista para a reserva da Serra do Japi. Patrimônio natural de Mata Atlântica." },
                { time: "15:00", activity: "Rua do Retiro", desc: "Polo gastronômico com cantinas italianas, empórios e sorveterias. Tradição italiana de Jundiaí." },
                { time: "16:30", activity: "Retorno a Sorocaba", desc: "Chegada prevista por volta das 18h." }
            ],
            restaurants: [
                { name: "Cantina Passarella", desc: "Cantina italiana tradicional na Rua do Retiro. Massas caseiras e molhos artesanais. Preço médio: R$60/pessoa.", mapsUrl: "https://maps.google.com/?q=Cantina+Passarella+Jundiai" },
                { name: "Empório Jundiaí", desc: "Queijos, vinhos, embutidos e pratos italianos leves. Bom para lanche ou almoço rápido.", mapsUrl: "https://maps.google.com/?q=Emporio+Jundiai" },
                { name: "Sorveteria Bacio di Latte", desc: "Sorvete artesanal italiano. Diversos sabores. Parada obrigatória com Júlia.", mapsUrl: "https://maps.google.com/?q=Bacio+di+Latte+Jundiai" }
            ],
            familyActivities: [
                { name: "Jardim Botânico", desc: "Trilhas leves, lagos, jardim sensorial e área de piquenique. Gratuito e acessível para os avós." },
                { name: "Serra do Japi", desc: "Mirante com vista para a reserva de Mata Atlântica. Acesso de carro até o mirante." },
                { name: "Rua do Retiro", desc: "Polo gastronômico com cantinas italianas. Tradição dos imigrantes italianos em Jundiaí." },
                { name: "Piquenique no jardim", desc: "Levar toalha e lanches para um piquenique em família na área verde do Botânico." }
            ],
            kidsActivities: [
                { name: "Jardim Sensorial", desc: "Plantas com cheiros e texturas diferentes para Júlia explorar. Educativo e divertido." },
                { name: "Lago com peixes e tartarugas", desc: "Observar os peixes e tartarugas no lago do Botânico. Júlia vai querer ficar horas." },
                { name: "Sorvete na Rua do Retiro", desc: "Sorveterias artesanais com sabores variados. Programa perfeito para crianças." }
            ],
            citySummary: "Jundiaí é conhecida como a Terra da Uva, com forte herança da imigração italiana. Localizada a cerca de 100km de Sorocaba (~1h30 de carro), a cidade possui um dos melhores jardins botânicos do estado — gratuito, com trilhas acessíveis, lagos e jardim sensorial. A Serra do Japi é uma importante reserva de Mata Atlântica com mirantes naturais. A Rua do Retiro concentra cantinas italianas tradicionais, empórios e sorveterias, mantendo viva a cultura dos imigrantes.",
            touristSpots: [
                { name: "Jardim Botânico", desc: "Trilhas, lagos e jardim sensorial. Gratuito. Funciona ter a dom, 7h-17h.", mapsUrl: "https://maps.google.com/?q=Jardim+Botanico+Jundiai" },
                { name: "Serra do Japi", desc: "Reserva de Mata Atlântica com mirantes. Acesso controlado.", mapsUrl: "https://maps.google.com/?q=Serra+do+Japi+Jundiai" },
                { name: "Rua do Retiro", desc: "Polo gastronômico italiano. Cantinas, empórios e sorveterias.", mapsUrl: "https://maps.google.com/?q=Rua+do+Retiro+Jundiai" },
                { name: "Museu da Companhia Paulista", desc: "Museu ferroviário em antiga estação de trem. Gratuito.", mapsUrl: "https://maps.google.com/?q=Museu+Companhia+Paulista+Jundiai" }
            ]
        }
    },
    {
        id: "out-1", month: "Outubro", title: "Guararema", subtitle: "Trem Turístico",
        description: "Passeio de trem turístico pela cidade. Ótimo pra Júlia.",
        type: "aventura", status: "planned", people: 6, distance: 180, estimatedCost: 180,
        mapsUrl: "https://maps.google.com/?q=Trem+Turistico+Guararema",
        imageUrl: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=900&h=500&fit=crop&auto=format",
        gradient: "linear-gradient(135deg, #713f12, #a16207)",
        details: {
            departureTime: "Sair de Sorocaba às 7h. Chegada prevista às 9h30.",
            itinerary: [
                { time: "07:00", activity: "Saída de Sorocaba", desc: "Pegar SP-280 até SP, depois Rodovia Presidente Dutra (BR-116) até Guararema. Aproximadamente 2h30." },
                { time: "09:30", activity: "Chegada em Guararema", desc: "Estacionar próximo à estação. Cidade pequena e charmosa com ruas de paralelepípedo." },
                { time: "10:00", activity: "Trem Turístico", desc: "Passeio de trem pela Maria Fumaça com parada em pontos turísticos. Duração ~1h. Comprar ingressos com antecedência." },
                { time: "11:30", activity: "Estação ferroviária", desc: "Visita à antiga estação de trem restaurada. Lojinhas e café no entorno." },
                { time: "12:30", activity: "Almoço", desc: "Restaurantes no centro com culinária variada. Opções de comida caseira e pizzarias." },
                { time: "14:00", activity: "Rua da Alegria", desc: "Rua temática e colorida com lojas, docerias e ateliês. Ponto mais instagramável da cidade." },
                { time: "15:00", activity: "Represa de Guararema", desc: "Vista bonita da represa. Área verde para caminhar e tirar fotos." },
                { time: "16:00", activity: "Retorno a Sorocaba", desc: "Chegada prevista por volta das 18h30." }
            ],
            restaurants: [
                { name: "Restaurante Estação Guararema", desc: "Próximo à estação do trem. Comida caseira e ambiente temático ferroviário. Preço médio: R$55/pessoa.", mapsUrl: "https://maps.google.com/?q=Restaurante+Estacao+Guararema" },
                { name: "Empório e Restaurante da Vila", desc: "Culinária contemporânea em casarão histórico. Massas artesanais e carnes. Preço médio: R$70/pessoa.", mapsUrl: "https://maps.google.com/?q=Emporio+da+Vila+Guararema" },
                { name: "Doceria da Rua da Alegria", desc: "Doces artesanais, brownies, cookies e café especial. Parada obrigatória com Júlia.", mapsUrl: "https://maps.google.com/?q=Doceria+Rua+da+Alegria+Guararema" }
            ],
            familyActivities: [
                { name: "Trem Turístico", desc: "Passeio de Maria Fumaça pela cidade. Experiência nostálgica e divertida para todas as idades." },
                { name: "Rua da Alegria", desc: "Rua colorida com lojas, docerias e ateliês. Cenário perfeito para fotos em família." },
                { name: "Estação ferroviária", desc: "Antiga estação restaurada com lojinhas e café. Passeio leve e charmoso." },
                { name: "Represa de Guararema", desc: "Vista da represa com área verde. Caminhada tranquila." }
            ],
            kidsActivities: [
                { name: "Passeio de trem", desc: "Júlia vai adorar o passeio de Maria Fumaça. Emoção de andar de trem de verdade." },
                { name: "Rua da Alegria", desc: "Rua colorida e lúdica com docerias. Cenário mágico para crianças." },
                { name: "Doceria artesanal", desc: "Doces, sorvetes e brigadeiros gourmet na Rua da Alegria." }
            ],
            citySummary: "Guararema é uma cidade histórica e charmosa localizada a cerca de 180km de Sorocaba (~2h30 de carro). O principal atrativo é o Trem Turístico (Maria Fumaça), que percorre a cidade em um passeio nostálgico. A Rua da Alegria é o ponto mais colorido e instagramável, com lojas, docerias e ateliês. A antiga estação ferroviária foi restaurada e o centro preserva ruas de paralelepípedo e casarões. Destino perfeito para o mês das crianças.",
            touristSpots: [
                { name: "Trem Turístico", desc: "Maria Fumaça com passeio pela cidade. Funciona sáb/dom. Ingressos antecipados.", mapsUrl: "https://maps.google.com/?q=Trem+Turistico+Guararema" },
                { name: "Rua da Alegria", desc: "Rua temática colorida com lojas e docerias.", mapsUrl: "https://maps.google.com/?q=Rua+da+Alegria+Guararema" },
                { name: "Estação Ferroviária", desc: "Estação histórica restaurada. Ponto de partida do trem.", mapsUrl: "https://maps.google.com/?q=Estacao+Ferroviaria+Guararema" },
                { name: "Represa de Guararema", desc: "Vista panorâmica da represa e área verde.", mapsUrl: "https://maps.google.com/?q=Represa+Guararema" }
            ]
        }
    },
    {
        id: "out-2", month: "Outubro", title: "São Paulo", subtitle: "Aquário de São Paulo",
        description: "Maior aquário da América Latina. Presente de Dia das Crianças.",
        type: "aventura", status: "planned", people: 6, distance: 100, estimatedCost: 150,
        mapsUrl: "https://maps.google.com/?q=Aquario+de+Sao+Paulo",
        imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900&h=500&fit=crop&auto=format",
        gradient: "linear-gradient(135deg, #1e3a5f, #1e40af)",
        details: {
            departureTime: "Sair de Sorocaba às 7h30. Chegada prevista às 9h.",
            itinerary: [
                { time: "07:30", activity: "Saída de Sorocaba", desc: "Pegar SP-270 (Raposo Tavares) até São Paulo. Aproximadamente 1h30 — sair cedo para evitar trânsito." },
                { time: "09:00", activity: "Aquário de São Paulo", desc: "Abertura às 9h. Comprar ingressos online com antecedência. Estacionamento no local." },
                { time: "09:30", activity: "Setor água doce", desc: "Tanques com peixes de rios brasileiros, jacarés e lontras. Início do percurso." },
                { time: "10:30", activity: "Setor oceanos", desc: "Tanque principal com tubarões e raias. Túnel subaquático de vidro — momento mais impressionante." },
                { time: "11:30", activity: "Setor mamíferos e répteis", desc: "Ursos, pinguins, cobras e lagartos. Áreas temáticas com ambientação imersiva." },
                { time: "12:30", activity: "Almoço no aquário", desc: "Praça de alimentação dentro do complexo. Opções variadas." },
                { time: "13:30", activity: "Setor interativo", desc: "Tanque de toque onde Júlia pode tocar estrelas-do-mar e pepinos-do-mar." },
                { time: "14:30", activity: "Loja de souvenirs", desc: "Loja temática com pelúcias, livros e brinquedos de animais marinhos." },
                { time: "15:30", activity: "Retorno a Sorocaba", desc: "Chegada prevista por volta das 17h (considerar trânsito de SP)." }
            ],
            restaurants: [
                { name: "Praça de Alimentação do Aquário", desc: "Dentro do complexo. Hambúrgueres, sushi, massas e opções kids. Preço médio: R$50/pessoa.", mapsUrl: "https://maps.google.com/?q=Aquario+de+Sao+Paulo" },
                { name: "Restaurante Mocotó", desc: "Culinária nordestina premiada, próximo ao aquário (bairro Vila Medeiros). Baião de dois e carne de sol. Preço médio: R$65/pessoa.", mapsUrl: "https://maps.google.com/?q=Restaurante+Mocoto+Sao+Paulo" },
                { name: "McDonald's Ipiranga", desc: "Opção rápida e prática com playground. Bom para Júlia se ficar cansada do aquário.", mapsUrl: "https://maps.google.com/?q=McDonalds+Ipiranga+Sao+Paulo" }
            ],
            familyActivities: [
                { name: "Aquário de São Paulo", desc: "Mais de 3.000 animais em ambientes temáticos. Percurso completo leva ~3h. Acessível para os avós." },
                { name: "Túnel subaquático", desc: "Passagem de vidro sob o tanque de tubarões e raias. Experiência impressionante." },
                { name: "Setor dos pinguins", desc: "Ambiente refrigerado com pinguins-de-Magalhães. Um dos preferidos dos visitantes." },
                { name: "Área de descanso", desc: "Bancos e espaços de descanso espalhados. Os avós podem sentar enquanto Júlia explora." }
            ],
            kidsActivities: [
                { name: "Tanque de toque", desc: "Júlia pode tocar estrelas-do-mar, pepinos-do-mar e ouriços. Experiência sensorial incrível." },
                { name: "Túnel dos tubarões", desc: "Caminhar sob o tanque com tubarões passando por cima. Emocionante para crianças." },
                { name: "Loja de souvenirs", desc: "Pelúcias de animais marinhos, livros e brinquedos temáticos. Presente de Dia das Crianças." }
            ],
            citySummary: "O Aquário de São Paulo é o maior aquário da América Latina, localizado no bairro do Ipiranga em São Paulo, a cerca de 100km de Sorocaba (~1h30 de carro). O complexo abriga mais de 3.000 animais de 300 espécies, incluindo tubarões, pinguins, lontras e ursos. O destaque é o túnel subaquático de vidro sob o tanque de tubarões. Esta visita é planejada como presente de Dia das Crianças para Júlia, com o setor interativo de toque sendo o ponto alto para ela.",
            touristSpots: [
                { name: "Aquário de São Paulo", desc: "Maior aquário da América Latina. Aberto diariamente 9h-18h. Ingressos online.", mapsUrl: "https://maps.google.com/?q=Aquario+de+Sao+Paulo" },
                { name: "Túnel subaquático", desc: "Passagem de vidro sob tanque de tubarões. Incluso no ingresso.", mapsUrl: "https://maps.google.com/?q=Aquario+de+Sao+Paulo" },
                { name: "Setor interativo", desc: "Tanque de toque com animais marinhos. Incluso no ingresso.", mapsUrl: "https://maps.google.com/?q=Aquario+de+Sao+Paulo" },
                { name: "Museu do Ipiranga", desc: "Próximo ao aquário. Museu histórico reaberto após restauração. Visita opcional.", mapsUrl: "https://maps.google.com/?q=Museu+do+Ipiranga+Sao+Paulo" }
            ]
        }
    },
    {
        id: "nov-1", month: "Novembro", title: "Indaiatuba", subtitle: "Parque Ecológico",
        description: "Parque Ecológico e Museu da Água. Passeio gratuito e acessível.",
        type: "natureza", status: "planned", people: 6, distance: 50, estimatedCost: 0,
        mapsUrl: "https://maps.google.com/?q=Parque+Ecologico+Indaiatuba",
        imageUrl: "https://images.unsplash.com/photo-1414609245224-afa02bfb3fda?w=900&h=500&fit=crop&auto=format",
        gradient: "linear-gradient(135deg, #14532d, #15803d)",
        details: {
            departureTime: "Sair de Sorocaba às 9h. Chegada prevista às 9h45.",
            itinerary: [
                { time: "09:00", activity: "Saída de Sorocaba", desc: "Pegar SP-280 (Castelo Branco) até Indaiatuba. Aproximadamente 45min de viagem." },
                { time: "09:45", activity: "Parque Ecológico", desc: "Entrada gratuita. Parque enorme com lagos, trilhas, playgrounds e áreas de piquenique." },
                { time: "10:30", activity: "Trilha do Lago", desc: "Caminhada ao redor do lago principal. Pontes, pedalinhos e área de observação de aves." },
                { time: "11:30", activity: "Playground e pedalinho", desc: "Área de recreação com playground grande e pedalinhos no lago. Perfeito para Júlia." },
                { time: "12:30", activity: "Almoço em Indaiatuba", desc: "Restaurantes próximos ao parque. Opções de comida caseira e pizzarias." },
                { time: "14:00", activity: "Museu da Água", desc: "Museu interativo sobre o ciclo da água. Educativo e divertido para crianças." },
                { time: "15:00", activity: "Parque Cidade de Indaiatuba", desc: "Segundo parque da cidade com pista de caminhada, quadras e lago. Passeio leve." },
                { time: "16:00", activity: "Retorno a Sorocaba", desc: "Chegada prevista por volta das 16h45." }
            ],
            restaurants: [
                { name: "Restaurante Dona Maria", desc: "Comida caseira do interior. Buffet por quilo com feijão tropeiro, frango e mandioca. Preço médio: R$35/pessoa.", mapsUrl: "https://maps.google.com/?q=Restaurante+Dona+Maria+Indaiatuba" },
                { name: "Pizzaria Fratello", desc: "Pizzas em forno a lenha e massas caseiras. Ambiente familiar. Preço médio: R$50/pessoa.", mapsUrl: "https://maps.google.com/?q=Pizzaria+Fratello+Indaiatuba" },
                { name: "Sorveteria Davó", desc: "Sorvete artesanal com sabores regionais. Parada obrigatória no calor de novembro.", mapsUrl: "https://maps.google.com/?q=Sorveteria+Davo+Indaiatuba" }
            ],
            familyActivities: [
                { name: "Parque Ecológico", desc: "Parque enorme com lagos, trilhas e áreas verdes. Gratuito e acessível para os avós." },
                { name: "Pedalinho no lago", desc: "Pedalinhos disponíveis no lago principal. Atividade tranquila para toda a família." },
                { name: "Museu da Água", desc: "Museu interativo sobre recursos hídricos. Educativo e bem apresentado." },
                { name: "Piquenique", desc: "Áreas com mesas e sombra no parque. Levar lanches e aproveitar o dia ao ar livre." }
            ],
            kidsActivities: [
                { name: "Playground do parque", desc: "Playground grande e bem conservado. Diversos brinquedos para Júlia." },
                { name: "Pedalinho", desc: "Passeio de pedalinho no lago. Divertido e seguro para crianças." },
                { name: "Museu da Água", desc: "Exposição interativa onde Júlia pode aprender brincando sobre o ciclo da água." }
            ],
            citySummary: "Indaiatuba é uma cidade bem estruturada localizada a apenas 50km de Sorocaba (~45min de carro). O Parque Ecológico é um dos maiores e mais bonitos parques urbanos do interior paulista, com lagos, trilhas, playgrounds e áreas de piquenique — tudo gratuito. O Museu da Água oferece exposição interativa sobre recursos hídricos. É um passeio leve, sem custo e ideal para um dia tranquilo ao ar livre com a família, especialmente no calor de novembro.",
            touristSpots: [
                { name: "Parque Ecológico", desc: "Um dos maiores parques urbanos do interior. Gratuito. Aberto diariamente 6h-18h.", mapsUrl: "https://maps.google.com/?q=Parque+Ecologico+Indaiatuba" },
                { name: "Museu da Água", desc: "Exposição interativa sobre recursos hídricos. Gratuito.", mapsUrl: "https://maps.google.com/?q=Museu+da+Agua+Indaiatuba" },
                { name: "Parque Cidade de Indaiatuba", desc: "Parque urbano com pista de caminhada e lago. Gratuito.", mapsUrl: "https://maps.google.com/?q=Parque+Cidade+Indaiatuba" },
                { name: "Centro Cultural", desc: "Exposições e eventos culturais. Programação variada.", mapsUrl: "https://maps.google.com/?q=Centro+Cultural+Indaiatuba" }
            ]
        }
    },
    {
        id: "nov-2", month: "Novembro", title: "Araçoiaba da Serra", subtitle: "Fazenda Ipanema",
        description: "Fazenda histórica com trilhas e ruínas. Patrimônio cultural.",
        type: "historia", status: "planned", people: 6, distance: 15, estimatedCost: 50,
        mapsUrl: "https://maps.google.com/?q=Fazenda+Ipanema+Aracoiaba+da+Serra",
        imageUrl: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=900&h=500&fit=crop&auto=format",
        gradient: "linear-gradient(135deg, #44403c, #78716c)",
        details: {
            departureTime: "Sair de Sorocaba às 9h. Chegada prevista às 9h20.",
            itinerary: [
                { time: "09:00", activity: "Saída de Sorocaba", desc: "Araçoiaba da Serra fica a apenas 15km. Aproximadamente 20min de viagem." },
                { time: "09:20", activity: "Fazenda Ipanema (FLONA)", desc: "Chegada à Floresta Nacional de Ipanema. Estacionamento gratuito. Área administrada pelo ICMBio." },
                { time: "09:45", activity: "Ruínas da Real Fábrica de Ferro", desc: "Ruínas da primeira siderúrgica do Brasil (1810). Paredes de pedra preservadas entre a vegetação." },
                { time: "10:45", activity: "Trilha da Pedra Santa", desc: "Trilha leve de 2km com paisagem de cerrado e mata atlântica. Passagem por nascentes." },
                { time: "12:00", activity: "Almoço", desc: "Restaurantes em Araçoiaba ou levar lanche para piquenique na área de apoio da FLONA." },
                { time: "13:30", activity: "Lago e observação de aves", desc: "Lago dentro da FLONA com grande diversidade de aves. Levar binóculos se tiver." },
                { time: "14:30", activity: "Centro de Visitantes", desc: "Exposição sobre a história da fazenda e a biodiversidade local." },
                { time: "15:00", activity: "Retorno a Sorocaba", desc: "Chegada prevista por volta das 15h20. Passeio mais curto do roteiro." }
            ],
            restaurants: [
                { name: "Restaurante Tempero da Roça", desc: "Comida caipira com fogão a lenha em Araçoiaba. Frango, leitão e acompanhamentos. Preço médio: R$35/pessoa.", mapsUrl: "https://maps.google.com/?q=Restaurante+Tempero+da+Roca+Aracoiaba" },
                { name: "Piquenique na FLONA", desc: "Área de apoio com mesas e sombra. Levar lanches, frutas e sucos. Opção gratuita e prática.", mapsUrl: "https://maps.google.com/?q=FLONA+Ipanema+Aracoiaba" },
                { name: "Padaria Araçoiaba", desc: "Pães frescos, salgados e café. Bom para lanche rápido antes ou depois do passeio.", mapsUrl: "https://maps.google.com/?q=Padaria+Aracoiaba+da+Serra" }
            ],
            familyActivities: [
                { name: "Ruínas históricas", desc: "Primeira siderúrgica do Brasil (1810). Paredes de pedra entre a mata. Impressionante e educativo." },
                { name: "Trilha da Pedra Santa", desc: "Trilha leve e acessível de 2km. Natureza preservada com cerrado e mata atlântica." },
                { name: "Observação de aves", desc: "Mais de 200 espécies registradas na FLONA. Passeio contemplativo junto ao lago." },
                { name: "Piquenique", desc: "Área de apoio com mesas na sombra. Passeio econômico e relaxante para a família." }
            ],
            kidsActivities: [
                { name: "Explorar as ruínas", desc: "Júlia vai se sentir numa aventura explorando as paredes de pedra da fábrica antiga." },
                { name: "Trilha na mata", desc: "Caminhada pela trilha com árvores, passarinhos e nascentes. Contato direto com a natureza." },
                { name: "Observar animais", desc: "Aves, borboletas e pequenos animais no caminho. Levar caderninho para Júlia desenhar." }
            ],
            citySummary: "Araçoiaba da Serra é a cidade mais próxima de Sorocaba no roteiro — apenas 15km (~20min de carro). A Fazenda Ipanema, hoje Floresta Nacional (FLONA) administrada pelo ICMBio, abriga as ruínas da Real Fábrica de Ferro de São João de Ipanema, a primeira siderúrgica do Brasil (1810). Além das ruínas históricas, oferece trilhas leves em meio a cerrado e mata atlântica, lago para observação de aves (mais de 200 espécies) e área de piquenique. Passeio curto, econômico e rico em história e natureza.",
            touristSpots: [
                { name: "Ruínas da Real Fábrica de Ferro", desc: "Primeira siderúrgica do Brasil (1810). Patrimônio histórico.", mapsUrl: "https://maps.google.com/?q=Ruinas+Fabrica+de+Ferro+Ipanema" },
                { name: "FLONA Ipanema", desc: "Floresta Nacional com trilhas e lago. Administrada pelo ICMBio. Gratuito.", mapsUrl: "https://maps.google.com/?q=FLONA+Ipanema+Aracoiaba" },
                { name: "Trilha da Pedra Santa", desc: "Trilha leve de 2km. Cerrado e mata atlântica.", mapsUrl: "https://maps.google.com/?q=Trilha+Pedra+Santa+Aracoiaba" },
                { name: "Lago da FLONA", desc: "Lago com diversidade de aves. Bom para observação e fotos.", mapsUrl: "https://maps.google.com/?q=Lago+FLONA+Ipanema" }
            ]
        }
    },
    {
        id: "dez-1", month: "Dezembro", title: "Itu", subtitle: "Luzes de Natal",
        description: "Decoração natalina na praça central. Passeio noturno em família.",
        type: "cultura", status: "planned", people: 6, distance: 40, estimatedCost: 0,
        mapsUrl: "https://maps.google.com/?q=Praca+Padre+Miguel+Itu",
        imageUrl: "https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=900&h=500&fit=crop&auto=format",
        gradient: "linear-gradient(135deg, #991b1b, #dc2626)",
        details: {
            departureTime: "Sair de Sorocaba às 17h. Chegada prevista às 17h40.",
            itinerary: [
                { time: "17:00", activity: "Saída de Sorocaba", desc: "Passeio noturno — sair no final da tarde. SP-280 até Itu, ~40min." },
                { time: "17:40", activity: "Chegada em Itu", desc: "Estacionar próximo à Praça Padre Miguel. Centro da cidade com decoração natalina." },
                { time: "18:00", activity: "Praça dos Exageros iluminada", desc: "Os objetos gigantes de Itu ganham iluminação especial no Natal. Fotos divertidas em família." },
                { time: "18:30", activity: "Decoração natalina", desc: "Praça Padre Miguel com árvore de Natal gigante, luzes, presépio e projeções. Espetáculo de luzes." },
                { time: "19:30", activity: "Jantar em Itu", desc: "Restaurantes no centro com opções variadas. Clima natalino na cidade." },
                { time: "20:30", activity: "Caminhada noturna", desc: "Passeio pelas ruas decoradas do centro. Barracas com doces, quentão e pamonha." },
                { time: "21:00", activity: "Retorno a Sorocaba", desc: "Chegada prevista por volta das 21h40." }
            ],
            restaurants: [
                { name: "Restaurante Villa Chic", desc: "Culinária contemporânea em casarão histórico. Carnes e massas. Preço médio: R$70/pessoa.", mapsUrl: "https://maps.google.com/?q=Villa+Chic+Itu" },
                { name: "Pizzaria Fornalha", desc: "Pizza em forno a lenha no centro. Ambiente familiar e aconchegante. Preço médio: R$50/pessoa.", mapsUrl: "https://maps.google.com/?q=Pizzaria+Fornalha+Itu" },
                { name: "Barracas da praça", desc: "Comidas típicas nas barracas: pamonha, curau, quentão, churros e doces de Natal. Preço acessível.", mapsUrl: "https://maps.google.com/?q=Praca+Padre+Miguel+Itu" }
            ],
            familyActivities: [
                { name: "Espetáculo de luzes", desc: "Projeções e show de luzes na Praça Padre Miguel. Gratuito e mágico." },
                { name: "Praça dos Exageros iluminada", desc: "Objetos gigantes com iluminação natalina. Fotos únicas e divertidas." },
                { name: "Presépio e árvore de Natal", desc: "Presépio em tamanho real e árvore gigante no centro da praça." },
                { name: "Caminhada noturna", desc: "Ruas decoradas com luzes. Clima natalino perfeito para fotos em família." }
            ],
            kidsActivities: [
                { name: "Árvore de Natal gigante", desc: "Júlia vai adorar ver a árvore enorme toda iluminada. Momento mágico para crianças." },
                { name: "Papai Noel", desc: "Papai Noel presente na praça para fotos e entrega de cartinhas." },
                { name: "Doces e quentão kids", desc: "Churros, algodão-doce e chocolate quente nas barracas. Festa para Júlia." }
            ],
            citySummary: "Itu no Natal é uma experiência especial. A Cidade dos Exageros, a apenas 40km de Sorocaba (~40min), transforma suas praças e ruas com decoração natalina grandiosa — como tudo na cidade. A Praça Padre Miguel recebe árvore de Natal gigante, presépio em tamanho real, espetáculo de luzes e projeções. Os objetos gigantes da Praça dos Exageros ganham iluminação especial. Barracas com comidas típicas e clima festivo completam o passeio noturno perfeito para fechar o ano em família.",
            touristSpots: [
                { name: "Praça Padre Miguel", desc: "Centro da decoração natalina. Árvore gigante e show de luzes. Gratuito.", mapsUrl: "https://maps.google.com/?q=Praca+Padre+Miguel+Itu" },
                { name: "Praça dos Exageros", desc: "Objetos gigantes com iluminação natalina especial.", mapsUrl: "https://maps.google.com/?q=Praca+dos+Exageros+Itu" },
                { name: "Centro Histórico iluminado", desc: "Ruas decoradas com luzes e enfeites natalinos.", mapsUrl: "https://maps.google.com/?q=Centro+Historico+Itu" },
                { name: "Igreja Matriz", desc: "Igreja histórica com decoração de Natal.", mapsUrl: "https://maps.google.com/?q=Igreja+Matriz+Itu" }
            ]
        }
    },
    {
        id: "dez-2", month: "Dezembro", title: "Maresias", subtitle: "Pousada Tambayba - Retorno",
        description: "Volta a Maresias para fechar o ano. Pousada que a família amou em janeiro.",
        type: "praia", status: "planned", people: 6, distance: 180, estimatedCost: null,
        mapsUrl: "https://maps.google.com/?q=Pousada+Tambayba+Maresias",
        imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&h=500&fit=crop&auto=format",
        gradient: "linear-gradient(135deg, #0369a1, #f97316)",
        details: {
            departureTime: "Viagem com pernoite — horário flexível",
            itinerary: [
                { time: "08:00", activity: "Saída de Sorocaba", desc: "SP-270 até São Paulo, depois SP-055 (Rio-Santos). Aproximadamente 3h de viagem." },
                { time: "11:00", activity: "Check-in na Pousada Tambayba", desc: "Retorno à pousada que a família amou em janeiro. Café da manhã caprichado e ambiente familiar." },
                { time: "12:00", activity: "Almoço na praia", desc: "Quiosques e restaurantes na orla de Maresias. Frutos do mar frescos." },
                { time: "14:00", activity: "Praia de Maresias", desc: "Tarde inteira na praia. Banho de mar, castelo de areia com Júlia, caminhada na orla." },
                { time: "17:00", activity: "Pôr do sol", desc: "Pôr do sol na praia para encerrar o ano de viagens com uma vista inesquecível." },
                { time: "19:00", activity: "Jantar especial", desc: "Jantar em restaurante à beira-mar para celebrar o último passeio do ano." }
            ],
            restaurants: [
                { name: "Restaurante Sirena", desc: "Frutos do mar e culinária praiana. Ambiente pé na areia. O mesmo que curtimos em janeiro. Preço médio: R$90/pessoa.", mapsUrl: "https://maps.google.com/?q=Restaurante+Sirena+Maresias" },
                { name: "Manjuba Gastronomia", desc: "Cozinha autoral com ingredientes locais. Um dos melhores da região.", mapsUrl: "https://maps.google.com/?q=Manjuba+Gastronomia+Maresias" },
                { name: "Bar do Celso", desc: "Petiscos e porções generosas. Ambiente descontraído, bom para famílias.", mapsUrl: "https://maps.google.com/?q=Bar+do+Celso+Maresias" }
            ],
            familyActivities: [
                { name: "Praia de Maresias", desc: "Praia principal com boa infraestrutura. Areia clara, mar com ondas moderadas. Dia inteiro." },
                { name: "Trilha de Maresias a Paúba", desc: "Trilha leve de 30 minutos pela costeira. Vista panorâmica do litoral." },
                { name: "Pôr do sol na praia", desc: "Encerrar o ano de viagens assistindo o pôr do sol juntos. Momento especial." },
                { name: "Caminhada no calçadão", desc: "Passeio pela orla com lojas, sorveterias e artesanato." }
            ],
            kidsActivities: [
                { name: "Castelo de areia", desc: "Área tranquila da praia para Júlia brincar na areia e tomar banho de mar." },
                { name: "Piscina da pousada", desc: "Pousada Tambayba tem piscina. Júlia já conhece e adora." },
                { name: "Sorvete no calçadão", desc: "Sorveterias artesanais na orla. Programa clássico de praia com Júlia." }
            ],
            citySummary: "Maresias é o destino de encerramento do ano — um retorno à praia e à Pousada Tambayba que a família amou em janeiro. A ideia é fechar 2026 no mesmo lugar onde começou, completando o ciclo. Localizada a 180km de Sorocaba (~3h de carro), a praia continua sendo uma das mais bonitas do litoral norte de São Paulo, com areia branca, águas cristalinas e um pôr do sol inesquecível. Desta vez, a família já conhece os melhores restaurantes e cantinhos.",
            touristSpots: [
                { name: "Praia de Maresias", desc: "Praia principal. Infraestrutura completa. Bandeira Azul.", mapsUrl: "https://maps.google.com/?q=Praia+de+Maresias" },
                { name: "Praia de Paúba", desc: "Praia vizinha mais tranquila. Boa para famílias.", mapsUrl: "https://maps.google.com/?q=Praia+de+Pauba" },
                { name: "Mirante de Maresias", desc: "Vista panorâmica da praia e da serra.", mapsUrl: "https://maps.google.com/?q=Mirante+Maresias" },
                { name: "Pousada Tambayba", desc: "A pousada da família. Café da manhã caprichado e localização privilegiada.", mapsUrl: "https://maps.google.com/?q=Pousada+Tambayba+Maresias" }
            ]
        }
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
                    <span>${svgIcon.pin} ~${next.distance}km</span>
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
                <span class="trip-row-cost">~${t.distance}km</span>
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
