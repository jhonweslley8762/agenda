/* =========================================================
   TELA: PAINEL APÓS O LOGIN
   ---------------------------------------------------------
   Mostra de volta todos os dados que foram preenchidos no
   cadastro. Os valores ficam vazios aqui ("—") e são
   preenchidos pelo js/app.js com os dados salvos.
   ========================================================= */

PAGES.dashboard = `
<section class="screen" id="screen-dashboard">

  <div class="dashboard-header">
    <div>
      <p class="muted">bem-vindo(a) de volta,</p>
      <h1 class="title-lg" id="dash-username">usuário</h1>
    </div>
    <button class="link-back" id="btn-sair">⎋ sair</button>
  </div>

  <span class="badge" id="dash-role-badge">conta de aluno</span>

  <div class="data-grid">
    <div class="data-card"><p class="data-label">CPF</p><p class="data-value" id="dash-cpf">—</p></div>
    <div class="data-card"><p class="data-label">Data de nascimento</p><p class="data-value" id="dash-nascimento">—</p></div>
    <div class="data-card"><p class="data-label">Estado</p><p class="data-value" id="dash-estado">—</p></div>
    <div class="data-card"><p class="data-label">Cidade</p><p class="data-value" id="dash-cidade">—</p></div>
    <div class="data-card"><p class="data-label">Escola</p><p class="data-value" id="dash-escola">—</p></div>
    <div class="data-card"><p class="data-label">Escolaridade</p><p class="data-value" id="dash-escolaridade">—</p></div>
  </div>

  <!-- Leva às telas novas (área do estudante) -->
  <button class="btn btn-green btn-area-estudante" id="btn-abrir-estudante">
    entrar na área do estudante
  </button>

  <!-- Data/hora em que a conta foi salva -->
  <p class="storage-note" id="dash-criado-em"></p>

</section>
`;
