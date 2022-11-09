import React, { Component } from 'react';

import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/less';
import './feedback.less';

export default class Feedback extends Component {
	componentDidMount() {

	}

	render() {
		let viewOverBreakpoint = <div className="feedback__slider">
			<Swiper
				modules={[Navigation]}
				spaceBetween={50}
				slidesPerView={2}
				speed={700}
				navigation={
					{
						prevEl: '.prev',
						nextEl: '.next',
					}
				}
				onSwiper={(swiper) => console.log(swiper)}
				onSlideChange={() => console.log('slide change')}

			>
				<SwiperSlide>
					<div className='slide-top'>
						<div className='slider-top-quoter'>
							<img src={require('../../img/quoter.svg')} alt="" />
						</div>
						<div className='slider-top-stars rating'>
							<div className="rating__active"></div>
							<div className="rating__items">
								<input type="radio" className='rating__item' value='1' name='rating' />
								<input type="radio" className='rating__item' value='2' name='rating' />
								<input type="radio" className='rating__item' value='3' name='rating' />
								<input type="radio" className='rating__item' value='4' name='rating' />
								<input type="radio" className='rating__item' value='5' name='rating' />
							</div>

						</div>
					</div>
					<div className='slide-text'>
						There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem.
					</div>
					<div className='slide-author'>
						<div className='slide-author-image'>
							<img src={require('../../img/feedback_1.jpg')} alt="Image_lost" />
						</div>
						<div className='slide-author-name'>
							<h6>Awlad Hossain</h6>
							<p>UI Designer</p>
						</div>
					</div>
				</SwiperSlide>

				<SwiperSlide>
					<div className='slide-top'>
						<div className='slider-top-quoter'>
							<img src={require('../../img/quoter.svg')} alt="" />
						</div>
						<div className='slider-top-stars rating'>
							<div className="rating__active"></div>
							<div className="rating__items">
								<input type="radio" className='rating__item' value='1' name='rating' />
								<input type="radio" className='rating__item' value='2' name='rating' />
								<input type="radio" className='rating__item' value='3' name='rating' />
								<input type="radio" className='rating__item' value='4' name='rating' />
								<input type="radio" className='rating__item' value='5' name='rating' />
							</div>

						</div>
					</div>
					<div className='slide-text'>
						There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem.
					</div>
					<div className='slide-author'>
						<div className='slide-author-image'>
							<img src={require('../../img/feedback_2.jpg')} alt="Image_lost" />
						</div>
						<div className='slide-author-name'>
							<h6>Shanta Akter</h6>
							<p>Graphic Designer</p>
						</div>
					</div>
				</SwiperSlide>

				<SwiperSlide>
					<div className='slide-top'>
						<div className='slider-top-quoter'>
							<img src={require('../../img/quoter.svg')} alt="" />
						</div>
						<div className='slider-top-stars rating'>
							<div className="rating__active"></div>
							<div className="rating__items">
								<input type="radio" className='rating__item' value='1' name='rating' />
								<input type="radio" className='rating__item' value='2' name='rating' />
								<input type="radio" className='rating__item' value='3' name='rating' />
								<input type="radio" className='rating__item' value='4' name='rating' />
								<input type="radio" className='rating__item' value='5' name='rating' />
							</div>

						</div>
					</div>
					<div className='slide-text'>
						There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem.
					</div>
					<div className='slide-author'>
						<div className='slide-author-image'>
							<img src={require('../../img/feedback_1.jpg')} alt="Image_lost" />
						</div>
						<div className='slide-author-name'>
							<h6>Awlad Hossain</h6>
							<p>UI Designer</p>
						</div>
					</div>
				</SwiperSlide>

				<SwiperSlide>
					<div className='slide-top'>
						<div className='slider-top-quoter'>
							<img src={require('../../img/quoter.svg')} alt="" />
						</div>
						<div className='slider-top-stars rating'>
							<div className="rating__active"></div>
							<div className="rating__items">
								<input type="radio" className='rating__item' value='1' name='rating' />
								<input type="radio" className='rating__item' value='2' name='rating' />
								<input type="radio" className='rating__item' value='3' name='rating' />
								<input type="radio" className='rating__item' value='4' name='rating' />
								<input type="radio" className='rating__item' value='5' name='rating' />
							</div>

						</div>
					</div>
					<div className='slide-text'>
						There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem.
					</div>
					<div className='slide-author'>
						<div className='slide-author-image'>
							<img src={require('../../img/feedback_2.jpg')} alt="Image_lost" />
						</div>
						<div className='slide-author-name'>
							<h6>Shanta Akter</h6>
							<p>Graphic Designer</p>
						</div>
					</div>
				</SwiperSlide>

				<div className='icon-arrow prev inside-circle'></div>
				<div className='icon-arrow next inside-circle'></div>
			</Swiper>
		</div>;

		let viewUnderBreakpoint =
			<div className="feedback__slider">
				<div className='slide'>
					<div className='slide-top'>
						<div className='slider-top-quoter'>
							<img src={require('../../img/quoter.svg')} alt="" />
						</div>
						<div className='slider-top-stars rating'>
							<div className="rating__active"></div>
							<div className="rating__items">
								<input type="radio" className='rating__item' value='1' name='rating' />
								<input type="radio" className='rating__item' value='2' name='rating' />
								<input type="radio" className='rating__item' value='3' name='rating' />
								<input type="radio" className='rating__item' value='4' name='rating' />
								<input type="radio" className='rating__item' value='5' name='rating' />
							</div>

						</div>
					</div>
					<div className='slide-text'>
						There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem.
					</div>
					<div className='slide-author'>
						<div className='slide-author-image'>
							<img src={require('../../img/feedback_1.jpg')} alt="Image_lost" />
						</div>
						<div className='slide-author-name'>
							<h6>Awlad Hossain</h6>
							<p>UI Designer</p>
						</div>
					</div>
				</div>
				<div className='slide'>
					<div className='slide-top'>
						<div className='slider-top-quoter'>
							<img src={require('../../img/quoter.svg')} alt="" />
						</div>
						<div className='slider-top-stars rating'>
							<div className="rating__active"></div>
							<div className="rating__items">
								<input type="radio" className='rating__item' value='1' name='rating' />
								<input type="radio" className='rating__item' value='2' name='rating' />
								<input type="radio" className='rating__item' value='3' name='rating' />
								<input type="radio" className='rating__item' value='4' name='rating' />
								<input type="radio" className='rating__item' value='5' name='rating' />
							</div>

						</div>
					</div>
					<div className='slide-text'>
						There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem.
					</div>
					<div className='slide-author'>
						<div className='slide-author-image'>
							<img src={require('../../img/feedback_2.jpg')} alt="Image_lost" />
						</div>
						<div className='slide-author-name'>
							<h6>Shanta Akter</h6>
							<p>Graphic Designer</p>
						</div>
					</div>
				</div>
			</div>;

		return (
			<section className='feedback'>
				<div className="feedback__text">
					<h3 className='fub-title'>Some Students Feedback</h3>
					<p className='fub-subtitle'>
						It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
					</p>
				</div>

				{
					window.innerWidth > 1000 ?
						viewOverBreakpoint : viewUnderBreakpoint
				}

			</section>
		)
	}
}
