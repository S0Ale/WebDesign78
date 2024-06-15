import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import DropdownMenu from './DropdownMenu';
import SearchBar from './SearchBar';
import GenButton from './GenButton';
import { Logo, LogoResponsive } from './Logos';
import CategoriesNames from './CategoriesNames';

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);
    const navigate = useNavigate();

    const toggleNav = () => {
        setNavOpen(!navOpen);
    };

    const closeIfMobile = () => {
        if(window.innerWidth <= 992) setNavOpen(false);
    };

    const navToCategory = (i) => {
        closeIfMobile();
        navigate('/categories', { state: { def:  i} });
    };

    return (
        <nav className="col-12 flex row layer2">
            <div className="col-12 flex row nav-wrapper">
                <Link to="/" className="logo">
                    <Logo />
                    <LogoResponsive />
                </Link>

                <div className={`h-fluid flex row links ${navOpen? 'nav-show' : ''}`}>
                    <Link to="/articleGrid" className='nav-link' onClick={closeIfMobile}>Home</Link>
                    <DropdownMenu>
                        {
                            CategoriesNames.map((category, index) => {
                                return (
                                    <a key={index} data={index} onClick={() => navToCategory(index)} 
                                    className={`dropdown-item ${category.color}`}>
                                        {category.name}
                                    </a>
                                );
                            })
                        }
                    </DropdownMenu>
                    <Link to="/about" className="nav-link" onClick={closeIfMobile}>About</Link>
                </div>
                <SearchBar/>
                <GenButton className="nav-toggle" onClick={toggleNav}>
                    <FontAwesomeIcon icon={faBars}/>
                </GenButton>
            </div>
        </nav>
    );
};

export default Navbar;
