import React, {  useContext, useEffect } from "react";
import Input from "../components/input.component";
import TotalContext from "../context/total.context";

import "./main.style.css"

const MainPage = () => {

    const {totalHelper, getRealData, goldPriceList} = useContext(TotalContext);	
	const [totalPrice] = totalHelper;

	useEffect(() => {
	getRealData();
	}, [])

	if(goldPriceList.isLoaded){

		return (
			<div className="main-container">
				{goldPriceList.list.map((gold, index) => (
					<Input key={index} name={gold.name} price={gold.buying}  />
				))}
			<div className="result-area">	<h3 className="total-gold-text" >Toplam Altın Değeri: <span className="total-gold-price">{totalPrice.toFixed(1)} ₺</span> </h3></div>
			</div>
		);
	}

	return <p>Loading</p>
};

export default MainPage;
