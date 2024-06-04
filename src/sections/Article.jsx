import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import React from 'react';
import data from '../data/article-text.json';
import scopri from '../assets/scopri.png';
import AnimatedMain from '../animations/AnimatedMain';
import '../css/article.css';

import Art0 from '../articles/arancione1.png';
import Art1 from '../articles/rosso1.png';
import Art2 from '../articles/blu1.png';
import Art3 from '../articles/verde1.png';
import Art4 from '../articles/arancione2.png';
import Art5 from '../articles/rosso2.png';
import Art6 from '../articles/blu2.png';
import Art7 from '../articles/verde2.png';
import Art8 from '../articles/arancione3.png';
import Art9 from '../articles/rosso3.png';
import Art10 from '../articles/blu3.png';
import Art11 from '../articles/verde3.png';
import Art12 from '../articles/arancione4.png';
import Art13 from '../articles/rosso4.png';

const Art = [Art0,Art1,Art2,Art3,Art4,Art5,Art6,Art7,Art8,Art9,Art10,Art11,Art12,Art13];

const Article = () => {
    const minCount = 0;
    const maxCount = 13;
    const location = useLocation();
    const { def } = location.state || { def: minCount };
    const [id, setCount] = useState(def);
    const [classe, setClasse] = useState('article_textbox');
    
    const increment = () => {
        setCount(prevCount => {
            setClasse('article_textbox');
            if(prevCount >= maxCount) return minCount;
            else return prevCount+1;
        });
    };

    const decrement = () => {
        setCount(prevCount => {
            setClasse('article_textbox');
            if (prevCount <= minCount) return maxCount;
            else return prevCount-1;
        });
    };

    const readMore = () => {
        if(classe=='article_textbox_expand')
            setClasse('article_textbox');
        else
            setClasse('article_textbox_expand');
        //setContent(data.articles[id].content);
      };

    return (
        <AnimatedMain className="h-fluid flex main-art">
            <div className='slide_counter flex'>
                <p id='current_slide'>{id+1}</p>
                <p>/</p>
                <p id='total_slide'>{maxCount+1}</p>
            </div>
            <div className={classe}>
                <img className='article' src={Art[id]}/>
                <button className='read_more circle' onClick={readMore}><img src={scopri} /></button>
            </div>
            <div className='flex column'>
                <button id='arrow_menu' className='circle' onClick={increment}><span id="arrow" className="material-symbols-outlined circle">keyboard_arrow_up</span></button>
                <button id='arrow_menu' className='circle' onClick={decrement}><span id="arrow" className="material-symbols-outlined circle">keyboard_arrow_down</span></button>
            </div>
        </AnimatedMain>
        
    );
};

export default Article;