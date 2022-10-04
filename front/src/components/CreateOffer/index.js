/* eslint-disable no-unused-vars */
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.scss';
import instance from '../../utils/axios';

// state de chaque éléments de chaques inputs
const CreateOffer = () => {
    const [validation, setValidation] = useState('');
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [searchProfile, setSearchProfile] = useState('');
    const [offer, setOffer] = useState();


	const handleTitleChange = (value) => {
		setTitle(value)
	}

	const handleDescriptionChange = (value) => {
		setDescription(value)
	}

	const handleSearchProfileChange = (value) => {
		setSearchProfile(value)
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

	
	const createOffer = async () => {
		const offerData = {
			title,
			description,
			searchProfile,
		}
		console.log("data", offerData)
		console.log(typeof(offerData))
		await instance.post('/profile/createOffer', offerData).then((response) => {
			const offer = response.data;
			console.log("response", offer)
			setOffer(offer);
            navigate(`/teams/${userInfo.id}/offers/${offer.id}`)
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

	const register = (inputs) => {
		console.log('title:');
		console.log(inputs.current[0].value);
		console.log('description:');
		console.log(inputs.current[1].value);
		console.log('searchProfile:');
		console.log(inputs.current[2].value);

	};

	const handleSubmit = (e) => {
		e.preventDefault();
		

		// Verification de la longueur du titre
		if (inputs.current[0].value.length < 10 || inputs.current[0].value.length > 60 ) {
			setValidation('Votre titre doit comporter entre 10 et 60 charactères');
			return;
		}

        // Verification de la longueur de la description
		if (inputs.current[1].value.length < 50 || inputs.current[1].value.length > 500 ) {
			setValidation('Votre titre doit comporter entre 50 et 500 charactères');
			return;
		}

        // Verification de la longueur de la description
		if (inputs.current[2].value.length < 20 || inputs.current[2].value.length > 150 ) {
			setValidation('Votre titre doit comporter entre 20 et 150 charactères');
			return;
		}


		register(inputs);
		
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
		// navigate(`/teams/${userInfo.id}/offers/${offer.id}`);
		console.log(inputs);
	};
	
	//  affichage du register form
	return (
		<div className='registerStyle'>
			<form onSubmit={handleSubmit} className='row g-3 mt-5 w-25 m-auto'>
				<div className='registerTitleStyle'>
					<label className='mt-5'>Nouvelle annonce</label>
				</div>

				<input
					className='form-control text-left'
					ref={addInputs}
					type='text'
					value={title}
					name='title'
					id='title'
					onChange={(event) => handleTitleChange(event.target.value)}					
					placeholder='Titre de votre annonce:'
				/>
				<textarea
					className='form-control text-left'
					ref={addInputs}
					value={description}
					onChange={(event) => handleDescriptionChange(event.target.value)}
					id='description'
                    rows='5'
					placeholder='Description de votre annonce'
				/>

				<textarea
					className='form-control text-left'
					ref={addInputs}
					onChange={(event) => handleSearchProfileChange(event.target.value)}
					type='textarea'
					id='searchProfile'
					value={searchProfile}
					name='searchProfile'
					placeholder='Mettez le profile que vous recherchez'
				/>
							

				<button className='btn btn-primary w-25 m-auto mt-5' onClick={createOffer}>
					Confirmer
				</button>
			</form>
		</div>
	);
};

export default CreateOffer;
