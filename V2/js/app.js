/* =========================================================
   APP.JS
   ---------------------------------------------------------
   Lógica de cada tela do app.

   Como o router.js troca o HTML de #app-content a cada
   navegação, os elementos de uma tela só existem enquanto
   ela está visível. Por isso cada tela tem sua própria
   função "init", chamada toda vez que a tela é carregada.

   Os dados permanentes (contas e sessão) ficam no
   localStorage, acessados pelo módulo Storage (js/storage.js).
   O objeto `state` abaixo guarda só o que é temporário.
   ========================================================= */

function atualizarHora() {
  const agora = new Date();
  const horas = String(agora.getHours()).padStart(2, "0");
  const minutos = String(agora.getMinutes()).padStart(2, "0");

  document.querySelectorAll(".clock").forEach((clockEl) => {
    clockEl.textContent = `${horas}:${minutos}`;
  });
}

/* ---------------------------------------------------------
   ESTADO TEMPORÁRIO (perdido ao recarregar — de propósito)
   --------------------------------------------------------- */
const state = {
  mode: null,          // "login" | "cadastro"
  pendingRole: null,   // perfil escolhido na tela de seleção
  cadastroDados: null, // dados entre a 1ª e a 2ª etapa do cadastro
  justCreated: false,  // true logo após finalizar um cadastro
  contaAtual: null,    // conta exibida no painel
};

/* Perfis disponíveis, com a cor (tone) usada nos botões */
const ROLES = {
  aluno:        { id: "aluno",        label: "aluno",        tone: "blue"  },
  professor:    { id: "professor",    label: "professor",    tone: "green" },
  gestao:       { id: "gestao",       label: "gestão",       tone: "blue"  },
  responsaveis: { id: "responsaveis", label: "responsáveis", tone: "green" },
};

/* ---------------------------------------------------------
   DESPACHANTE DE TELAS
   O router.js chama esta função assim que injeta uma tela.
   --------------------------------------------------------- */
window.onScreenLoaded = function (name) {
  atualizarHora();

  // GUARDA DE NAVEGAÇÃO
  // Se alguém recarregar a página em #perfil ou #login, o estado
  // temporário terá se perdido e a tela quebraria. Nesse caso,
  // voltamos ao começo em vez de mostrar uma tela sem dados.
  if (!podeAbrir(name)) {
    Router.replace("welcome");
    return;
  }

  updateSteps(name);

  switch (name) {
    case "welcome":   initWelcome();   break;
    case "role":      initRole();      break;
    case "login":     initLogin();     break;
    case "cadastro":  initCadastro();  break;
    case "perfil":    initPerfil();    break;
    case "dashboard": initDashboard(); break;
    default:          Router.replace("welcome");
  }
};

/** Verifica se a tela tem o estado mínimo necessário para abrir. */
function podeAbrir(name) {
  switch (name) {
    case "role":
      return Boolean(state.mode);
    case "login":
    case "cadastro":
      return Boolean(state.pendingRole);
    case "perfil":
      return Boolean(state.pendingRole && state.cadastroDados);
    case "dashboard":
      // Aqui vale a conta em memória OU a sessão salva no navegador
      return Boolean(state.contaAtual || Storage.contaLogada());
    default:
      return true; // welcome sempre pode
  }
}

/** Atualiza o indicador de progresso do painel lateral (desktop). */
function updateSteps(screenName) {
  const order = {
    welcome: 0, role: 1, cadastro: 2, login: 2, perfil: 3, dashboard: 3,
  };
  const current = order[screenName] ?? 0;

  document.querySelectorAll(".step").forEach((stepEl) => {
    stepEl.classList.toggle("done", Number(stepEl.dataset.step) <= current);
  });
}

/* =========================================================
   TELA: BOAS-VINDAS
   ========================================================= */
function initWelcome() {
  // Voltar ao início limpa o fluxo pela metade que tenha ficado
  state.mode = null;
  state.pendingRole = null;
  state.cadastroDados = null;

  document.getElementById("btn-go-login").addEventListener("click", () => {
    state.mode = "login";
    Router.navigate("role");
  });

  document.getElementById("btn-go-cadastro").addEventListener("click", () => {
    state.mode = "cadastro";
    Router.navigate("role");
  });

  // --- Aviso se o navegador estiver bloqueando o armazenamento ---
  if (!Storage.persistente()) {
    document.getElementById("welcome-sem-storage").hidden = false;
  }

  // --- Sessão salva: permite entrar direto, sem digitar a senha ---
  const conta = Storage.contaLogada();
  if (conta) {
    document.getElementById("welcome-sessao").hidden = false;
    document.getElementById("welcome-sessao-texto").textContent =
      `você está conectado como ${conta.username}.`;

    document.getElementById("btn-continuar-sessao").addEventListener("click", () => {
      state.contaAtual = conta;
      state.justCreated = false;
      Router.navigate("dashboard");
    });
  }

  // --- Contagem de contas salvas + botão de apagar tudo ---
  const contas = Storage.listarContas();
  if (contas.length > 0) {
    document.getElementById("storage-note").hidden = false;
    document.getElementById("storage-count").textContent =
      `${contas.length} conta(s) salva(s) neste navegador · `;

    document.getElementById("btn-apagar-dados").addEventListener("click", () => {
      const confirmar = confirm(
        "Isso vai apagar todas as contas salvas neste navegador. Deseja continuar?"
      );
      if (confirmar) {
        Storage.apagarTudo();
        state.contaAtual = null;
        Router.navigate("welcome"); // recarrega a tela já sem os dados
      }
    });
  }
}

