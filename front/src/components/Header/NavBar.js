/* eslint-disable no-use-before-define */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './navBar.scss';
import { useState } from 'react';

const NavBar = ({ userInfoState, setUserInfo }) => {
	const navigate = useNavigate();

	const [showLinks, setShowLinks] = useState(false);

	const handleShowLinks = () => {
		setShowLinks(!showLinks)
	}

	const logOut = (e) => {
		localStorage.removeItem('userInfo', 'accessToken');
		setUserInfo(null);
		e.preventDefault();
		navigate('/');
	};
	return (
		<nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
			<Link to='/' className='navbar__logo'>
				<img src='./logomym.png' alt='logo mym' />
				<span>Match Your Mates</span>
			</Link>
			<ul className='navbar__links'>
				<li className='navbar__item slideInDown-1'>
					<Link to='/players' className='navbar__link '>Players</Link>
				</li>
				<li className='navbar__item slideInDown-2'>
					<Link to='/teams' className='navbar__link '>Teams</Link>
				</li>

				{(!userInfoState && (
					<div className='connectedbutton'>
						<li className='navbar__item slideInDown-3'>
							<Link to='/login' className='navbar__link '>Login</Link>
						</li>
						<li className='navbar__item slideInDown-4'>
							<Link to='/signup' className='navbar__link'>Signup</Link>
						</li>
					</div>
				)) || (
					<div className='isloggedbutons'>
						<li className='navbar__item slideInDown-3'>
								<Link to='/profile' className='navbar__link'>User Profile</Link>
						</li>
						<li className='navbar__item slideInDown-4'>
							<Link to='/disconect' className='navbar__link' onClick={logOut}>
								Logout
							</Link>
						</li>
					</div>
				)}
			</ul>
			<button className='navbar__burger' onClick={handleShowLinks}>
				<span className='burger-bar'></span>
			</button>
		</nav>
	);
};

export default NavBar;
