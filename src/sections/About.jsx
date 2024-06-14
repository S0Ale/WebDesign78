import React from 'react';
import AnimatedMain from '../animations/AnimatedMain';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    return (
        <AnimatedMain className="h-fluid flex column main-home">
            <div className='container'>
                <div className="title">
                    <h1>About</h1>
                </div>
                <div className="description">
                    <p><FontAwesomeIcon icon={faExclamationTriangle} /> Pagina Sotto Costruzione</p>
                </div>
            </div>
            
        </AnimatedMain>
    );
};

export default About;