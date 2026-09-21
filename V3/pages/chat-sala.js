/* =========================================================
   TELA: CHAT DA SALA
   ---------------------------------------------------------
   As mensagens ficam salvas no navegador (por conta), então
   continuam lá quando você volta à tela. As bolhas verdes
   são suas; as azuis, dos colegas.
   ========================================================= */

PAGES["chat-sala"] = `
<section class="screen screen-app screen-chat" id="screen-chat-sala">

  <header class="app-bar">
    <span class="app-bar-title">chat de sala</span>
    <button class="app-bar-menu" aria-label="menu">☰</button>
  </header>

  <div class="back-row">
    <button class="btn-voltar" data-voltar>← voltar</button>
  </div>

  <!-- As mensagens são criadas pelo js/app.js -->
  <div class="chat-list" id="chat-sala-lista"></div>

  <div class="chat-compose">
    <input class="chat-input" id="chat-sala-campo" type="text" placeholder="escreva algo..." />
    <button class="chat-send" id="chat-sala-enviar" aria-label="enviar">➤</button>
  </div>

</section>
`;
