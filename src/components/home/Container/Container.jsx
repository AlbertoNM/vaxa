import React from "react";
import './Container.css';
import { Routes, Route } from "react-router-dom";
import { MainText } from '../MainText/MainText';
import { AboutUs } from '../AboutUs/AboutUs';
import { Buys } from '../Buys/Buys';

function Container() {
	return(
		<div className="Container animate__animated animate__bounceInUp">
			<Routes>
					<Route path="/vaxa/" element={<MainText/>} />
					<Route path="/vaxa/sobre-nosotros" element={<AboutUs/>} />
					<Route path="/vaxa/paquetes" element={<Buys/>} />
			</Routes>
		</div>
	);
}

export { Container };
