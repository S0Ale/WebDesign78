import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { ArticleContext } from '../App';
import AnimatedMain from '../animations/AnimatedMain';
import { ArticleHeader } from '../components/Logos';
import FormattedTitles from '../components/FormattedTitles';
import '../css/article.css';
import '../css/article-content.css';
import '../css/slide.css';

const Article = () => {
    const navigate = useNavigate();
    const minCount = 0;
    const maxCount = 23;

    const { articleId, setArticleId } = useContext(ArticleContext);

    const increment = () => {
        setArticleId(prevId => {
            const newId = prevId >= maxCount ? minCount : prevId + 1;
            return newId;
        });
    };

    const decrement = () => {
        setArticleId(prevId => {
            const newId = prevId <= minCount ? maxCount : prevId - 1;
            return newId;
        });
    };

    const readMore = (id) => {
        setArticleId(id);
        navigate(`/article/${id}`);
    };

    return (
        <AnimatedMain className='h-fluid flex main-art art-center'>
            <div className='slide_counter flex layer1'>
                <p id='current_slide'>{articleId+1}</p>
                <p>/</p>
                <p id='total_slide'>{maxCount + 1}</p>
            </div>
            <div className='article_textbox'>
                <button className={`readMore grid-el article ${FormattedTitles[articleId].class}`} onClick={() => readMore(articleId)}>
                    <div style={{position:'relative'}}>
                        {FormattedTitles[articleId].title()}
                    </div>
                    <div className="article-header">
                        <ArticleHeader/>
                    </div>
                </button>
            </div>
            <div className='flex column slide-select'>
                <button id='arrow_menu' className='circle' onClick={decrement}><span id="arrow" className="material-symbols-outlined circle">keyboard_arrow_up</span></button>
                <button id='arrow_menu' className='circle' onClick={increment}><span id="arrow" className="material-symbols-outlined circle">keyboard_arrow_down</span></button>
            </div>
        </AnimatedMain>
    );
};

export default Article;
