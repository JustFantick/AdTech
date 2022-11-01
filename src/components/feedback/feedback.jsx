import React, { Component } from 'react';

import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/less';
import './feedback.less';

export default class Feedback extends Component {
	render() {
		return (
			<section className='feedback'>
				<div className="feedback__text">
					<h3>Some Students Feedback</h3>
					<p>
						It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
					</p>
				</div>

				<div className="feedback__slider">
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
							<div className='slider-top'>
								<div className='slider-quoter'></div>
								<div className='slider-stars'></div>
							</div>
							<div className='slider-text'>
								There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem.
							</div>
							<div className='slider-author'>
								<div className='slider-author-image'></div>
								<div className='slider-author-name'>
									<h6>Awlad Hossain</h6>
									<p>UI Designer</p>
								</div>
							</div>


						</SwiperSlide>

						<div className='icon-arrow prev'></div>
						<div className='icon-arrow next'></div>
					</Swiper>
				</div>

			</section>
		)
	}
}
