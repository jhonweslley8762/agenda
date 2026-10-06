PAGES["pagina-pessoal-professor"] = `
    
    <section class="screen screen-app" id="screen-professor">

    <header class="app-bar-professor">
      <span class="app-bar-title">página pessoal</span>
      <button class="app-bar-menu" aria-label="menu">☰</button>
    </header>

    <div class="back-row">
      <button class="btn-voltar" data-voltar>← voltar</button>
    </div>

    <div class="card-body" id="professor-menu">

      <div class="stack">
        <button class="nav-btn nav-blue" data-ir="curriculo-professor">
          <span class="nav-icon">👤</span>
          <span class="nav-label">curriculo</span>
          <span class="nav-arrow">›</span>
        </button>

        <button class="nav-btn nav-green" data-ir="anotacoes-professor" data-em-breve="1">
          <span class="nav-icon">👥</span>
          <span class="nav-label">anotações</span>
          <span class="nav-arrow">›</span>
        </button>

        <button class="nav-btn nav-blue" data-ir="metas-professor" data-em-breve="1">
          <span class="nav-icon">📝</span>
          <span class="nav-label">metas trimestrais</span>
          <span class="nav-arrow">›</span>
        </button>
      </div>

      <p class="em-breve" id="professor-aviso" hidden></p>
      <div class="home-bar">
        <button class="home-btn" id="btn-home-professor" aria-label="início">⌂</button>
      </div>

    </div>

  </section>
`;