import React, { useRef } from 'react';
import './contact.css'
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_k4m8cfu', 'template_hc4a2z8', form.current, '_CWaYDcJl4_AO3WGE')
        .then((result) => {
            console.log(result.text);
            e.target.reset();
            alert('Email sent !');
        }, (error) => {
            console.log(error.text);
        });
    }
  return (
    <div id='contact'>
        <h1 className='contactHeader'>HAVE A QUESTION?<br/>
        CONTACT ME</h1>
        <p className='contactDesc'>For work or any other enquiries, fill this form below or call me.  </p>
     <div className='contact-content'>
      <div className='form-section'>
        <form ref={form} onSubmit={sendEmail}>
          <label htmlFor='firstName'>First Name<sup>*</sup></label>
          <input
             type='text'
             name='firstName'
             id='firstName'
             required
             className='inputField'
             />
             <label htmlFor='lastName'>Last name<sup>*</sup></label>
             <input
             type='text'
             name='lastName'
             id='lastName'
             required
             className='inputField'
             />
             <label htmlFor='email'>Email<sup>*</sup></label>
             <input
             type='email'
             name='email'
             required
             className='inputField'
             />
             <label htmlFor='message'> Message<sup>*</sup></label>
             <textarea
             name='message'
             id='message'
             required
             className='textarea'
             />
             <button type='submit' value='send' className='button'>Submit</button>
        </form>
        </div>
        <div className='contact-section'>
           <MdOutlineMailOutline  className="contact-icon"/>
           <h2>Email</h2>
           <h4>mypodcast@gmail.com</h4>
           <h4>podcast@mail.com</h4>
           <FaPhoneAlt className="contact-icon" />
           <h2>Call us</h2>
           <h4>+233-444-222</h4>
           <h4>+233-555-777</h4>
        </div>

</div>
    </div>
  )
}

export default Contact;