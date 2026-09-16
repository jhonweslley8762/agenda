/* =========================================================
   TELA: ÁREA DO ESTUDANTE
   ---------------------------------------------------------
   Primeira tela depois do login do aluno. É o "menu" que leva
   às outras áreas (página escolar, sala do aluno, etc.).

   Os botões que ainda não têm tela pronta estão marcados com
   data-em-breve="1" — o js/app.js só avisa que ainda não
   existe, em vez de navegar.
   ========================================================= */

PAGES.estudante = `
<section class="screen screen-app" id="screen-estudante">

  <!-- Barra verde com o título e o menu -->
  <header class="app-bar">
    <span class="app-bar-title">área do estudante</span>
    <button class="app-bar-menu" aria-label="menu">☰</button>
  </header>

  <!-- Ilustração do topo (feita só com CSS e emojis) -->
  <div class="hero-illustration">
    <span class="hero-emoji hero-emoji-1">📐</span>
    <span class="hero-emoji hero-emoji-2">✏️</span>
    <span class="hero-emoji hero-emoji-3">🍎</span>
    <span class="hero-emoji hero-emoji-4">🎨</span>
    <span class="hero-student">👩🏽‍🎓</span>
    <span class="hero-emoji hero-emoji-5">📚</span>
    <span class="hero-emoji hero-emoji-6">🔤</span>
  </div>

  <div class="card-body" id="estudante-menu">
    <div class="stack">
      <button class="nav-btn nav-blue" data-ir="pagina-escolar" data-em-breve="1">
        <span class="nav-icon">👤</span>
        <span class="nav-label">página escolar</span>
        <span class="nav-arrow">›</span>
      </button>

      <button class="nav-btn nav-green" data-ir="sala-aluno">
        <span class="nav-icon">👥</span>
        <span class="nav-label">sala do aluno</span>
        <span class="nav-arrow">›</span>
      </button>

      <button class="nav-btn nav-blue" data-ir="pagina-pessoal">
        <span class="nav-icon">👤</span>
        <span class="nav-label">página pessoal</span>
        <span class="nav-arrow">›</span>
      </button>

      <button class="nav-btn nav-green" data-ir="grupos">
        <span class="nav-icon">🗂️</span>
        <span class="nav-label">grupos estudantis</span>
        <span class="nav-arrow">›</span>
      </button>

      <button class="nav-btn nav-blue" data-ir="biblioteca" data-em-breve="1">
        <span class="nav-icon">📚</span>
        <span class="nav-label">biblioteca</span>
        <span class="nav-arrow">›</span>
      </button>
    </div>

    <p class="em-breve" id="estudante-aviso" hidden></p>

    <div class="home-bar">
      <button class="home-btn" id="btn-home-estudante" aria-label="início">⌂</button>
    </div>
  </div>

</section>
`;
