import React from 'react';
import { useNavigate } from 'react-router-dom';

const ArticleCard = (props) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/article', { state: { def: props.id } });
    };

    const idName = "art-" + props.id;

    return (
        <button className="article" id={idName} onClick={handleClick}>
            {props.children}
        </button>
    );
}
export default ArticleCard;
