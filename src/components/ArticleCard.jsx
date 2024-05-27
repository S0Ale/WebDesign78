import React from 'react';
import { useNavigate } from 'react-router-dom';

const ArticleCard = (props) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/article', { state: { def: props.id } });
    };

    const idName = "art-" + props.id;

    return (
        <button onClick={handleClick}>
            <div className='article debug2' id={idName}>
                <h2 className="debug1">{props.children}</h2>
            </div>
        </button>
    );
}
export default ArticleCard;
