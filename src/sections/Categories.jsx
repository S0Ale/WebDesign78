import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AnimatedMain from '../animations/AnimatedMain';
import '../css/categories.css';

import Art0 from '../articles/arancione1.png';
import Art1 from '../articles/arancione2.png';
import Art2 from '../articles/arancione3.png';
import Art3 from '../articles/arancione4.png';

import Art4 from '../articles/rosso1.png';
import Art5 from '../articles/rosso2.png';
import Art6 from '../articles/rosso3.png';
import Art7 from '../articles/rosso4.png';

import Art8 from '../articles/blu1.png';
import Art9 from '../articles/blu2.png';
import Art10 from '../articles/blu3.png';

import Art11 from '../articles/verde1.png';
import Art12 from '../articles/verde2.png';
import Art13 from '../articles/verde3.png';

const Categories = () => {
    const nav = useNavigate();
    const minC = 0;
    const maxC = 3;
    const [i, setI] = useState(minC);

    const ArtA = [Art0,Art1,Art2,Art3];
    const ArtR = [Art4,Art5,Art6,Art7];
    const ArtB = [Art8,Art9,Art10];
    const ArtV = [Art11,Art12,Art13];

    let RenderArt = [];
    let Class='article_categoria_';
    let exact_id=0;

    switch(i){
        case 0:
            RenderArt=ArtA;
            Class+='four';
            break;
        case 1:
            RenderArt=ArtR;
            exact_id=exact_id+ArtA.length;
            Class+='four';
            break;
        case 2:
            RenderArt=ArtB; 
            exact_id=exact_id+ArtA.length+ArtR.length;
            Class+='three';
            break;
        case 3:
            RenderArt=ArtV;
            exact_id=exact_id+ArtA.length+ArtR.length+ArtB.length;
            Class+='three';
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
            <div className={Class}>
                {RenderArt.map((art, i) => (
                    <button onClick={() => handleClick(i)}>
                        <img src={art} className='article_sing'/> 
                    </button>
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