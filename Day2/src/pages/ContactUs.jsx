
import React from 'react';
import '../assets/css/ContactUs.css'; // Import CSS file
import ElevateAppBar from './NavBar';

function ContactUs() {
    return (
        <div className='bodycon'>
            <ElevateAppBar/>
        <div className="container8">
            <h3 className='h3contact'>Contact Us</h3><br/>
            <div className="contact-form">
                <div className="input-class">
                    <input type="email" className="input" placeholder="Your Name" required />
                    <input type="email" className="input" placeholder="Your E-mail" required />
                    <input type="tel" className="input" placeholder="Phone" required />
                    <input type="email" className="input" placeholder="Subject" />
                </div>
                <div className="msg">
                    <textarea placeholder="Message" cols="30" rows="10"></textarea>
                    <button className="btn" type="submit">Send</button>
                </div>
            </div>
        </div>
        </div>
    );
}

export default ContactUs;
