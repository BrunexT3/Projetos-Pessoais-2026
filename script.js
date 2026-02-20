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
        id: "abr-2", month: "Abril", title: "Piedade", subtitle: "Colheita & Jardim Botânico",
        description: "Colheita de caqui na época ou visita ao Jardim Botânico.",
        type: "natureza", status: "planned", people: 6, estimatedCost: 80,
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
        type: "natureza", status: "planned", people: 6, estimatedCost: 100,
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
        type: "aventura", status: "planned", people: 6, estimatedCost: 300,
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
        type: "cultura", status: "planned", people: 6, estimatedCost: 120,
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
        type: "gastronomia", status: "planned", people: 6, estimatedCost: 100,
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
