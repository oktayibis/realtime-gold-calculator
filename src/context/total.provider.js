import React, { useState } from "react";

import TotalContext from "./total.context";

const TotalProvider = ({ children }) => {
const [totalPrice, setTotalPrice] = useState(0)

const calculate = () => {
	const reducer = (accumulator, currentValue) => accumulator + currentValue;
	return totalPrice.reduce(reducer, 0)
}
	return (
		<TotalContext.Provider
			value={{
				totalHelper: [totalPrice, setTotalPrice],
				calculate: calculate
			}}
		>
			{children}
		</TotalContext.Provider>
	);
};

export default TotalProvider;
