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
            <h2 className="">{props.children}</h2>
        </button>
    );
}
export default ArticleCard;
