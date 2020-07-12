import React, { useState } from "react";

import TotalContext from "./total.context";

const API_URL = "https://api.collectapi.com/economy/goldPrice";
const API_KEY = "apikey 5Rhb0GyJKN52GGRC8vgxoi:5laVnsyYDGBN6pvQX9Eh8C";

const TotalProvider = ({ children }) => {
	const [totalPrice, setTotalPrice] = useState(0);
	const [goldPriceList, setGoldPriceList] = useState({list: [], isLoaded: false})
	const getRealData = async () => {
		fetch(API_URL, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: API_KEY,
			},
		})
		.then(response => response.json())
		.then(data => setGoldPriceList({list:data.result, isLoaded:true}))
		.catch(error => console.log(error.message))
	};

	return (
		<TotalContext.Provider
			value={{
				totalHelper: [totalPrice, setTotalPrice],
				getRealData:getRealData,
				goldPriceList:goldPriceList
			}}
		>
			{children}
		</TotalContext.Provider>
	);
};

export default TotalProvider;
