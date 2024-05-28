import { useRef } from 'react';
import ArticleCard from '../components/ArticleCard';
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
                        <ArticleCard id={0}>
                            <div className="line down">Quella</div>
                            <div className="line"><span className="highlight2">IRRESISTIBILE</span></div>
                            <div className='line row-reverse up left'>voglia di <span className="highlight1">MURI</span></div>
                        </ArticleCard>
                    </div>
                    <div className='grid-el debug1'>
                        <ArticleCard id={1}>
                            <div className="line down">Tanto i</div>
                            <div className="line down"><span className="highlight1">MURI</span> sono solo in</div>
                            <div className="line up"><span className="highlight1">AMERICA</span></div>
                        </ArticleCard>
                    </div>
                    <div className='grid-el debug1'>
                        <ArticleCard id={2}>
                            <div className="line down">Perchè i</div>
                            <div className="line"><span className="highlight1">MURI</span></div>
                            <div className="line">sono solo quelli</div>
                            <div className="line"><span className="highlight1">DELLE</span></div>
                            <div className="line up"><span className="highlight1">CASE</span></div>
                        </ArticleCard>
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
