import React from 'react';
import './About.css'; // Import a CSS file for styling
//import backgroundImage from '../images/fether.jpg';
//import img from '../image/fether.jpg';


const About = () => {
  return (
    <div className="about-container"  >
      <div className="about-content">
        <h1>Welcome to i24</h1>
        <p>
          At i24, we are committed to providing our customers with a seamless and convenient shopping experience.
          Our name, "i24," reflects our promise to be available 24 hours a day, 7 days a week, ensuring that you can
          shop whenever you want, from wherever you are.
        </p>
        <h2>Why Shop With Us?</h2>
        <ul>
          <li><strong>24/7 Availability:</strong> Shop at any time that suits you, with round-the-clock service.</li>
          <li><strong>Wide Variety:</strong> Explore a wide range of products across multiple categories.</li>
          <li><strong>Customer First:</strong> We prioritize customer satisfaction with top-notch support and service.</li>
          <li><strong>Secure Shopping:</strong> Your privacy and security are our top priority, with safe payment options.</li>
        </ul>
        <p>
          Join our community of satisfied customers and experience the convenience of shopping at i24. We are here
          to make your shopping experience easier, faster, and more enjoyable.
        </p>
      </div>
    </div>
  );
};

export default About;



