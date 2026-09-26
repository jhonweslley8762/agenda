PAGES["pagina-escolar"] = `
    <section class="screen screen-app" id="screen-estudante">

        <header class="app-bar">
            <span class="app-bar-title">página escolar</span>
            <button class="app-bar-menu" aria-label="menu">☰</button>
        </header>

        <div class="back-row">
            <button class="btn-voltar" data-voltar>← voltar</button>
        </div>

        <div class="card-body" id="estudante-menu">
            <div class="stack">
                <button class="nav-btn nav-blue" data-ir="calendario" data-em-breve="1">
                    <span class="nav-icon">👤</span>
                    <span class="nav-label">Calendário</span>
                    <span class="nav-arrow">›</span>
                </button>

                <button class="nav-btn nav-green" data-ir="comunicados-escola" data-em-breve="1">
                    <span class="nav-icon">👥</span>
                    <span class="nav-label">Comunicados da escola</span>
                    <span class="nav-arrow">›</span>
                </button>

                <button class="nav-btn nav-blue" data-ir="horario-turmas" data-em-breve="1">
                    <span class="nav-icon">👤</span>
                    <span class="nav-label">Horário das turmas</span>
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