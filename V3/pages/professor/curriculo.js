PAGES.curriculo = 

`<section class="screen screen-app" id="screen-estudante">

        <header class="app-bar-professor">
            <span class="app-bar-title">currículo</span>
            <button class="app-bar-menu" aria-label="menu">☰</button>
        </header>

        <div class="back-row">
            <button class="btn-voltar" data-voltar>← voltar</button>
        </div>

        <div class="card-body" id="estudante-menu">
            <div class="stack">
                <!--quadrado laranja de fundo do header do currículo-->
                <div class="container-header-curriculo">
                    <!--por enquanto div com cor, mas no futuro será uma imagem <img>-->
                    <div class="imagem-curriculo"></div>
                    <div class="informacoes-professor">
                        <h2>nome do profissional</h2>
                        <h3>cargo</h3>
                        <p>endereço: rua tal bairro tal</p>
                        <p>+xx (xx) xxxxx-xxxx</p>
                        <p>exemplo@gmail.com</p>
                    </div>
                </div>

                <div class="container-mensagem">
                    <h3 class="titulo-curriculo">perfil</h3>

                    <p id="mensagem-perfil">Essa é a minha mensagem para o meu currículo profissional de trabalho. hehe hehe hehe heh</p>
                    
                    <h3 class="titulo-curriculo">experiência profissional</h3>
                    
                    <ul class="lista-nao-ordenada-curriculo-professor">
                        <li>alguma qualidade aí</li>
                        <li>comunicação boa e ótimo trabalho em equipe</li>
                        <li>um ótimo programador para seu trabalho</li>
                    </ul>
                </div>


                <button class="nav-btn botao-editar" id="botao-editar-curriculo" data-ir="atualizar-curriculo" data-em-breve="1">📝</button>
            
            </div>

            <p class="em-breve" id="estudante-aviso" hidden></p>

            <div class="home-bar">
                <button class="home-btn" id="btn-home-estudante" aria-label="início" data-home>⌂</button>
            </div>
        </div>
        `;