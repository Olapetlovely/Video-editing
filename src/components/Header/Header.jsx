import React, { useState } from 'react'
import "./Header.css";
import { Link } from "react-scroll";
import { TfiMenu } from "react-icons/tfi";
import { RiCloseLargeFill } from "react-icons/ri";

const Header = () => {

    const [mobileMenu, setMobileMenu] = useState(false)

    function toggleMenu() {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }


    return (
        <header className="header">
            <nav>
                <h1 className="logo">VideoEditorPro</h1>
                <ul className={mobileMenu ? "nav-links" : "nav-links hide"}>
                    <li><Link to="about" smooth={true} offset={-30} duration
                        ={500}>About</Link>
                    </li>
                    <li><Link to="skills" smooth={true} offset={-60} duration
                        ={500}>Skills</Link>
                    </li>
                    <li><Link to="projects" smooth={true} offset={-100} duration
                        ={500}>Projects</Link>
                    </li>
                    <li><Link to="contact" smooth={true} offset={0} duration
                        ={500}>Contact</Link>
                    </li>
                </ul>
                <span onClick={toggleMenu} className='menu'>{mobileMenu ? <RiCloseLargeFill /> : <TfiMenu />}</span>
            </nav>
        </header>
    );
};

export default Header;