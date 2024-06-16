import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import React from 'react';
import AnimatedMain from '../animations/AnimatedMain';
import FormattedTitles from '../components/FormattedTitles';
import ArticleLayout from '../components/ArticleLayout';
import '../css/article.css';

const Article = () => {
    const data = [
        { id: 0, content: "First article content" },
        { id: 1, content: "Second article content" },
        { id: 2, content: "Third article content" },
        { id: 3, content: "Fourth article content" },
        { id: 4, content: "Fifth article content" },
        { id: 5, content: "Sixth article content" },
        { id: 6, content: "Seventh article content" },
        { id: 7, content: "Eighth article content" },
        { id: 8, content: "Ninth article content" },
        { id: 9, content: "Tenth article content" },
        { id: 10, content: "Eleventh article content" },
        { id: 11, content: "Twelfth article content" },
        { id: 12, content: "Thirteenth article content" },
        { id: 13, content: "Fourteenth article content" },
        { id: 14, content: "Fifteenth article content" },
        { id: 15, content: "Sixteenth article content" },
        { id: 16, content: "Seventeenth article content" },
        { id: 17, content: "Eighteenth article content" },
        { id: 18, content: "Nineteenth article content" },
        { id: 19, content: "Twentieth article content" },
        { id: 20, content: "Twentyeth article content" },
        { id: 21, content: "Twentyfirst article content" },
        { id: 22, content: "Twentysecond article content" },
        { id: 23, content: "Twentythird article content" },
        // Add more articles as needed
    ];

    const minCount = 0;
    const maxCount = data.length - 1;
    const location = useLocation();
    const { def = minCount } = location.state || {};
    const [id, setId] = useState(def);
    const [isExpanded, setIsExpanded] = useState(false);
    const [content, setContent] = useState(data[id].content);

    useEffect(() => {
        setId(def);
        setContent(data[def].content);
        setIsExpanded(false); // Reset expanded state on article change
    }, [def]);

    const increment = () => {
        setId(prevId => {
            const newId = prevId >= maxCount ? minCount : prevId + 1;
            setContent(data[newId].content);
            setIsExpanded(false); // Reset expanded state on article change
            return newId;
        });
    };

    const decrement = () => {
        setId(prevId => {
            const newId = prevId <= minCount ? maxCount : prevId - 1;
            setContent(data[newId].content);
            setIsExpanded(false); // Reset expanded state on article change
            return newId;
        });
    };

    const readMore = () => {
        setIsExpanded(true);
    };

    return (
        <AnimatedMain className="h-fluid flex main-art">
            <div className='slide_counter flex'>
                <p id='current_slide'>{id + 1}</p>
                <p>/</p>
                <p id='total_slide'>{maxCount + 1}</p>
            </div>
            <div className={isExpanded ? 'article_textbox_expand' : 'article_textbox'}>
                <button className='readMore grid-el article' onClick={readMore}>
                    <div className={FormattedTitles[id].class}>
                        {FormattedTitles[id].title()}
                    </div>
                </button>
                <ArticleLayout id={id} content={content} />
            </div>
            <div className='flex column'>
                <button id='arrow_menu' className='circle' onClick={increment}>
                    <span id="arrow" className="material-symbols-outlined circle">keyboard_arrow_up</span>
                </button>
                <button id='arrow_menu' className='circle' onClick={decrement}>
                    <span id="arrow" className="material-symbols-outlined circle">keyboard_arrow_down</span>
                </button>
            </div>
        </AnimatedMain>
    );
};

export default Article;
