/* =========================================================
   STORAGE.JS
   ---------------------------------------------------------
   Camada de persistência local do app.

   Os dados são salvos no localStorage do navegador, então
   continuam lá mesmo depois de fechar a aba ou desligar o
   computador — até o usuário limpar os dados do navegador
   ou clicar em "apagar dados salvos" dentro do app.

   Duas chaves são usadas:

     agenda_escolar:contas   → lista com todas as contas criadas
     agenda_escolar:sessao   → quem está logado no momento

   Sobre abrir com duplo clique (file://):
   A maioria dos navegadores permite localStorage em file://,
   mas alguns (o Safari e o Firefox em modo restrito) bloqueiam.
   Por isso existe um FALLBACK em memória: se o localStorage
   não estiver disponível, o app continua funcionando
   normalmente na sessão atual — só não lembra dos dados
   depois que a aba é fechada. O app avisa isso na tela.

   OBS.: como é um projeto de estudo, a senha é guardada em
   texto puro. Num sistema real a senha nunca ficaria assim —
   ela iria para um servidor, criptografada.
   ========================================================= */

const Storage = (() => {
  const CHAVE_CONTAS = "agenda_escolar:contas";
  const CHAVE_SESSAO = "agenda_escolar:sessao";

  // Usado só quando o localStorage não estiver disponível
  const memoria = {};

  /**
   * Testa de verdade se dá para gravar no localStorage.
   * Alguns navegadores deixam o objeto existir mas lançam erro
   * na hora de escrever — por isso o teste faz um set/remove.
   */
  const localStorageDisponivel = (() => {
    try {
      const teste = "__teste_agenda__";
      localStorage.setItem(teste, "1");
      localStorage.removeItem(teste);
      return true;
    } catch (erro) {
      console.warn(
        "localStorage indisponível — os dados só valerão nesta sessão.",
        erro
      );
      return false;
    }
  })();

  /* -------------------------------------------------------
     Leitura e escrita genéricas, com fallback em memória
     ------------------------------------------------------- */
  function ler(chave, valorPadrao) {
    try {
      const bruto = localStorageDisponivel
        ? localStorage.getItem(chave)
        : memoria[chave];
      return bruto ? JSON.parse(bruto) : valorPadrao;
    } catch (erro) {
      console.warn("Não foi possível ler os dados salvos:", erro);
      return valorPadrao;
    }
  }

  function escrever(chave, valor) {
    try {
      const texto = JSON.stringify(valor);
      if (localStorageDisponivel) {
        localStorage.setItem(chave, texto);
      } else {
        memoria[chave] = texto;
      }
      return true;
    } catch (erro) {
      console.warn("Não foi possível salvar os dados:", erro);
      return false;
    }
  }

  function remover(chave) {
    try {
      if (localStorageDisponivel) {
        localStorage.removeItem(chave);
      } else {
        delete memoria[chave];
      }
    } catch (erro) {
      console.warn("Não foi possível remover os dados:", erro);
    }
  }

  /* -------------------------------------------------------
     CONTAS
     ------------------------------------------------------- */

  /** Retorna todas as contas já cadastradas (array). */
  function listarContas() {
    return ler(CHAVE_CONTAS, []);
  }

  /**
   * Salva uma conta. Se já existir uma com o mesmo CPF e perfil,
   * ela é substituída (funciona como "atualizar cadastro").
   */
  function salvarConta(conta) {
    const contas = listarContas();
    const indice = contas.findIndex(
      (c) => c.cpf === conta.cpf && c.role.id === conta.role.id
    );

    if (indice >= 0) {
      contas[indice] = conta;
    } else {
      contas.push(conta);
    }

    return escrever(CHAVE_CONTAS, contas);
  }

  /**
   * Procura uma conta pelo CPF OU pelo nome de usuário, dentro
   * de um perfil específico. Assim um mesmo CPF pode ter contas
   * em perfis diferentes (aluno e responsável, por exemplo).
   */
  function buscarConta(identificador, roleId) {
    return listarContas().find(
      (c) =>
        c.role.id === roleId &&
        (c.cpf === identificador || c.username === identificador)
    );
  }

  /** Verifica se já existe conta com esse CPF nesse perfil. */
  function contaExiste(cpf, roleId) {
    return listarContas().some((c) => c.cpf === cpf && c.role.id === roleId);
  }

  /* -------------------------------------------------------
     SESSÃO (quem está logado)
     ------------------------------------------------------- */

  /** Marca quem entrou, para o app lembrar no próximo acesso. */
  function salvarSessao(cpf, roleId) {
    return escrever(CHAVE_SESSAO, { cpf, roleId });
  }

  /** Retorna a conta de quem está logado, ou null se ninguém estiver. */
  function contaLogada() {
    const sessao = ler(CHAVE_SESSAO, null);
    if (!sessao) return null;

    return (
      listarContas().find(
        (c) => c.cpf === sessao.cpf && c.role.id === sessao.roleId
      ) || null
    );
  }

  /** Encerra a sessão (botão "sair") — a conta continua salva. */
  function limparSessao() {
    remover(CHAVE_SESSAO);
  }

  /* -------------------------------------------------------
     LIMPEZA TOTAL
     ------------------------------------------------------- */

  /** Apaga contas e sessão — volta o app ao estado inicial. */
  function apagarTudo() {
    remover(CHAVE_CONTAS);
    remover(CHAVE_SESSAO);
    return true;
  }

  /** Informa se os dados vão mesmo sobreviver ao fechar a aba. */
  function persistente() {
    return localStorageDisponivel;
  }

  /* -------------------------------------------------------
     DADOS SOLTOS DAS TELAS (anotações, informações, chats)
     Cada um guarda o que quiser numa chave própria, por
     exemplo "anotacoes:12345678900:aluno".
     ------------------------------------------------------- */

  /** Salva qualquer valor (texto, lista, objeto) numa chave. */
  function salvarDado(chave, valor) {
    return escrever(`agenda_escolar:dado:${chave}`, valor);
  }

  /** Lê o valor de uma chave; devolve valorPadrao se não houver. */
  function lerDado(chave, valorPadrao) {
    return ler(`agenda_escolar:dado:${chave}`, valorPadrao);
  }

  return {
    salvarDado,
    lerDado,
    listarContas,
    salvarConta,
    buscarConta,
    contaExiste,
    salvarSessao,
    contaLogada,
    limparSessao,
    apagarTudo,
    persistente,
  };
})();
