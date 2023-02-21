import React, { Component } from 'react';

import Header from './header/header.jsx';
import StartSlider from './start-slider/start-slider.jsx';
import Courses from './courses/courses.jsx';
import Institute from './institute/institute.jsx';
import Advert from './advert/advert.jsx';
import Students from './students/students.jsx';
import Feedback from './feedback/feedback.jsx';
import Faq from './faq/faq.jsx';
import Footer from './footer/footer.jsx';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		//onScrollAnimation: block appears when user scrolled enough
		const animItems = document.querySelectorAll('._scroll-anim');
		if (animItems.length > 0) {
			setTimeout(animateItems, 500);

			window.addEventListener("scroll", animateItems);

			function animateItems() {
				animItems.forEach(animItem => {
					const itemHeight = animItem.offsetHeight;
					const itemOffset = offset(animItem).top;
					const animStartCoefficient = 5;

					let itemPoint = window.innerHeight - itemHeight / animStartCoefficient;
					if (itemHeight > window.innerHeight) {
						itemPoint = window.innerHeight - window.innerHeight / animStartCoefficient;
					}

					if ((window.scrollY > itemOffset - itemPoint) && window.scrollY < (itemOffset + itemHeight)) {
						animItem.classList.add('_active');
					}
				});
			}
		}

		function offset(el) {
			const rect = el.getBoundingClientRect(),
				scrollLeft = window.scrollX || document.documentElement.scrollLeft,
				scrollTop = window.scrollY || document.documentElement.scrollTop;
			return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
		}
	}

	render() {
		return (
			<div className="wrapper">
				<div className="wrapper__container">
					<Header />
					<StartSlider />
					<Courses />
					<Institute />
					<Advert />
					<Students />
					<Feedback />
					<Faq />
					<section></section>
				</div>
				<Footer />
			</div>
		);
	}
}

export default App;