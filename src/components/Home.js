import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
	const navigate = useNavigate();
	const [data, setData] = useState([
		{
			id: 1,
			price: 2500,
			category: 'backpack',
			seller: 'Manfrotto',
			img: 'https://images-na.ssl-images-amazon.com/images/I/51mEVhwXGKL._AC_US218_.jpg',
			title: 'Manfrotto MB LF-WN-BP camera & laptop backpack for DSLR Lifestyle Windsor, grey',
			desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
			bg: 'f5fafd',
		},
		{
			id: 2,
			price: 72500,
			category: 'laptop',
			seller: 'Acer',
			img: 'https://images-na.ssl-images-amazon.com/images/I/41HfDkXXyeL._AC_US218_.jpg',
			title: 'Acer Aspire E 15 E5-575G-57D4 15.6-Inches Full HD Notebook (i5-7200U, 8GB DDR4 SDRAM, 256GB SSD, Windows 10 Home), Obsidian Black',
			desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
			bg: 'fcf1ed',
		},
		{
			id: 3,
			price: 75500,
			category: 'laptop',
			seller: 'Asus',
			img: 'https://images-na.ssl-images-amazon.com/images/I/417yCr3mvYL._AC_US218_.jpg',
			title: 'ASUS ZenBook UX330UA-AH54 13.3-inch Ultra-Slim Laptop (Core i5 Processor, 8GB DDR3, 256GB SSD, Windows 10) With Harman Kardon Audio, Backlit keyboard, Fingerprint Reader',
			desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
			bg: 'fbf0f4',
		},
	]);
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
			<h1 style={{ margin: '30px' }}>Product List</h1>
			<div style={{ display: 'flex', flexWrap: 'wrap' }}>
				{data.map((item, index) => {
					return (
						<div key={item.id} style={{ margin: '30px' }}>
							<img src={item.img} alt='Img' />
							<p>
								{item.title} | {item.category}
							</p>
							<p>{item.desc}</p>
							<p>By {item.seller}</p>
							<p>Price: {item.price} BDT </p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Home;
