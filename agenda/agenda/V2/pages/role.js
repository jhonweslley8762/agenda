/* =========================================================
   TELA: ESCOLHA DE PERFIL
   ---------------------------------------------------------
   Serve tanto para o fluxo de login quanto para o de cadastro.
   O título e o destino de cada clique são definidos pelo
   js/app.js, conforme state.mode ("login" ou "cadastro").
   ========================================================= */

PAGES.role = `
<section class="screen" id="screen-role">

  <div class="screen-top">
    <span class="clock">9:30</span>
  </div>

  <header class="screen-header">
    <h1 class="title-md" id="role-title">área de login</h1>
    <button class="link-back" id="btn-role-back">← voltar</button>
  </header>

  <!-- O atributo data-role diz ao app qual perfil foi clicado -->
  <div class="stack" id="role-list">
    <button class="btn role-btn btn-blue" data-role="aluno">
      <span class="icon">📖</span> aluno
    </button>
    <button class="btn role-btn btn-green" data-role="professor">
      <span class="icon">👥</span> professor
    </button>
    <button class="btn role-btn btn-blue" data-role="gestao">
      <span class="icon">🧑‍💼</span> gestão
    </button>
    <button class="btn role-btn btn-green" data-role="responsaveis">
      <span class="icon">👤</span> responsáveis
    </button>
  </div>

</section>
`;
