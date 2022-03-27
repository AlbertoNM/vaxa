import React from "react";
import { Link } from 'react-router-dom'
import './MainText.css';
import serpent from '../../../assets/serpent.svg';

function MainText() {
	return(
		<div className="MainText container__info animate__animated animate__bounceInUp">
			<section className="MainText__section section">
				<h3 className="section__title">V<span id="red">Ä</span>XA</h3>
				<section className="section__info">
					<h3 className="section__subtitle">¿Problemas en la vida?</h3>
					<section className="section__paragraph noJustify">
						<p className="paragraph">¿No te llega ese <span id="red">aumento</span>?</p>
						<p className="paragraph">¿Te sientes pesado, lleno de <span id="red">mala vibra</span>?</p>
						<p className="paragraph">¿Esa persona que <span id="red">amas</span> no te corresponde?</p>
						<p className="paragraph">¿Te sientes <span id="red">triste</span>, <span id="red">solo</span>, <span id="red">apagado</span> y el método convencional <span id="red">no</span> te funciona?</p>
					</section>
				</section>
			</section>
			<figure className="MainText__figure figure">
				<img className="figure__img" src={serpent} alt="serpent" />
			</figure>
			<h3 className="section__footer">Nosotros te podemos ayudar con todos esos problemas, Växa es un sitio especializado en tratar afectaciones comunes con soluciones eficaces, con el apoyo de nuestros expertos en magia blanca y rituales puedes conseguir tus metas y progresar en la vida. Infórmate de nuestros paquetes y elige el que más se adapte a tus necesidades.</h3>
			<Link to='/vaxa/paquetes' className="section__paquetes" id="red">Haz click aquí para ver los paquetes.</Link>
		</div>
	);
}

export { MainText };
