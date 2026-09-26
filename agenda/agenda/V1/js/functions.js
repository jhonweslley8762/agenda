const areaPaginas = document.getElementById('escolha-paginas');
const imagem = document.getElementById('imagem-pagina-inicial-aluno')
const tituloPagina = document.getElementById('titulo-pagina-header1')

const criarDiv = (id, classe1, classe2, texto = '') =>{
    const div = document.createElement('div')
    const mensagem = document.createElement('h1')
    div.id = id,
    div.classList.add(classe1)
    div.classList.add(classe2)
    mensagem.textContent = texto
    div.appendChild(mensagem)
    return div;
}

function limparArea(){
    areaPaginas.innerHTML = "";
}

function adicionarBotaoVoltar(){
    imagem.innerHTML = '';

    const voltar = document.createElement('h1');
    voltar.textContent = '← voltar';
    voltar.dataset.voltar = 'true';
    voltar.classList.add('texto-voltar');
    voltar.setAttribute('role', 'button');
    voltar.setAttribute('tabindex', '0');

    imagem.appendChild(voltar);
}

function paginaInicialAlunoFuncao(){
    limparArea()

    tituloPagina.textContent = 'Área do estudante'
    imagem.style.height = '50vw'
    imagem.innerHTML = '';
    imagem.style.background = 'gray'

    const div1 = criarDiv('pagina-escolar', 'opção-azul', 'paginas-botoes', 'Página escolar');
    const div2 = criarDiv('sala-do-aluno', 'opção-verde', 'paginas-botoes', 'Sala do aluno');
    const div3 = criarDiv('pagina-pessoal', 'opção-azul', 'paginas-botoes', 'Página pessoal');
    const div4 = criarDiv('pagina-grupos-estudantis', 'opção-verde', 'paginas-botoes', 'Grupos estudantis');

    areaPaginas.appendChild(div1)
    areaPaginas.appendChild(div2)
    areaPaginas.appendChild(div3)
    areaPaginas.appendChild(div4)
}

function paginaPessoalFuncao(){
    const div1 = criarDiv('pagina-boletim-aluno', 'opção-azul', 'paginas-botoes', 'Boletim')
    const div2 = criarDiv('pagina-anotacoes-aluno', 'opção-verde','paginas-botoes', 'Anotações')
    const div3 = criarDiv('pagina-informações-aluno', 'opção-azul','paginas-botoes', 'informações')
    areaPaginas.appendChild(div1);
    areaPaginas.appendChild(div2);
    areaPaginas.appendChild(div3);
}

document.addEventListener('click', function(event){
    const paginaPessoal = event.target.closest('#pagina-pessoal');
    if (paginaPessoal) {
        imagem.style.height = '10vw';
        imagem.style.background = '#EFEFEF';
        tituloPagina.textContent = 'Página pessoal';
        adicionarBotaoVoltar();

        limparArea();
        paginaPessoalFuncao();
        return;
    }

    const botaoVoltar = event.target.closest('[data-voltar="true"]');
    if (botaoVoltar) {
        paginaInicialAlunoFuncao();
    }
});

paginaInicialAlunoFuncao();