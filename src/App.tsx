import React, { useState } from 'react';
import Orders from "./components/Orders/Orders";
import Products from "./components/Products/Products";
import burgerImage from './assets/hamburger.webp';
import coffeeImage from './assets/coffee.webp';
import './App.css';

export interface IPRODUCT {
	name: string;
	price: number;
	imgURL: string;
}

const PRODUCTS: IPRODUCT[] = [
	{ name: 'Hamburger', price: 80, imgURL: burgerImage },
	{ name: 'Coffee', price: 70, imgURL: coffeeImage },
	{ name: 'Cheeseburger', price: 90, imgURL: burgerImage },
	{ name: 'Tea', price: 50, imgURL: burgerImage },
	{ name: 'Fries', price: 45, imgURL: burgerImage },
	{ name: 'Cola', price: 40, imgURL: burgerImage }
];

export interface IProduct {
	name: string;
	count: number;
}

const App = () => {
	const [products, setProducts] = useState<IProduct[]>(
		[
			{ name: 'Hamburger', count: 0 },
			{ name: 'Coffee', count: 0 },
			{ name: 'Cheeseburger', count: 0 },
			{ name: 'Tea', count: 0 },
			{ name: 'Fries', count: 0 },
			{ name: 'Cola', count: 0 }
		]
	);

	const addProduct = (index: number): void => {
		setProducts((prevState: IProduct[]) => {
			const productsCopy: IProduct[] = [ ...prevState ];
			const productCopy: IProduct = { ...productsCopy[index] };
			productCopy.count++;
			productsCopy[index] = productCopy;
			return productsCopy;
		});
	};

	return (
		<div className="App">
			<Orders products={products} PRODUCTS={PRODUCTS} />
			<Products PRODUCTS={PRODUCTS} addProductHandler={addProduct}/>
		</div>
	);
};

export default App;