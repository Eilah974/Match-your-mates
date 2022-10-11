import { useState, useEffect } from 'react';
import instance from '../../utils/axios';
import { useParams } from 'react-router-dom';
import './player.scss'

const PlayerCard = () => {
	const [player, setPlayer] = useState();

	const { id } = useParams();

	const getPlayerCard = async () => {
		instance.get(`/players/${id}`).then((response) => {
			console.log(response.data);

			setPlayer(response.data);
		});
	};

	useEffect(() => {
		// GET request using fetch inside useEffect React hook
		getPlayerCard();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);


	return (
		<div className='detail__container'>
			{player && (
				<div className='detail__card' key={player.id}>
					<div className="detail__card__left">
						<div className="detail__card-img">
							<img
								src={player.avatar}
								className='card-img-top'
								alt='player'
							></img>						
						</div>
						<div className='detail__description-left'>
							<div className="detail__description-box">
								<h5 className='detail__title '>Player Tag:</h5>
								<p className='detail__text'>{player.username}</p>
							</div>
							<div className="detail__description-box">
								<h5 className='detail__title'>Age:</h5>
								<p className='detail__text'>{player.age}</p>							
							</div>							
							<div className="detail__description-box">
								<h5 className='detail__title '>Role:</h5>
								<p className='detail__text'>{player.game_role?.type}</p>							
							</div>
							<div className="detail__description-box">
								<h5 className='detail__title'>Rank:</h5>
								<p className='detail_text'>{player.rank?.type}</p>							
							</div>
							<div className="detail__description-box b1">
								{player.availablityRecruitment ? 
										<p className='detail-text'>Disponible: <span className="available">Oui</span></p>
										
									:
										<p className='detail-text'>Disponible: <span className="unavailable">Non</span></p>
								}							
							</div>							
						</div>
					</div>
					<div className="detail__card__right">
						<div className="detail__description-box">
							<h5 className='detail__title '>Bio:</h5>
							<p className='detail__text'>{player.description}</p>
						</div>
						<div className="detail__description-box b2">
							<h5 className='detail__title '>Attente:</h5>
							<p className='detail__text'>{player.search}</p>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default PlayerCard;
