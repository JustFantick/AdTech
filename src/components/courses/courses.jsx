import React, { Component } from 'react'
import Button from '../button/button.jsx'

export default class Courses extends Component {
	componentDidMount() {
		console.log(window.innerWidth);
		if (window.innerWidth < 500) {
			this.isMobile = true;
			console.log(this.isMobile);
		} else {
			this.isMobile = false;
			console.log(this.isMobile);
		}

		this.img1 = require('../../img/cours_1.jpg');
	}
	render() {
		const cardsPc = <div className="courses__body coursCard">
			<div className="coursCard__item">
				<img alt='cours_1' src={require('../../img/cours_1.jpg')} />

				<div className='coursCard__text'>
					<h5>Fundamental Of UI/UX Design</h5>
					<p>Some quick example text to build on the card title and make up the bulk of the card.</p>
					<p className='price'>Price: 20$</p>
				</div>
			</div>
			<div className="coursCard__item">
				<img src={require('../../img/cours_2.jpg')} alt='cours_2' />
				<div className='coursCard__text'>
					<h5>Javascript Basic to advanced</h5>
					<p>Some quick example text to build on the card title and make up the bulk of the card.</p>
					<p className='price'>Price: 20$</p>
				</div>
			</div>
			<div className="coursCard__item">
				<img src={require('../../img/cours_3.jpg')} alt='cours_3' />
				<div className='coursCard__text'>
					<h5>Fullstack Web Development</h5>
					<p>Some quick example text to build on the card title and make up the bulk of the card.</p>
					<p className='price'>Price: 20$</p>
				</div>
			</div>
			<div className="coursCard__item">
				<img src={require('../../img/cours_4.jpg')} alt='cours_4' />
				<div className='coursCard__text'>
					<h5>Fullstack Web Development</h5>
					<p>Some quick example text to build on the card title and make up the bulk of the card.</p>
					<p className='price'>Price: 20$</p>
				</div>
			</div>
			<div className="coursCard__item">
				<img src={require('../../img/cours_5.jpg')} alt='cours_5' />
				<div className='coursCard__text'>
					<h5>Photography Basic Rules</h5>
					<p>Some quick example text to build on the card title and make up the bulk of the card.</p>
					<p className='price'>Price: 20$</p>
				</div>
			</div>
			<div className="coursCard__item">
				<img src={require('../../img/cours_6.jpg')} alt='cours_6' />
				<div className='coursCard__text'>
					<h5>Lorem ipsum dolor emet</h5>
					<p>Some quick example text to build on the card title and make up the bulk of the card.</p>
					<p className='price'>Price: 20$</p>
				</div>
			</div>

		</div>;
		const cardsTablet = <div className="courses__body coursCard">
			<div className="coursCard__item">
				<img alt='cours_1' src={require('../../img/cours_1.jpg')} />

				<div className='coursCard__text'>
					<h5>Fundamental Of UI/UX Design</h5>
					<p>Some quick example text to build on the card title and make up the bulk of the card.</p>
					<p className='price'>Price: 20$</p>
				</div>
			</div>
			<div className="coursCard__item">
				<img src={require('../../img/cours_2.jpg')} alt='cours_2' />
				<div className='coursCard__text'>
					<h5>Javascript Basic to advanced</h5>
					<p>Some quick example text to build on the card title and make up the bulk of the card.</p>
					<p className='price'>Price: 20$</p>
				</div>
			</div>
			<div className="coursCard__item">
				<img src={require('../../img/cours_3.jpg')} alt='cours_3' />
				<div className='coursCard__text'>
					<h5>Fullstack Web Development</h5>
					<p>Some quick example text to build on the card title and make up the bulk of the card.</p>
					<p className='price'>Price: 20$</p>
				</div>
			</div>
		</div>;
		const cardsMobile = <div className="courses__body coursCard">
			<div className="coursCard__item">
				<img src={require('../../img/cours_mb_1.png')} alt='cours_mb_1' />

				<div className='coursCard__text'>
					<h5>Fundamental Of UI/UX Design</h5>
					<p>Some quick example text to build on the card title and make up the bulk of the card.</p>
					<p className='price'>Price: 20$</p>
				</div>
			</div>
			<div className="coursCard__item">
				<img src={require('../../img/cours_mb_2.png')} alt='cours_mb_2' />
				<div className='coursCard__text'>
					<h5>Javascript Basic to advanced</h5>
					<p>Some quick example text to build on the card title and make up the bulk of the card.</p>
					<p className='price'>Price: 20$</p>
				</div>
			</div>
			<div className="coursCard__item">
				<img src={require('../../img/cours_mb_3.png')} alt='cours_mb_3' />
				<div className='coursCard__text'>
					<h5>Fullstack Web Development</h5>
					<p>Some quick example text to build on the card title and make up the bulk of the card.</p>
					<p className='price'>Price: 20$</p>
				</div>
			</div>
		</div>;



		return (
			<section className='courses'>
				<div className="courses__main-title">Discover Our Popular Courses</div>
				<div className="courses__subtitle">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>

				{
					window.innerWidth > 768 ?
						cardsPc : window.innerWidth < 500 ?
							cardsMobile : cardsTablet
				}

				<Button type='blue' text='See More Courses' />
			</section>
		)
	}
}
