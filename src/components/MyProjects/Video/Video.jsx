import React from 'react';
import "./Video.css";

const Video = ({ src }) => {
    return (
        <div className='card'>
            <video className='my-video'
                src={src}
                controls
                type="video/mp4"
                autoPlay
                muted
                playsInline
            ></video>
        </div>
    )
}

export default Video