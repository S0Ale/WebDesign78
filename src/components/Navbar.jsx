const Navbar = () => {
    return (
        <nav className="col-12 flex row">
            <div className="logo">
                <img src="logo.png" alt="LOGO"/>
            </div>
            <div className="h-fluid flex row links">
                <a href="" className="nav-link">Home</a>
                <a href="" className="nav-link">Indice articoli</a>
                <a href="" className="nav-link">About</a>
            </div>
        </nav>
    );
};

export default Navbar;