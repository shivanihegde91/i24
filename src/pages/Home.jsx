import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 
import img1 from './img/homeimg.png';
import img from './img/home2img.png';
import img2 from './img/home3.png';
import shoe from './img/home8.png';
import choco from './img/home6.png';
import jew from './img/home5.png';
import jew1 from './img/home7.png';
import jew2 from './img/hom4.png';
//import choco1 from './img/home10.jpg';
const Home = () => {
  return (
    <div className="home-container">
      {/* Section 1: Image Display */}
      <section className="section-image">
        <img src={img1} alt="Main Visual" className="main-image" style={{width:"100%"}} />
          {/* Section 4: Shop Button */}
      <section className="section-shop-button">
        <Link to="/products" className="shop-button" style={{alignContent:"center"}}>Shop Now</Link>
      </section>
      </section>

      {/* Section 2: Text and Small Image */}
      <section className="section-text">
        <div className="text-content">
          <h2>Online Shopping New Offers & Discounts</h2>
          <p>Check out our latest offers and discounts available exclusively for you!</p>
        </div>
        <div className="small-image">
          <img src={img} alt="Offers"  className='img1'/>
        </div>
      </section>

      {/* Section 3: Image Slider */}
      <section className="section-slider">
        <div className="image-slider">
          
          <img src={choco} alt="Image 2" className='choco' />
          <img src={shoe}alt="Image 1" className='shoe'/>
          
          <img src={jew} className='jew '/>
          <img src={jew1} alt="Image 5" className='jew1'/>
          <img src={jew2} alt="Image 5" className='jew2'/>
       
          {/*<img src={choco1} alt="Image 5" className='choco2'/>*/}
        </div>
      </section>

      {/* Section 4: Shop Button */}
      <section className="section-shop-button">
        
        <Link to="/products" className="shop-button">Shop Now</Link>
      </section>
    </div>
  );
}

export default Home;




