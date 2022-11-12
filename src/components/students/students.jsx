import React, { Component } from 'react'
import Button from '../button/button.jsx'

export default class Students extends Component {
	render() {
		return (
			<section className='students' id='students'>
				<div className='students__header'>
					<h4>Meet Our Successfull Students</h4>
					<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
				</div>

				<div className='students__cards'>
					<div className='card'>
						<div className="card__image"><img src={require('../../img/card_1.jpg')} alt="card_1_image" /></div>
						<div className="card__text">
							<h5>Awlad Hossain</h5>
							<p>UIUX Designer</p>
						</div>

					</div>
					<div className='card'>
						<div className="card__image"><img src={require('../../img/card_2.jpg')} alt="card_1_image" /></div>
						<div className="card__text">
							<h5>Jannatul Islam</h5>
							<p>Motion Design</p>
						</div>

					</div>
					<div className='card'>
						<div className="card__image"><img src={require('../../img/card_3.jpg')} alt="card_1_image" /></div>
						<div className="card__text">
							<h5>Imran Hossain</h5>
							<p>Graphic Designer</p>
						</div>

					</div>
					<div className='card'>
						<div className="card__image"><img src={require('../../img/card_4.jpg')} alt="card_1_image" /></div>
						<div className="card__text">
							<h5>Nishi Akter</h5>
							<p>Web Developer</p>
						</div>

					</div>
				</div>

				<Button type='blue' text='View All' />
			</section>
		)
	}
}
