import React from "react";
import './scrollup.css'

const ScrollUp = () => {
	window.addEventListener('scroll', function () {
		const scrollUp = document.querySelector('.scrollup');
		// quando o scroll é maior que 560 viewport altura, adiciona show-scroll class
		if (this.scrollY >= 560) scrollUp.classList.add('show-scroll');
		else scrollUp.classList.remove('show-scrol')
	})

	return (
		<a href="#about" className="scrollup">
			<i className="uil uil-arrow-up scrollup__icon"></i>
		</a>
	)
}

export default ScrollUp;
