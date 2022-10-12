/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import instance from '../../utils/axios';
import { useParams, NavLink } from 'react-router-dom';
import './offerList.scss'

const OffersList = () => {
	const [data, setData] = useState([]);
	const { id } = useParams();

	const getOffersList = async () => {
		instance.get(`/teams/${id}/offers`).then((response) => {
			console.log(response.data);
			setData(response.data);
		});
	};

	useEffect(() => {
		// GET request using fetch inside useEffect React hook
		getOffersList();
	}, []);

	return (
		<div className='offers__list'>
			{data.map((offer) => (
				<div className='offer__card' key={offer.id}>
					<div className="team__logo">
						<img src={offer.team.avatar} alt="team logo" className="team__logo-img" />
					</div>
					<div className='offer__card-body'>
						<p className='card-text'>{offer.title}</p>
					</div>
					<div className="offer__button">
						<button className='offer__detail__button'>
							<NavLink to={`${offer.id}`}>
								<footer className='card-footer'>Voir l'annonce</footer>
							</NavLink>
						</button>						
					</div>

				</div>
			))}
		</div>
	);
};

export default OffersList;
