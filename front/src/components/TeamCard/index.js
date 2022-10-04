import { useState, useEffect } from 'react';
import instance from '../../utils/axios';
import { useParams, NavLink } from 'react-router-dom';

const TeamCard = () => {
	const [team, setTeam] = useState();
	// Je récupère l'id qui se situe dans mes paramètres de route
	const { id } = useParams();

	const getTeamCard = async () => {
		instance.get(`/teams/${id}`).then((response) => {
			//console.log(response.data);
			// Sauvegarde les données dans mon player
			setTeam(response.data);
		});
	};

	useEffect(() => {
		// GET request using fetch inside useEffect React hook
		getTeamCard();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div id='home'>
			<div className='cardcontainer'>
				{team && (
					<div className='card' key={team.id}>
						<img
							src={team.avatar}
							className='card-img-top'
							alt='tech'
						></img>
						<div className='card-body'>
							<p className='card-text'>{team.username}</p>
							<p className='card-text'>{team.rank.type}</p>
							<p className='card-text'>{team.description}</p>
							{team.availablityRecruitment ? 
									<p className='card-text'>Recrutement: <span className="true">Ouvert</span></p>
									
								:
									<p className='card-text'>Recrutement: <span className="false">Fermé</span></p>
							}

							<button className='detailbutton'>
								<NavLink to={'offers'}>
									<footer className='card-footer'>Voir la liste des annonces</footer>
								</NavLink>
							</button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default TeamCard;
