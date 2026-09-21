/* =========================================================
   TELA: CHAT DA GERÊNCIA (chat de superiores)
   ---------------------------------------------------------
   Aqui o aluno só lê: o campo de escrever fica desativado,
   como no protótipo ("apenas a gerência pode enviar").
   ========================================================= */

PAGES["chat-gerencia"] = `
<section class="screen screen-app screen-chat" id="screen-chat-gerencia">

  <header class="app-bar">
    <span class="app-bar-title">chat da gerência</span>
    <button class="app-bar-menu" aria-label="menu">☰</button>
  </header>

  <div class="back-row">
    <button class="btn-voltar" data-voltar>← voltar</button>
  </div>

  <div class="chat-list" id="chat-gerencia-lista"></div>

  <div class="chat-compose">
    <input class="chat-input" type="text" placeholder="apenas a gerência pode enviar mensagens" disabled />
  </div>

</section>
`;
