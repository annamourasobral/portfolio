import React from 'react';
import AboutMe from './pages/AboutMe';
import ContactMe from './pages/ContactMe';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import DownloadMyCV from './pages/DownloadMyCV';
import Home from './pages/Home';

function App() {
    return (
        <div>
            <Home />
            <AboutMe />
            <Projects />
            <Skills />
            <ContactMe />
            <DownloadMyCV />
        </div>
    );
}

export default App;
