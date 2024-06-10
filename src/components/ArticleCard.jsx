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

    let color = FormattedTitles[props.id].class;
    return (
        <button className={`${names} ${color}`} id={idName} onClick={handleClick}>
            <div className='debug1'>
                {FormattedTitles[props.id].title()}
            </div>
        </button>
    );
}
export default ArticleCard;
