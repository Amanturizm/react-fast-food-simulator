import { nanoid } from "nanoid";
import React from 'react';
import './Products.css';
import { IPRODUCT } from "../../App";
import Product from "./Product/Product";

interface IProps {
	PRODUCTS: IPRODUCT[];
	addProductHandler: (index: number) => void;
}

const Products: React.FC<IProps> = ({ PRODUCTS , addProductHandler}) => {
	return (
		<div className="Products">
			{
				PRODUCTS.map((PRODUCT: IPRODUCT, index: number) => {
					return (
						<Product
							key={nanoid()}
							img={PRODUCT.imgURL}
							name={PRODUCT.name}
							price={PRODUCT.price}
							onClickHandler={() => addProductHandler(index)}
						/>
					)
				})
			}
		</div>
	);
};

export default Products;