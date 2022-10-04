import { useState, useEffect } from 'react';
import instance from '../../utils/axios';
import './style.scss'
import { NavLink } from 'react-router-dom';

const Profile = () => {
	const [profile, setProfile] = useState();
	// const token = localStorage.getItem('accessToken');
	// const config = {
	// 	headers: {
	// 		authorization: `Bearer ${token}`,
	// 	}
	// };
	const userInfo = JSON.parse(localStorage.getItem('userInfo'));

	const getProfile = () => {
		 instance.get('/profile').then((response) => {
			const userProfile = response.data
			setProfile(userProfile);
		});
	};

	useEffect(() => {
		// GET request using fetch inside useEffect React hook
		getProfile();
	}, []);


	if (userInfo.userType === 'player') {
		return (
			<div className='cardcontainer'>
				{profile && (
					<div className='card' key={profile.id}>
					{profile.avatar ?
						<img
							src={profile.avatar}
							className='card-img-top'
							alt='tech'
						></img>
						:
						<img
							src='./astronaute.png'
							className='card-img-top'
							alt='tech'
						></img>
					}
						<div className='card-body'>
							<h6 className='card-text pb-2'><span className='profil'>Username:</span> {profile.username}</h6>
							<h6 className='card-text pb-2'><span className='profil'>Age:</span> {profile.age}</h6>
							<h6 className='card-text pb-2'><span className='profil'>Rang:</span> {profile.rank?.type}</h6>
							<h6 className='card-text pb-2'><span className='profil'>Rôle:</span> {profile.game_role?.type}</h6>
							<h6 className='card-text pb-2'><span className='profil'>Bio:</span> {profile.description}</h6>
							<h6 className='card-text pb-2'><span className='profil'>Attente:</span> {profile.search}</h6>
							{profile.availablityRecruitment ? 
								<h6 className='card-text pb-2'><span className='profil'>Disponibilité:</span> <span className="true">Disponible</span></h6>
							:
								<h6 className='card-text pb-2'><span className='profil'>Disponibilité:</span> <span className="false">Indisponible</span></h6>
							}
							
						</div>
						<div className="profilBtnContainer">
							<button  type="button" className="profilBtn"><NavLink to='/profile/edit'>Modifier le profil</NavLink> </button>
						</div>
					</div>
				)}
			</div>
		);
	};

	if(userInfo.userType === 'team') {

		return (
			<div className='cardcontainer'>
				{profile && (
					<div className='card' key={profile.id}>
					{profile.avatar ?
						<img
							src={profile.avatar}
							className='card-img-top'
							alt='tech'
						></img>

						:

						<img
							src='./astronaute1.png'
							className='card-img-top'
							alt='tech'
						></img>
					}
						<div className='card-body'>
							<h6 className='card-text pb-2'><span className='profil'>Nom de team:</span> {profile.username}</h6>
							<h6 className='card-text pb-2'><span className='profil'>Rang global:</span> {profile.rank?.type}</h6>
							<h6 className='card-text pb-2'><span className='profil'>description:</span> {profile.description}</h6>
							{profile.availablityRecruitment ? 
								<h6 className='card-text pb-2'><span className='profil'>Recrutement:</span> <span className="true">Ouvert</span></h6>
							:
								<h6 className='card-text pb-2'><span className='profil'>Recrutement:</span> <span className="false">Fermé</span></h6>
							}						
						</div>

						<div className="profilBtnContainer">
							<button  type="button" className="profilBtn"><NavLink to='/profile/edit'>Modifier le profil</NavLink> </button>
						</div>
						<div className="profilBtnContainer">
							<button  type="button" className="profilBtn"><NavLink to='/profile/createOffer'>Créer une annonce</NavLink> </button>
						</div>						
					</div>

				)}
			</div>
		);
	};
	

	
};

export default Profile;

