import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.scss';
const K404 = () => {
	const navigate = useNavigate();

	const backToHome = () => {
		navigate('/');
		return;
	};
	return (
		<div className='body404'>
			<img className='img404' src='./sardoche.gif' alt='404'></img>
			<div className='butonbody'>
				<button onClick={backToHome} className='button404'>
					Bah alors... on est perdu? clique ici pour retourner dans la faille
				</button>
			</div>
		</div>
	);
};

export default K404;
