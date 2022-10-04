import { useState, useEffect } from 'react';
import instance from '../../utils/axios';
import { useParams } from 'react-router-dom';

const Offer = () => {
	const [offer, setOffer] = useState();
	const { id, announcementId } = useParams();

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
		<div id='home'>
			<div className='cardcontainer'>
				{offer && (
					<div className='card' key={offer.id}>
						<img
							src='https://media.istockphoto.com/photos/team-of-professional-cybersport-gamers-celebrating-success-in-gaming-picture-id1354761874?k=20&m=1354761874&s=612x612&w=0&h=rNYRSukPvoDbAO-VeXqYzD9xmslIEjD0iQgcc7oLhuI='
							className='card-img-top'
							alt='tech'
						></img>
						<div className='card-body'>
							<p className='card-text'>{offer.title}</p>
							<p className='card-text'>{offer.description}</p>
							<p className='card-text'>{offer.searchProfile}</p>
							<button className='detailbutton'>
								<a className='toto' href='/postuler '>
									<footer className='card-footer'>Postuler (en construction)</footer>
								</a>
							</button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Offer;
