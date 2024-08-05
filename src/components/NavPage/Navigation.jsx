import './navigation.css'

export default function Navigation() {
  return (
  <nav>
		<ul className="menu-horizontal">
			<li><a href="#">Inicio</a></li>
			<li>
				<a href="#">Productos</a>
				<ul className="menu-vertical">
					<li><a href="#">Primavera / Verano</a></li>
					<li><a href="#">Otoño / Invierno</a></li>
				</ul>
			</li>
			<li>
				<a href="#">Sobre Nosotras</a>
			</li>
			<li><a href="#">Contacto</a></li>

		</ul>
	</nav>


  )
}
