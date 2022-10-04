/* eslint-disable no-use-before-define */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './style.scss';

const NavBar = ({ userInfoState, setUserInfo }) => {
	const navigate = useNavigate();

	const logOut = (e) => {
		localStorage.removeItem('userInfo', 'accessToken');
		setUserInfo(null);
		e.preventDefault();
		navigate('/');
	};
	return (
		<nav className='menu-container'>
			<input type='checkbox' aria-label='Toggle menu' />
			{/* <span></span>
			<span></span>
			<span></span> */}

			<a className='menu-logo'>
				<img src='./logomym.png' alt='logo mym' />
			</a>

			<div className='menu'>
				<ul>
					<li>
						<button className='navbutton'>
							<Link to='/'>Home</Link>
						</button>
					</li>
					<li>
						<button className='navbutton'>
							<Link to='/players'>Players</Link>
						</button>
					</li>
					<li>
						<button className='navbutton'>
							<Link to='/teams'>Teams</Link>
						</button>
					</li>

					{/*<li>
						<button className='navbutton'>
							<Link to='/teamprofilform'>Team Profil</Link>
						</button>
					</li>*/}
				</ul>
				<div>
					<ul>
						{(!userInfoState && (
							<div className='connectedbutton'>
								<li>
									<button className='navbutton'>
										<Link to='/login'>Se connecter</Link>
									</button>
								</li>
								<li>
									<button className='navbutton'>
										<Link to='/signup'>Créer un compte</Link>
									</button>
								</li>
							</div>
						)) || (
							<div className='isloggedbutons'>
							<p className='wlcmmsg'>Bonjour {userInfoState.username}</p>
								<li>
									<button className='navbutton'>
										<Link to='/profile'>Profil</Link>
									</button>
								</li>

								<li>
									<button className='navbutton'>
										<Link to='/disconect' onClick={logOut}>
											Se déconnecter
										</Link>
									</button>
								</li>
							</div>
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
