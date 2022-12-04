import React from 'react';
import avatar from '../assets/avatar.jpg';

const AboutMe = () => {
    return (
        <div className='page-container' id='AboutMe'>
            <img id='avatar' src={avatar} alt='avatar' />
        </div>
    );
};

export default AboutMe;
