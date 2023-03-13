import React from "react";

const Info = () => {
	return (
		<div className="about__info grid">
			<div className="about__box">
				<i class='bx bx-award about__icon'></i>
				<h3 className="about__title">Experience</h3>
				<span className="about__subtitle">1+ year experience</span>
			</div>

			<div className="about__box">
				<i class='bx bx-briefcase about__icon'></i>
				<h3 className="about__title">Completed</h3>
				<span className="about__subtitle">20 + Projects</span>
			</div>

			{/* <div className="about__box">
				<h3 className="about__title"></h3>
				<span className="about__subtitle"></span>
			</div> */}
		</div>
	)
}

export default Info;