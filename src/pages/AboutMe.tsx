import React from 'react';
import avatar from '../assets/avatar.jpg';

const AboutMe = () => {
    return (
        <div id='about-me' className='page-container'>
            <img id='avatar' src={avatar} alt='avatar' />
        </div>
    );
};

export default AboutMe;
