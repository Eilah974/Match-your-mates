import { useState, useEffect } from 'react';
import instance from '../../utils/axios';
import { useParams } from 'react-router-dom';
import './offer.scss'

const Offer = () => {
	const [offer, setOffer] = useState();
	const { id, announcementId } = useParams();


	// récupératio des user infos dans le local sotrage


	const getOffer = async () => {
		instance.get(`/teams/${id}/offers/${announcementId}`).then((response) => {
			setOffer(response.data);
		});
	};

	useEffect(() => {
		// GET request using fetch inside useEffect React hook
		getOffer();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className='offer__container'>
			{offer && (
				<div className='offer__card' key={offer.id}>
					<div className="offer__team-logo">
						<img
							src={offer.team.avatar}
							className='offer__team-logo-img'
							alt={offer.team.username}
						></img>
					</div>
					<div className='offer__card-body'>
						<div className="offer__card-body-detail ocbd1">
							<h5 className='card-text'>{offer.title}</h5>
						</div>
						<div className="offer__card-body-detail ocbd2">
							<h5>Description</h5>
							<p className='card-text'>{offer.description}</p>
						</div>
						<div className="offer__card-body-detail ocbd2 ob1">
							<h5>Profil recherché</h5>
							<p className='card-text'>{offer.searchProfile}</p>
						</div>
					</div>
					<div className='offer__apply'>
						<button className='apply__button'>
							<a className='toto' href='/postuler '>
								<footer className='card-footer'>Postuler (en construction)</footer>
							</a>
						</button>
					</div>
				</div>
			)}
		</div>

	);
};

export default Offer;
