import React, { useState } from 'react';
import './Contact.css'; // Import a CSS file for styling

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send the data to a server)
    alert('Form submitted!');
  };

  const handleReset = () => {
    setFormData({
      name: '',
      gender: '',
      email: '',
      phone: ''
    });
  };

  return (
    <div className="contact-container">
      <div className="form-container">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="gender">Gender:</label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="button-group">
            <button type="submit">Submit</button>
            <button type="button" onClick={handleReset}>Reset</button>
          </div>
        </form>
      </div>

      <div className="contact-info">
        <h2>i24 Contact Information</h2>
        <p><strong>Store Address:</strong> 123 i24 Avenue, Online City, Web State, 56789</p>
        <p><strong>Phone Number:</strong> +123 456 7890</p>
        <p><strong>Help Line:</strong> +987 654 3210 (Available 24/7)</p>
      </div>
    </div>
  );
};

export default Contact;