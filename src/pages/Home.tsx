import React from 'react';
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <div id='home' className='page-container'>
            <Navbar />

            <div>
                <p>hello</p>
                <p>I'm a frontend developer</p>
                <p>where the logic thinking is beautiful</p>
            </div>
        </div>
    );
};

export default Home;
