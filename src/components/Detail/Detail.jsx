import Navigation from '../NavPage/Navigation'
import Header from '../HomePage/HomePage/Header.jsx'
import imgDetalle from '../../json/clothe.json'
import Footer from '../Footer/Footer.jsx'
import './detail.css'

export default function Detail() {
  return (
    <>
  
    <Header/>
    <Navigation/>
    <div className="detail-container">
      <div className="detail-content-container">
        <div className="img-detail-container">
          <img src={imgDetalle[0].Image} alt="" />
        </div>
        <div className="info-detail-container">
          <h2 className='title-detail'>{imgDetalle[0].Nombre} </h2>
          <hr />
          <h3 className='price-detail'> $50</h3>
          <h4 className='description-detail'>Disponible en Talle M,L,XL</h4>
          <h4 className='description-detail'>Hasta 3 cuotas sin interés</h4>
          <div className="btn-detail-container">
          <button className='btn-detail'> Consultar por WhatsApp </button>
        </div>
      </div>
        </div>
       

    </div>
    <Footer/>
    </>
  )
}
