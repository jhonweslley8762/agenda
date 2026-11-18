/* =========================================================
   TELA: CONFIGURAÇÕES DE PERFIL (2ª e última etapa)
   ---------------------------------------------------------
   Ao clicar em "finalizar", o js/app.js junta estes dados com
   os da etapa anterior e grava a conta no navegador.

   Para mudar as opções das listas, basta acrescentar ou
   remover as linhas <option> abaixo.
   ========================================================= */

PAGES.perfil = `
<section class="screen" id="screen-perfil">

  <div class="screen-top">
    <span class="clock">9:30</span>
  </div>

  <header class="screen-header">
    <h1 class="title-md">configurações de perfil</h1>
    <button class="link-back" id="btn-perfil-back">← voltar</button>
  </header>

  <div class="stack">

    <div class="select-wrap">
      <select class="input" id="perfil-estado">
        <option value="" disabled selected>selecionar estado</option>
        <option>Pernambuco</option>
        <option>São Paulo</option>
        <option>Bahia</option>
        <option>Minas Gerais</option>
        <option>Ceará</option>
      </select>
    </div>

    <div class="select-wrap">
      <select class="input" id="perfil-cidade">
        <option value="" disabled selected>selecionar cidade</option>
        <option>Santa Cruz do Capibaribe</option>
        <option>Caruaru</option>
        <option>Recife</option>
        <option>Toritama</option>
        <option>Brejo da Madre de Deus</option>
      </select>
    </div>

    <div class="select-wrap">
      <select class="input" id="perfil-escola">
        <option value="" disabled selected>selecionar escola</option>
        <option>Escola Municipal José da Silva</option>
        <option>Colégio Estadual Paulo Freire</option>
        <option>Instituto Educacional Girassol</option>
      </select>
    </div>

    <div class="select-wrap">
      <select class="input" id="perfil-escolaridade">
        <option value="" disabled selected>escolaridade</option>
        <option>Educação infantil</option>
        <option>Fundamental I</option>
        <option>Fundamental II</option>
        <option>Ensino Médio</option>
      </select>
    </div>

    <p class="error" id="perfil-error" hidden></p>

    <div class="center">
      <button class="btn btn-blue btn-inline" id="btn-finalizar">finalizar</button>
    </div>

  </div>

</section>
`;
