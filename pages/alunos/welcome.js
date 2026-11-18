/* =========================================================
   TELA: BOAS-VINDAS
   ---------------------------------------------------------
   Primeira tela do app: convida a fazer login ou criar conta.
   O HTML fica entre crases (`) — pode editar normalmente,
   como se fosse um arquivo .html comum.
   ========================================================= */

PAGES.welcome = `
<section class="screen" id="screen-welcome">

  <!-- Ilustração simples feita com dois "balões" coloridos -->
  <div class="welcome-illustration">
    <div class="bubble bubble-blue">📖</div>
    <div class="bubble bubble-green">🎓</div>
  </div>

  <h1 class="title-lg center">bem-vindo!</h1>
  <p class="subtitle center">
    para acessar a agenda, você precisa de uma conta. se já tem uma, faça login.
    caso contrário, cadastre-se abaixo.
  </p>

  <div class="stack">
    <button class="btn btn-blue" id="btn-go-login">login com usuário e senha</button>
    <button class="btn btn-green" id="btn-go-cadastro">cadastro</button>
  </div>

  <!-- Quantas contas estão salvas + opção de apagar tudo -->
  <p class="storage-note" id="storage-note" hidden>
    <span id="storage-count"></span>
    <button class="link-inline danger" id="btn-apagar-dados">apagar dados salvos</button>
  </p>

</section>
`;
