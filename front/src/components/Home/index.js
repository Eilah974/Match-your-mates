import React from 'react';
import { NavLink } from 'react-router-dom';
import './home.scss';

const Home = () => {
	return (
		<div className='home'>
			<div className='section-1'>
				<p>As-tu l'âme d'un e-compétiteur ? Si tu cherches une équipe ou des joueurs, que tu sois pros ou amateurs et que tu veux entrer dans la compétion, tu es au bon endroit!! </p>

			</div>
			<div className='section-2'>
				<p>As-tu l'âme d'un e-compétiteur ? Si tu cherches une équipe ou des joueurs, que tu sois pros ou amateurs et que tu veux entrer dans la compétion, tu es au bon endroit!!  </p>
				<div className='logo'>
					<img src='./logomym.png' alt='logo mym' />
				</div>
				<div className='section-2__links'>
					<div className="button__links">
						<img src="./logo.png" alt="logo" />
						<button className='links'>
							<NavLink to='/players' >
								Players
							</NavLink>
						</button>
					</div>

					<div className="button__links">
						<img src="./logo.png" alt="logo" />
						<button className='links'>
							<NavLink to='/teams' >
								Teams
							</NavLink>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
