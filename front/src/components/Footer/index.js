import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<div>
			<footer className='footer'>
				<div className='container'>
					<span className='copy'> © Team Match Your Mates</span>
					<Link to='/LaTeam' className='teamlink'>
						L'équipe
					</Link>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
