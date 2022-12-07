import React from 'react';
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <div id='home' className='page-container'>
            <Navbar />

            <div id='text-wrapper'>
                <span>I'm Anna Moura Sobral a passionate</span>
                <span id='fz'>frontend developer</span>
            </div>
        </div>
    );
};

export default Home;
