/* =========================================================
   ROUTER.JS
   ---------------------------------------------------------
   Troca as telas do app sem nunca recarregar a página nem
   sair da aba.

   Como funciona:
     1. pega o HTML da tela no objeto PAGES (preenchido pelos
        arquivos da pasta /pages)
     2. joga esse HTML dentro de <div id="app-content">
     3. usa o hash da URL (#welcome, #login...) para saber em
        qual tela o app está

   O hash é o que faz o botão "voltar" do navegador funcionar:
   cada mudança de hash vira uma entrada no histórico. E, por
   ser só hash, funciona tanto com duplo clique no arquivo
   quanto em um servidor.
   ========================================================= */

const Router = (() => {
  const CONTENT_EL_ID = "app-content";
  const TELA_INICIAL = "welcome";

  // Impede o router de reagir a um hash que ele mesmo mudou
  let ignorarProximaMudanca = false;

  /* Mostra uma tela na área de conteúdo, sem mexer na URL */
  function render(name) {
    const container = document.getElementById(CONTENT_EL_ID);
    const html = PAGES[name];

    if (!html) {
      container.innerHTML = `<p class="error">Tela "${name}" não encontrada.</p>`;
      return;
    }

    container.innerHTML = html;

    // Avisa o app.js que a tela entrou na página, para ele
    // conectar os botões e campos dessa tela.
    if (typeof window.onScreenLoaded === "function") {
      window.onScreenLoaded(name);
    }
  }

  /* Lê o nome da tela a partir do hash da URL */
  function lerHash() {
    return location.hash.replace("#", "") || TELA_INICIAL;
  }

  /* Vai para uma tela, criando uma entrada no histórico */
  function navigate(name) {
    if (lerHash() === name) {
      // Mesmo destino: o hash não muda, então o evento não
      // dispara e renderizamos na mão.
      render(name);
      return;
    }
    location.hash = name;
  }

  /* Volta uma tela — igual ao botão voltar do navegador */
  function back() {
    history.back();
  }

  /* Troca a tela SEM criar entrada no histórico (redirecionar) */
  function replace(name) {
    ignorarProximaMudanca = lerHash() !== name;
    location.hash = name;
    render(name);
  }

  // Botão voltar/avançar do navegador ou qualquer troca de hash
  window.addEventListener("hashchange", () => {
    if (ignorarProximaMudanca) {
      ignorarProximaMudanca = false;
      return;
    }
    render(lerHash());
  });

  /* Abre a primeira tela. Chamado uma única vez pelo app.js */
  function start(tela) {
    ignorarProximaMudanca = lerHash() !== tela;
    location.hash = tela;
    render(tela);
  }

  return { navigate, back, replace, start, lerHash };
})();
