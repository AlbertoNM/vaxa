import React from "react";
import './AboutUs.css';
import bottle from '../../../assets/bottle.svg';

function AboutUs() {
	return(
		<div className="AboutUs container__info">
			<section className="AboutUs__section section">
				<h3 className="section__title">¿Quiénes somos?</h3>
				<h3 className="section__paragraph">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium sequi ea laboriosam, laudantium, rem unde adipisci repellendus explicabo deserunt sint suscipit maiores, iste culpa dolorum necessitatibus doloribus dolorem soluta repudiandae.</h3>
			</section>
			<figure className="AboutUs__figure figure">
				<img src={bottle} alt="bottle" />
			</figure>
		</div>
	);
}

export { AboutUs }
