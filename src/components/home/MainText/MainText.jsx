import React from "react";
import './MainText.css';
import serpent from '../../../assets/serpent.svg';

function MainText() {
	return(
		<div className="MainText container__info">
			<section className="MainText__section section">
				<h3 className="section__title">Lorem Ipsum</h3>
				<h3 className="section__subtitle">Lorem ipsum dolor sit amet consectetur</h3>
				<h3 className="section__paragraph">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem, ut adipisci. Harum earum iste optio repudiandae quidem omnis aspernatur vel eaque, id praesentium, commodi recusandae nam non dolore officia porro.</h3>
				<h3 className="section__text">Lorem, ipsum dolor</h3>
			</section>
			<figure className="MainText__figure figure">
				<img className="figure__img" src={serpent} alt="serpent" />
			</figure>
		</div>
	);
}

export { MainText };
