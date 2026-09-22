function telaInicio() {
    return `
        <main class="tela">
            <h1>Criação de conta</h1>

    <div id="botao-voltar">
        <i class="bi bi-arrow-left"></i> voltar
    </div>

    <div src="fundo-branco-criacao-de-conta">
        <input type="text" id="nome-de-usuario" placeholder="Nome de usuário">
        <input type="text" id="CPF" placeholder="Digite seu CPF">
        <input type="date" id="CPF" placeholder="Data de nascimento">
        <input type="password" id="Senha1" placeholder="senha">
        <input type="password" id="Senha2" placeholder="Confirmar senha">
        
        <button>Acessar</button>
    </div>
        </main>
    `;
}
