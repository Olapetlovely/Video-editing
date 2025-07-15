import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-scroll";
import { TfiMenu } from "react-icons/tfi";
import { RiCloseLargeFill } from "react-icons/ri";
import faithLogo from "../../assets/img/logo2.png"

const Header = () => {

    const [mobileMenu, setMobileMenu] = useState(false);
    const [logo, setLogo] = useState(false)

    function toggleMenu() {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    };

    const handleResize = () => {
        if (window.innerWidth < 519) {
            setLogo(true);
        } else {
            setLogo(false);
        }
    };

    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);



    return (
        <header className="header">
            <nav>
                {logo ? <img className='logo' src={faithLogo} alt="logo" /> : <p>FaithBen Craft</p>}
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