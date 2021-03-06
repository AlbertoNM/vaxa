import React from "react";
import { Link } from 'react-router-dom'
import './Navar.css';

function Navar() {
	return(
		<nav className="Navar">
			<ul className="Navar__ul">
				<Link to='/vaxa/'>
					<li className="links">Home</li>
				</Link>
				<Link to='/vaxa/sobre-nosotros' >
					<li className="links">Info</li>
				</Link>
				<Link to='/vaxa/paquetes' >
					<li className="links">Paquetes</li>
				</Link>
			</ul>
		</nav>
	);
}

export { Navar }
