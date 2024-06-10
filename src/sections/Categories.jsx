import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AnimatedMain from '../animations/AnimatedMain';
import ArticleCard from '../components/ArticleCard';
import '../css/categories.css';


const Categories = () => {
    const nav = useNavigate();
    const minC = 0;
    const maxC = 3;
    const [i, setI] = useState(minC);

    const Cat1 = [<ArticleCard className='' id={0}/>,<ArticleCard className='' id={1}/>,<ArticleCard className='' id={2}/>,<ArticleCard className='' id={3}/>,<ArticleCard className='' id={4}/>,<ArticleCard className='' id={5}/>];
    const Cat2 = [<ArticleCard className='' id={6}/>,<ArticleCard className='' id={7}/>,<ArticleCard className='' id={8}/>,<ArticleCard className='' id={9}/>,<ArticleCard className='' id={10}/>,<ArticleCard className='' id={11}/>];
    const Cat3 = [<ArticleCard className='' id={12}/>,<ArticleCard className='' id={13}/>,<ArticleCard className='' id={14}/>,<ArticleCard className='' id={15}/>,<ArticleCard className='' id={16}/>,<ArticleCard className='' id={17}/>];
    const Cat4 = [<ArticleCard className='' id={18}/>,<ArticleCard className='' id={19}/>,<ArticleCard className='' id={20}/>,<ArticleCard className='' id={21}/>,<ArticleCard className='' id={22}/>,<ArticleCard className='' id={23}/>];

    let RenderArt = [];

    switch(i){
        case 0:
            RenderArt=Cat1;
            break;
        case 1:
            RenderArt=Cat2;
            break;
        case 2:
            RenderArt=Cat3;
            break;
        case 3:
            RenderArt=Cat4;
            break;  
    }
    
    
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
                {RenderArt.map((art, i) => (
                    <div className='article_sing'>
                        {RenderArt[i]}
                    </div>
                ))}
            </div>
            <div className='flex column'>
                <button id='arrow_menu' className='circle' onClick={inc}><span id="arrow" className="material-symbols-outlined circle">keyboard_arrow_up</span></button>
                <button id='arrow_menu' className='circle' onClick={dec}><span id="arrow" className="material-symbols-outlined circle">keyboard_arrow_down</span></button>
            </div>
        </AnimatedMain>
        
    );
};

export default Categories;