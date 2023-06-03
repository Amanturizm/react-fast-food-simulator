import { nanoid } from "nanoid";
import React from 'react';
import { IPRODUCT, IProduct } from "../../App";
import Order from "./Order/Order";
import './Orders.css';

interface IProps {
	products: IProduct[];
	PRODUCTS: IPRODUCT[];
}

const Orders: React.FC<IProps> = ({ products, PRODUCTS }) => {
	const isGetCount = (arr: IProduct[]): boolean => {
		let res: boolean = false;
		arr.forEach((item: IProduct) => {
			if (item.count) {
				res = true;
			}
		});
		return res;
	};

	return (
		<div className="Orders">
			{
				!isGetCount(products) ?
					<div>Order is empty!<br/>Please add some items!</div> :
					products.map(({ name, count }, index) => {
						return count !== 0 ?
							<Order key={nanoid()} name={name} count={count} price={count * PRODUCTS[index].price}/> : null;
					})
			}
		</div>
	);
};

export default Orders;