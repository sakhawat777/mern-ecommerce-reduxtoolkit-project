import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
	const navigate = useNavigate();
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	const handleLogin = () => {
		// console.log(userName);
		// console.log(password);
		const data = { email: userName, password: password };
		axios
			.post('https://reqres.in/api/login', data)
			.then((res) => {
				// console.log(res.data.token);
				if (res.data.token) {
					localStorage.setItem('token', res.data.token);
					navigate('/');
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<div>
			<h1>Login Page</h1>
			<label htmlFor='username'>Username: </label>
			<input
				type='text'
				value={userName}
				onChange={(e) => {
					setUserName(e.target.value);
					// console.log(userName);
				}}
			/>
			<br />
			<label htmlFor='password'>Password: </label>
			<input
				type='password'
				value={password}
				onChange={(e) => {
					setPassword(e.target.value);
					// console.log(password);
				}}
			/>
			<br />
			<button type='submit' onClick={handleLogin}>
				Submit
			</button>
			<br />
			<Link to={'/'}>Go to Home</Link>
		</div>
	);
};

export default Login;
