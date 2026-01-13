# Planejamento de Viagens - Painel Interativo

Este projeto web é um painel interativo para organizar e gerenciar seus passeios e viagens de bate e volta.

## Funcionalidades Implementadas

*   **Design Moderno e Responsivo:** Layout de dashboard com barra lateral de navegação e área de conteúdo principal.
*   **Integração com Firebase Firestore:** Todos os dados são armazenados e carregados dinamicamente de um banco de dados Firebase, permitindo atualizações em tempo real sem a necessidade de novos deploys.
*   **Visualização Agrupada por Mês:** Os passeios são organizados em seções por mês, facilitando a visualização e o planejamento.
*   **Navegação e Filtros na Barra Lateral:**
    *   Links para cada mês, mostrando a contagem de passeios.
    *   Opção "Mostrar Todos" para ver todos os passeios.
    *   **NOVO:** Filtro "Realizados" para ver apenas os passeios marcados como concluídos.
*   **Cards de Passeio Detalhados:** Cada card exibe:
    *   Mês abreviado.
    *   Título do passeio.
    *   Descrição.
    *   Número de dias previstos.
    *   Custo estimado.
    *   Link direto para o Google Maps (se fornecido).
*   **Gestão Completa de Passeios (CRUD):**
    *   **NOVO:** Botão "Novo Passeio" na barra lateral para adicionar novos itens.
    *   **NOVO:** Botão "Excluir" em cada card para remover passeios (com confirmação).
    *   Botão "Editar" em cada card, que abre um modal com formulário preenchido para atualização de informações.
    *   **NOVO:** Botão "Marcar como Feito/Não Feito" em cada card para gerenciar o status de conclusão do passeio.
*   **Status Visual de "Feito":** Cards de passeios realizados recebem uma borda e um ícone de checkmark visualmente distintos.
*   **Animações e Interatividade:** Transições suaves, efeitos de hover nos cards, e animações de entrada para uma experiência de usuário mais dinâmica.

## Como Usar

1.  **Acessar o Site:** Abra o link do Vercel onde o projeto está hospedado.
2.  **Visualizar Passeios:** Explore os passeios organizados por mês ou use os filtros da barra lateral.
3.  **Adicionar um Novo Passeio:** Clique no botão "Novo Passeio" na barra lateral, preencha o formulário no modal e clique em "Salvar".
4.  **Editar um Passeio Existente:** Clique no botão "Editar" de um card, altere as informações no modal e clique em "Salvar".
5.  **Excluir um Passeio:** Clique no botão "Excluir" de um card e confirme a ação.
6.  **Marcar/Desmarcar como Feito:** Clique no botão de checkmark em um card para alternar o status de realização.

## Configuração do Firebase

Este projeto utiliza o **Google Firebase Firestore** como banco de dados. As credenciais são carregadas do arquivo `firebase-config.js`. Para editar os dados diretamente via console do Firebase:

1.  Acesse [Firebase Console](https://console.firebase.google.com/).
2.  Selecione o projeto `viagens-2026`.
3.  Vá em **Criação > Firestore Database**.
4.  A coleção `viagens` conterá todos os seus passeios.

---

Espero que este painel ajude no seu planejamento de viagens!