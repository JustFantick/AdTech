import React, { Component } from 'react'

export default class Faq extends Component {
	constructor(props) {
		super(props)
		this.state = {};
		this.handleTabClick = this.handleTabClick.bind(this);
	}

	handleTabClick(e) {
		let targetTab = e.target.closest('.tab');

		if (targetTab.classList.contains('active')) {
			targetTab.classList.remove('active');
		} else {
			document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
			targetTab.classList.add('active');
		}
	}
	render() {
		return (
			<section className='faq' id='faq'>
				<div className="faq__text">
					<h3 className='fub-title _scroll-anim _right'>Frequently Asked Questions</h3>
					<p className='fub-subtitle _scroll-anim _right'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
				</div>

				<div className="faq__tabs">
					<div className="tab _scroll-anim _bottom">
						<div className="tab__head" onClick={this.handleTabClick}>
							<div className="tab__title">What other services are you compatible with?</div>
							<div className="tab__arrow"></div>

						</div>
						<div className="tab__content">
							There are many variations of passages of available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the generators on the.
						</div>


					</div>
					<div className="tab _scroll-anim _bottom">
						<div className="tab__head" onClick={this.handleTabClick}>
							<div className="tab__title">
								I have a technical i need resolved, who do i email?							</div>
							<div className="tab__arrow"></div>

						</div>
						<div className="tab__content">
							There are many variations of passages of available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the generators on the.
						</div>


					</div>
					<div className="tab _scroll-anim _bottom">
						<div className="tab__head" onClick={this.handleTabClick}>
							<div className="tab__title">What other services are you compatible with?</div>
							<div className="tab__arrow"></div>

						</div>
						<div className="tab__content">
							There are many variations of passages of available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the generators on the.
						</div>


					</div>
					<div className="tab _scroll-anim _bottom">
						<div className="tab__head" onClick={this.handleTabClick}>
							<div className="tab__title">What other services are you compatible with?</div>
							<div className="tab__arrow"></div>

						</div>
						<div className="tab__content">
							There are many variations of passages of available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the generators on the.
						</div>


					</div>

				</div>

			</section>
		)
	}
}
