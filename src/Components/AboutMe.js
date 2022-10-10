import React from "react";
import perfilImage from "../images/perfil.png"

function AboutMe() {
  return (
    <div className="about-main-container">
      <div className="about-texts-container">
        <h1>
          Sobre mim...
        </h1>
        <div className="pefil-image-container">
          <img  className="perfil-image" align="center" alt="Igor" src={perfilImage} />
        </div>
        <div className="about-me-text">
          <p>
            Olá, me chamo Igor Brizack, sou de Salvador - Ba - Brasil. Tenho 27 anos e sou formado em Engenharia Civil. Sou novo aluno da Trybe, cursando na turma 21. Nesse momento estou em transição de carreira buscando ingressar na área de tecnologia como Desenvolvedor Web Full-Stack. No atual momento, finalizei o módulo de Front-End e estou caminhando para a conclusão do módulo de Back-End.
          </p>
        </div>
      </div>
      <div className="tecnologias-main-container">
        <h1>
          Tecnologias
        </h1>
        <div className="tecnologias-container">
          <img className="tecnologias-styles" align="center" alt="Igor" title="JavaScript" height="50" width="60" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" />
          <img className="tecnologias-styles" align="center" alt="Igor-React"  title="React" height="50" width="60" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" />
          <img className="tecnologias-styles" align="center" alt="Igor-HTML" title="HTML" height="50" width="60" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" />
          <img className="tecnologias-styles" align="center" alt="Igor-CSS" title="CSS" height="50" width="60" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" />
          <img className="tecnologias-styles" align="center" alt="Igor-Redux"  title="Redux" height="50" width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />
          <img className="tecnologias-styles" align="center" alt="Igor-Jest"  title="Jest" height="50" width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" />
          <img className="tecnologias-styles" align="center" alt="Igor-Git"  title="Git" height="50" width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
          <img className="tecnologias-styles" align="center" alt="Igor-BootStrap" title="BootStrap" height="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
          <img className="tecnologias-styles" align="center" alt="Igor-Docker"  title="Docker" height="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" />
          <img className="tecnologias-styles" align="center" alt="Igor-mySQL" title="SQL" height="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
          <img className="tecnologias-styles" align="center" alt="Igor-nodeJS" title="Node.js" height="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" />
          <img className="tecnologias-styles" align="center" alt="Igor-TypeScript" title="TypeScript" height="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
        </div>
      </div>
    </div>
  ) 
}

export default AboutMe;