import React, { EventHandler } from 'react';
import './Order.css';

interface IProps {
	name: string;
	count: number;
	price: number;
	removeClickHandler: () => void;
}

const Order: React.FC<IProps> = ({ name, count, price , removeClickHandler}) => {
	return (
		<div className="Order">
			<h4>{name}</h4>
			<span>x{count}</span>
			<p>{price} KGS</p>
			<button onClick={removeClickHandler}>×</button>
		</div>
	);
};

export default Order;