import React, { useState, useContext } from "react";
import "./input.style.css";
import TotalContext from "../context/total.context";
import { Add, Minus } from "./images/icons.component";
const Input = ({ gold }) => {
	const [value, setValue] = useState(0);
	const { totalHelper, calculate } = useContext(TotalContext);
	const [totalPrice, setTotalPrice] = totalHelper;
	let total = value * gold.price;
	// const handleClick = () => {
	// 	console.log("onclick");
	// 	let payload = value * gold.price;
	// 	console.log("list", totalPrice);
	// 	setTotalPrice(totalPrice.concat(payload))
	// }
	const plus = () => {
		setValue(value + 1);
		let payload = totalPrice + gold.price;
		setTotalPrice(payload);
	};

	const minus = () => {
		if (value <= 0) {
			setValue(0);
		} else {
			setValue(value - 1);
			let payload = totalPrice - gold.price;
			setTotalPrice(payload);
		}
	};

	return (
		<React.Fragment>
			<div className="input-container">
				<div className="input-label-container">
					<p className="input-label" id="label">
						{gold.name}
						<span className="price">{gold.price}</span>
					</p>
				</div>

				<button onClick={() => plus()} className="input-plus">
					+
				</button>
				<input className="input" type="number" min={0} value={value} />
				<button onClick={() => minus()} className="input-minus">
					-
				</button>
				<div className="display-result">
					<p>
						{total.toFixed(1)} <span className="currency">TL</span>
					</p>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Input;
