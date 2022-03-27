import React from "react";
import './Buys.css';
import eye from '../../../assets/eye.svg';
import moon from '../../../assets/moon.svg';
import serpent2 from '../../../assets/serpent2.svg';

function Buys() {
	return(
		<div className="Buys animate__animated animate__bounceInUp">
			<section className="info__section">
				<h3 className="section__subtitle">Paquete 1</h3>
				<h3 className="section__paragraph">Guía espiritual, persepción de problemas y guía de ritual para limpiar malas vibras</h3>
				<ul className="section__list">
					<li className="section__footer">$200</li>
				</ul>
				<img src={eye} alt="" className="section__img" id="eye"/>
			</section>
			<section className="info__section">
				<h3 className="section__subtitle">Paquete 2</h3>
				<h3 className="section__paragraph">Todo el paquete 1, más: acceso a una semana guiada para ayudarte a mejorar, ritual de iniciación y lectura del tarot.</h3>
				<ul className="section__list">
					<li className="section__footer">$399</li>
				</ul>
				<img src={moon} alt="" className="section__img" id="moon"/>
			</section>
			<section className="info__section">
				<h3 className="section__subtitle">Paquete 3</h3>
				<h3 className="section__paragraph">Todo lo que contiene el paquete 2 más: Plan de ritual semanal para apoyar a la atracción de buenas vibras y alejar malos espíritus, lectura del tarot al final de la semana, sesión de preguntas y respuestas y opción a un ritual a elegir entre: amarre, atraer dinero, comunicación con seres queridos o sesión de paz interior.</h3>
				<ul className="section__list">
					<li className="section__footer">$699</li>
				</ul>
				<img src={serpent2} alt="" className="section__img" />
			</section>
		</div>
	);
}

export { Buys }
