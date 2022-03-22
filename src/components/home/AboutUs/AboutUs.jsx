import React from "react";
import './AboutUs.css';
import bottle from '../../../assets/bottle.svg';

function AboutUs() {
	return(
		<div className="AboutUs container__info animate__animated animate__bounceInUp">
			<section className="AboutUs__section section">
				<h3 className="section__subtitle">¿Quiénes somos?</h3>
				<h3 className="section__paragraph">Somos profesionales en el ámbito esotérico. Buscamos ayudar a las personas con soluciones que desde años funcionan en las diferentes culturas. Rituales amenos a cualquier persona. Podemos ayudarte con amor, dinero, emociones positivas y atraer buena vibra y evitar el mal de ojo.</h3>
				<h3 className="section__footer">Somos un grupo reconocido de profesionales y contamos con certificaciones al rededor del mundo.</h3>
			</section>
			<figure className="AboutUs__figure figure">
				<img src={bottle} alt="bottle" />
			</figure>
		</div>
	);
}

export { AboutUs }
