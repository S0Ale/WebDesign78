import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import React from 'react';
import data from '../data/article-text.json';
import AnimatedMain from '../animations/AnimatedMain';
import '../css/article.css';

const Article = () => {
    const minCount = 0;
    const maxCount = 4;
    const location = useLocation();
    const { def } = location.state || { def: minCount };
    const [id, setCount] = useState(def);
    const [content, setContent] = useState('');
    const [classe, setClasse] = useState('article_textbox');

    
    const increment = () => {
        setCount(prevCount => {
            setClasse('article_textbox');
            setContent('');
            if(prevCount >= maxCount) return 0;
            else return prevCount+1;
        });
    };

    const decrement = () => {
        setCount(prevCount => {
            setClasse('article_textbox');
            setContent('');
            if (prevCount <= minCount) return 4;
            else return prevCount-1;
        });
    };

    const addText = () => {
        setClasse('article_textbox_expand');
        setContent(data.articles[id].content);
      };

    return (
        <AnimatedMain className="h-fluid flex main-art">
            <div className='slide_counter flex'>
                <p id='current_slide'>{id+1}</p>
                <p>/</p>
                <p id='total_slide'>{maxCount+1}</p>
            </div>
            <div>
                <div className={classe}>
                    <h1 id="title">{data.articles[id].title}</h1>
                    <h2 id="subtitle">{data.articles[id].subtitle}</h2>
                    <p id="content">{content}</p>
                    <button className='read_more circle' onClick={addText}>READ MORE</button>
                </div>
            </div>
            <div className='flex column'>
                <button id='arrow_menu' className='circle' onClick={increment}><span id="arrow" className="material-symbols-outlined circle">keyboard_arrow_up</span></button>
                <button id='arrow_menu' className='circle' onClick={decrement}><span id="arrow" className="material-symbols-outlined circle">keyboard_arrow_down</span></button>
            </div>
        </AnimatedMain>
        
    );
};

export default Article;