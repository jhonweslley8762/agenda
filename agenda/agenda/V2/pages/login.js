/* =========================================================
   TELA: LOGIN DO PERFIL ESCOLHIDO
   ---------------------------------------------------------
   O que for digitado aqui é comparado com as contas salvas
   no navegador (ver js/storage.js).
   ========================================================= */

PAGES.login = `
<section class="screen" id="screen-login">

  <div class="screen-top">
    <span class="clock">9:30</span>
  </div>

  <header class="screen-header">
    <h1 class="title-md" id="login-title">login</h1>
    <button class="link-back" id="btn-login-back">← voltar</button>
  </header>

  <!-- Visível só logo depois de concluir um cadastro -->
  <div class="hint hint-success" id="login-hint" hidden>
    ✔ conta criada e salva neste navegador. entre com o CPF e a senha cadastrados.
  </div>

  <div class="login-box" id="login-box">
    <input class="input" type="text" id="login-identifier" placeholder="Nome/CPF" />
    <input class="input" type="password" id="login-senha" placeholder="senha" />

    <!-- Se marcado, o app reabre direto no painel da próxima vez -->
    <label class="checkbox">
      <input type="checkbox" id="login-lembrar" checked />
      <span>manter conectado neste navegador</span>
    </label>

    <p class="error" id="login-error" hidden></p>
    <button class="btn btn-blue btn-inline" id="btn-login-submit">acessar</button>
  </div>

</section>
`;
