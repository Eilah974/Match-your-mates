import Header from '../Header';
import Footer from '../Footer';
import Home from '../Home';
import LoginForm from '../LoginForm';
import RegisterForm from '../RegisterForm';
import './App.css';
import PlayerList from '../PlayerList';
import ProfilForm from '../ProfilForm';
import Profile from '../Profile';
import CreateOffer from '../CreateOffer';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import TeamList from '../TeamList/index';
import PlayerCard from '../PlayerCard';
import TeamCard from '../TeamCard';
import OfferList from '../OffersList.js/index.js';
import Offer from '../Offer';
import LaTeam from '../LaTeam/index';
import K404 from '../404/index';

function App() {
	const userInfoStorage = localStorage.getItem('userInfo');
	const [userInfo, setUserInfo] = useState(userInfoStorage);

	return (
		<div className='App'>
			<Header userInfo={userInfo} setUserInfo={setUserInfo} />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/signup' element={<RegisterForm />} />
				<Route path='/profile' element={<Profile />} />
				<Route path='/profile/edit' element={<ProfilForm />} />
				<Route path='/profile/createOffer' element={<CreateOffer />} />
				<Route path='/login' element={<LoginForm setUserInfo={setUserInfo} />} />
				<Route path='/players' element={<PlayerList />} />
				<Route path='/players/:id' element={<PlayerCard />} />
				<Route path='/teams/:id' element={<TeamCard />} />
				<Route path='/teams' element={<TeamList />} />
				<Route path='/teams/:id/offers' element={<OfferList />} />
				<Route path='/teams/:id/offers/:announcementId' element={<Offer />} />
				<Route path='/lateam' element={<LaTeam />} />
				<Route path='/*' element={<K404 />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
