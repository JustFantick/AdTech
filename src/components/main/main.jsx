import React, { Component } from 'react';

import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/less';
import 'swiper/less/navigation';

class Main extends Component {
	render() {
		return (
			<main className="main">
				<Swiper
					slidesPerView={2}
					speed={500}
					navigation
					onSwiper={(swiper) => console.log(swiper)}
					onSlideChange={() => console.log('slide change')}
				>
					<SwiperSlide>Slide 1
						<div className='icon-arrow'></div>
					</SwiperSlide>
					<SwiperSlide>Slide 2</SwiperSlide>
					<SwiperSlide>Slide 3</SwiperSlide>
					<SwiperSlide>Slide 4</SwiperSlide>
				</Swiper>
			</main >
		);
	}
}

export default Main;