import React, { Component } from 'react';

import Button from '../button/button.jsx';

class Institute extends Component {
	constructor(props) {
		super(props)

		this.handleStringChange = this.handleStringChange.bind(this);
		this.state = {}
	}

	handleStringChange(e) {
		const textToAdd = " don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure.";

		let target = e.target;
		let i = 0, length = textToAdd.length;

		if (target.textContent.length > 168) {
			let i = target.textContent.length;

			let id = setInterval(() => {

				if (i > 165) {
					target.textContent = target.textContent.substring(0, i - 1);
					i--;
				} else {
					target.textContent = target.textContent.concat("...");
					clearInterval(id);
				}
			}, 10);
		} else {
			e.target.textContent = e.target.textContent.substring(0, e.target.textContent.length - 3);

			let id = setInterval(() => {
				if (i < length) {
					e.target.textContent = target.textContent.concat(textToAdd[i]);
					i++;
				} else {
					clearInterval(id);
				}
			}, 10);
		}
	}

	render() {

		// const textToAdd = "don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure.";

		const textPc = <div className="inst-content__text"
			onClick={this.handleStringChange}>
			There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which...
			{/* <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which...</p> */}
			{/* <p>Anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined.</p> */}
		</div>;

		const textMb = <div className="inst-content__text">
			There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which
			<div className='inst-content__mobile-ver' onClick={this.handleStringChange}>
				<div>
					<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure.</p>
					<p>Anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined.</p>
				</div>
			</div>
		</div>;

		return (
			<section className='institute'>
				<div className="institute__image">
					<img alt='institute.jpg'
						src={
							window.innerWidth < 880 ?
								require('../../img/institute_mb.jpg')
								: require('../../img/institute_pc.jpg')
						}
					/>
				</div>
				<div className="institute__content inst-content">
					<div className="inst-content__title">Explore The elearning Institute</div>
					{window.innerWidth < 880 ? textPc : textPc}
					<div className="inst-content__numbers">
						<div className='instituteBigNumber'>
							<h4>3.2K+</h4>
							<p>Online Course</p>
						</div>
						<div className='instituteBigNumber'>
							<h4>600+</h4>
							<p>Expert member</p>
						</div><div className='instituteBigNumber'>
							<h4>1K+</h4>
							<p>Rating & Review</p>
						</div>
					</div>
					<Button type='blue' text='Read more' />

				</div>

			</section>
		);
	}
}

export default Institute;