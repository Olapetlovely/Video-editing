import React from 'react';
import "./Video.css";
import { forwardRef } from 'react';

const Video = forwardRef(({ src }, ref) => {
    return (
        <div className='card'>
            <video
                ref={ref}
                className='my-video'
                src={src}
                controls
                autoPlay
                playsInline
                type="video/mp4"
            />
        </div>
    );
});

export default Video;
