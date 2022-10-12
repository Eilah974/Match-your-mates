import { useState, useEffect } from 'react';
import instance from '../../utils/axios';
import './profile.scss'
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
			<div className='profile__detail__container'>
				{profile && (
					<div className='profile__detail__card' key={profile.id}>
						<div className="profile__detail__infos">
							<div className="profile__detail__card__left">
								<div className="profile__detail__card-img">
									{profile.avatar ?
										<img
											src={profile.avatar}
											className='profile__card-img-top'
											alt={profile.username}
										></img>
										:
										<img
											src='./astronaute.png'
											className='profile__card-img-top'
											alt='player avatar'
										></img>
									}					
								</div>
								<div className='profile__detail__description-left'>
									<div className="profile__detail__description-box">
										<h5 className='detail__title '>Player Tag:</h5>
										<p className='detail__text'>{profile.username}</p>
									</div>
									<div className="profile__detail__description-box">
										<h5 className='detail__title'>Age:</h5>
										<p className='detail__text'>{profile.age}</p>							
									</div>							
									<div className="profile__detail__description-box">
										<h5 className='detail__title '>Role:</h5>
										<p className='detail__text'>{profile.game_role?.type}</p>							
									</div>
									<div className="profile__detail__description-box">
										<h5 className='detail__title'>Rank:</h5>
										<p className='detail_text'>{profile.rank?.type}</p>							
									</div>
									<div className="profile__detail__description-box b1">
										{profile.availablityRecruitment ? 
												<p className='detail-text'>Disponible: <span className="available">Oui</span></p>
												
											:
												<p className='detail-text'>Disponible: <span className="unavailable">Non</span></p>
										}							
									</div>							
								</div>
							</div>
							<div className="profile__detail__card__right">
								<div className="profile__detail__description-box">
									<h5 className='detail__title '>Bio:</h5>
									<p className='detail__text'>{profile.description}</p>
								</div>
								<div className="profile__detail__description-box b2">
									<h5 className='detail__title '>Attente:</h5>
									<p className='detail__text'>{profile.search}</p>
								</div>
							</div>
						</div>
						<div className="player__profile__button">
							<button className='profile-button'>
								<NavLink to='/profile/edit'>Editer les infos</NavLink>
							</button>
							<button className='profile-button'>
								<NavLink to='#'>Modifier mot de passe</NavLink>
							</button>
							<button className='profile-button'>
								<NavLink to='#'>Supprimer compte</NavLink>
							</button>
						</div>
					</div>
				)}
			</div>
		);
	};

	if(userInfo.userType === 'team') {

		return (
			<div className='detail__container'>
				{profile && (
					<div className='profile__team__detail__card' key={profile.id}>
						<div className="profile__detail__infos">
							<div className="profile__detail__card__left">
								<div className="profile__detail__card-img">
										{profile.avatar ?
											<img
												src={profile.avatar}
												className='profile__card-img-top'
												alt={profile.username}
											></img>
											:
											<img
												src='./astronaute1.png'
												className='profile__card-img-top'
												alt='team avatar'
											></img>
										}					
								</div>
								<div className='profile__detail__description-left'>
									<div className="profile__detail__description-box">
										<h5 className='detail__title '>Team name:</h5>
										<p className='detail__text'>{profile.username}</p>
									</div>
									<div className="profile__detail__description-box">
										<h5 className='detail__title'>Global Rank:</h5>
										<p className='detail_text'>{profile.rank?.type}</p>							
									</div>
									<div className="profile__detail__description-box b1">
										{profile.availablityRecruitment ? 
												<p className='detail-text'>Recutement: <span className="available">Ouvert</span></p>
												
											:
												<p className='detail-text'>Recrutement: <span className="unavailable">Fermé</span></p>
										}							
									</div>							
								</div>
							</div>
							<div className="profile__detail__card__right">
								<div className="profile__detail__description-box">
									<h5 className='detail__title '>Team description:</h5>
									<p className='detail__text'>{profile.description}</p>
								</div>
							</div>
						</div>

						<div className="player__profile__button">
							<button className='profile-button'>
								<NavLink to='/profile/edit'>Editer les infos</NavLink>
							</button>
							<button className='profile-button'>
								<NavLink to='/profile/createOffer'>Créer une annonce</NavLink>
							</button>
							<button className='profile-button'>
								<NavLink to='#'>Modifier mot de passe</NavLink>
							</button>
							<button className='profile-button'>
								<NavLink to='#'>Supprimer compte</NavLink>
							</button>
						</div>
					</div>
					
				)}
			</div>
		);			
		
	};
	

	
};

export default Profile;

