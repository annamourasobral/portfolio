import React from 'react';
import Navbar from '../components/Navbar';
import avatar from '../assets/avatar.jpg';

const Home = () => {
    return (
        <div id='home' className='page-container'>
            <Navbar />
            <div id='wrapper'>
                <div id='text-wrapper'>
                    <span id='line'></span>
                    <span>I'm Anna Moura Sobral a passionate</span>
                    <span id='fz'>frontend developer</span>
                </div>
                <img id='avatar' src={avatar} alt='avatar' />
            </div>
        </div>
    );
};

export default Home;
