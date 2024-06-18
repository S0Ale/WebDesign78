import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { gsap, useGSAP, ScrollTrigger } from '../scripts/gsap';

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
import { calculateMotionPath, query } from '../scripts/utils';

const ArticleLayout = (props) => {
    const contRef = useRef(null);

    useGSAP(() => {
        let icon = query('.art-icon');

        // calculate path starting position
        let startX = query('.start-checkpoint').getBoundingClientRect().left-
        (icon.getBoundingClientRect().left + icon.getBoundingClientRect().width /2);
        let startY = query('.start-checkpoint').getBoundingClientRect().top-
        (icon.getBoundingClientRect().top + icon.getBoundingClientRect().height /2);

        if(props.isExpanded){
            let motionPath = {path: [], curviness: 0, alignOrigin: [0.5, 0.5]};
            calculateMotionPath(startX, startY, motionPath);

            let mm = gsap.matchMedia();
            mm.add('(min-width: 992px)', () => {
                let tl = gsap.timeline();
                tl.to('.art-icon', {
                    x: startX,
                    y: startY,
                    scale: .5,
                    duration: 2,
                    ease: 'none',
                })
                .to('.art-icon',{
                    immediateRender: false,
                    motionPath: motionPath,
                    duration: 20,
                    ease: 'none',
                })
                .to('.art-icon', {
                    scale: .65,
                    duration: .2,
                });

                ScrollTrigger.create({
                    trigger: '.icon-article',
                    endTrigger: '.source-article',
                    animation: tl,
                    toggleActions: "play none none none",
                    start: "top 40%",
                    end: "bottom-=150px 50%",
                    scrub: 2,
                });
            });
            
        }
    }, {scope: contRef, dependencies: [props.isExpanded]});

    const createMarkup = (htmlString) => {
        return { __html: htmlString };
    };

    const orderLogos = [verde2,rosso1,arancione1,blu1,blu2,arancione2,rosso2,verde1,verde5,rosso3,arancione3,blu5,blu3,arancione5,rosso4,verde3,verde4,rosso5,arancione4,blu4,blu6,arancione6,rosso6,verde6];
    const names = props.className ? 
    `cont-article ${FormattedTitles[props.id].class}-art ${props.className}` : 
    `cont-article ${FormattedTitles[props.id].class}-art`;
    const idName = "art-" + props.id;

    return (
        <div className={names} id={idName} ref={contRef}>
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
            <div className='icon-article'>
                <img className='art-icon' src={orderLogos[props.id]}/>
            </div>
            <div className='flex column paragraphs-article'>
                <span id='startPath' className='path-checkpoint start-checkpoint'></span>
                {(data[props.id]).content.map((item, i) => (
                    <div key={i} className="flex row art-line">
                        <div key={i} className='paragraph-article' 
                        dangerouslySetInnerHTML={createMarkup(item)}/>
                        <span className='path-checkpoint'></span>
                        <span className='path-checkpoint'></span>
                    </div>
                ))}
            </div>
            <div className='source-article'>
                <a href={data[props.id].source}>
                    Fonte articolo
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
                </a>
            </div>
        </div>
    );
}
export default ArticleLayout;
