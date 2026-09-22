/* =========================================================
   PAGES.JS
   ---------------------------------------------------------
   Registro das telas do app.

   Este arquivo só cria o objeto vazio PAGES. Cada arquivo da
   pasta /pages preenche uma posição dele:

       PAGES.welcome = `...html da tela...`;
       PAGES.login   = `...html da tela...`;

   Depois o router.js pega o HTML daqui e joga na página.

   Por que as telas são arquivos .js e não .html?
   Porque assim o app funciona com duplo clique no index.html.
   Se as telas fossem .html, o navegador precisaria buscá-las
   com fetch(), e o fetch é bloqueado em arquivos abertos
   localmente (protocolo file://). Como <script> não sofre esse
   bloqueio, as telas continuam cada uma em seu arquivo — só
   que embrulhadas em uma variável.

   Para editar uma tela, mexa direto no arquivo dela em /pages.
   O HTML fica entre crases (`), então você escreve normalmente,
   em várias linhas.
   ========================================================= */

const PAGES = {};
