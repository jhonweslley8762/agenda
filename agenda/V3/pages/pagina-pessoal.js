/* =========================================================
   TELA: PÁGINA PESSOAL
   ---------------------------------------------------------
   Leva ao boletim, às anotações e às informações do aluno.
   ========================================================= */

PAGES["pagina-pessoal"] = `
<section class="screen screen-app" id="screen-pagina-pessoal">

  <header class="app-bar">
    <span class="app-bar-title">página pessoal</span>
    <button class="app-bar-menu" aria-label="menu">☰</button>
  </header>

  <div class="back-row">
    <button class="btn-voltar" data-voltar>← voltar</button>
  </div>

  <div class="card-body" id="pessoal-menu">
    <div class="stack">
      <button class="nav-btn nav-blue" data-ir="boletim">
        <span class="nav-icon">🗒️</span>
        <span class="nav-label">boletim</span>
        <span class="nav-arrow">›</span>
      </button>

      <button class="nav-btn nav-green" data-ir="anotacoes">
        <span class="nav-icon">📝</span>
        <span class="nav-label">anotações</span>
        <span class="nav-arrow">›</span>
      </button>

      <button class="nav-btn nav-blue" data-ir="informacoes">
        <span class="nav-icon">ℹ️</span>
        <span class="nav-label">informações</span>
        <span class="nav-arrow">›</span>
      </button>
    </div>
  </div>

</section>
`;
