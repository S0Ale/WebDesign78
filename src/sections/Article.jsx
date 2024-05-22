import { useState } from 'react';
import '../css/article.css';

const Article = () => {

    const [id, setCount] = useState(1);
    const maxCount = 5;  // Valore massimo per il contatore

    // Funzione per incrementare il contatore
    const increment = () => {
        setCount(prevCount => {
        if (prevCount >= maxCount) {
            return 1;  // Resetta il contatore a 0 se supera il valore massimo
        } else {
            return prevCount + 1;
        }
        });
    };

    return (
        <article className="h-fluid flex">
            <div className='slide_counter flex'>
                <p id='current_slide'>{id}</p>
                <p>/</p>
                <p id='total_slide'>5</p>
            </div>
            <div>
                <div className="article_textbox flex column">
                    <h1 id="title">Testo dell'articolo fake 1</h1>
                    <h2 id="subtitle">Sottotitolo Sottotitolo</h2>
                    <p id="content"></p>
                    <button className='read_more circle'>READ MORE</button>
                </div>
            </div>
            <div className='flex column'>
                <button id='arrow_menu' className='circle' onClick={increment}><span id="arrow" className="material-symbols-outlined circle">keyboard_arrow_up</span></button>
                <button id='arrow_menu' className='circle'><span id="arrow" className="material-symbols-outlined circle">keyboard_arrow_down</span></button>
            </div>
        </article>
        
    );
};

export default Article;