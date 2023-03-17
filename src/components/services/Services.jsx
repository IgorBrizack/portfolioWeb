import React, { useState } from "react";
import "./services.css"

const Services = () => {

	const [toggleState, setToggleState] = useState(0);

	const toggleTab = (index) => {
		setToggleState(index)
	}
  	return (
		<section className="services section" id="services">
			<h2 className="section__title">Services</h2>
			<span className="section__subtitle">What I offer</span>

			<div className="services__container container grid">
				<div className="services__content">
					<div>
						<i className="uil uil-web-grid services__icon"></i>
						<h3 className="services__title">Frontend</h3>
					</div>

					<span className="services__button" onClick={() => toggleTab(1)}>View More
					<i className="uil uil-arrow-right services__button-icon"></i>
					</span>

					<div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
						<div className="services__modal-content">
							<i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
							<h3 className="services__modal-title">Frontend Development</h3>
							<p className="services__modal-description">
								Projetos desenvolvidos ao longo de um ano, contemplando cobertura de testes, boas práticas de programação, desenvolvimento de telas de usuários, implementação de bibliotecas, integração com Backend e desenvolvimento de testes
							</p>

							<ul className="services__modal-services grid">
								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">
										Desenvolvo telas de usuário.
									</p>
								</li>

								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">
										Integração com API's externas.
									</p>
								</li>

								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">
										desenvolvimento com frameworks e bibliotecas externas.
									</p>
								</li>

								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">
										Criação de páginas "Single Page Aplication" com React.
									</p>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="services__content">
					<div>
						<i className="uil uil-arrow services__icon"></i>
						<h3 className="services__title">Backend</h3>
					</div>

					<span onClick={() => toggleTab(2)} className="services__button">View More
					<i className="uil uil-arrow-right services__button-icon"></i>
					</span>
					
					<div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
						<div className="services__modal-content">
							<i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
							<h3 className="services__modal-title">BackEnd Development</h3>
							<p className="services__modal-description">
								Criação de API's rest, integrados a bancos de dados NoSQL ou SQL, criação de testes unitários garantindo integridade do Backend.
							</p>

							<ul className="services__modal-services grid">
								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">
										Crio API's Rest.
									</p>
								</li>

								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">
										Integração com Banco de Dados SQL e NoSQL.
									</p>
								</li>

								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">
										Criação de testes unitários.
									</p>
								</li>

								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">
										Aplicação do SOLID e arquitetura MSC com POO.
									</p>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="services__content">
					<div>
						<i className="uil uil-web-grid services__icon"></i>
						<h3 className="services__title">Soft-Skills</h3>
					</div>

					<span onClick={() => toggleTab(3)} className="services__button">View More
					<i className="uil uil-arrow-right servies__button-icon"></i>
					</span>
					<div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
						<div className="services__modal-content">
							<i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
							<h3 className="services__modal-title">Abilities</h3>
							<p className="services__modal-description">
								Possuo experiência em trabalhos com pressão elevada, gestão e liderança de projetos / equipe, comunicação, adaptabilidade e comprometimento. 
							</p>

							<ul className="services__modal-services grid">
								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">
										Comunicação.
									</p>
								</li>

								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">
										Liderança.
									</p>
								</li>

								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">
										Movido por desafios.
									</p>
								</li>

								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">
										Autogestão.
									</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Services;