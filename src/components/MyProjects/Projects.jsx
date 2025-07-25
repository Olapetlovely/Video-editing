import React, { useState, useRef } from 'react'
import './Projects.css';
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import Video from './Video/Video';
import project1 from "../../assets/video/Project1.mp4"
import project2 from "../../assets/video/Project2.mp4"
import project3 from "../../assets/video/Project3.mp4"
import project4 from "../../assets/video/Project4.mp4"
import project5 from "../../assets/video/Project5.mp4"
import project6 from "../../assets/video/Project6.mp4"
import project7 from "../../assets/video/Project7.mp4"
import project10 from "../../assets/video/Project10.mp4"

// const Projects = ({ projectRef }) => {

//     const [currentIndex, setCurrentIndex] = useState(0);
//     const sliderRef = useRef(null);

//     const handleNextSlide = () => {
//         const slider = sliderRef.current;
//         const slideWidth = slider.children[0].clientWidth; // Get one slide's width
//         const nextIndex = (currentIndex + 1) % slider.children.length;
//         slider.style.transform = `translateX(-${slideWidth * nextIndex}px)`;
//         setCurrentIndex(nextIndex);
//     };

//     const handlePrevSlide = () => {
//         const slider = sliderRef.current;
//         const slideWidth = slider.children[0].clientWidth; // Get one slide's width
//         const prevIndex = (currentIndex - 1 + slider.children.length) % slider.children.length;
//         slider.style.transform = `translateX(-${slideWidth * prevIndex}px)`;
//         setCurrentIndex(prevIndex);
//     };

//     return (
//         <section className="projects" ref={projectRef}>
//             <div className="slider" >
//                 <div className="slider-track" ref={sliderRef}>
//                     <Video
//                         src={project2}
//                     />
//                     <Video
//                         src={project10}
//                     />
//                     <Video
//                         src={project1}
//                     />
//                     <Video src={project3}
//                     />
//                     <Video src={project4}
//                     />
//                     <Video src={project5} />
//                     <Video src={project6}
//                     />
//                     <Video src={project7}
//                     />
//                 </div>
//             </div>
//             <div className="arrow-wrapper">
//                 <span className='arrow prev' onClick={handlePrevSlide}><GrFormPrevious /></span>
//                 <span className='arrow next' onClick={handleNextSlide}><GrFormNext /></span>
//             </div>
//         </section >
//     );
// };

// export default Projects;


const Projects = ({ projectRef }) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef(null);

    const videoRefs = useRef([]); // Track all video elements

    const handleNextSlide = () => {
        const slider = sliderRef.current;
        const slideWidth = slider.children[0].clientWidth;

        // Pause current video before sliding
        videoRefs.current[currentIndex]?.pause();

        const nextIndex = (currentIndex + 1) % slider.children.length;
        slider.style.transform = `translateX(-${slideWidth * nextIndex}px)`;
        setCurrentIndex(nextIndex);
    };

    const handlePrevSlide = () => {
        const slider = sliderRef.current;
        const slideWidth = slider.children[0].clientWidth;

        // Pause current video before sliding
        videoRefs.current[currentIndex]?.pause();

        const prevIndex = (currentIndex - 1 + slider.children.length) % slider.children.length;
        slider.style.transform = `translateX(-${slideWidth * prevIndex}px)`;
        setCurrentIndex(prevIndex);
    };

    const videoSources = [project2, project10, project1, project3, project4, project5, project6, project7];

    return (
        <section className="projects" ref={projectRef}>
            <div className="slider" >
                <div className="slider-track" ref={sliderRef}>
                    {videoSources.map((src, i) => (
                        <Video
                            key={src}
                            src={src}
                            ref={(el) => videoRefs.current[i] = el}
                        />
                    ))}
                </div>
            </div>
            <div className="arrow-wrapper">
                <span className='arrow prev' onClick={handlePrevSlide}><GrFormPrevious /></span>
                <span className='arrow next' onClick={handleNextSlide}><GrFormNext /></span>
            </div>
        </section>
    );
};

export default Projects;
