import React, { Component } from 'react'
import Button from '../button/button.jsx'

export default class Header extends Component {
	render() {
		return (
			<div className='header'>
				<div className="header__title">Pro Edu</div>
				<ul className="header__list">
					<li className='header__list-item'>Home</li>
					<li className='header__list-item'>Courses</li>
					<li className='header__list-item'>Deals</li>
					<li className='header__list-item'>Success</li>
					<li className='header__list-item'>About</li>
					<li className='header__list-item'>Register</li>
				</ul>
				<Button type='white' text='Register' />
			</div>
		)
	}
}
