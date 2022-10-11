import { useState, useEffect } from 'react';
import instance from '../../utils/axios';
import { useParams, NavLink } from 'react-router-dom';
import './team.scss';


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

	/*return (
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
	);*/


	return (
		<div className='detail__container'>
			{team && (
				<div className='team__detail__card' key={team.id}>
					<div className="detail__card__left">
						<div className="detail__card-img">
							<img
								src={team.avatar}
								className='card-img-top'
								alt={team.username}
							></img>						
						</div>
						<div className='detail__description-left'>
							<div className="detail__description-box">
								<h5 className='detail__title '>Team name:</h5>
								<p className='detail__text'>{team.username}</p>
							</div>
							<div className="detail__description-box">
								<h5 className='detail__title'>Global Rank:</h5>
								<p className='detail_text'>{team.rank?.type}</p>							
							</div>
							<div className="detail__description-box b1">
								{team.availablityRecruitment ? 
										<p className='detail-text'>Recutement: <span className="available">Ouvert</span></p>
										
									:
										<p className='detail-text'>Recrutement: <span className="unavailable">Fermé</span></p>
								}							
							</div>							
						</div>
					</div>
					<div className="detail__card__right">
						<div className="detail__description-box">
							<h5 className='detail__title '>Team description:</h5>
							<p className='detail__text'>{team.description}</p>
						</div>
						<button className='offers-list-button'>
							<NavLink to={'offers'}>	Voir les annonces</NavLink>
						</button>						
					</div>
				</div>
			)}
		</div>
	);	
};

export default TeamCard;
