import React from 'react';

import FormattedTitles from './FormattedTitles';
import { ArticleHeader } from './Logos';
import data from '../data/article-text.json';
import '../css/article-content.css';

import arancione1 from '../assets/articles_icons/arancione1.png';
import arancione2 from '../assets/articles_icons/arancione2.png';
import arancione3 from '../assets/articles_icons/arancione3.png';
import arancione4 from '../assets/articles_icons/arancione4.png';
import arancione5 from '../assets/articles_icons/arancione5.png';
import arancione6 from '../assets/articles_icons/arancione6.png';
import rosso1 from '../assets/articles_icons/rosso1.png';
import rosso2 from '../assets/articles_icons/rosso2.png';
import rosso3 from '../assets/articles_icons/rosso3.png';
import rosso4 from '../assets/articles_icons/rosso4.png';
import rosso5 from '../assets/articles_icons/rosso5.png';
import rosso6 from '../assets/articles_icons/rosso6.png';
import verde1 from '../assets/articles_icons/verde1.png';
import verde2 from '../assets/articles_icons/verde2.png';
import verde3 from '../assets/articles_icons/verde3.png';
import verde4 from '../assets/articles_icons/verde4.png';
import verde5 from '../assets/articles_icons/verde5.png';
import verde6 from '../assets/articles_icons/verde6.png';
import blu1 from '../assets/articles_icons/blu1.png';
import blu2 from '../assets/articles_icons/blu2.png';
import blu3 from '../assets/articles_icons/blu3.png';
import blu4 from '../assets/articles_icons/blu4.png';
import blu5 from '../assets/articles_icons/blu5.png';
import blu6 from '../assets/articles_icons/blu6.png';

const ArticleLayout = (props) => {
    const orderLogos = [verde2,rosso1,arancione1,blu1,blu2,arancione2,rosso2,verde1,verde5,rosso3,arancione3,blu5,blu3,arancione5,rosso4,verde3,verde4,rosso5,arancione4,blu4,blu6,arancione6,rosso6,verde6];

    const names = props.className ? `cont-article ${props.className}` : 'cont-article';
    const idName = "art-" + props.id;

    return (
        <div className={names} id={idName}>
            <div className='art-bg'></div>
            <div className={`article-header ${FormattedTitles[props.id].class}`}>
                <ArticleHeader/>
            </div>
            <div className={`fake-title ${FormattedTitles[props.id].class}`}>
                {FormattedTitles[props.id].title()}
            </div>
            <div className='real-subtitle'>
                DAVVERO ?
            </div>
            <div className='real-title'>
                {data[props.id].title_real}
            </div>
            <div className='icon-article debug1'>
                <img className='art-icon debug2' src={orderLogos[props.id]}/>
            </div>
            <div className='paragraphs-article'>
                {(data[props.id]).content.map((item, i) => (
                    <div key={i} className='paragraph-article'>
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
