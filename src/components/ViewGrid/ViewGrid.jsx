import Content from "../Content/Content";
import './viewgrid.css'

export default function ViewGrid() {
  return (
    <>
      <div className="title-container">
        <h1 className="title">DESTACADOS</h1>
      </div>
      <div>
        <h2 id="adidas" className="title-category">
          ADIDAS
        </h2>
        <Content category="Adidas" />
        
        <h2 id="nike" className="title-category">
          Nike
        </h2>
        <Content category="Nike" />
        
        <h2 id="vans" className="title-category">
          Vans
        </h2>
        <Content category="Vans" />
        
        <h2 id="puma" className="title-category">
          Puma
        </h2>
        <Content category="Puma" />
      </div>
    </>
  );
}
