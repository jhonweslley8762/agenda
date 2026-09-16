/* =========================================================
   TELA: CRIAÇÃO DE CONTA (1ª etapa do cadastro)
   ---------------------------------------------------------
   Os dados preenchidos aqui ficam guardados temporariamente
   até serem juntados com os da tela de perfil e salvos.
   ========================================================= */

PAGES.cadastro = `
<section class="screen" id="screen-cadastro">

  <div class="screen-top">
    <span class="clock">9:30</span>
  </div>

  <header class="screen-header">
    <h1 class="title-md">criação de conta</h1>
    <button class="link-back" id="btn-cadastro-back">← voltar</button>
  </header>

  <div class="stack">
    <input class="input" type="text" id="cad-username" placeholder="nome de usuário" />
    <input class="input" type="text" id="cad-cpf" placeholder="digite o seu CPF" inputmode="numeric" maxlength="14" />
    <input class="input" type="date" id="cad-nascimento" />
    <input class="input" type="password" id="cad-senha" placeholder="senha" />
    <input class="input" type="password" id="cad-confirmar" placeholder="confirmar senha" />

    <p class="error" id="cadastro-error" hidden></p>

    <div class="center">
      <button class="btn btn-blue btn-inline" id="btn-cadastro-avancar">avançar</button>
    </div>
  </div>

</section>
`;
