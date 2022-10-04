/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import instance from '../../utils/axios';
import { useParams, NavLink } from 'react-router-dom';

const OffersList = () => {
	const [data, setData] = useState([]);
	const { id } = useParams();

	const getOffersList = async () => {
		instance.get(`/teams/${id}/offers`).then((response) => {
			setData(response.data);
		});
	};

	useEffect(() => {
		// GET request using fetch inside useEffect React hook
		getOffersList();
	}, []);

	return (
		<div id="home">
			<div className='cardcontainer'>
				{data.map((offer) => (
					<div className='card' key={offer.id}>
						<img src='https://cdn.pixabay.com/photo/2020/02/03/00/12/fiber-4814456__340.jpg' className='card-img-top' alt='tech'></img>
						<div className='card-body'>
							<p className='card-text'>{offer.title}</p>
							<p className='card-text'>{offer.SearchProfil}</p>
							<button className='detailbutton'>
								<NavLink to={`${offer.id}`}>
									<footer className='card-footer'>Voir le détail</footer>
								</NavLink>
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default OffersList;
