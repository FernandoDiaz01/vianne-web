import './content.css'
import clotheData from '../../json/clothe.json'
import { useState } from 'react'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'
import InnerImageZoom from 'react-inner-image-zoom'

export default function Content() {

  const [visibleItems, setVisibleItems] = useState(9)
  const [showButton, setShowButton] = useState(true)

  const loadMoreItems = () => {
    setVisibleItems((prevVisibleItems) => {
      const newVisibleItems = prevVisibleItems + 3
      // Oculta el botón si se muestran todos los elementos
      if (newVisibleItems >= clotheData.length) {
        setShowButton(false)
      }
      return newVisibleItems
    })
  };
  return (
    <main className="content-container">
        <div className="title-container">
        <h1 className="title">Destacados</h1>
        </div>
      <div className="product-container">
        {clotheData.slice(0,visibleItems).map((item, index)=>(
          <div className="card-container" key={index}>
            <div className="container-title-shoes">

            <h2 className='title-shoes'>{item.Nombre} </h2>
            </div>
            
            <InnerImageZoom
            src={item.Image} 
            zoomSrc={item.Image} 
            alt={item.name}
            zoomType="hover" 
            zoomPreload={true}
            className='img-shoes' 
            zoomScale={0.8}
          />
            

         
            <h5 className='price'>{item.Precio} </h5>
            <a
        href="https://wa.me/542615133452?text=Hola%20me%20interesa%20más%20información%20sobre%20los%20productos"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-whatsapp"
      >
        Contacta por WhatsApp
      </a>
          </div>
        ))}
      </div>
      {showButton && (
        <button onClick={loadMoreItems} className='btn-content'> Ver más</button>
      )}
    </main>
  )
}
