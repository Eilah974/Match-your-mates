import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

const Home = () => {
	return (
		<div className='home'>
			<div className='section-1'>
				<p>Avez-vous l'âme d'un e-compétiteur ? Si vous cherchez une équipe ou des joueurs mais ne savez pas où chercher, que vous soyez pros ou amateurs et que vous voulez entrer dans la compétion, vous êtes au bon endroit!! </p>

			</div>
			<div className='section-2'>
				<p>Avez-vous l'âme d'un e-compétiteur ? Si vous cherchez une équipe ou des joueurs mais ne savez pas où chercher, que vous soyez pros ou amateurs et que vous voulez entrer dans la compétion, vous êtes au bon endroit!! </p>
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
