import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
	const navigate = useNavigate();
	const handleLogOut = () => {
		localStorage.clear();
		navigate('/login');
	};
	useEffect(() => {
		if (!localStorage.getItem('token')) {
			navigate('/login');
		}
	}, []);
	return (
		<div>
			<h1>Home</h1>
			<Link to={'/login'}>Go to Login</Link>
			<br />
			<button onClick={handleLogOut}>Log Out</button>
		</div>
	);
};

export default Home;
