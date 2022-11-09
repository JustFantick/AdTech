import React, { Component } from 'react';

import Button from '../button/button.jsx';

class Institute extends Component {
	constructor(props) {
		super(props)

		this.handleStringChange = this.handleStringChange.bind(this);
		this.state = {}
	}

	handleStringChange(e) {
		const textToAdd_1 = " don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure.";
		const textToAdd_2 = "Anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined."

		const breakPoint = 168;

		let parent = e.target.closest('.inst-content__text');
		parent.classList.toggle('active');
		let paragraphs = parent.querySelectorAll('p');

		const speed = 7;// ms

		if (parent.textContent.length > breakPoint) {
			let i = paragraphs[1].textContent.length;

			let delete1 = setInterval(() => {
				if (i > 0) {
					paragraphs[1].textContent = paragraphs[1].textContent.substring(0, i - 1);
					i--;
				} else {
					clearInterval(delete1);

					i = paragraphs[0].textContent.length;
					let delete2 = setInterval(() => {
						if (i > breakPoint - 3) {
							paragraphs[0].textContent = paragraphs[0].textContent.substring(0, i - 1);
							i--;
						} else {
							paragraphs[0].textContent = paragraphs[0].textContent.concat("...");
							clearInterval(delete2);
						}
					}, speed);
				}
			}, speed);
		} else {
			paragraphs[0].textContent = paragraphs[0].textContent.substring(0, paragraphs[0].textContent.length - 3);

			let i = 0;
			let concat1 = setInterval(() => {
				if (i < textToAdd_1.length) {
					paragraphs[0].textContent = paragraphs[0].textContent.concat(textToAdd_1[i++]);
				} else {
					clearInterval(concat1);
					i = 0;
					let concat2 = setInterval(() => {
						if (i < textToAdd_2.length) {
							paragraphs[1].textContent = paragraphs[1].textContent.concat(textToAdd_2[i++]);
						} else {
							clearInterval(concat2);
						}
					}, speed);
				}
			}, speed);
		}
	}

	render() {
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
					<div className="inst-content__text"
						onClick={this.handleStringChange}>
						<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words <span>which...</span></p>
						<p></p>
					</div>
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