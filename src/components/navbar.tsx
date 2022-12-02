import React from 'react';
import AboutMe from '../pages/AboutMe';
import ContactMe from '../pages/ContactMe';
import DownloadMyCV from '../pages/DownloadMyCV';
import Projects from '../pages/Projects';
import Skills from '../pages/Skills';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <AboutMe />
                </li>
                <li>
                    <Projects />
                </li>
                <li>
                    <Skills />
                </li>
                <li>
                    <ContactMe />
                </li>
                <li>
                    <DownloadMyCV />
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
