import './footer.css'

export default function Footer() {
  return (
    <>
    <div className="footer-container">
        <div className="img-container-footer">
            <img className='img-footer' src="/logo2.png" alt="Logo de Stomps Urb" />
        </div>
        <div className="info-footer-container">
            <h4 className='title-info '>Info</h4>
            <ul className='list-footer'>
                <li> <a className='links' href="https://www.instagram.com/stomps_urb/" target="_blank" rel="noopener noreferrer ">Instagram</a></li>
                <li> <a className='links' href="https://www.facebook.com/bauti.llaneza" target="_blank" rel="noopener noreferrer ">Facebook</a></li>
            </ul>
        </div>
        <div className="copy-container">
            <p className="copyright"> Tel:+54 9 2615 75-0680 - Email: llanezabautista6@gmail.com</p>
            <p className="copyright"> Copyright © Desarrollado por Fernando Diaz - fdiaz4823@gmail.com</p>
        </div>
    </div>
   
    </>
    
  )
}
