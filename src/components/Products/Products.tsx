import React from 'react';
import './Products.css';
import { IPRODUCT } from "../../App";
import Product from "./Product/Product";

interface IProps {
	PRODUCTS: IPRODUCT[];
}

const Products: React.FC<IProps> = ({ PRODUCTS }) => {
	return (
		<div className="Products">
			{
				PRODUCTS.map((PRODUCT: IPRODUCT) => {
					return <Product img={PRODUCT.imgURL} name={PRODUCT.name} price={PRODUCT.price} />
				})
			}
		</div>
	);
};

export default Products;