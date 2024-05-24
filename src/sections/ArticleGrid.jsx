import { useRef } from 'react';
import AnimatedMain from '../animations/AnimatedMain';
import DraggableDiv from '../animations/DraggableArea';
import '../css/grid.css';

const ArticleGrid = () => {
    const constraints = useRef(null);

    return (
        <AnimatedMain className="main-grid">
            <div className='h-fluid constraint-area' ref={constraints}>
                <DraggableDiv className="grid article-grid" constraints={constraints}>
                    <p>Content</p>
                </DraggableDiv>
            </div>
        </AnimatedMain>
    );
}

export default ArticleGrid;