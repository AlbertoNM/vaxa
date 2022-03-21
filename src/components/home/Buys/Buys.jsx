import React from "react";
import './Buys.css';
import eye from '../../../assets/eye.svg';
import moon from '../../../assets/moon.svg';
import serpent2 from '../../../assets/serpent2.svg';

function Buys() {
	return(
		<div className="Buys">
			<section className="list_buys">
				<details className="info__section product">
					<summary className="section__subtitle">Lorem ipsum</summary>
					<h3 className="section__paragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus recusandae itaque</h3>
					<ul className="section__list">
						<li>Lorem</li>
						<li>Lorem</li>
						<li>Lorem</li>
					</ul>
					<img src={eye} alt="" className="section__img" id="eye"/>
				</details>
				<details className="info__section product">
					<summary className="section__subtitle">Lorem ipsum</summary>
					<h3 className="section__paragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus recusandae itaque</h3>
					<ul className="section__list">
						<li>Lorem</li>
						<li>Lorem</li>
						<li>Lorem</li>
					</ul>
					<img src={moon} alt="" className="section__img" id="moon"/>
				</details>
				<details className="info__section product">
					<summary className="section__subtitle">Lorem ipsum</summary>
					<h3 className="section__paragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus recusandae itaque</h3>
					<ul className="section__list">
						<li>Lorem</li>
						<li>Lorem</li>
						<li>Lorem</li>
					</ul>
					<img src={serpent2} alt="" className="section__img" />
				</details>
			</section>
		</div>
	);
}

export { Buys }
