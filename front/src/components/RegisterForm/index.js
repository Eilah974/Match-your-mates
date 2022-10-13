import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.scss';
import instance from '../../utils/axios';

// state de chaque éléments de chaques inputs
const RegisterForm = () => {
	const [validation, setValidation] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [username, setUserName] = useState('');
	const [passwordConfirm, setPasswordConfirm] = useState('');
	const [userType, setUserType] = useState('');

	const handleEmailChange = (value) => {
		setEmail(value)
	}

	const handleUsernameChange = (value) => {
		setUserName(value)
	}

	const handlePasswordChange = (value) => {
		setPassword(value)
	}

	const handlePasswordConfirmChange = (value) => {
		setPasswordConfirm(value)
	}

	const handleUsertypeChange = (value) => {
		setUserType(value)
	}

	// création de l'instance axios
	/*const instance = axios.create({
		baseURL: 'https://match-your-mate.herokuapp.com/',
		data: {
			username,
			email,
			password,
			passwordConfirm,
			userType,
		},
		headers: {
			'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
		},
	});*/

	
	const createAccount = async () => {
		const userData = {
			username,
			email,
			password,
			passwordConfirm,
			userType
		}
		// console.log("data", userData)
		// console.log(typeof(userData))
		await instance.post('/signup', userData).then((response) => {
			const account = response.data;
			console.log("response",account)
			// setData(account);
		});
	};

	// useEffect(() => {
	// 	createAccount();
	// }, []);

	// Representation des inputs dans un tableau
	const inputs = useRef([]);
	const addInputs = (el) => {
		if (el && !inputs.current.includes(el)) {
			inputs.current.push(el);
		}
	};

	// soumission du formulaire

	const navigate = useNavigate();

	// const register = (inputs) => {
	// 	console.log('email:');
	// 	console.log(inputs.current[0].value);
	// 	console.log('username:');
	// 	console.log(inputs.current[1].value);
	// 	console.log('password:');
	// 	console.log(inputs.current[2].value);
	// 	console.log('userType:');
	// 	console.log(inputs.current[4].value);
	// };

	const handleSubmit = (e) => {
		e.preventDefault();
		

		// Verification de la longueur du mot de passe
		if ((inputs.current[2].value.length || inputs.current[3].value.length) < 6) {
			setValidation('Votre mot de passe doit comporter 6 characters minimum');
			return;
		}
		//Verification que les deux mots de passe sont bien identiques
		else if (inputs.current[2].value !== inputs.current[3].value) {
			setValidation('Les mots de passe doivent être identique');
			return;
		}

		//register(inputs);
		
		// création de la requète axios
		// instance
		// 	.post('/signup', {
		// 		username: username,
		// 		email: email,
		// 		password: password,
		// 		passwordConfirm: passwordConfirm,
		// 		userType: userType,
				
		// 	})
		// 	console.log(instance)

		 	// useEffect(() => {
		 	// 	axios.post('https://match-your-mate.herokuapp.com/posts', instance.post)
		 	// 	.then(response => se)
		 	// 	.catch(error => console.log(error));
		 	// }, []);

		// 	.then((response) => {
		// 		console.log(response.data);

		// 		console.log('create success');
		// 	})
		// 	.catch((err) => {
		 		//console.log(err.response.status);
		// 		console.log(err);
		// 		console.log('erreur!!!');
		// 	 });
		navigate('/login');
		//console.log(inputs);
	};
	
	//  affichage du register form
	return (
		<div className='registerStyle'>
			<form onSubmit={handleSubmit} className='row g-3 mt-5 w-25 m-auto'>
				<div className='registerTitleStyle'>
					<label className='mt-5'>Formulaire d'enregistrement</label>
				</div>

				<input
					className='form-control text-left'
					ref={addInputs}
					type='email'
					value={email}
					name='email'
					id='ema'
					onChange={(event) => handleEmailChange(event.target.value)}					
					placeholder='Votre email:'
				/>
				<input
					className='form-control text-left'
					ref={addInputs}
					value={username}
					onChange={(event) => handleUsernameChange(event.target.value)}
					id='username'
					type='text'
					placeholder='votre pseudo joueur / team:'
				/>

				<input
					className='form-control text-left'
					ref={addInputs}
					onChange={(event) => handlePasswordChange(event.target.value)}
					type='password'
					id='password'
					value={password}
					name='password'
					placeholder='votre mot de passe:'
				/>
				<input
					className='form-control text-left'
					ref={addInputs}
					id='passwordConfirm'
					type='password'
					value={passwordConfirm}
					name='passwordConfirm'
					onChange={(event) => handlePasswordConfirmChange(event.target.value)}
					placeholder='Veuillez confirmer votre mot de passe:'
				/>
				<p className='text-danger mt-1'>{validation} </p>
				<select ref={addInputs} className='form-select' name='userType' aria-label='Default select example'
						onChange={(event) => handleUsertypeChange(event.target.value)}
				>
					<option hidden>Vous êtes ?</option>
					<option value='player'>
						Un joueur
					</option>
					<option value='team'>
						Une équipe
					</option>
				</select>				

				<button className='btn btn-primary w-25 m-auto mt-5' onClick={createAccount}>
					Confirmer
				</button>
			</form>
		</div>
	);
};

export default RegisterForm;
