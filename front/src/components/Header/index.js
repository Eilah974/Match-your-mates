import React from 'react';
import NavBar from './NavBar';

const Header = ({ userInfo, setUserInfo }) => {
	return (
		<div>
			<NavBar userInfoState={userInfo} setUserInfo={setUserInfo} />
		</div>
	);
};

export default Header;
