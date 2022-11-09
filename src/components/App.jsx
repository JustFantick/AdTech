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