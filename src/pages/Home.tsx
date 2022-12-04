import React from 'react';
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <div id='Home' className='page-container'>
            <Navbar />

            <div>
                One last detail we can add is some sort of circular or
                rectangular border around the sign. It’s just a nice way to
                frame the text and make it look like, you know, an actual sign.
                By adding a shadow to the border, we can give it the same neon
                effect as the text! Whatever element is the container for the
                text is what needs a border. Let’s say we’re only working with
                an element. That’s what gets the border. We call the border
                shorthand property to make a solid white border around the
                heading, plus a little padding to give the text some room to
                breathe:
            </div>
        </div>
    );
};

export default Home;
