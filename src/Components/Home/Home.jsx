import React from 'react';
import Hero from './Hero';
import Projects from './Projects/Projects';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Skills from './Skills';
import EducationalQualification from './EducationalQualification';
import ExperienceSection from './ExperienceSection';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Projects></Projects>
            <EducationalQualification></EducationalQualification>
            <ExperienceSection></ExperienceSection>
            <Contact></Contact>
            
        </div>
    );
};

export default Home;