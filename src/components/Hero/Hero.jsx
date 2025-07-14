import React, { useState } from 'react'
import './Hero.css';
import { FaArrowRightLong } from "react-icons/fa6";
import faithBen from "../../assets/img/faithBen.jpg";
import faithImg from "../../assets/img/faithImg.jpg";
import hero1 from "../../assets/img/hero1.png";
import hero4 from "../../assets/img/hero4.jpg";
import hero3 from "../../assets/img/background-img.png";
import hero6 from "../../assets/img/hero6.jpg";


const Hero = ({ projectRef }) => {

    const [mobileMenu, setMobileMenu] = useState(false);

    function toggleMenu() {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }

    const scrollToProjects = () => {
        projectRef.current.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <section className="hero">
            <div className="hero-section1">
                <h1 >Crafting stories <span>through edits</span></h1>
                <div className='btn-wrapper'>
                    <button onClick={scrollToProjects} className="btn">View Projects <FaArrowRightLong /></button>
                    <p>The camera sees a moment, <br />
                        The mind builds the vision, <br />
                        The heart feels the magic, <br />
                        We bring it to life.</p>
                </div>
                <div className="img-container">
                    <div className="img-wrapper"><img className='hero2' src={hero4} alt="image" /></div>
                    <div className="img-wrapper"><img src={hero6} alt="image" /></div>
                    <div className="img-wrapper"><img src={hero3} alt="image" /></div>
                </div >
            </div>
            <div className="hero-section2">
                <div className="img-wrapper">
                    <img src={faithBen} alt="FaithBen" />
                </div>
            </div>
        </section >
    );
};

export default Hero;