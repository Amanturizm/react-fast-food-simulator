import React from 'react';
import './Order.css';

interface IProps {
	name: string;
	count: number;
	price: number;
}

const Order: React.FC<IProps> = ({ name, count, price }) => {
	return (
		<div className="Order">
			<h4>{name}</h4>
			<span>x{count}</span>
			<p>{price} KGS</p>
			<button>×</button>
		</div>
	);
};

export default Order;