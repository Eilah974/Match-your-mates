import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.scss';
import instance from '../../utils/axios';

// state de chaque éléments de chaques inputs
const ProfileForm = () => {
	const [avatar, setAvatar] = useState('');
	const [age, setAge] = useState('');
	const [description, setDescription] = useState('');
	const [availablityRecruitment, setAvailablityRecruitment] = useState();
	const [search, setSearch] = useState('');
	const [rank, setRank] = useState('');
	const [gameRole, setGameRole] = useState('');

	const handleAvatarChange = (value) => {
		setAvatar(value)
	}

	const handleAgeChange = (value) => {
		setAge(value)
	}

	const handleDescriptionChange = (value) => {
		setDescription(value)
	}

	const handleAvailablityRecruitmentChange = (value) => {
		setAvailablityRecruitment(value)
	}

	const handleSearchChange = (value) => {
		setSearch(value)
	}

	const handleRankChange = (value) => {
		setRank(value)
	}

	const handleGameRoleChange = (value) => {
		setGameRole(value)
	}

	const userInfo = JSON.parse(localStorage.getItem('userInfo'));


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

	
	const updateProfile = async () => {
		const userData = {
			avatar, 
			age, 
			description, 
			availablityRecruitment, 
			search, 
			rank, 
			gameRole,

		}
		console.log("data", userData)
		console.log(typeof(userData))
		await instance.patch('/profile/edit', userData).then((response) => {
			const profile = response.data;
			console.log("response",profile)
			// setData(account);
			navigate('/profile');
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


	const handleSubmit = (e) => {
		e.preventDefault();
		

		console.log(inputs);
	};
	
	if(userInfo.userType === 'player')	{
		return (
			<div className='registerStyle'>
				<form onSubmit={handleSubmit} className='row g-3 mt-5 w-25 m-auto'>
					<div className='registerTitleStyle'>
						<label className='mt-5'>Formulaire de modification</label>
					</div>
	
					<input
						className='form-control text-left'
						ref={addInputs}
						type='text'
						value={avatar}
						name='avatar'
						id='ava'
						onChange={(event) => handleAvatarChange(event.target?.value)}					
						placeholder="L'adresse de votre avatar: "
					/>
					<input
						className='form-control text-left'
						ref={addInputs}
						value={age}
						onChange={(event) => handleAgeChange(event.target?.value)}
						id='age'
						type='number'
						min= '0' max='99'
						placeholder='Votre âge:'
					/>

					<p className='text-danger mt-1'> </p>
					<select ref={addInputs} className='form-select' name='rank' aria-label='Default select example'
							onChange={(event) => handleRankChange(event.target?.value)}
					>
						<option hidden>Quel est votre rang ?</option>
						<option value='1'>
							Iron
						</option>
						<option value='2'>
							Bronze
						</option>
						<option value='3'>
							Silver
						</option>
						<option value='4'>
							Gold
						</option>
						<option value='5'>
							Platinium
						</option>
						<option value='6'>
							Diamond
						</option>
						<option value='7'>
							Master
						</option>
						<option value='8'>
							Grandmaster
						</option>
						<option value='9'>
							Challenger
						</option>
					</select>

					<p className='text-danger mt-1'> </p>
					<select ref={addInputs} className='form-select' name='gameRole' aria-label='Default select example'
							onChange={(event) => handleGameRoleChange(event.target?.value)}
					>
						<option hidden>Quel est votre rôle ?</option>
						<option value='1'>
							Toplane
						</option>
						<option value='2'>
							Jungler
						</option>
						<option value='3'>
							Midlane
						</option>
						<option value='4'>
							ADC
						</option>
						<option value='5'>
							Support
						</option>

					</select>
	
					<textarea
						className='form-control text-left'
						ref={addInputs}
						onChange={(event) => handleDescriptionChange(event.target?.value)}
						type='textarea'
						id='description'
						value={description}
						rows= '5'
						name='description'
						placeholder='Décrivez vous:'
					/>
					<textarea 
						className='form-control text-left'
						ref={addInputs}
						id='search'
						type='textarea'
						value={search}
						name='search'
						onChange={(event) => handleSearchChange(event.target?.value)}
						placeholder='Veuillez marquer vos attentes'
					/>

					<p className='text-danger mt-1'> </p>
					<select ref={addInputs} className='form-select' name='availablityRecruitment' aria-label='Default select example'
							onChange={(event) => handleAvailablityRecruitmentChange(event.target?.value)}
					>
						<option hidden>Êtes vous disponible ?</option>
						<option value= 'true'>
							Oui
						</option>
						<option value= 'false'>
							Non
						</option>


					</select>
			
	
					<button className='btn btn-primary w-25 m-auto mt-5' onClick={updateProfile}>
						Confirmer
					</button>
				</form>
			</div>
		);
	}
	//  affichage du profile form
	if(userInfo.userType === 'team')	{
		return (
			<div className='registerStyle'>
				<form onSubmit={handleSubmit} className='row g-3 mt-5 w-25 m-auto'>
					<div className='registerTitleStyle'>
						<label className='mt-5'>Formulaire de modification</label>
					</div>
	
					<input
						className='form-control text-left'
						ref={addInputs}
						type='text'
						value={avatar}
						name='avatar'
						id='ava'
						onChange={(event) => handleAvatarChange(event.target?.value)}					
						placeholder="L'adresse de votre avatar: "
					/>

					<p className='text-danger mt-1'> </p>
					<select ref={addInputs} className='form-select' name='rank' aria-label='Default select example'
							onChange={(event) => handleRankChange(event.target?.value)}
					>
						<option hidden>Quel est votre rang global ?</option>
						<option value='1'>
							Iron
						</option>
						<option value='2'>
							Bronze
						</option>
						<option value='3'>
							Silver
						</option>
						<option value='4'>
							Gold
						</option>
						<option value='5'>
							Platinium
						</option>
						<option value='6'>
							Diamond
						</option>
						<option value='7'>
							Master
						</option>
						<option value='8'>
							Grandmaster
						</option>
						<option value='9'>
							Challenger
						</option>
					</select>

	
					<textarea
						className='form-control text-left'
						ref={addInputs}
						onChange={(event) => handleDescriptionChange(event.target?.value)}
						type='textarea'
						id='description'
						value={description}
						name='description'
						rows='5'
						placeholder='Décrivez vous:'
					/>
					<p className='text-danger mt-1'> </p>
					<select ref={addInputs} className='form-select' name='availablityRecruitment' aria-label='Default select example'
							onChange={(event) => handleAvailablityRecruitmentChange(event.target?.value)}
					>
						<option hidden>Recrutez vous ?</option>
						<option value= 'true'>
							Oui
						</option>
						<option value= 'false'>
							Non
						</option>


					</select>
			
	
					<button className='btn btn-primary w-25 m-auto mt-5' onClick={updateProfile}>
						Confirmer
					</button>
				</form>
			</div>
		);
	}
	
};

export default ProfileForm;
