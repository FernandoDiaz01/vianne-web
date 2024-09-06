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
			<li><NavLink target="_blank" rel="noopener noreferrer" to="/nosotras">Contacto </NavLink> </li>
		</ul>
	</nav>
			<img className='img-fondo' src={imgFondo} alt="" />

			</>
  )
}
