import React, { Component } from 'react'
import Button from '../button/button.jsx'

export default class Header extends Component {
	constructor(props) {
		super(props);
		this.burgerClickHandler = this.burgerClickHandler.bind(this);
	}

	burgerClickHandler(e) {
		let burger = e.target.closest('.menuBurger');
		let anchors = document.querySelector('.anchorList');

		burger.classList.toggle('active');
		anchors.classList.toggle('active');

		anchors.addEventListener('click', function () {
			burger.classList.toggle('active');
			anchors.classList.toggle('active');
		}, { once: true });
	}


	render() {
		const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
		let anchorList, rightSection;

		if (vw < 900 && vw > 375) {
			anchorList =
				<ul className="anchorList">
					<li className='anchorList__item'>Home</li>
					<li className='anchorList__item'>Courses</li>
					<li className='anchorList__item'>Deals</li>
					<li className='anchorList__item'>Success</li>
					<li className='anchorList__item'>About</li>
					<li className='anchorList__item'>Register</li>
				</ul>;
			rightSection =
				<div className='header__rightSection'>
					<Button type='white' text='Register' />
					<div className='menuBurger' onClick={this.burgerClickHandler}>
						<span></span>
					</div>
				</div>;
		} else if (vw <= 375) {
			anchorList =
				<ul className="anchorList">
					<Button type='white' text='Register' />
					<li className='anchorList__item'>Home</li>
					<li className='anchorList__item'>Courses</li>
					<li className='anchorList__item'>Deals</li>
					<li className='anchorList__item'>Success</li>
					<li className='anchorList__item'>About</li>
					<li className='anchorList__item'>Register</li>
				</ul>;
			rightSection =
				<div className='menuBurger' onClick={this.burgerClickHandler}>
					<span></span>
				</div>;
		} else {
			anchorList =
				<ul className="anchorList">
					<li className='anchorList__item'>Home</li>
					<li className='anchorList__item'>Courses</li>
					<li className='anchorList__item'>Deals</li>
					<li className='anchorList__item'>Success</li>
					<li className='anchorList__item'>About</li>
					<li className='anchorList__item'>Register</li>
				</ul>;
			rightSection = <Button type='white' text='Register' />;
		}


		return (
			<div className='header'>
				<div className="header__title">Pro Edu</div>

				{anchorList}

				{rightSection}
			</div>
		)
	}
}
