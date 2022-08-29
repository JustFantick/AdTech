import React, { Component } from 'react';
import Main from './main/main.jsx';
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
					<Main />
				</div>
			</div>
		);
	}
}

export default App;