import React from "react";
import './AboutUs.css';
import bottle from '../../../assets/bottle.svg';

function AboutUs() {
	return(
		<div className="AboutUs container__info animate__animated animate__bounceInUp">
			<section className="AboutUs__section section">
				<h3 className="section__subtitle">¿Quiénes somos?</h3>
				<section className="section__paragraph justify">
					<p className="paragraph">Somos <span id="red">profesionales</span> en el ámbito esotérico, <span id="red">rituales</span> y meditacion.</p>
					<p className="paragraph">Buscamos ayudar a las personas con soluciones que desde años funcionan en las diferentes <span id="red">culturas</span>, desde la epoca medieval pasando por los <span id="red">gitanos</span> hasta llegar a las antiguas civilizaciones <span id="red">prehispanicas</span>, siempre han optado por <span id="red">fuerzas mayores</span> a nosotros para solucionar nuestros mas grandes <span id="red">problemas</span>.</p>
					<p className="paragraph">Para eso estamos nosotros aqui.</p>
					<p className="paragraph">Rituales <span id="red">amenos</span> a cualquier persona. Podemos ayudarte con <span id="red">amor</span>, <span id="red">dinero</span>, <span id="red">emociones positivas</span> y atraer <span id="red">buena vibra</span> y evitar el <span id="red">mal de ojo</span>.</p>
				</section>
			</section>
			<figure className="AboutUs__figure figure">
				<img src={bottle} alt="bottle" />
			</figure>
			<h3 className="section__footer">Somos un grupo reconocido de profesionales y contamos con certificaciones al rededor del mundo.</h3>
		</div>
	);
}

export { AboutUs }
