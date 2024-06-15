import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import React from 'react';
import AnimatedMain from '../animations/AnimatedMain';
import FormattedTitles from '../components/FormattedTitles';
import ArticleLayout from '../components/ArticleLayout';
import '../css/article.css';

const Article = () => {
    const minCount = 0;
    const maxCount = 23;
    const location = useLocation();
    const { def } = location.state || { def: minCount };
    const [id, setCount] = useState(def);
    const [classe, setClasse] = useState('article_textbox');

    useEffect(() => {
        setCount(def);
      }, [def]); 
    
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
        setClasse('article_textbox_expand');
    };

    return (
        <AnimatedMain className="h-fluid flex main-art">
            <div className='slide_counter flex'>
                <p id='current_slide'>{id+1}</p>
                <p>/</p>
                <p id='total_slide'>{maxCount+1}</p>
            </div>
            <div className={classe}>
                <button className='readMore grid-el article' onClick={readMore}>
                    <div className={FormattedTitles[id].class}>
                        {FormattedTitles[id].title()}
                    </div>
                </button>
                <ArticleLayout id='0'/>
            </div>
            <div className='flex column'>
                <button id='arrow_menu' className='circle' onClick={increment}><span id="arrow" className="material-symbols-outlined circle">keyboard_arrow_up</span></button>
                <button id='arrow_menu' className='circle' onClick={decrement}><span id="arrow" className="material-symbols-outlined circle">keyboard_arrow_down</span></button>
            </div>
        </AnimatedMain>
        
    );
};

export default Article;