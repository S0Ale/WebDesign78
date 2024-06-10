import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import React from 'react';
import AnimatedMain from '../animations/AnimatedMain';
import ArticleCard from '../components/ArticleCard';
import '../css/article.css';
import data from '../data/article-text.json';

const Art = [<ArticleCard className='' id={0}/>,<ArticleCard className='' id={1}/>,<ArticleCard className='' id={2}/>,<ArticleCard className='' id={3}/>,<ArticleCard className='' id={4}/>,<ArticleCard className='' id={5}/>,
<ArticleCard className='' id={6}/>,<ArticleCard className='' id={7}/>,<ArticleCard className='' id={8}/>,<ArticleCard className='' id={9}/>,<ArticleCard className='' id={10}/>,<ArticleCard className='' id={11}/>,
<ArticleCard className='' id={12}/>,<ArticleCard className='' id={13}/>,<ArticleCard className='' id={14}/>,<ArticleCard className='' id={15}/>,<ArticleCard className='' id={16}/>,<ArticleCard className='' id={17}/>,
<ArticleCard className='' id={18}/>,<ArticleCard className='' id={19}/>,<ArticleCard className='' id={20}/>,<ArticleCard className='' id={21}/>,<ArticleCard className='' id={22}/>,<ArticleCard className='' id={23}/>];

const Article = () => {
    const minCount = 0;
    const maxCount = 23;
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
                <button className='readMore' onClick={readMore}>{Art[id]}</button>
            </div>
            <div className='flex column'>
                <button id='arrow_menu' className='circle' onClick={increment}><span id="arrow" className="material-symbols-outlined circle">keyboard_arrow_up</span></button>
                <button id='arrow_menu' className='circle' onClick={decrement}><span id="arrow" className="material-symbols-outlined circle">keyboard_arrow_down</span></button>
            </div>
        </AnimatedMain>
        
    );
};

export default Article;