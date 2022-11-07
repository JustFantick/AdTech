import React, { Component } from 'react'

export default class Footer extends Component {
	render() {
		return (
			<footer className='footer'>
				<div className="footer__content">
					<div className="footer__title">Pro Edu</div>
					<div className="footer__text">
						Office 41, Zawaya Buildin, Ghala Muscat, <br />
						Sultanate of Oman
					</div>
					<div className="footer__privacy">
						Privacy Ploicy  |   Terms of use
					</div>
					<div className="footer__icons">
						<div className='icon-facebook'></div>
						<div className='icon-twitter'></div>
						<div className='icon-linkedIn'></div>
						<div className='icon-tikTok'></div>
					</div>

				</div>

			</footer>
		)
	}
}