/* =========================================================
   TELA: ESCOLHA DE PERFIL
   ========================================================= */
function initRole() {
  document.getElementById("role-title").textContent =
    state.mode === "login" ? "área de login" : "cadastrar conta";

  document.getElementById("btn-role-back").addEventListener("click", () => Router.back());

  // Um listener só para os 4 botões (delegação de evento)
  document.getElementById("role-list").addEventListener("click", (event) => {
    const button = event.target.closest(".role-btn");
    if (!button) return;

    state.pendingRole = ROLES[button.dataset.role];
    Router.navigate(state.mode === "login" ? "login" : "cadastro");
  });
}

/* =========================================================
   TELA: LOGIN
   ========================================================= */
function initLogin() {
  const role = state.pendingRole;
  document.getElementById("login-title").textContent = `login do ${role.label}`;

  // Aviso "conta criada" só aparece se viemos direto do cadastro
  document.getElementById("login-hint").hidden = !state.justCreated;

  // Pinta a caixa e o botão com a cor do perfil escolhido
  applyTone(document.getElementById("login-box"), role.tone);
  applyTone(document.getElementById("btn-login-submit"), role.tone);

  // Recém-cadastrado: já deixa o CPF preenchido
  if (state.justCreated && state.cadastroDados) {
    document.getElementById("login-identifier").value = state.cadastroDados.cpf;
  }

  document.getElementById("btn-login-back").addEventListener("click", () => Router.back());

  // Enter em qualquer campo também faz login
  document.querySelectorAll("#login-box .input").forEach((campo) => {
    campo.addEventListener("keydown", (e) => {
      if (e.key === "Enter") fazerLogin();
    });
  });

  document.getElementById("btn-login-submit").addEventListener("click", fazerLogin);

  function fazerLogin() {
    const identifier = document.getElementById("login-identifier").value.trim();
    const senha = document.getElementById("login-senha").value;
    const lembrar = document.getElementById("login-lembrar").checked;
    const errorEl = document.getElementById("login-error");

    if (!identifier || !senha) {
      showError(errorEl, "Preencha o Nome/CPF e a senha.");
      return;
    }

    // Procura a conta salva para este perfil
    const conta = Storage.buscarConta(identifier, role.id);

    if (!conta) {
      showError(errorEl, "Conta não encontrada para esse perfil. Cadastre-se primeiro.");
      return;
    }
    if (conta.senha !== senha) {
      showError(errorEl, "Nome/CPF ou senha incorretos.");
      return;
    }

    errorEl.hidden = true;

    // "Manter conectado" grava a sessão; caso contrário, limpa
    if (lembrar) {
      Storage.salvarSessao(conta.cpf, conta.role.id);
    } else {
      Storage.limparSessao();
    }

    state.contaAtual = conta;
    state.justCreated = false;
    Router.navigate("dashboard");
  }
}

/* =========================================================
   TELA: CRIAÇÃO DE CONTA (1ª etapa)
   ========================================================= */
function initCadastro() {
  document.getElementById("btn-cadastro-back").addEventListener("click", () => Router.back());

  document.getElementById("btn-cadastro-avancar").addEventListener("click", () => {
    const username = document.getElementById("cad-username").value.trim();
    const cpf = document.getElementById("cad-cpf").value.trim();
    const nascimento = document.getElementById("cad-nascimento").value;
    const senha = document.getElementById("cad-senha").value;
    const confirmar = document.getElementById("cad-confirmar").value;
    const errorEl = document.getElementById("cadastro-error");

    if (!username || !cpf || !nascimento || !senha || !confirmar) {
      showError(errorEl, "Preencha todos os campos para continuar.");
      return;
    }
    if (senha.length < 4) {
      showError(errorEl, "A senha precisa ter pelo menos 4 caracteres.");
      return;
    }
    if (senha !== confirmar) {
      showError(errorEl, "As senhas não coincidem.");
      return;
    }
    // Evita duas contas iguais no mesmo perfil
    if (Storage.contaExiste(cpf, state.pendingRole.id)) {
      showError(errorEl, "Já existe uma conta com esse CPF neste perfil.");
      return;
    }

    errorEl.hidden = true;

    // Guarda para juntar com os dados da próxima etapa
    state.cadastroDados = { username, cpf, nascimento, senha };
    Router.navigate("perfil");
  });
}

