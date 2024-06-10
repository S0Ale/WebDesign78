import React from 'react';
import { useNavigate } from 'react-router-dom';
import FormattedTitles from './FormattedTitles';

const ArticleCard = (props) => {
    const navigate = useNavigate();
    const names = props.className ? `grid-el article ${props.className}` : 'grid-el article';
    const idName = "art-" + props.id;
    
    const handleClick = () => {
        navigate('/article', { state: { def: props.id } });
    };
    
    if(!FormattedTitles[props.id]) return <></>;

    return (
        <button className={names} id={idName} onClick={handleClick}>
            <div className='debug1'>
                {FormattedTitles[props.id]()}
            </div>
        </button>
    );
}
export default ArticleCard;
