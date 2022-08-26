import React, { Component } from 'react';
import Main from './main/main.jsx';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="wrapper">
				<Main />
			</div>
		);
	}
}

export default App;