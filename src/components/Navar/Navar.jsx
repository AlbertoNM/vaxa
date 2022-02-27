import React from "react";
import { Link } from 'react-router-dom'
import './Navar.css';

function Navar() {
	return(
		<nav className="Navar">
			<ul>
				<Link to='/'>
					<li>Home</li>
				</Link>
				<Link to='/sobre-nosotros' >
					<li>About</li>
				</Link>
				<Link to='/paquetes' >
					<li>Paquetes</li>
				</Link>
			</ul>
		</nav>
	);
}

export { Navar }
