import "./header.css";
import whatsappIcon from '/src/assets/whatsapp.svg'
import instagramIcon from '/src/assets/instagram.svg'

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
              <li > <a href="" target="_blank"><img className="icon" src={instagramIcon} alt="Instagram" /> </a>   </li>
             <li > <a href="" target="_blank"> <img className="icon" src={whatsappIcon} alt="WhatsApp" />  </a></li>
           </ul>
          </div>
        </header>
      </div>
    </div>
  );
}
