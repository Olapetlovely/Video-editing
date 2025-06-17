import React from 'react';
import "./Contact.css"
import { IoMdMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";



const Contact = () => {
    return (
        <section className="contact">
            <div className="contact-container">
                <h2>Connect with us</h2>
                <ul>
                    <li>
                        <a href="https://wa.me/2348127888773" target="_blank" >
                            <span className='icon whatsapp'><IoLogoWhatsapp /></span></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/vieren-b-benjamin" target="_blank">
                            <span className='icon linked-in'><FaLinkedin /></span></a>
                    </li>
                    <li>
                        <a href="mailto:vierenblessingbenjamin2788@gmail.com" target="_blank">
                            <span className='icon email'><IoMdMail /></span></a>
                    </li>
                </ul>
            </div>
        </section >
    );
};

export default Contact;