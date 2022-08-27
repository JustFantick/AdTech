import React, { Component } from 'react';

export default class Button extends Component {
	render() {
		return (
			<div className={
				this.props.type == 'blue'
					? 'button blue'
					: 'button white'
			}>
				{this.props.text}
			</div>
		);
	}
}

