import './navigation.css'

export default function subHeader() {
  return (
   /*  <div className="container-navigation">
          <ul className="list-navigation-container">
          <li className='list-navigation'>Inicio</li>
    <div className="dropdown">
      <button className="dropbtn">Productos</button>
      <div className="dropdown-content">
        <a href="#">Primavera/Verano</a>
        <a href="#">Otoño/Invierno</a>
      </div>
    </div>
      <li className='list-navigation'>Sobre Nosotras</li>
      <li className='list-navigation'>Contacto</li>
    </ul>
  </div> */
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
