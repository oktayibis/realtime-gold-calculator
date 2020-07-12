import React, { useState, useContext } from "react";
import Input from "../components/input.component";
import TotalContext from "../context/total.context";

import "./main.style.css"

const goldList = [
	{
		name: "Çeyrek Altın",
		price: 601.67,
	},
	{
		name: "Gram Altın",
		price: 301.67,
	},
	{
		name: "Tam Altın",
		price: 1201.67,
	},
	{
		name: "Cumhuriyet Altın",
		price: 931.67,
	},
	{
		name: "Ata Altın",
		price: 903.67,
	},
];
const MainPage = () => {
    const {totalHelper, calculate} = useContext(TotalContext);	
	const [totalPrice, setTotalPrice] = totalHelper;



	return (
		<div className="main-container">
			{goldList.map((gold, index) => (
				<Input key={index} gold={gold}  />
			))}
			<h3 className="total-gold-text" >Toplam Altın Değeri: <span className="total-gold-price">{totalPrice.toFixed(1)} ₺</span> </h3>
		</div>
	);
};

export default MainPage;
