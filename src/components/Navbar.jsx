import { Link } from 'react-router-dom';
import Logo from '../assets/logo_prova.png';

const Navbar = () => {
    return (
        <nav className="col-12 flex row">
            <div className="logo">
                <img src={Logo} alt=""/>
            </div>
            <div className="h-fluid flex row links">
                <Link to="/" className='nav-link'>Home</Link>
                <a href="" className="nav-link">Indice articoli</a>
                <a href="" className="nav-link">About</a>
            </div>
        </nav>
    );
};

export default Navbar;