import React, {  useContext, useEffect } from "react";
import Input from "../components/input.component";
import TotalContext from "../context/total.context";

import "./main.style.css"

const MainPage = () => {

    const {getTotalPrice, getRealData, goldPriceList} = useContext(TotalContext);	
	//const [totalPrice] = totalHelper;

	useEffect(() => {
	getRealData();
	}, [])

	if(goldPriceList.isLoaded){

		return (
			<div className="main-container">
				{goldPriceList.list.map((gold, index) => (
					<Input index={index} key={index} name={gold.name} price={gold.buying}  />
				))}
			<div className="result-area">	<h3 className="total-gold-text" >Toplam Altın Değeri: <span className="total-gold-price">{getTotalPrice()} ₺</span> </h3></div>
			</div>
		);
	}

	return <p>Loading</p>
};

export default MainPage;
