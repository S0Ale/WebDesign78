import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AnimatedMain from '../animations/AnimatedMain';
import ArticleCard from '../components/ArticleCard';
import { range } from '../scripts/utils';
import '../css/categories.css';


const Categories = () => {
    const nav = useNavigate();
    const minC = 0;
    const maxC = 3;
    const [i, setI] = useState(minC);
    const catIndex = [0, 6, 12, 18]; // starting index of each category
    
    const inc = () => {
        setI(prevCount => {
            if(prevCount >= maxC) return minC;
            else return prevCount+1;
        });
    };

    const dec = () => {
        setI(prevCount => {
            if (prevCount <= minC) return maxC;
            else return prevCount-1;
        });
    };

    const handleClick = (ix) => {
        ix=ix+exact_id;
        nav('/article', { state: { def: ix } }); 
    };

    return (
        <AnimatedMain className="h-fluid flex main-art">
            <div className='article_categoria'>
                {
                    range(6, catIndex[i]).map((id) => {
                        return <ArticleCard onClick={handleClick} id={id} key={id}/>
                    })
                }
            </div>
            <div className='flex column'>
                <button id='arrow_menu' className='circle' onClick={inc}><span id="arrow" className="material-symbols-outlined circle">keyboard_arrow_up</span></button>
                <button id='arrow_menu' className='circle' onClick={dec}><span id="arrow" className="material-symbols-outlined circle">keyboard_arrow_down</span></button>
            </div>
        </AnimatedMain>
        
    );
};

export default Categories;