import "./informativeBanner.css";
import percentageImg from '/src/assets/percentage.svg';
import creditCard from '/src/assets/credit-card.svg';
import shippingCar from '/src/assets/shipping-car.svg';

export default function InformativeBanner() {
  return (
    <div className="banner-container">
      <div className="banner-content">
        {/* Primer conjunto de frases */}
        <div className="info-container">
          <div className="img-container">
            <img className="iconBanner" src={percentageImg} alt="percentage" />
          </div>
          <div className="text-description-container">
            <h4 className="description">
              15% de descuento en efectivo / transferencia
            </h4>
          </div>
        </div>
        <div className="info-container">
          <div className="img-container">
            <img className="iconBanner" src={creditCard} alt="credit card" />
          </div>
          <div className="text-description-container">
            <h4 className="description">
              15% de descuento en efectivo / transferencia
            </h4>
          </div>
        </div>
        <div className="info-container">
          <div className="img-container">
            <img className="iconBanner" src={shippingCar} alt="shipping car" />
          </div>
          <div className="text-description-container">
            <h4 className="description">
              Envío gratuito a partir de $50
            </h4>
          </div>
        </div>

        {/* Segundo conjunto de frases, clonación para el efecto carrusel */}
        <div className="info-container">
          <div className="img-container">
            <img className="iconBanner" src={percentageImg} alt="percentage" />
          </div>
          <div className="text-description-container">
            <h4 className="description">
              15% de descuento en efectivo / transferencia
            </h4>
          </div>
        </div>
        <div className="info-container">
          <div className="img-container">
            <img className="iconBanner" src={creditCard} alt="credit card" />
          </div>
          <div className="text-description-container">
            <h4 className="description">
              15% de descuento en efectivo / transferencia
            </h4>
          </div>
        </div>
        <div className="info-container">
          <div className="img-container">
            <img className="iconBanner" src={shippingCar} alt="shipping car" />
          </div>
          <div className="text-description-container">
            <h4 className="description">
              Envío gratuito a partir de $50
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
