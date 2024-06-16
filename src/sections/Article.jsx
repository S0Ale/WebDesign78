import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import React from 'react';
import AnimatedMain from '../animations/AnimatedMain';
import FormattedTitles from '../components/FormattedTitles'; // Ensure this is correctly imported
import data from '../data/article-text.json'; // Ensure this is correctly imported
import '../css/article.css';

const Article = () => {
    const minCount = 0;
    const maxCount = 23;
    const location = useLocation();
    const { def } = location.state || { def: minCount };
    const [id, setCount] = useState(def);
    const [classe, setClasse] = useState('article_textbox');
    const [content, setContent] = useState(data[id]);

    useEffect(() => {
        setCount(def);
        setContent(data[def]);
    }, [def]);

    const increment = () => {
        setCount(prevCount => {
            setClasse('article_textbox');
            const newCount = prevCount >= maxCount ? minCount : prevCount + 1;
            setContent(data[newCount]);
            return newCount;
        });
    };

    const decrement = () => {
        setCount(prevCount => {
            setClasse('article_textbox');
            const newCount = prevCount <= minCount ? maxCount : prevCount - 1;
            setContent(data[newCount]);
            return newCount;
        });
    };

    const readMore = () => {
        setClasse('article_textbox_expand');
        if (id === 0) {
            setContent( " Il muro di Berlino sembrava un lontano ricordo. Quando quel 9 novembre 1989 una breccia si aprì nel muro all’epoca più famoso del mondo, l’Unione europea ancora non esisteva. Una nuova epoca stava nascendo. Eppure, a distanza di 30 anni, l’Europa è più fortificata di allora. Prima di quello straordinario evento in tutto il mondo si contavano 16 recinzioni. Oggi, solo nel Vecchio continente, si contano 16 muri. La metà degli Stati membri ne ha costruito uno lungo i propri confini. E se ai muri fisici, da quelli in cemento armato alle cortine di ferro, si aggiungono le barriere tecnologiche il numero sale ancora.");
        }
    };

    return (
        <AnimatedMain className="h-fluid flex main-art">
            <div className='slide_counter flex'>
                <p id='current_slide'>{id + 1}</p>
                <p>/</p>
                <p id='total_slide'>{maxCount + 1}</p>
            </div>
            <div className={classe}>
                <button className='readMore grid-el article' onClick={readMore}>
                    <div className={FormattedTitles[id].class}>
                        {FormattedTitles[id].title()}
                    </div>
                </button>
                <p>{content}</p>
            </div>
            <div className='flex column'>
                <button id='arrow_menu' className='circle' onClick={increment}>
                    <span id="arrow" className="material-symbols-outlined circle">keyboard_arrow_up</span>
                </button>
                <button id='arrow_menu' className='circle' onClick={decrement}>
                    <span id="arrow" className="material-symbols-outlined circle">keyboard_arrow_down</span>
                </button>
            </div>
        </AnimatedMain>
    );
};

export default Article;
