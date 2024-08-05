import "./header.css";

export default function Home() {
  return (
    <div>
      <div className="container-app">
        <header>
          <div className="container-logo">
            <img
              src="./src/assets/VianneLogo.jpeg"
              alt="Logo Vianne Indumentaria"
              className="logo"
            />
            <h1 className="title">Vianne Indumentaria</h1>
            <ul className="items-navbar">
              <li> <a href="" target="_blank"><i className="fab fa-instagram"></i> </a>   </li>
              <li> <a href="" target="_blank">  <i className="fab fa-whatsapp"></i></a></li>
            </ul>
          </div>
        </header>
      </div>
    </div>
  );
}
