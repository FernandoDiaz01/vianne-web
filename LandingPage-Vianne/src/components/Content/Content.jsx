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
            <h1>{item.Nombre} </h1>
            <img src={item.Image} alt="" />
            <h3>{item.Precio} </h3>
          </div>
        ))}
      </div>
      <button className='btn-content'> Ver más</button>
    </main>
  )
}
