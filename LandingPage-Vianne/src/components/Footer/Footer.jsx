import './footer.css'

export default function Footer() {
  return (
    <>
    <div className="footer-container">
        <div className="img-container-footer">
            <img src="./src/assets/logofooter.png" alt="Logo de Vianne Indumentaria" />
        </div>
        <div className="info-footer-container">
            <h4 className='title-footer'>Info</h4>
            <ul className='list-footer'>
                <li ><a className='links' href="https://maps.app.goo.gl/cNsJgbPBsLAHvjon8" target="_blank" rel="noopener noreferrer ">Dejanos tu reseña</a>  </li>
                <li> <a className='links' href="https://www.instagram.com/vianne.indumentaria/" target="_blank" rel="noopener noreferrer ">Instagram</a></li>
                <li> <a className='links' href="https://www.facebook.com/viannendumentariaa" target="_blank" rel="noopener noreferrer ">Facebook</a></li>
            </ul>
        </div>
        
    </div>
    <div className="copy-container">
            <p className="copyright">Copyright © Vianne | Tel:+54 9 11 5110-6369 - Email: vianne.indumentaria@gmail.com</p>
        </div>
    </>
    
  )
}
