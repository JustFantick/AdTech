import React, { Component } from 'react';

class Institute extends Component {
	render() {
		return (
			<section className='institute'>
				<div className="institute__image"></div>
				<div className="institute__content inst-content">
					<div className="inst-content__title">Explore The elearning Institute</div>
					<div className="inst-content__text">
						<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure.</p>
						<p>Anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined.</p>
					</div>
					<div className="inst-content__numbers">
						<div className='institute-big-number'>
							<h4>3.2K+</h4>
							<p>Online Course</p>
						</div>
						<div className='institute-big-number'>
							<h4>600+</h4>
							<p>Expert member</p>
						</div><div className='institute-big-number'>
							<h4>1K+</h4>
							<p>Rating & Review</p>
						</div>
					</div>

				</div>

			</section>
		);
	}
}

export default Institute;