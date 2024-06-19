import React from 'react';
import AnimatedMain from '../animations/AnimatedMain';
import '../css/about.css';

const About = () => {
    return (
        <AnimatedMain className="h-fluid flex column main-home about-main">
            <div className='container about-cont'>
                <div className="title">
                    <h1>Chi Siamo</h1>
                </div>
                <div className="paragraph">
                    Siamo un gruppo di studenti provenienti da due diverse facoltà dell'Università degli Studi di Genova: la Facoltà di Design e la Facoltà di Informatica. Lavoriamo insieme per creare un progetto innovativo e provocatorio nel campo del web design, unendo le nostre competenze tecniche e creative.
                </div>
                <div className="title">
                    <h1>Il Nostro Progetto</h1>
                </div>
                <div className="paragraph">
                    Il nostro progetto affronta il tema dell'immigrazione, concentrandosi sui muri e le barriere europee, spesso considerati tabù. Utilizziamo l'ironia e un linguaggio provocatorio per criticare i pregiudizi e le paure irrazionali che alimentano la retorica anti-immigrazione. Vogliamo stimolare la riflessione e il dibattito, mostrando come le barriere fisiche e mentali siano spesso prive di senso e basate su stereotipi infondati. Speriamo che il nostro sito contribuisca a una maggiore consapevolezza e comprensione della complessità del fenomeno migratorio, usando l'umorismo come strumento di critica sociale.
                </div>
            </div>
            
        </AnimatedMain>
    );
};

export default About;