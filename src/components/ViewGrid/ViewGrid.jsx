import Content from "../Content/Content";
import './viewgrid.css'

export default function ViewGrid() {
  return (
    <div>
         <div className="title-container">
        <h1 className="title">Destacados</h1>
        </div>
        <h1 className="title-category" >
            ADIDAS
        </h1>
        <Content category="Adidas"/>
        <h1 className="title-category">
            Nike
        </h1>
        <Content category="Nike"/>
        <h1 className="title-category">
            Vans
        </h1>
        <Content category="Vans"/>
        <h1 className="title-category">
            Puma
        </h1>
        <Content category="Puma"/>
    </div>
  )
}
