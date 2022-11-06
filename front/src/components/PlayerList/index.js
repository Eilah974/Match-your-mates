import React from 'react';
import PropTypes from 'prop-types';
import instance from '../../utils/axios';
//import axios from 'axios';
import { useEffect, useState } from 'react';
import './playerList.scss';
import { NavLink } from 'react-router-dom';

const PlayerList = () => {
	const [data, setData] = useState([]);

	const getPlayers = async () => {
		//console.log("requete")
		instance.get('/players').then((response) => {
			const players = response.data;
			//console.log(players)
			setData(players);
		});
	};

	useEffect(() => {
		// GET request using fetch inside useEffect React hook
		getPlayers();
	}, []);

	return (
		<div className='card__container'>
			{data.map((player) => (
				<div className='player__card' key={player.id}>
					<div className="player__card-img">
						<img
							src={player.avatar}
							className='player__card-img-top'
							alt={player.username}
						></img>						
					</div>
					<div className='card__description'>
						<div className="card__description-box">
							<h5 className='card__title '>Player Tag:</h5>
							<p className='card__text'>{player.username}</p>
						</div>
						<div className="card__description-box">
							<h5 className='card__title '>Role:</h5>
							<p className='card__text'>{player.game_role?.type}</p>							
						</div>
						<div className="card__description-box">
							<h5 className='card__title'>Rank:</h5>
							<p className='card__text'>{player.rank?.type}</p>							
						</div>							
						<button className='detail-button'>
							<NavLink to={`${player.id}`}>Infos</NavLink>
						</button>
					</div>
					
				</div>
			))}
		</div>
	);
};
export default PlayerList;

PlayerList.propTypes = {
	users: PropTypes.shape({
		avatar: PropTypes.string.isRequired,
		username: PropTypes.string.isRequired,
		game_role_type: PropTypes.string.isRequired,
		rank_type: PropTypes.string.isRequired,
	}),
};
