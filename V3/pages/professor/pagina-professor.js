PAGES["professor"] = `
<section class="screen screen-app" id="screen-professor">

    <header class="app-bar-professor">
        <span class="app-bar-title">página do professor</span>
        <button class="app-bar-menu" aria-label="menu">☰</button>
    </header>

    <div class="hero-illustration">
        <span class="hero-emoji hero-emoji-1">📐</span>
        <span class="hero-emoji hero-emoji-2">✏️</span>
        <span class="hero-emoji hero-emoji-3">🍎</span>
        <span class="hero-emoji hero-emoji-4">🎨</span>
        <span class="hero-student">👩🏽‍🎓</span>
        <span class="hero-emoji hero-emoji-5">📚</span>
        <span class="hero-emoji hero-emoji-6">🔤</span>
    </div>

    <div class="card-body" id="professor-menu">
        <div class="stack">
            <button class="nav-btn nav-blue" data-ir="pagina-pessoal-professor" data-em-breve="1">
                <span class="nav-icon">👤</span>
                <span class="nav-label">página pessoal</span>
                <span class="nav-arrow">›</span>
            </button>

            <button class="nav-btn nav-green" data-ir="escolas-professor" data-em-breve="1">
                <span class="nav-icon">👥</span>
                <span class="nav-label">escolas</span>
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