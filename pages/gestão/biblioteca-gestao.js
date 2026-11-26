PAGES["biblioteca-gestao"] = `
    <section class="screen screen-app" id="screen-gestao">

        <header class="app-bar-gestao">
            <span class="app-bar-title">página das escolas</span>
            <button class="app-bar-menu" aria-label="menu">☰</button>
        </header>

        <div class="back-row">
            <button class="btn-voltar" data-voltar>← voltar</button>
        </div>

        <div class="card-body" id="gestao-menu">
            <div class="stack">
                <button class="nav-btn nav-blue" data-ir="comunicados-biblioteca" data-em-breve="1">
                    <span class="nav-icon">👤</span>
                    <span class="nav-label">Comunicados da biblioteca</span>
                    <span class="nav-arrow">›</span>
                </button>

                <button class="nav-btn nav-yellow" data-ir="Horário-biblioteca" data-em-breve="1">
                    <span class="nav-icon">👥</span>
                    <span class="nav-label">Horários da biblioteca</span>
                    <span class="nav-arrow">›</span>
                </button>
            </div>

            <p class="em-breve" id="estudante-aviso" hidden></p>

            <div class="home-bar">
                <button class="home-btn" id="btn-home-estudante" aria-label="início" data-home>⌂</button>
            </div>
        </div>

    </section>
`;