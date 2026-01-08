import React from 'react';
import Hero from './Hero';
import Projects from './Projects/Projects';
import AboutMe from './AboutMe';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <AboutMe></AboutMe>
            <Projects></Projects>
            
        </div>
    );
};

export default Home;