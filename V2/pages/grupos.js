/* =========================================================
   TELA: GRUPOS ESTUDANTIS
   ---------------------------------------------------------
   Lista os grupos do aluno. Começa vazia, com o aviso
   "nenhum grupo adicionado". O botão "+" e o "procurar por
   grupos" ainda não têm tela — por enquanto só existem.
   ========================================================= */

PAGES.grupos = `
<section class="screen screen-app" id="screen-grupos">

  <header class="app-bar">
    <span class="app-bar-title">Grupos estudantis</span>
    <button class="app-bar-menu" aria-label="menu">☰</button>
  </header>

  <div class="back-row">
    <button class="btn-voltar" data-voltar>← voltar</button>
    <button class="btn-mais" id="btn-novo-grupo" aria-label="adicionar grupo">+</button>
  </div>

  <div class="card-body" id="grupos-menu">
    <div class="stack">
      <button class="nav-btn nav-blue" data-ir="procurar-grupos" data-em-breve="1">
        <span class="nav-icon">🔍</span>
        <span class="nav-label">procurar por grupos</span>
        <span class="nav-arrow">›</span>
      </button>
    </div>

    <p class="lista-vazia">nenhum grupo adicionado</p>

    <p class="em-breve" id="grupos-aviso" hidden></p>

    <div class="home-bar">
      <button class="home-btn" data-home aria-label="início">⌂</button>
    </div>
  </div>

</section>
`;
