import React, { useState } from "react";

import TotalContext from "./total.context";

const API_URL = "https://api.collectapi.com/economy/goldPrice";
const API_KEY = "apikey 6ir98Q5slIwaWaRHHoqNFr:4rUydREoQA4XeR0cEw3Wsh";

const TotalProvider = ({ children }) => {
	const [totalPrice, setTotalPrice] = useState(0);
	const [totalList, setTotalList] = useState([]);

	const [goldPriceList, setGoldPriceList] = useState({
		list: [],
		isLoaded: false,
	});
	const getRealData = async () => {
		fetch(API_URL, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: API_KEY,
			},
		})
			.then((response) => response.json())
			.then((data) => setGoldPriceList({ list: data.result.slice(0,4), isLoaded: true }))
			.catch((error) => console.log(error.message));
	};

	const getTotalPrice = () => {
		console.log(totalList)
	let total = totalList.reduce((acc, num )=> acc+num, 0);
	console.log("Total: ", total)
	return total;
	};

	const addNumber = (number, index) => {
		if(totalList[index] !== undefined){
			let newList = totalList.map((item,idx)=> {
				if(idx === index){
					return number
				}
				return item
			})
			setTotalList(newList);
		} else {
			setTotalList(oldArray => [...oldArray, number])
		}

	
	};

	return (
		<TotalContext.Provider
			value={{
				totalHelper: [totalPrice, setTotalPrice],
				getRealData: getRealData,
				goldPriceList: goldPriceList,
				getTotalPrice: getTotalPrice,
				addNumber: addNumber,
			}}
		>
			{children}
		</TotalContext.Provider>
	);
};

export default TotalProvider;
