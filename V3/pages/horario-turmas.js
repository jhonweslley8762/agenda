PAGES["horario-turmas"] = 
`<section class="screen screen-app" id="screen-estudante">

        <header class="app-bar">
            <span class="app-bar-title">Quadro de horários</span>
            <button class="app-bar-menu" aria-label="menu">☰</button>
        </header>

        <div class="back-row">
            <button class="btn-voltar" data-voltar>← voltar</button>
        </div>

        <div class="card-body" id="estudante-menu">
            <div class="stack">
                <button class="nav-btn nav-blue" data-ir="segunda-aluno" data-em-breve="1">
                    <span class="nav-label">Segunda-feira</span>
                    <span class="nav-arrow">›</span>
                </button>
                <button class="nav-btn nav-green" data-ir="terca-aluno" data-em-breve="1">
                    <span class="nav-label">Terça-feira</span>
                    <span class="nav-arrow">›</span>
                </button>
                <button class="nav-btn nav-blue" data-ir="quarta-aluno" data-em-breve="1">
                    <span class="nav-label">Quarta-feira</span>
                    <span class="nav-arrow">›</span>
                </button>
                <button class="nav-btn nav-green" data-ir="quinta-aluno" data-em-breve="1">
                    <span class="nav-label">Quinta-feira</span>
                    <span class="nav-arrow">›</span>
                </button>
                <button class="nav-btn nav-blue" data-ir="sexta-aluno" data-em-breve="1">
                    <span class="nav-label">Sexta-feira</span>
                    <span class="nav-arrow">›</span>
                </button>
            </div>

            <p class="em-breve" id="estudante-aviso" hidden></p>

            <div class="home-bar">
                <button class="home-btn" id="btn-home-estudante" aria-label="início" data-home>⌂</button>
            </div>
        </div>

    </section>`;