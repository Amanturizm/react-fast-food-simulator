import React from 'react';
import './Product.css';

interface IProps {
	img: string;
	name: string;
	price: number | string;
}

const Product: React.FC<IProps> = ({ img, name, price }) => {
	return (
		<div className="Product">
			<img src={img} alt={name} />

			<div>
				<h4>{name}</h4>
				<p>Price: {price} KGS</p>
			</div>
		</div>
	);
};

export default Product;