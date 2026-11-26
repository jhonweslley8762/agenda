/* =========================================================
   TELA: CALENDÁRIO DE ATIVIDADES
   ---------------------------------------------------------
   Os doze meses do ano. Clicar em um mês ainda não abre nada
   (a tela do mês não existe no protótipo) — por enquanto o
   app só destaca o mês escolhido.
   ========================================================= */

PAGES.calendario = `
<section class="screen screen-app" id="screen-calendario">

  <header class="app-bar">
    <span class="app-bar-title">calendário de atividades</span>
    <button class="app-bar-menu" aria-label="menu">☰</button>
  </header>

  <div class="back-row">
    <button class="btn-voltar" data-voltar>← voltar</button>
  </div>

  <div class="card-body">
    <div class="month-grid" id="lista-meses">
      <button class="month-btn" data-mes="1">janeiro</button>
      <button class="month-btn" data-mes="2">fevereiro</button>
      <button class="month-btn" data-mes="3">março</button>
      <button class="month-btn" data-mes="4">abril</button>
      <button class="month-btn" data-mes="5">maio</button>
      <button class="month-btn" data-mes="6">junho</button>
      <button class="month-btn" data-mes="7">julho</button>
      <button class="month-btn" data-mes="8">agosto</button>
      <button class="month-btn" data-mes="9">setembro</button>
      <button class="month-btn" data-mes="10">outubro</button>
      <button class="month-btn" data-mes="11">novembro</button>
      <button class="month-btn" data-mes="12">dezembro</button>
    </div>

    <p class="em-breve" id="calendario-aviso" hidden></p>
  </div>

</section>
`;
