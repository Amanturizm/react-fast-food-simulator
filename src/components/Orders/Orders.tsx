import { nanoid } from "nanoid";
import React from 'react';
import { IPRODUCT, IProduct } from "../../App";
import Order from "./Order/Order";
import './Orders.css';

interface IProps {
	products: IProduct[];
	PRODUCTS: IPRODUCT[];
	price: number;
	removeClickHandler: (index: number) => void;
}

const Orders: React.FC<IProps> = ({ products, PRODUCTS, price, removeClickHandler }) => {
	const isGetCount = (arr: IProduct[]): boolean => {
		let res: boolean = false;
		arr.forEach((item: IProduct) => {
			if (item.count) {
				res = true;
			}
		});
		return res;
	};

	const isCount: boolean = isGetCount(products);

	return (
		<div className="Orders">
			<h4 className="Orders-label">Orders details: </h4>
			<div className="Orders-items">
				{
					!isCount ?
						<div>Order is empty!<br/>Please add some items!</div> :
						products.map(({ name, count }, index: number) => {
							return count !== 0 ?
								<Order
									removeClickHandler={() => removeClickHandler(index)}
									key={nanoid()}
									name={name}
									count={count}
									price={count * PRODUCTS[index].price}
								/> : null;
						})
				}
			</div>

			{!isCount ? null : <div className="Total-price">Total price: <span>{price}</span>KGS</div>}

		</div>
	);
};

export default Orders;