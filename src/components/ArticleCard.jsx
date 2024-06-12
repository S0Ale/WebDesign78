import React from 'react';
import { useNavigate } from 'react-router-dom';
import FormattedTitles from './FormattedTitles';
import { ArticleHeader } from '../components/Logos';

const ArticleCard = (props) => {
    const navigate = useNavigate();
    const names = props.className ? `grid-el article ${props.className}` : 'grid-el article';
    const idName = "art-" + props.id;
    
    const handleClick = () => {
        navigate('/article', { state: { def: props.id } });
    };
    
    if(!FormattedTitles[props.id]) return <></>;

    let color = FormattedTitles[props.id].class;
    return (
        <button className={`${names} ${color}`} id={idName} onClick={handleClick}>
            <div className='card-content'>
                {FormattedTitles[props.id].title()}
            </div>
            <div className="article-header">
                <ArticleHeader/>
            </div>
        </button>
    );
}
export default ArticleCard;
