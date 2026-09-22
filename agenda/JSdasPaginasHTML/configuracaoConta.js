function telaInicio() {
    return `
        <main class="tela">
            <h1>Configurações de perfil</h1>

    <div id="botao-voltar">
        <i class="bi bi-arrow-left"></i> voltar
    </div>

    <div src="fundo-branco-configuracoes-de-perfil">
        <input type="text" id="Estado" placeholder="Selecionar Estado">
        <input type="text" id="Cidade" placeholder="Selecionar Cidade">
        <input type="text" id="Escola" placeholder="Selecionar Escola">
        <input type="text" id="Escolaridade" placeholder="Escolaridade">

        <button>Finalizar</button>
    </div>
        </main>
    `;
}
