import React from 'react';
import data from '../data/article-text.json';
import '../css/article-content.css';

const ArticleLayout = (props) => {
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
                :)
            </div>
            <div className='paragraphs-article'>
                {(data[props.id]).content.map(item => (
                    <div className='paragraph-article'>
                        {item}
                    </div>
                ))}
            </div>
            <div className='source-article'>

            </div>
        </div>
    );
}
export default ArticleLayout;
