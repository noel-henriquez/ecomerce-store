import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
import "../stylesheets/shop.css";
import first from "../imagenes/tres.png";
import second from "../imagenes/dos.png";
import third from "../imagenes/uno.png";
import fourth from "../imagenes/cuatro.png";
import fifth from "../imagenes/cinco.png";
import six from "../imagenes/seis.png";
import seven from "../imagenes/siete.png";
import eight from "../imagenes/ocho.png";
import nine from "../imagenes/nine.png";
// Countdown Timer Component
const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="offer-container">
      <div className="image-section">
        <img src={nine} alt="Exclusive Offer" />
      </div>
      
      <div className="offer-details">
        <h2>Exclusive Offer</h2>
        <p>Unlock up to 40% savings on our latest arrivals.</p>
        
        <div className="countdown">
          <div>{timeLeft.days || '0'}d</div>
          <div>{timeLeft.hours || '0'}h</div>
          <div>{timeLeft.minutes || '0'}m</div>
          <div>{timeLeft.seconds || '0'}s</div>
        </div>
      </div>
    </div>
  );
};

// Shop Component
function Shop() {
  const catalogProducts = [
    { id: 1, name: "White Solid Formal Shirt", calification: 4.9, empty: "  ", price: 29.99, img: first },
    { id: 2, name: "Spread Collar Shirt", calification: 4.9, empty: "  ", price: 29.99, img: second },
    { id: 3, name: "Shine On Me Blouse", calification: 4.9, empty: "  ", price: 29.99, img: third },
    { id: 4, name: "Solid Round Neck T-shirt", calification: 4.9, empty: "  ", price: 29.99, bg: "#DDECE2", img: fourth },
    { id: 5, name: "Printed Loose T-shirt", calification: 4.9, empty: "  ", price: 29.99, img: fifth },
    { id: 6, name: "Summer Wind Crop Shirt", calification: 4.9, empty: "  ", price: 29.99, img: six },
    { id: 7, name: "Tailored Jacket", calification: 4.9, empty: "  ", price: 29.99, img: seven },
    { id: 8, name: "Gray Solid Padded Jacket", calification: 4.9, empty: "  ", price: 29.99, img: eight },
  ];

  return (
    <div className="sales-items justify-content-between">
      <div className="sales-items justify-content-between">
        <h2 className="text-center mb-4">Our Catalog</h2>

        <div className="items-tag justify-content-center">
          <ul>
            <li><a href="#">sale</a></li>
            <li><a href="#">hot</a></li>
            <li><a href="#">new</a></li>
            <li><a href="#">accessories</a></li>
          </ul>
        </div>
      </div>

      <div className="container mt-4">
        <div className="row">
          {catalogProducts.map((product) => (
            <div className="col-6 col-md-4 col-lg-3 mb-4" key={product.id}>
              <div
                className="catalog-item"
                style={{
                  backgroundColor: product.bg || "#fff",
                  height: "250px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "8px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={product.img}
                  alt="product"
                  style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="text-center mt-2">
                <p className="mb-1">{product.name}</p>
                <p className="font-weight-bold">
                  ${product.price.toFixed(2)} {product.empty} | {product.empty} {product.calification} 
                  <i className="star-color bi bi-star-fill"></i>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div >
        
        <CountdownTimer targetDate={'2024-12-31T00:00:00'} />
      </div>
    </div>
  );
}

export default Shop;
