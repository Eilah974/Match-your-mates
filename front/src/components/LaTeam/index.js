import React from 'react';
import './style.scss';

const LaTeam = () => {
	return (
		<div className='teamate'>
			<span className='teamcard'>
				<img className='teamimg' src='./photo-yannick.jpg' alt='Yannick'></img>
				<p className='mate'>Yannick: Dev Front, Lead Dev Front.</p>
			</span>

			<span className='teamcard'>
				<img className='teamimg' src='./photo-alexis.jpeg' alt='Alexis'></img>
				<p className='mate'>Alexis: Dev Back, SCRUM Master.</p>
			</span>

			<span className='teamcard'>
				<img className='teamimg' src='./photo-nico.jpeg' alt='Nico'></img>
				<p className='mate'>Nicolas: Dev Back, Lead Dev Back, Git Master.</p>
			</span>

			<span className='teamcard'>
				<img className='teamimg' src='./photo-melvin.jpeg' alt='Melvin'></img>
				<p className='mate'>Melvin: Dev Front, Product Owner.</p>
			</span>
		</div>
	);
};

export default LaTeam;
