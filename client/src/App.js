import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: 'I’m interested in your services.'
  });

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 5000); // show after 5 seconds
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Later: Send this to your backend using fetch or axios
    setShowPopup(false);
  };

  return (
    <div>
      <h1>Welcome to My Healthcare Startup</h1>

      {showPopup && (
        <div style={popupStyles.overlay}>
          <div style={popupStyles.container}>
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
              <input name="name" placeholder="Your Name" onChange={handleChange} required />
              <input name="email" placeholder="Your Email" type="email" onChange={handleChange} required />
              <input name="phone" placeholder="Phone Number" onChange={handleChange} />
              <textarea name="message" rows="3" onChange={handleChange} defaultValue={formData.message} />
              <button type="submit">Send</button>
            </form>
            <button onClick={() => setShowPopup(false)} style={{ marginTop: '10px' }}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

const popupStyles = {
  overlay: {
    position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex',
    justifyContent: 'center', alignItems: 'center', zIndex: 999
  },
  container: {
    backgroundColor: '#fff', padding: '30px', borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.2)', maxWidth: '400px', width: '90%'
  }
};

export default App;
