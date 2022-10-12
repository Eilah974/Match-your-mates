import React from 'react';
import PropTypes from 'prop-types';
// import axios from 'axios';
import instance from '../../utils/axios';
import { useEffect, useState } from 'react';
import './teamList.scss';
import { NavLink } from 'react-router-dom';
/*const instance = axios.get({
	baseURL: 'http://localhost:4000/',
})*/

const TeamList = () => {
	const [data, setData] = useState([]);

	// const getTeams = async () => {
	// 	axios.get('https://match-your-mate.herokuapp.com/teams').then((response) => {
	// 		const teams = response.data;
	// 		console.log(teams)
	// 		setData(teams);
	// 	});
	// };
	const getTeams = async () => {
		instance.get('/teams').then((response) => {
			const teams = response.data;
			//console.log(teams)
			setData(teams);
		});
	};

	useEffect(() => {
		// GET request using fetch inside useEffect React hook
		getTeams();
	}, []);


	return (
		<div className='card__container'>
			{data.map((team) => (
				<div className='team__card' key={team.id}>
					<div className='team__card-img'>
						<img
							src={team.avatar}
							className='team__card-img-top'
							alt={team.username}
						></img>						
					</div>
					<div className='card__description'>
						<div className="card__description-box">
							<h5 className='card__title '>Team Name:</h5>
							<p className='card__text'>{team.username}</p>
						</div>
						<div className="card__description-box">
							<h5 className='card__title'>Global Rank:</h5>
							<p className='card__text'>{team.rank?.type}</p>							
						</div>							
						<button className='detail-button'>
							<NavLink to={`${team.id}`}>Infos</NavLink>
						</button>
					</div>
					
				</div>
			))}
		</div>
	);

};
export default TeamList;

TeamList.propTypes = {
	users: PropTypes.shape({
		avatar: PropTypes.string.isRequired,
		username: PropTypes.string.isRequired,
		game_role_type: PropTypes.string.isRequired,
		rank_type: PropTypes.string.isRequired,
	}),
};
