import React from "react";
import image from "../images/redirectButton.png"

function Projetos() {
  return(
    <div className="projects-absolut-container">
      <div className="projects-title-container">
        <h1>
          Projetos
        </h1>
      </div>      
      <div className="projects-main-container">
        <div className="projects-container">
          <div>
            <h1>
              TrybeWarts Formulário
            </h1>
            <p>
              O projeto TrybeWarts, consiste na criação de um formulário utilizando HTML, Css e JavaScript. Foi um projeto desenvolvido em dupla com o intuito de aplicarmos nossas habilidades de soft-skills como a comunicação e colaboração. Nele tivemos de coletar as informações do usúario e simular o envio a um banco de dados utilizando a tag Form do HTML.
            </p>
          </div>
          <div className="tecnologia-link-container">
            <h2>Acessar repositório</h2>
            <a href="https://github.com/IgorBrizack/trybewarts" target='_blank' rel="noreferrer">
            <img className="redirect-button" alt="githubImg" height="30" width="40" src={image} /> 
            </a>
          </div>
        </div>
        <div className="projects-container">
          <div>
            <h1>
              Shopping Cart Project
            </h1>
            <p>
              O projeto Shopping Cart, foi o último projeto desenvolvido no módulo de fundamentos da Trybe. Nesse projeto foram aplicados a maioria dos conhecimentos adquiridos durante esse período. Alguns dos principais conhecimentos aplicados foram, os testes com o JEST, a aplicação das High Order Functions para simplificar nosso código e a requisição da API do Mercado Livre para alimentar o nosso sistema. Criamos assim um e-commerce onde o usuário poderia selecionar produtos para adicionar ao carrinho de compras.
            </p> 
          </div>
          <div className="tecnologia-link-container">
            <h2>Acessar repositório</h2>
            <a href="https://github.com/IgorBrizack/TrybeShopping" target='_blank' rel="noreferrer">
            <img className="redirect-button" alt="githubImg" height="30" width="40" src={image} /> 
            </a>
          </div>
        </div>
        <div className="projects-container">
          <div>
            <h1>
              TrybeTunes React App
            </h1>
            <p>
              O projeto TrybeTunes, foi um projeto idealizado pela Trybe durante o módulo de front-end. Tivemos como nossa principal ferramenta de desenvolvimento em front-end o React.js que atualmente é o mais utilizado no mercado. O projeto consiste em consumir uma API da Apple Music que nos fornece os albuns dos artistas buscados e previews das músicas ali existentes. Nos foi soliciatado que houvessem algumas implementações, como tela de login, opção de favoritar músicas e alterar perfil. Abaixo estará o link do respositório com mais informações e link da página.
            </p>
          </div>
          <div className="tecnologia-link-container">
            <h2>Acessar repositório</h2>
            <a href="https://github.com/IgorBrizack/TrybeTunes-projeto-pessoal" target='_blank' rel="noreferrer">
            <img className="redirect-button" alt="githubImg" height="30" width="40" src={image} /> 
            </a>
          </div>
        </div>
        <div className="projects-container">
          <div>
            <h1>
              Jogo de Trivia
            </h1>
            <p>
              O projeto jogo de Trivia foi elaborado para que fosse feito em equipe buscando implementar na nossa rotina diária o uso de metódologias ágeis afim de melhorarmos a nossa comunicação e trabalho em equipe. O projeto consistia em desenvolver uma aplicação que gerasse um jogo de perguntas e respostas, com implementação de Ranking por jogador. Um dos requisitos principais era que para manipulação do estado global da nossa aplicação fosse utilizado o Redux. Foram também solicitados os testes da aplicação utilizando RTL. 
            </p>
          </div>
          <div className="tecnologia-link-container">
            <h2>Acessar repositório</h2>
            <a href="https://github.com/IgorBrizack/Trivia-React-Redux" target='_blank' rel="noreferrer">
            <img className="redirect-button" alt="githubImg" height="30" width="40" src={image} /> 
            </a>
          </div>
        </div>
        <div className="projects-container">
          <div>
            <h1>
              App de Receitas
            </h1>
            <p>
              O projeto App de Receitas, foi elaborado pela trybe como nosso último projeto do módulo de front-end, aqui foi determinado que devemos utilizar componentes funcionais, hooks e como gerenciado do estado global o ContextApi. Esse projeto foi elaborado em grupo reforçando a necessidade de desenvolvermos as habilidade de soft-skills.
            </p>
          </div>
          <div className="tecnologia-link-container">
            <h2>Acessar repositório</h2>
            <a href="https://github.com/IgorBrizack/TrybeFoodApp" target='_blank' rel="noreferrer">
            <img className="redirect-button" alt="githubImg" height="30" width="40" src={image} /> 
            </a>
          </div>
        </div>
        <div className="projects-container">
          <div>
            <h1>
              Store Manager API MSC
            </h1>
            <p>
              A aplicação Store Manager API, consiste na criação de uma API Restful utilizando o padrão MSC (Model, Service, Controller), durante o densenvimento foi solicitado que a aplicação houvesse 60% de cobertura dos testes unitários.
            </p>
          </div>
          <div className="tecnologia-link-container">
            <h2>Acessar repositório</h2>
            <a href="https://github.com/IgorBrizack/ProjetoStoreManager" target='_blank' rel="noreferrer">
            <img className="redirect-button" alt="githubImg" height="30" width="40" src={image} /> 
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projetos