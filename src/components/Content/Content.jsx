import './content.css'
import clotheData from '../../json/clothe.json'

export default function Content() {
  return (
    <main className="content-container">
        <div className="title-container">
        <h1 className="title">Destacados</h1>
        </div>
      <div className="product-container">
        {clotheData.map((item, index)=>(
          <div className="card-container" key={index}>
            <div className="container-title-shoes">

            <h2 className='title-shoes'>{item.Nombre} </h2>
            </div>
            <img src={item.Image} alt="" />
            <h5 className='price'>{item.Precio} </h5>
          </div>
        ))}
      </div>
      <button className='btn-content'> Ver más</button>
    </main>
  )
}
