import React from 'react';
import "../stylesheets/Features.css";
import accessories from "../imagenes/elegant-woman-straw-hat-isolated 2.png";
import  dresses from "../imagenes/pexels-dima-valkov-6211617 1.png"
import outwear from "../imagenes/vknivfu sdkvbjieurg kjvn 1.png";

 const Features = () => {
    
    
      
  return (
    <div className='container-fluid  contenedor-features'>
        <div>
            <h4>Designer Clothes For You</h4>
            <p>Immerse yourself in the world of luxury fashion with our meticulously crafted designer clothes!</p>
        </div>
        <div className=''>
        <div className='container '>
            <div className='row'>
                <div className='col-md-4'>
                    <img src={accessories} />

                    <p className='title-des'>accessories</p>
                    <p className='description'>complete your ensemble with designer accessories such as handbags, scarvers, belts, and hats</p>
                    
                </div>
                <div className='col-md-4'>
                    <div>
                        <img src={dresses}/>
                        <p className='title-des'>Dresses</p>
                        <p className='description'>Explore a stunning range of designer dresses, including gowns and chic day dresses</p>
                    </div>
                    
                </div>
                <div className='col-md-4'>
                    <div>
                    <img src={outwear}/>
                    
                    <p className='title-des'>Outwear</p>
                    <p className='description'>Browse luxurius designer coats jackets, and brazers to stay stylishly warm during colder seasons</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <div className='feedback container-fluid'>
            <div style={{textAlign:'center', fontSize:'2em',marginTop:'20px',fontWeight:'400'}}>
                <h3>Feedback Corner</h3>
            </div>
            <div className='row quote-container'>
                <div style={{ color: '#224F34', backgroundColor: '#C2EFD4', padding: '20px', borderRadius: '5px' }} className='col-md-4 col-lg-4 container-fluid bg'>
                    <p style={{fontSize:'1.5rem'}} className='feedback-title'>
                        <strong>"</strong>
                        Emily Wilson
                    </p>
                    <p>the customer experience was exceptional from start to finish. The website is user-friendly, the checkout process was smooth, and the clothes i ordered fit perfectly. I'm beyond satisfied!</p>
                </div>
            <div className='col-md-4 col-lg-4 container bg'>
                <p style={{fontSize:'1.5rem'}} className='feedback-title'>
                    <strong>"</strong>
                    Sarah Thompsom
                </p>
                <p>I absolutely love the quality and style of the clothing I purchased from this website. customer service was outstanding, and I received my order quickly. Highly recommended!</p>
            </div>
            <div className='col-md-4 col-lg-4 container bg'>
                <p style={{fontSize:'1.5rem'}} className='feedback-title'>
                    <strong>"</strong>
                    Olivia Martinez
                </p>
                <p>I had a great experience shopping on this website. The clothes I bought are fashionable and comfortable. Highly satisfied!</p>
            </div>
        </div>
            
        </div>
    </div>
  )
}
export default Features;
