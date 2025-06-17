import React, { useState, useRef } from 'react'
import './Projects.css';
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import hero1 from "../../assets/img/hero1.png"
import hero2 from "../../assets/img/hero2.png"
import hero3 from "../../assets/img/background-img.png"

const Projects = ({ projectRef }) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef(null);

    const handleNextSlide = () => {
        const slider = sliderRef.current;
        const slideWidth = slider.children[0].clientWidth; // Get one slide's width
        const nextIndex = (currentIndex + 1) % slider.children.length;
        slider.style.transform = `translateX(-${slideWidth * nextIndex}px)`;
        setCurrentIndex(nextIndex);
    };

    const handlePrevSlide = () => {
        const slider = sliderRef.current;
        const slideWidth = slider.children[0].clientWidth; // Get one slide's width
        const prevIndex = (currentIndex - 1 + slider.children.length) % slider.children.length;
        slider.style.transform = `translateX(-${slideWidth * prevIndex}px)`;
        setCurrentIndex(prevIndex);
    };

    return (
        <section className="projects" ref={projectRef}>
            <div className="slider" >
                <div className="slider-track" ref={sliderRef}>
                    <div className='card'>
                        <img src={hero2} alt="" />
                    </div>
                    <div className='card'>
                        <img src={hero1} alt="" />
                    </div>
                    <div className="card">
                        <img src={hero3} alt="" />
                    </div>
                </div>
            </div>
            <div className="arrow-wrapper">
                <span className='arrow prev' onClick={handlePrevSlide}><GrFormPrevious /></span>
                <span className='arrow next' onClick={handleNextSlide}><GrFormNext /></span>
            </div>
        </section >
    );
};

export default Projects;