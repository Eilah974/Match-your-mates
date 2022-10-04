import React from 'react';
import './style.scss';

const Home = () => {
	return (
		<div id='home'>
			<div className='main'>
				<h2> Bienvenue sur Match your Mates</h2>
				<p>
					Match your mates est un site de mise en relation de joueurs avec des équipes, ou l’inverse… et vice versa, à vocation e-sportive, c'est-à-dire qui recherche la compétition. 
				</p>
				<p>
					Pour le moment nous nous sommes focalisé sur le jeu League of Legends car il remplit plusieurs cases, notamment la hype des joueurs au niveau français, européen, et même mondiale , en plus d’être l’un des jeux compétitif les plus joué au monde.
				</p>
				<p>
					Si ton vocabulaire est de l’ordre de “report jungle for no gank” ou encore “huge mid gap” et que tu recherche des joueurs ou une équipe pour grind le ladder (ça veut dire progressé dans le classement pour les moldus), alors tu es au bon endroit.
				</p>
				<p>
					Cher Match your mates, si tu a l’âme d’un compétiteur alors c’est ici que tu trouveras ton bonheur.
				</p>
				<span>
					<img src='./logomym.png' alt='logo mym' />
				</span>
			</div>
		</div>
	);
};

export default Home;
