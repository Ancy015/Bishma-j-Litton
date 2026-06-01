import React from 'react';

const Contact = () => {
  return (
    <section className="contact section glass" id="contact">
      <h2 className="section-title">Get In Touch</h2>
      <p className="section-subtitle">Let's discuss your project</p>
      
      <div className="contact-content">
        <div className="contact-image">
          <img src="/contact.png" alt="Contact Avatar" />
        </div>
        
        <form className="contact-form">
          <div className="form-row">
            <input type="text" placeholder="First Name" className="form-input" />
            <input type="text" placeholder="Last Name" className="form-input" />
          </div>
          <input type="email" placeholder="Email Address" className="form-input" />
          <input type="text" placeholder="Phone Number" className="form-input" />
          <textarea placeholder="Your Message" rows="4" className="form-input"></textarea>
          <button className="btn btn-primary w-full" type="button" style={{justifyContent: 'center'}}>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
