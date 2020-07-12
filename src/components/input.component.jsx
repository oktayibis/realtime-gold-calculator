import React, { useState, useContext } from "react";
import "./input.style.css";
import TotalContext from "../context/total.context";
import { Add, Minus } from "./images/icons.component";
const Input = ({ name, price }) => {
	const [value, setValue] = useState(0);
	const { totalHelper } = useContext(TotalContext);
	const [totalPrice, setTotalPrice] = totalHelper;
	let total = value * price;
	const plus = () => {
		setValue(value + 1);
		let payload = totalPrice + price;
		setTotalPrice(payload);
	};

	const minus = () => {
		if (value <= 0) {
			setValue(0);
		} else {
			setValue(value - 1);
			let payload = totalPrice - price;
			setTotalPrice(payload);
		}
	};

	

	return (
		<React.Fragment>
			<div className="input-container">
				<div className="input-label-container">
					<p className="input-label" id="label">
						{name}
						<span className="price">{price}</span>
					</p>
				</div>

				<button onClick={() => plus()} className="input-icon">
					{Add}
				</button>
				<input className="input" type="number" min={0} value={value} onChange={(e)=>setValue(e.target.value)} />
				<button onClick={() => minus()} className="input-icon">
					{Minus}
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
