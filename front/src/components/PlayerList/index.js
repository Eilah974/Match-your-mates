import React from 'react';
import PropTypes from 'prop-types';
import instance from '../../utils/axios';
//import axios from 'axios';
import { useEffect, useState } from 'react';
import './style.scss';
import { NavLink } from 'react-router-dom';

const PlayerList = () => {
	const [data, setData] = useState([]);

	const getPlayers = async () => {
		console.log("requete")
		instance.get('/players').then((response) => {
			const players = response.data;
			console.log(players)
			setData(players);
		});
	};

	useEffect(() => {
		// GET request using fetch inside useEffect React hook
		getPlayers();
	}, []);

	return (
		<div className='cardcontainer'>
			{data.map((player) => (
				<div className='card' key={player.id}>
					<img
						src={player.avatar}
						className='card-img-top'
						alt='tech'
					></img>
					<div className='card-body d-flex flex-column'>
						<h5 className='card-title pb-2'>Player Tag:</h5>
						<p className='card-text'>{player.username}</p>
						<h5 className='card-title pb-2'>Role:</h5>
						<p className='card-text'>{player.game_role?.type}</p>
						<h5 className='card-title pb-2'>Rank:</h5>
						<p className='card-text'>{player.rank?.type}</p>

						<button className='detailbutton'>
							<NavLink to={`${player.id}`}>Voir le détail</NavLink>
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
