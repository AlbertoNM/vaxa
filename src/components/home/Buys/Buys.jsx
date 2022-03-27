import React from "react";
import './Buys.css';
import eye from '../../../assets/eye.svg';
import moon from '../../../assets/moon.svg';
import serpent2 from '../../../assets/serpent2.svg';

function Buys() {
	return(
		<div className="Buys animate__animated animate__bounceInUp">
			<section className="info__section">
				<h3 className="section__subtitle">Paquete Iniciación Blanca</h3>
				<h3 className="section__paragraph justify">Este páquete es para los que quieren iniciar en el ámbito esotérico, busca adentrarte en el lado blanco de la magia, solo para mejorar tus días con una sensación mínima de pesadez.</h3>
				<ul>
					<li className="list_item">Ritual para limpiar las malas vibras</li>
					<li className="list_item">Dicción de los números de la suerte</li>
					<li className="list_item">Horóscopo del calendario Växa</li>
				</ul>
				<p className="section__footer">$199.00</p>
				<img src={eye} alt="" className="section__img" id="eye"/>
			</section>
			<section className="info__section">
				<h3 className="section__subtitle">Paquete Tarot</h3>
				<h3 className="section__paragraph justify">Este paquete dte ayudará a mejorar tus días, tendrás acceso a un amuleto de protección para tu hogar, además de un ritual de inicio de dia para que tus 24 horas del día sean libres de mal augurio.</h3>
				<ul>
					<li className="list_item">Lectura de cartas Tarot</li>
					<li className="list_item">Amuleto de protección del hogar</li>
					<li className="list_item">Ritual de inicio del día</li>
					<li className="list_item">Guía para la desintoxicación del alma </li>
				</ul>
				<p className="section__footer">$399.00</p>
				<img src={moon} alt="" className="section__img" id="moon"/>
			</section>
			<section className="info__section">
				<h3 className="section__subtitle">Paquete Rúnico</h3>
				<h3 className="section__paragraph justify">Este paquete es para quien quiere algo más especializado, la guía es continua y un asesor de nuestro equipo y estará disponible para ti toda la semana, resolverá tus dudas y te acompañará en el proceso de limpieza espiritual. </h3>
				<ul>
					<li className="list_item">Ritual semanal para la buena vibra.</li>
					<li className="list_item">Ritual a elegir amarre, atracción de dinero, sesión de paz interior.</li>
					<li className="list_item">Guía espiritual continua.</li>
					<li className="list_item">Números de la suerte diario.</li>
				</ul>
				<p className="section__footer">$699.00</p>
				<img src={serpent2} alt="" className="section__img" />
			</section>
		</div>
	);
}

export { Buys }
