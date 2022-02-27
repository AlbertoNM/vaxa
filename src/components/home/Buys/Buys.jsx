import React from "react";
import './Buys.css';
import eye from '../../../assets/eye.svg';
import moon from '../../../assets/moon.svg';
import serpent2 from '../../../assets/serpent2.svg';

function Buys() {
	return(
		<div>
			<h3 className="section__title">Paquetes</h3>
			<section className="container__info" id="Buys">
				<section className="info__section">
					<h3 className="section__subtitle">Lorem ipsum</h3>
					<h3 className="section__paragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus recusandae itaque</h3>
					<ul className="section__list">
						<li>Lorem</li>
						<li>Lorem</li>
						<li>Lorem</li>
					</ul>
					<img src={eye} alt="" className="section__img" id="eye"/>
				</section>
				<section className="info__section">
					<h3 className="section__subtitle">Lorem ipsum</h3>
					<h3 className="section__paragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus recusandae itaque</h3>
					<ul className="section__list">
						<li>Lorem</li>
						<li>Lorem</li>
						<li>Lorem</li>
					</ul>
					<img src={moon} alt="" className="section__img" id="moon"/>
				</section>
				<section className="info__section">
					<h3 className="section__subtitle">Lorem ipsum</h3>
					<h3 className="section__paragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus recusandae itaque</h3>
					<ul className="section__list">
						<li>Lorem</li>
						<li>Lorem</li>
						<li>Lorem</li>
					</ul>
					<img src={serpent2} alt="" className="section__img" />
				</section>
			</section>
		</div>
	);
}

export { Buys }
