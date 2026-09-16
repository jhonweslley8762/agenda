/* =========================================================
   TELA: SALA DO ALUNO
   ---------------------------------------------------------
   Menu da turma: calendário, chats, atividades e reforço.
   "atividades" e "reforço" ainda não têm tela no protótipo.
   ========================================================= */

PAGES["sala-aluno"] = `
<section class="screen screen-app" id="screen-sala-aluno">

  <header class="app-bar">
    <span class="app-bar-title">sala do aluno</span>
    <button class="app-bar-menu" aria-label="menu">☰</button>
  </header>

  <div class="back-row">
    <button class="btn-voltar" data-voltar>← voltar</button>
  </div>

  <div class="card-body" id="sala-menu">
    <div class="stack">
      <button class="nav-btn nav-blue" data-ir="calendario">
        <span class="nav-icon">🗓️</span>
        <span class="nav-label">calendário da turma</span>
        <span class="nav-arrow">›</span>
      </button>

      <button class="nav-btn nav-green" data-ir="chat-sala">
        <span class="nav-icon">💬</span>
        <span class="nav-label">Chat da sala</span>
        <span class="nav-arrow">›</span>
      </button>

      <button class="nav-btn nav-blue" data-ir="chat-gerencia">
        <span class="nav-icon">💬</span>
        <span class="nav-label">chat de superiores</span>
        <span class="nav-arrow">›</span>
      </button>

      <button class="nav-btn nav-green" data-ir="atividades" data-em-breve="1">
        <span class="nav-icon">📖</span>
        <span class="nav-label">atividades</span>
        <span class="nav-arrow">›</span>
      </button>

      <button class="nav-btn nav-blue" data-ir="reforco" data-em-breve="1">
        <span class="nav-icon">📖</span>
        <span class="nav-label">reforço</span>
        <span class="nav-arrow">›</span>
      </button>
    </div>

    <p class="em-breve" id="sala-aviso" hidden></p>

    <div class="home-bar">
      <button class="home-btn" data-home aria-label="início">⌂</button>
    </div>
  </div>

</section>
`;
