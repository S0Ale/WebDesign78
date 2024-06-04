import { Link } from 'react-router-dom';
import React from 'react';
import AnimatedMain from '../animations/AnimatedMain';
import '../css/home.css';
import logo from '../assets/logo.png';

const Home = () => {
    return (
        <AnimatedMain className="h-fluid flex column main-home">
            <div className='container'>
                <div className="title">
                    <img src={logo} width='100%'/>
                </div>
                <div className="description">
                    Tieniti aggiornato su tutte le notizie Europee e sii sempre pronto a difendere il Tuo Paese!
                </div>
                <div className="start">
                    <Link to="articleGrid" className="gen-btn front-btn">INIZIA</Link>
                </div>
            </div>
        </AnimatedMain>
    );
};

export default Home;
