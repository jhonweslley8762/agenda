/* =========================================================
   TELA: BOLETIM
   ---------------------------------------------------------
   No protótipo do Figma o boletim é uma imagem. Aqui ele foi
   refeito como tabela de verdade, com valores de exemplo.
   Depois é só trocar as linhas por dados reais.
   ========================================================= */

PAGES.boletim = `
<section class="screen screen-app" id="screen-boletim">

  <header class="app-bar">
    <span class="app-bar-title">boletim</span>
    <button class="app-bar-menu" aria-label="menu">☰</button>
  </header>

  <div class="back-row">
    <button class="btn-voltar" data-voltar>← voltar</button>
  </div>

  <div class="card-body">
    <p class="boletim-head" id="boletim-aluno">aluno(a) — 2º ano · ensino médio</p>

    <!-- A tabela rola na horizontal no celular -->
    <div class="table-wrap">
      <table class="boletim-table">
        <thead>
          <tr>
            <th>disciplina</th>
            <th>1º bim</th>
            <th>2º bim</th>
            <th>3º bim</th>
            <th>4º bim</th>
            <th>faltas</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Língua Portuguesa</td><td>8,0</td><td>7,5</td><td>—</td><td>—</td><td>2</td></tr>
          <tr><td>Matemática</td><td>7,0</td><td>8,5</td><td>—</td><td>—</td><td>0</td></tr>
          <tr><td>História</td><td>9,0</td><td>9,0</td><td>—</td><td>—</td><td>1</td></tr>
          <tr><td>Geografia</td><td>8,5</td><td>7,0</td><td>—</td><td>—</td><td>3</td></tr>
          <tr><td>Biologia</td><td>6,5</td><td>7,5</td><td>—</td><td>—</td><td>0</td></tr>
          <tr><td>Física</td><td>7,5</td><td>6,0</td><td>—</td><td>—</td><td>4</td></tr>
          <tr><td>Química</td><td>8,0</td><td>8,0</td><td>—</td><td>—</td><td>1</td></tr>
          <tr><td>Educação Física</td><td>10,0</td><td>9,5</td><td>—</td><td>—</td><td>0</td></tr>
          <tr><td>Arte</td><td>9,5</td><td>9,0</td><td>—</td><td>—</td><td>2</td></tr>
          <tr><td>Inglês</td><td>7,0</td><td>8,0</td><td>—</td><td>—</td><td>1</td></tr>
        </tbody>
      </table>
    </div>

    <p class="boletim-legenda">média para aprovação: 6,0 · limite de faltas: 25%</p>
  </div>

</section>
`;
