import { useState, useEffect } from 'react';
import instance from '../../utils/axios';
import { useParams } from 'react-router-dom';

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
		<div id='home'>
			<div className='cardcontainer'>
				{player && (
					<div className='card' key={player.id}>
						<img
							src={player.avatar}
							className='card-img-top'
							alt='tech'
						></img>
						<div className='card-body'>
							<h6 className='card-title pb-2'>Player Tag:</h6>
							<p className='card-text'>{player.username}</p>
							<h6 className='card-title pb-2'>Role:</h6>
							<p className='card-text'>{player.game_role.type}</p>
							<h6 className='card-title pb-2'>Rank:</h6>
							<p className='card-text'>{player.rank.type}</p>
							<h6 className='card-title pb-2'>Bio:</h6>
							<p className='card-text'>{player.description}</p>
							<h6 className='card-title pb-2'>Attente:</h6>
							<p className='card-text'>{player.search}</p>
							{player.availablityRecruitment ? 
									<p className='card-text'>Disponible: <span className="true">Oui</span></p>
									
								:
									<p className='card-text'>Disponible: <span className="false">Non</span></p>
							}
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default PlayerCard;
