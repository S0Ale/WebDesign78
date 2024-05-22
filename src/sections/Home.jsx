import { Link } from 'react-router-dom';
import AnimatedMain from '../animations/AnimatedMain';
import '../css/home.css';

const Home = () => {
    return (
        <AnimatedMain className="h-fluid flex column">
            <div className="title">
                <h1>Nome del Progetto</h1>
            </div>
            <div className="description">
                <p>Breve descrizione dell'intento del progetto</p>
            </div>
            <div className="start">
                <Link to="article" className="gen-btn front-btn">Start</Link>
            </div>
        </AnimatedMain>
    );
};

export default Home;