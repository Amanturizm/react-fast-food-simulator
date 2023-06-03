import React, { EventHandler, MouseEventHandler } from 'react';
import './Product.css';

interface IProps {
	img: string;
	name: string;
	price: number | string;
	onClickHandler: () => void;
}

const Product: React.FC<IProps> = ({ img, name, price, onClickHandler }) => {
	return (
		<div className="Product" onClick={onClickHandler}>
			<img src={img} alt={name} />

			<div>
				<h4>{name}</h4>
				<p>Price: {price} KGS</p>
			</div>
		</div>
	);
};

export default Product;