/* =========================================================
   TELA: CONFIGURAÇÕES DE PERFIL (2ª etapa — grava os dados)
   ========================================================= */
function initPerfil() {
  document.getElementById("btn-perfil-back").addEventListener("click", () => Router.back());

  document.getElementById("btn-finalizar").addEventListener("click", () => {
    const estado = document.getElementById("perfil-estado").value;
    const cidade = document.getElementById("perfil-cidade").value;
    const escola = document.getElementById("perfil-escola").value;
    const escolaridade = document.getElementById("perfil-escolaridade").value;
    const errorEl = document.getElementById("perfil-error");

    if (!estado || !cidade || !escola || !escolaridade) {
      showError(errorEl, "Selecione todas as opções para finalizar.");
      return;
    }

    errorEl.hidden = true;

    // Monta a conta final juntando as duas etapas do cadastro
    const conta = {
      role: state.pendingRole,
      ...state.cadastroDados,
      estado,
      cidade,
      escola,
      escolaridade,
      criadoEm: new Date().toISOString(), // carimbo de criação
    };

    // ---- GRAVAÇÃO NO NAVEGADOR ----
    const salvou = Storage.salvarConta(conta);
    if (!salvou) {
      showError(errorEl, "Não foi possível salvar os dados neste navegador.");
      return;
    }

    state.justCreated = true;
    Router.navigate("login"); // leva direto ao login daquele perfil
  });
}

/* =========================================================
   TELA: PAINEL (mostra os dados salvos)
   ========================================================= */
function initDashboard() {
  // Conta carregada no login ou, se a página foi recarregada,
  // a conta da sessão salva no navegador.
  const conta = state.contaAtual || Storage.contaLogada();
  state.contaAtual = conta;

  document.getElementById("dash-username").textContent = conta.username;
  document.getElementById("dash-role-badge").textContent = `conta de ${conta.role.label}`;
  document.getElementById("dash-cpf").textContent = conta.cpf || "—";
  document.getElementById("dash-nascimento").textContent = formatDate(conta.nascimento);
  document.getElementById("dash-estado").textContent = conta.estado || "—";
  document.getElementById("dash-cidade").textContent = conta.cidade || "—";
  document.getElementById("dash-escola").textContent = conta.escola || "—";
  document.getElementById("dash-escolaridade").textContent = conta.escolaridade || "—";

  if (conta.criadoEm) {
    document.getElementById("dash-criado-em").textContent =
      `conta salva neste navegador em ${formatDateTime(conta.criadoEm)}`;
  }

  document.getElementById("btn-sair").addEventListener("click", () => {
    Storage.limparSessao();   // encerra a sessão, mantendo a conta salva
    state.contaAtual = null;
    state.justCreated = false;
    Router.navigate("welcome");
  });
}

/* =========================================================
   FUNÇÕES AUXILIARES
   ========================================================= */

/** Mostra uma mensagem em um elemento <p class="error">. */
function showError(element, message) {
  element.textContent = message;
  element.hidden = false;
}

/** Aplica a cor (azul/verde) do perfil escolhido a um elemento. */
function applyTone(element, tone) {
  element.classList.remove("btn-blue", "btn-green");
  if (element.id === "login-box") {
    element.style.borderColor = tone === "blue" ? "#2563eb" : "#047857";
  } else {
    element.classList.add(tone === "blue" ? "btn-blue" : "btn-green");
  }
}

/** Converte "AAAA-MM-DD" (do <input type="date">) para "DD/MM/AAAA". */
function formatDate(isoDate) {
  if (!isoDate) return "—";
  const [ano, mes, dia] = isoDate.split("-");
  return `${dia}/${mes}/${ano}`;
}

/** Formata a data/hora de criação da conta em português. */
function formatDateTime(isoString) {
  const d = new Date(isoString);
  return d.toLocaleString("pt-BR", {
    day: "2-digit", month: "2-digit", year: "numeric",
    hour: "2-digit", minute: "2-digit",
  });
}

/* =========================================================
   PONTO DE PARTIDA
   Se já existe uma sessão salva, abre direto no painel.
   Caso contrário, começa pela tela de boas-vindas.
   ========================================================= */
atualizarHora();
setInterval(atualizarHora, 60000);

const contaSalva = Storage.contaLogada();
if (contaSalva) {
  state.contaAtual = contaSalva;
  Router.start("dashboard");
} else {
  Router.start("welcome");
}
