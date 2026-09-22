# Agenda Escolar

App de exemplo com cadastro e login, responsivo do celular ao monitor,
salvando os dados no próprio navegador.

## Como abrir

Dê **duplo clique no `index.html`**. Só isso — não precisa instalar nem
rodar nada.

## Estrutura de pastas

```
agenda-escolar/
├── index.html            # abra este arquivo
├── README.md
├── css/
│   └── style.css          # todo o visual (mobile-first)
├── js/
│   ├── pages.js           # cria o objeto onde as telas se registram
│   ├── storage.js         # salva e lê os dados no navegador
│   ├── router.js          # troca as telas sem recarregar a página
│   └── app.js             # lógica de cada tela (cadastro, login, painel)
└── pages/                 # uma tela por arquivo
    ├── welcome.js          # boas-vindas
    ├── role.js             # escolha de perfil
    ├── login.js            # login
    ├── cadastro.js         # criação de conta
    ├── perfil.js           # configurações de perfil
    └── dashboard.js        # painel com os dados
```

### Por que as telas são `.js` e não `.html`?

Para o duplo clique funcionar. Se cada tela fosse um `.html` separado, o
navegador precisaria buscá-la com `fetch()`, e isso é bloqueado em arquivos
abertos localmente. Como `<script>` não sofre esse bloqueio, cada tela
continua no seu próprio arquivo — só que o HTML fica dentro de crases:

```js
PAGES.welcome = `
  <section class="screen">
    ... seu HTML normal aqui ...
  </section>
`;
```

Na prática você edita igual a um `.html`: é só mexer no que está entre as
crases. O único cuidado é não usar o caractere ` (crase) dentro do HTML.

## Como os dados são salvos

Tudo fica no navegador, via `localStorage` (código em `js/storage.js`):

- o cadastro **continua salvo** depois de fechar o navegador;
- marcando *"manter conectado"*, o app reabre direto no painel;
- **"sair"** encerra a sessão mas mantém a conta salva;
- **"apagar dados salvos"**, na tela inicial, limpa tudo.

Para espiar o que está guardado: F12 → aba **Application** → **Local Storage**.

> ⚠️ Por ser um projeto de estudo, a senha é salva em texto puro. Num
> sistema real ela nunca ficaria no navegador — iria para um servidor,
> guardada de forma criptografada.

## Navegação

O app usa o hash da URL (`#welcome`, `#login`, `#dashboard`), então:

- nunca sai da aba nem recarrega ao trocar de tela;
- o botão **voltar do navegador** funciona normalmente;
- os botões **"← voltar"** da tela fazem a mesma coisa.

## Fluxo

1. **Boas-vindas** → "login" ou "cadastro"
2. **Escolha de perfil** (aluno, professor, gestão ou responsáveis)
3. **Criação de conta**: usuário, CPF, nascimento, senha
4. **Configurações de perfil**: estado, cidade, escola, escolaridade →
   *finalizar* salva a conta
5. Vai para o **login** do perfil, com o CPF já preenchido
6. Entrando, o **painel** mostra todos os dados salvos
