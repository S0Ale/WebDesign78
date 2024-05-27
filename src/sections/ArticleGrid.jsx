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
                            Quella<br/><span className="highlight2">IRRESISTIBILE</span><br/>
                            <div className='flex debug2' style={{flexDirection: 'row-reverse', justifyContent: 'left'}} >voglia di <span className="highlight1">MURI</span></div>
                        </ArticleCard>
                    </div>
                    <div className='grid-el debug1'>
                        <ArticleCard id={1}>Tanto i<br/><span className="highlight1">MURI</span> sono solo in <br/><span className="highlight1">AMERICA</span></ArticleCard>
                    </div>
                    <div className='grid-el debug1'>
                        <ArticleCard id={2}>Perchè i<br/><span className="highlight1">MURI</span><br/>sono solo quelli<br/><span className="highlight1">DELLE<br/>CASE</span></ArticleCard>
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
