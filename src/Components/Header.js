import React from "react";

function Header () {
 
  return (
    <header className="header-main-container">
      <div className="header-title-container">
        <h1>Igor Brizack - Portfolio Web</h1>
      </div>
      <div className="icons-main-container">
        <a href="https://github.com/IgorBrizack" target='_blank' rel="noreferrer">
          <img alt="githubImg" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" /> 
        </a>
        <a href="https://www.linkedin.com/in/igor-brizack/" target='_blank' rel="noreferrer">
          <img alt="LinkeInImg" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" /> 
        </a>
      </div>
    </header>
  )
}

export default Header;