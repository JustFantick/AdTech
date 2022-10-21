import React, { Component } from 'react'
import Button from '../button/button.jsx'

export default class Advert extends Component {
	render() {
		return (
			<section className='advert'>
				<div className='advert__text'>
					<h3>Ready to join?</h3>
					<p>
						It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
					</p>
				</div>
				<div className='advert__btn'>
					<Button type='white' text='Register now' />
				</div>
			</section>
		)
	}
}
