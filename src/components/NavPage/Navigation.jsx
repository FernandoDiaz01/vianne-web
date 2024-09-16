import { NavLink } from 'react-router-dom'
import './navigation.css'
import imgFondo from '../../assets/imgStomps.png'

export default function Navigation() {
  return (
	<>
	
  <nav>
		<ul className="menu-horizontal">
			<li><NavLink to="/">Inicio </NavLink></li>
			<li>
				<a href="#">Productos</a>
				<ul className="menu-vertical">
					<li><a href="#">Primavera / Verano</a></li>
					<li><a href="#">Otoño / Invierno</a></li>
				</ul>
			</li>
			<li><NavLink to="https://wa.me/542615133452?text=Hola%20me%20interesa%20más%20información" target="_blank" rel="noopener noreferrer">Contacto </NavLink> </li>
		</ul>
	</nav>
			<img className='img-fondo' src={imgFondo} alt="" />

			</>
  )
}
