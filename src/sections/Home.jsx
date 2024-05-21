import { Link } from 'react-router-dom';
import '../css/home.css';

const Home = () => {
  return (
    <main className="h-fluid flex column">
        <div className="title">
            <h1>Nome del Progetto</h1>
        </div>
        <div className="description">
            <p>Breve descrizione dell'intento del progetto</p>
        </div>
        <div className="start">
            
            <Link to="article" className="gen-btn front-btn">Start</Link>
        </div>
    </main>
  );
};

export default Home;