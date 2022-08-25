import React, {useEffect, useState} from "react";

function Projetos() {
  const [redirectFoodApp, setRedirectFoodApp] = useState(false);
  const [redirectTriviaApp, setRedirecTriviaApp] = useState(false);
  const [redirectTrybetunesApp, setRedirectTrybetunesApp] = useState(false);
  const [redirectTrybeWarts, setRedirectTrybeWarts] = useState(false);
  const [redirectShoppingCart, setRedirectShoppingCart] = useState(false);

  useEffect(() => {
    if(redirectFoodApp) {
      window.location.href = 'https://github.com/IgorBrizack/TrybeFoodApp';
    }

    if(redirectTriviaApp) {
      window.location.href = 'https://github.com/IgorBrizack/Trivia-React-Redux';
    }

    if(redirectTrybetunesApp) {
      window.location.href = 'https://github.com/IgorBrizack/TrybeTunes-projeto-pessoal';
    }

    if(redirectTrybeWarts) {
      window.location.href = 'https://github.com/IgorBrizack/trybewarts';
    }

    if(redirectShoppingCart) {
      window.location.href = 'https://github.com/IgorBrizack/TrybeShopping';
    }
  }, [
    redirectFoodApp,
    redirectTriviaApp,
    redirectTrybetunesApp,
    redirectTrybeWarts, 
    redirectShoppingCart
  ]) 

  return(
    <div>
      <h1>
        Projetos
      </h1>
      <div>
        <div>
          <h1>
            TrybeWarts Formulário
          </h1>
          <p>
            O projeto TrybeWarts, consiste na criação de um formulário utilizando HTML, Css e JavaScript. Foi um projeto desenvolvido em dupla com o intuito de aplicarmos nossas habilidades de soft-skills como a comunicação e colaboração. Nele tivemos de coletar as informações do usúario e simular o envio a um banco de dados utilizando a tag Form do HTML.
          </p>
          <button
            type="button"
            onClick={() => setRedirectTrybeWarts(!redirectShoppingCart)}
          >Acessar Repositório</button>
        </div>
        <div>
          <h1>
            Shopping Cart Project
          </h1>
          <p>
            O projeto Shopping Cart, foi o último projeto desenvolvido no módulo de fundamentos da Trybe. Nesse projeto foram aplicados a maioria dos conhecimentos adquiridos durante esse período. Alguns dos principais conhecimentos aplicados foram, os testes com o JEST, a aplicação das High Order Functions para simplificar nosso código e a requisição da API do Mercado Livre para alimentar o nosso sistema. Criamos assim um e-commerce onde o usuário poderia selecionar produtos para adicionar ao carrinho de compras.
          </p>
          <button
            type="button"
            onClick={() => setRedirectShoppingCart(!redirectShoppingCart)}
          >Acessar Repositório</button>
        </div>
        <div>
          <h1>
            TrybeTunes React App
          </h1>
          <p>
            O projeto TrybeTunes, foi um projeto idealizado pela Trybe durante o módulo de front-end. Tivemos como nossa principal ferramenta de desenvolvimento em front-end o React.js que atualmente é o mais utilizado no mercado. O projeto consiste em consumir uma API da Apple Music que nos fornece os albuns dos artistas buscados e previews das músicas ali existentes. Nos foi soliciatado que houvessem algumas implementações, como tela de login, opção de favoritar músicas e alterar perfil. Abaixo estará o link do respositório com mais informações e link da página.
          </p>
          <button
            type="button"
            onClick={() => setRedirectTrybetunesApp(!redirectTrybetunesApp)}
          >Acessar Repositório</button>
        </div>
        <div>
          <h1>
            Jogo de Trivia
          </h1>
          <p>
            O projeto jogo de Trivia foi elaborado para que fosse feito em equipe buscando implementar na nossa rotina diária o uso de metódologias ágeis afim de melhorarmos a nossa comunicação e trabalho em equipe. O projeto consistia em desenvolver uma aplicação que gerasse um jogo de perguntas e respostas, com implementação de Ranking por jogador. Um dos requisitos principais era que para manipulação do estado global da nossa aplicação fosse utilizado o Redux. Foram também solicitados os testes da aplicação utilizando RTL. 
          </p>
          <button
            type="button"
            onClick={() => setRedirecTriviaApp(!redirectTriviaApp)}
          >Acessar Repositório</button>
        </div>
        <div>
          <h1>
            App de Receitas
          </h1>
          <p>
            O projeto App de Receitas, foi elaborado pela trybe como nosso último projeto do módulo de front-end, aqui foi determinado que devemos utilizar componentes funcionais, hooks e como gerenciado do estado global o ContextApi. Esse projeto foi elaborado em grupo reforçando a necessidade de desenvolvermos as habilidade de soft-skills.
          </p>
          <button
            type="button"
            onClick={() => setRedirectFoodApp(!redirectFoodApp)}
          >Acessar Repositório</button>
        </div>
      </div>
    </div>
  )
}

export default Projetos