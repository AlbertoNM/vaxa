import React from "react";
import './MainText.css';
import serpent from '../../../assets/serpent.svg';

function MainText() {
	return(
		<div className="MainText container__info animate__animated animate__bounceInUp">
			<section className="MainText__section section">
				<h3 className="section__title">V<span id="red">ä</span>xa</h3>
				<h3 className="section__subtitle">¿Problemas en la vida?</h3>
				<h3 className="section__paragraph">¿No consigues ese puesto, no te llega ese aumento, te sientes pesado, lleno de mala vibra, esa persona que amas no te corresponde, te sientes triste, solo, apagado y el metodo convencional no te funciona?</h3>
				<h3 className="section__footer">Intenta con nuestras soluciones esotéricas, magia blanca al alcance de un día. Consulta diagnóstico de la mejor calidad.</h3>
			</section>
			<figure className="MainText__figure figure">
				<img className="figure__img" src={serpent} alt="serpent" />
			</figure>
		</div>
	);
}

export { MainText };
