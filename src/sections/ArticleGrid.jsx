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
                    <div className='grid-el debug1'>
                        <div className='article debug2' id='art1'>Card</div>
                    </div>
                    <div className='grid-el debug1'>
                        <div className='article debug2' id='art2'>Card</div>
                    </div>
                    <div className='grid-el debug1'>
                        <div className='article debug2' id='art3'>Card</div>
                    </div>
                    <div className='grid-el debug1'></div>
                    <div className='grid-el debug1'></div>
                    <div className='grid-el debug1'></div>
                    <div className='grid-el debug1'></div>
                    <div className='grid-el debug1'></div>
                    <div className='grid-el debug1'></div>
                    <div className='grid-el debug1'></div>
                    <div className='grid-el debug1'></div>
                    <div className='grid-el debug1'></div>
                    <div className='grid-el debug1'></div>
                    <div className='grid-el debug1'></div>
                    <div className='grid-el debug1'></div>
                    <div className='grid-el debug1'></div>
                    <div className='grid-el debug1'></div>
                    <div className='grid-el debug1'></div>
                </DraggableDiv>
            </div>
        </AnimatedMain>
    );
}

export default ArticleGrid;