import React from "react";
import {Link} from "react-router-dom";
import  "../stylesheets/home.css";
import homefoto from "../imagenes/foto-home.png";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import first from "../imagenes/first.png";
import second from "../imagenes/second.png";
import shine from "../imagenes/shine.png";
import face from "../imagenes/Facebook.png";
import twitter from "../imagenes/Twitter.png";
import instagram from "../imagenes/Instagram.png";




function Home() {
    const itemsHome = [
        { id:1, name: "Regular Fit Long Sleeve Top" , star:4.9, price:38.99, imagen:first,  bgColor:"#A9D4BA"}, 
        {
            id:2, name: "Textured Sunset Shirt", star:4.9, price:62.99,  imagen:shine, bgColor:"#93B9A2"},
        {
            id:3,name :"Shine On Me Blouse", price:49.99, star: 4.8, imagen:second, bgColor:"#A3F3BE"
        }
    ]

    
    return(
        <div>
        <div className="container-fluid contenedor-home"> {/* Use container-fluid for full-width container */}
            <div className="row align-items-center"> {/* Align items vertically centered */}
                <div className="col-lg-6 col-12"> {/* Adjust width for larger and smaller screens */}
                    <div className="hero-section">
                        <h1 className="titulo-home">
                            Discover and <br />
                            Find Your Own <br />
                            Fashion!
                        </h1>
                        <p className="description-hero">
                            Explore our curated collection of stylish <br /> clothing and accessories tailored to your <br /> unique taste.
                        </p>
                        <button className="hero-buton">explore now</button>
                    </div>
                </div>
                <div className="col-lg-6 col-12"> {/* Adjust width for larger and smaller screens */}
                    <div className="contenedor-home-img">
                        <div>
                            <img className="foto-1" alt="Fashion" src={homefoto} />
                            </div>
                    </div>
                </div>
            </div>
            
        </div>
        <div>
        <div>
            <div>
             <h2 className="home-product">Best selling</h2></div>
             <div className="home-description"><p className="">Get in on the trend with our curated selection of best-selling styles.</p></div>
            </div>
        <div className="product-grid">
            
    {itemsHome.map((product) => (
        <div key={product.id} className="product-item">

            <div className="first-container-home"
                style={{
                    backgroundColor: product.bgColor, 
                    height: '250px',  // Define height
                    
                    display: 'flex',
                    justifyContent: 'center', // Centering image
                    alignItems: 'center',     // Centering image
                              // Optional padding
                    
                }}
            >
                <img src={product.imagen} alt="product-img" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }} />
            </div>
            <p>{product.name}</p>
            <p className="price-des"> ${product.price}   | {product.star}   <i class="bi bi-star-fill"></i></p>
            
           
        </div>
    ))}
</div>
<div className=" price-des d-flex justify-content-center align-content-center">
     <Link to="/Shop" ><button className="catalog-buton">See all  <i class="bi bi-arrow-right"></i></button></Link>
     </div>
</div>
        <BottomPart/>
        </div>
        
    );

}
function BottomPart() {
    
    return (
        <div className="container-fluid footer">
  <div className="row display">
    <div className="col-md-3">
      <h4 className="brade" to="/">Brade</h4>
      <p className="social-des">Social Media</p>
      <div className="social-icons">
        <a href="https://www.instagram.com/noel.h_504/"><img  src={instagram} alt="Instagram logo" /></a>
        <a href="https://www.facebook.com/"><img src={face} alt="Facebook logo" /></a>
        <a href="https://x.com/ShAdOw4448"><img src={twitter} alt="Twitter logo" /></a>
      </div>
    </div>

    <div className="col-md-3   ">
      <div className="container">
        <div className="row display">
            <div></div>
            <div className="col ">
        <h5>SHOP</h5>
        <ul className="ul-elements">
          <li><a href="#">Products</a></li>
          <li><a href="#">Overview</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Releases</a></li>
        </ul>
      </div>
    </div>
    </div>
    </div>

    <div className="col-md-3">
      <div className="container">
        <div className="row display">
          <div className="col">
            <h5>COMPANY</h5>
            <ul className="ul-elements">
              <li><a href="#">About us</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">News</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className="col-md-3">
      <div className="container">
        <div className="row ">
          <div className="col">
            <h5>STAY UP TO DATE</h5>
            <form className="email-form">
              
              <input
                id="email"
                name="email"
                minLength="5"
                maxLength="50"
                autoComplete="on"
                required
                placeholder="Enter your email"
                type="email"
                className="input-email"
              />
              <button className="submit-button" type="submit">SUBMIT</button>
              
            </form>
          </div>
        </div>
      </div>
    </div>
    <div className="contenedor">
        <div className="line-container">
            <div className="line">
        
                <div className="terms">
                <ul className="ul-elements">
              <li><a href="#">About us</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">News</a></li>
              <li><a href="#">Support</a></li>
            </ul>
                </div>
            </div>
        </div>
    </div>
  </div>

</div>

);
}

export default Home;
