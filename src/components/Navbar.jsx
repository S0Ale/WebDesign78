import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import GenButton from './GenButton';
import { Logo, LogoResponsive } from './Logos';

// DA FARE, IL TASTO HOME DEVE CONDURRE ALLA BACHECA,
// IL LINK CHE CONDUCE ALLA HOME SARA' IL LOGO

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false); // responsive dropdown menu

    const toggleNav = () => {
        setNavOpen(!navOpen);
    };

    const closeIfMobile = () => {
        if(window.innerWidth <= 992) setNavOpen(false);
    };

    return (
        <nav className="col-12 flex row layer1">
            <div className="col-12 flex row nav-wrapper">
                <div className="logo">
                    <Logo />
                    <LogoResponsive />
                </div>

                <div className={`h-fluid flex row links ${navOpen? 'nav-show' : ''}`}>
                    <Link to="/" className='nav-link' onClick={closeIfMobile}>Home</Link>
                    <Link to="/categories" className="nav-link" onClick={closeIfMobile}>Categorie</Link>
                    <Link to="/about" className="nav-link" onClick={closeIfMobile}>About</Link>
                </div>
                
                <div className="search-bar">
                    <input type="text" placeholder="Search..." className="search-input" />
                    <FontAwesomeIcon icon={faSearch} className="search-icon" />
                </div>
                <GenButton className="nav-toggle" onClick={toggleNav}>
                    <FontAwesomeIcon icon={faBars}/>
                </GenButton>
            </div>
        </nav>
    );
};

export default Navbar;
