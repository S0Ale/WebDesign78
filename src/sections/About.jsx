import React from 'react';
import AnimatedMain from '../animations/AnimatedMain';
import '../css/about.css';

const About = () => {
    return (
        <AnimatedMain className="h-fluid flex column main-home">
            <div className="title">
                <h1>About</h1>
            </div>
            <div className="description">
                <p>about about about about about about about about</p>
            </div>
        </AnimatedMain>
    );
};

export default About;