import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.scss';

const TeamProfilForm = () => {
	const navigate = useNavigate();

	const inputs = useRef([]);

	const addInputs = (el) => {
		if (el && !inputs.current.includes(el)) {
			inputs.current.push(el);
		}
	};
	const playerProfil = (inputs) => {
		console.log('rang global de la team');
		console.log(inputs.current[0].value);
		console.log('présentation la team');
		console.log(inputs.current[1].value);
		console.log('recrutement on');
		console.log(inputs.current[2].checked);
		console.log('Recrutement Off');
		console.log(inputs.current[3].checked);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		playerProfil(inputs);
		//if(inputs.current[0].value === None || inputs.current[1].value === None){
		//setValidation('vous devez valider votre rôle et votre rank')
		//}
		navigate('/login');
	};
	return (
		<div className='teamProfileStyle'>
			<h1 className='teamProfileTitle'>Enregistrement équipe</h1>

			<form onSubmit={handleSubmit} className='row g-3 mt-5 w-25 m-auto'>
				<div className='form-group'>
					<label htmlFor='TeamRank'>Global Rank</label>
					<select ref={addInputs} className='form-select'>
						<option hidden>Choisissez votre rank</option>
						<option>Iron</option>
						<option>Bronze</option>
						<option>Silver</option>
						<option>Gold</option>
						<option>Platinum</option>
						<option>Diamond</option>
						<option>Master</option>
						<option>Grand Master</option>
						<option>Challenger</option>
					</select>
				</div>

				<div className='form-group'>
					<label htmlFor='teamPresentation'>Présentation de votre équipe</label>
					<textarea ref={addInputs} className='form-control rounded-0' id='teamPresentation' rows='10'></textarea>
				</div>
				<div className='teamProfilRadio'>
					<div className='form-check'>
						<label className='form-check-label' htmlFor='teamRecruit'>
							<input className='form-check-input' value='recruitOn' defaultChecked ref={addInputs} /*onChange={handleChange} id={inputId}*/ type='radio' name='radioForm' />
							Recrutement On
						</label>
					</div>

					<div className='form-check'>
						<label className='form-check-label' htmlFor='teamRecruit'>
							recrutement Off
							<input className='form-check-input' value='recruitOff' ref={addInputs} /*onChange={handleChange} id={inputId}*/ type='radio' name='radioForm' />
						</label>
					</div>
				</div>

				<button type='submit' className='btn btn-primary w-25 m-auto mt-5'>
					Submit
				</button>
			</form>
		</div>
	);
};

export default TeamProfilForm;
