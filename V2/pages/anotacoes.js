/* =========================================================
   TELA: ANOTAÇÕES
   ---------------------------------------------------------
   Caixa de texto livre. O que for digitado é salvo no
   navegador (por conta), pelo js/app.js.
   ========================================================= */

PAGES.anotacoes = `
<section class="screen screen-app" id="screen-anotacoes">

  <header class="app-bar">
    <span class="app-bar-title">anotações</span>
    <button class="app-bar-menu" aria-label="menu">☰</button>
  </header>

  <div class="back-row">
    <button class="btn-voltar" data-voltar>← voltar</button>
  </div>

  <div class="card-body">
    <textarea class="text-area" id="campo-anotacoes" placeholder="escreva algo"></textarea>
    <p class="salvo-aviso" id="anotacoes-salvo">salvo automaticamente neste navegador</p>
  </div>

</section>
`;
