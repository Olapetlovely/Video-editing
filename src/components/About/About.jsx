import React from 'react'
import './About.css';

const About = () => {
    return (
        <section className="about">
            <div className="about-container">
                <h2 className="about-title">About Me</h2>
                <p className="about-text">
                    I am Vieren B. Benjamin, a Video Editing Specialist, Advert Video Creator, Mobile Videographer and a Wellness and Holistic Growth Advocate with over 3 years of experience. I specialize in crafting compelling videos for content creators, businesses, companies, and social media campaigns. My passion lies in delivering high-quality visuals that effectively communicate brand messages and captivate audiences.
                </p>
                <h3>Services Offered:</h3>
                <ul>
                    <li>Professional Video Editing</li>
                    <li>Advert Video Creation</li>
                    <li>Product Video Advertisement</li>
                    <li>User-Generated Content (UGC)</li>
                    <li>Animation Videos</li>
                    <li>Consultation Services</li>
                </ul>
                <p>Let's bring your vision to life with creativity!</p>
            </div>
        </section>
    );
};

export default About;