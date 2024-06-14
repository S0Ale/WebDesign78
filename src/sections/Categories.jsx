import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import AnimatedMain from '../animations/AnimatedMain';
import ArticleCard from '../components/ArticleCard';
import CategoriesNames from '../components/CategoriesNames';
import '../css/categories.css';


const Categories = () => {
    const nav = useNavigate();
    const location = useLocation();
    const minC = 0;
    const maxC = 3;
    const { def } = location.state || { def: minC };
    const [i, setI] = useState(def);

    useEffect(() => {
        setI(def);
      }, [def]); 

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
            <div className='grid article_categoria'>
                {
                    CategoriesNames[i].index.map((id) => {
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