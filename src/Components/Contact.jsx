import React, { useRef } from 'react';
import axios from 'axios';
import 'animate.css/animate.min.css'; // Import animate.css
import useIntersectionObserver from './UseIntersectionObserver'; // Import the custom hook
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [contactRef, isContactVisible] = useIntersectionObserver({ threshold: 1 });
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    };

    try {
      await axios.post('https://mahr-abrar-portfolio-server.vercel.app/api/v1/contact', data);
      toast.success("Message Sent Successfully");
      formRef.current.reset(); 
    } catch (error) {
      toast.error("Failed to send message");
    }
  };

  return (
    <div id='contact' className="contact-form-container">
      <form
        className={`contact-form animate__animated ${isContactVisible ? 'animate__fadeInUp' : ''}`}
        onSubmit={handleSubmit}
        ref={(el) => {
          contactRef.current = el;
          formRef.current = el;
        }}
        style={{ opacity: isContactVisible ? 1 : 0 }}
      >
        <h2
          className={`animate__animated ${isContactVisible ? 'animate__duration-3s animate__zoomIn' : ''}`}
          ref={contactRef}
          style={{ opacity: isContactVisible ? 1 : 0 }}
        >
          Contact Me
        </h2>
        <div className="form-group">
          <input type="text" id="name" name="name" required />
          <label htmlFor="name">Name</label>
        </div>
        <div className="form-group">
          <input type="email" id="email" name="email" required />
          <label htmlFor="email">Email</label>
        </div>
        <div className="form-group">
          <textarea id="message" name="message" required></textarea>
          <label htmlFor="message">Message</label>
        </div>
        <button className='contactBtn' type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
