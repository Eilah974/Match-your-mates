/* eslint-disable no-unused-vars */
import React, { useState, useRef } from 'react';
import './style.scss';
import { useNavigate } from 'react-router-dom';
import instance from '../../utils/axios';

const LoginForm = ({ setUserInfo }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	// const instance = axios.create({
	// 	baseURL: 'https://match-your-mate.herokuapp.com/',
	// 	data: {
	// 		email,
	// 		password,
	// 	},
	// });

	const [validation, setValidation] = useState('');
	const navigate = useNavigate();

	// soumission du formulaire
	const handleForm = (e) => {
		e.preventDefault();

		instance
			.post('/login', {
				email: email,
				password: password,
			})
			.then((response) => {
				const userInfo = response.data.userInfo;
				const token = response.data.accessToken.token;

				console.log('auth success');
				instance.defaults.headers.common['authorization'] = `Bearer ${token}`;
				localStorage.setItem('accessToken', token);
				localStorage.setItem('userInfo', JSON.stringify(userInfo));
				setUserInfo(userInfo);
				// console.log(instance.defaults.headers.common);
				/*console.log(instance.defaults.headers);
				console.log(localStorage);
				console.log(token);
				console.log(userInfo);
				console.log(response.data);*/
				//const datatoken = localStorage.getItem(token, token)
			})
			.catch((err) => {
				//console.log(err.response.status);
				console.log(err);
			});
		navigate('/');
	};

	return (
		<div className='connect'>
			<form onSubmit={handleForm} className='row g-3 mt-5 w-25 m-auto'>
				<div className='title'>
					<label className='mt-5'>Formulaire de connexion</label>
				</div>
				<input type='email' onChange={(event) => setEmail(event.target.value)} value={email} name='email' id='email' className='form-control text-left' placeholder='Votre email:' />
				<input
					type='password'
					onChange={(event) => setPassword(event.target.value)}
					value={password}
					name='password'
					id='password'
					className='form-control text-left'
					placeholder='votre mot de passe:'
				/>

				<p className='text-danger mt-1'>{validation} </p>

				<button className='btn btn-primary w-25 m-auto mt-5' type='submit'>
					Se connecter
				</button>
			</form>
		</div>
	);
};
export default LoginForm;
