import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import GenButton from './GenButton';
import Logo from '../assets/logo.png';

const Navbar = () => {
    return (
        <nav className="col-12 flex row layer1">
            <div className="col-12 flex row nav-wrapper">
                <div className="logo">
                    <img src={Logo} alt=""/>
                </div>
                <div className="h-fluid flex row links">
                    <Link to="/" className='nav-link'>Home</Link>
                    <Link to="article" className="nav-link">Indice articoli</Link>
                    <Link to="about" className="nav-link">About</Link>
                </div>
                <GenButton className="nav-drop-btn">
                    <FontAwesomeIcon icon={faBars}/>
                </GenButton>
            </div>
        </nav>
    );
};

export default Navbar;
