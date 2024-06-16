import React from 'react';
import { ArticleHeader } from '../components/Logos';
import data from '../data/article-text.json';
import '../css/article-content.css';

import arancione1 from '../assets/articles_icons/arancione-1.svg';
import arancione2 from '../assets/articles_icons/arancione-2.svg';
import arancione3 from '../assets/articles_icons/arancione-3.svg';
import arancione4 from '../assets/articles_icons/arancione-4.svg';
import arancione5 from '../assets/articles_icons/arancione-5.svg';
import arancione6 from '../assets/articles_icons/arancione-6.svg';
import rosso1 from '../assets/articles_icons/rosso-1.svg';
import rosso2 from '../assets/articles_icons/rosso-2.svg';
import rosso3 from '../assets/articles_icons/rosso-3.svg';
import rosso4 from '../assets/articles_icons/rosso-4.svg';
import rosso5 from '../assets/articles_icons/rosso-5.svg';
import rosso6 from '../assets/articles_icons/rosso-6.svg';
import verde1 from '../assets/articles_icons/verde-1.svg';
import verde2 from '../assets/articles_icons/verde-2.svg';
import verde3 from '../assets/articles_icons/verde-3.svg';
import verde4 from '../assets/articles_icons/verde-4.svg';
import verde5 from '../assets/articles_icons/verde-5.svg';
import verde6 from '../assets/articles_icons/verde-6.svg';
import blu1 from '../assets/articles_icons/blu-1.svg';
import blu2 from '../assets/articles_icons/blu-2.svg';
import blu3 from '../assets/articles_icons/blu-3.svg';
import blu4 from '../assets/articles_icons/blu-4.svg';
import blu5 from '../assets/articles_icons/blu-5.svg';
import blu6 from '../assets/articles_icons/blu-6.svg';

const ArticleLayout = (props) => {
    const orderLogos = [verde2,rosso1,arancione1,blu1,blu2,arancione2,rosso2,verde1,verde5,rosso3,arancione3,blu5,blu3,arancione5,rosso4,verde3,verde4,rosso5,arancione4,blu4,blu6,arancione6,rosso6,verde6];

    const names = props.className ? 'cont-article ${props.className}' : 'cont-article';
    const idName = "art-" + props.id;

    return (
        <div className={names} id={idName}>
            <div className='title-fake-article'>
                {data[props.id].title_fake}
            </div>
            <div className='davvero-article'>
                DAVVERO?
            </div>
            <div className='title-real-article'>
                {data[props.id].title_real}
            </div>
            <div className='icon-article'>
                <img src={orderLogos[props.id]}/>
            </div>
            <div className='paragraphs-article'>
                {(data[props.id]).content.map(item => (
                    <div className='paragraph-article'>
                        {item}
                    </div>
                ))}
            </div>
            <div className='source-article'>
                <a href={data[props.id].source}>Fonte articolo</a>
            </div>
        </div>
    );
}
export default ArticleLayout;
