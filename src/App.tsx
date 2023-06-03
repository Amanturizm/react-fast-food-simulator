import React, { useState } from 'react';
import './App.css';
import burgerImage from './assets/hamburger.webp';
import Products from "./components/Products/Products";

export interface IPRODUCT {
	name: string;
	price: number;
	imgURL: string;
}

const PRODUCTS: IPRODUCT[] = [
	{ name: 'Hamburger', price: 80, imgURL: burgerImage },
	{ name: 'Coffee', price: 70, imgURL: burgerImage },
	{ name: 'Cheeseburger', price: 90, imgURL: burgerImage },
	{ name: 'Tea', price: 50, imgURL: burgerImage },
	{ name: 'Fries', price: 45, imgURL: burgerImage },
	{ name: 'Cola', price: 40, imgURL: burgerImage }
];

interface IProducts {
	[key: string]: number;
}

const App = () => {
	const [products, setProducts] = useState<IProducts>(
		{
			hamburger: 0,
			coffee: 0,
			cheeseburger: 0,
			tea: 0,
			fries: 0,
			cola: 0,
		}
	);

	return (
		<div className="App">
			<Products PRODUCTS={PRODUCTS} />
		</div>
	);
};

export default App;