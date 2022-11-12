import React, { Component } from 'react'
import Button from '../button/button.jsx'

import { Link } from 'react-scroll';

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
					<li className='anchorList__item'>
						<Link activeClass="active" to="home" spy={true} smooth={true} offset={-15} duration={1000} delay={300}>Home</Link>
					</li>
					<li className='anchorList__item'>
						<Link activeClass="active" to="courses" spy={true} smooth={true} offset={-10} duration={1000} delay={300}>Courses</Link>
					</li>
					<li className='anchorList__item'>
						<Link activeClass="active" to="institute" spy={true} smooth={true} offset={-15} duration={1000} delay={300}>Deals</Link>
					</li>
					<li className='anchorList__item'>
						<Link activeClass="active" to="students" spy={true} smooth={true} offset={-15} duration={1000} delay={300}>Success</Link>
					</li>
					<li className='anchorList__item'>
						<Link activeClass="active" to="feedback" spy={true} smooth={true} offset={-15} duration={1000} delay={300}>Feedback</Link>
					</li>
					<li className='anchorList__item'>
						<Link activeClass="active" to="faq" spy={true} smooth={true} offset={-15} duration={1000} delay={300}>F.A.Q.</Link>
					</li>
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
					<li className='anchorList__item'>
						<Link activeClass="active" to="home" spy={true} smooth={true} offset={-15} duration={1000} delay={300}>Home</Link>
					</li>
					<li className='anchorList__item'>
						<Link activeClass="active" to="courses" spy={true} smooth={true} offset={-10} duration={1000} delay={300}>Courses</Link>
					</li>
					<li className='anchorList__item'>
						<Link activeClass="active" to="institute" spy={true} smooth={true} offset={-15} duration={1000} delay={300}>Deals</Link>
					</li>
					<li className='anchorList__item'>
						<Link activeClass="active" to="students" spy={true} smooth={true} offset={-15} duration={1000} delay={300}>Success</Link>
					</li>
					<li className='anchorList__item'>
						<Link activeClass="active" to="feedback" spy={true} smooth={true} offset={-15} duration={1000} delay={300}>Feedback</Link>
					</li>
					<li className='anchorList__item'>
						<Link activeClass="active" to="faq" spy={true} smooth={true} offset={-15} duration={1000} delay={300}>F.A.Q.</Link>
					</li>
				</ul>;
			rightSection =
				<div className='menuBurger' onClick={this.burgerClickHandler}>
					<span></span>
				</div>;
		} else {
			anchorList =
				<ul className="anchorList">
					<li className='anchorList__item'>
						<Link activeClass="active" to="home" spy={true} smooth={true} offset={-15} duration={1000}>Home</Link>
					</li>
					<li className='anchorList__item'>
						<Link activeClass="active" to="courses" spy={true} smooth={true} offset={-10} duration={1000}>Courses</Link>
					</li>
					<li className='anchorList__item'>
						<Link activeClass="active" to="institute" spy={true} smooth={true} offset={-15} duration={1000}>Deals</Link>
					</li>
					<li className='anchorList__item'>
						<Link activeClass="active" to="students" spy={true} smooth={true} offset={-15} duration={1000}>Success</Link>
					</li>
					<li className='anchorList__item'>
						<Link activeClass="active" to="feedback" spy={true} smooth={true} offset={-15} duration={1000}>Feedback</Link>
					</li>
					<li className='anchorList__item'>
						<Link activeClass="active" to="faq" spy={true} smooth={true} offset={-15} duration={1000}>F.A.Q.</Link>
					</li>
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
