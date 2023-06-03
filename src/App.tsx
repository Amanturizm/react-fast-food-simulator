import React, { useState } from 'react';
import Orders from "./components/Orders/Orders";
import Products from "./components/Products/Products";
import hamburgerImage from './assets/hamburger.png';
import cheeseburgerImage from './assets/cheeseburger.webp';
import coffeeImage from './assets/coffee.webp';
import friesImage from './assets/fries.png';
import teaImage from './assets/tea.png';
import colaImage from './assets/cola.png';
import './App.css';

export interface IPRODUCT {
	name: string;
	price: number;
	imgURL: string;
}

const PRODUCTS: IPRODUCT[] = [
	{ name: 'Hamburger', price: 80, imgURL: hamburgerImage },
	{ name: 'Coffee', price: 70, imgURL: coffeeImage },
	{ name: 'Cheeseburger', price: 90, imgURL: cheeseburgerImage },
	{ name: 'Tea', price: 50, imgURL: teaImage },
	{ name: 'Fries', price: 45, imgURL: friesImage },
	{ name: 'Cola', price: 40, imgURL: colaImage }
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

	const [totalPrice, setTotalPrice] = useState<number>(0);

	const totalPricing = (productsCopy: IProduct[]): void => {
		setTotalPrice(() => {
			return productsCopy.reduce((acc: number, product: IProduct, index: number) => {
				return acc + (product.count * PRODUCTS[index].price);
			}, 0);
		});
	};

	const addProduct = (index: number): void => {
		setProducts((prevState: IProduct[]) => {
			const productsCopy: IProduct[] = [...prevState];
			const productCopy: IProduct = { ...productsCopy[index] };
			productCopy.count++;
			productsCopy[index] = productCopy;
			totalPricing(productsCopy);
			return productsCopy;
		});
	};

	const removeProductOrder = (index: number): void => {
		setProducts(prevState => {
			const productsCopy: IProduct[] = [...prevState];
			const productCopy: IProduct = { ...productsCopy[index] };
			productCopy.count = 0;
			productsCopy[index] = productCopy;
			totalPricing(productsCopy);
			return productsCopy;
		});
	};

	return (
		<div className="App">
			<Orders products={products} PRODUCTS={PRODUCTS} price={totalPrice} removeClickHandler={removeProductOrder}/>
			<Products PRODUCTS={PRODUCTS} addProductHandler={addProduct}/>
		</div>
	);
};

export default App;