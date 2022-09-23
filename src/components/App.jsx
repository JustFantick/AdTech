import React, { Component } from 'react';
import StartSlider from './start-slider/start-slider.jsx';
import Header from './header/header.jsx';
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
				</div>
			</div>
		);
	}
}

export default App;