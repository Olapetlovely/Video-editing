import React, { useState } from 'react'
import './Hero.css';
import { FaArrowRightLong } from "react-icons/fa6";
import faithImg from "../../assets/img/faithImg.jpg"
import hero1 from "../../assets/img/hero1.png"
import hero2 from "../../assets/img/hero2.png"
import hero3 from "../../assets/img/background-img.png"
import hero4 from "../../assets/img/download.png"
import { TfiMenu } from "react-icons/tfi";
import { RiCloseLargeFill } from "react-icons/ri";


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
                    <div className="img-wrapper"><img src={hero1} alt="image" /></div>
                    <div className="img-wrapper"><img src={hero3} alt="image" /></div>
                    <div className="img-wrapper"><img className='hero2' src={hero2} alt="image" /></div>
                </div >
            </div>
            <div className="hero-section2">
                <div className="img-wrapper">
                    <img src={faithImg} alt="" />
                </div>
            </div>
        </section >
    );
};

export default Hero;