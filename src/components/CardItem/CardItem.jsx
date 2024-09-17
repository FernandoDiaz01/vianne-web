/* eslint-disable react/prop-types */
import InnerImageZoom from "react-inner-image-zoom";
import './carditem.css'

export const CardItem = ({ item }) => {
  return (
    <div>
      <div className="container-title-shoes">
        <h2 className="title-shoes">{item.Nombre} </h2>
      </div>

      <InnerImageZoom
       
        src={item.Image}
        zoomSrc={item.Image}
        alt={item.name}
        zoomType="hover"
        zoomPreload={true}
        className="img-shoes"
        zoomScale={0.9}
      />

      <h5 className="price">{item.Precio} </h5>
      <div className="container-btn-whatsapp">
      <a
        href={item.Ref}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-whatsapp"
      >
        <img className="icon-wpp" src="./src/assets/iconWpp.png" alt="" />
        Contacta por WhatsApp
      </a>
      </div>
     
    </div>
  );
};
