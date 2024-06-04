import { useRef } from 'react';
import ArticleCard from '../components/ArticleCard';
import AnimatedMain from '../animations/AnimatedMain';
import DraggableDiv from '../animations/DraggableArea';
import '../css/grid.css';

import Art0 from '../articles/arancione1.png';
import Art1 from '../articles/rosso1.png';
import Art2 from '../articles/blu1.png';
import Art3 from '../articles/verde1.png';
import Art4 from '../articles/arancione2.png';
import Art5 from '../articles/rosso2.png';
import Art6 from '../articles/blu2.png';
import Art7 from '../articles/verde2.png';
import Art8 from '../articles/arancione3.png';
import Art9 from '../articles/rosso3.png';
import Art10 from '../articles/blu3.png';
import Art11 from '../articles/verde3.png';
import Art12 from '../articles/arancione4.png';
import Art13 from '../articles/rosso4.png';

const ArticleGrid = () => {
    const constraints = useRef(null);

    return (
        <AnimatedMain className="main-grid">
            <div className='h-fluid constraint-area' ref={constraints}>
                <DraggableDiv className="grid article-grid" constraints={constraints}>
                    <div className='grid-el '>
                        <ArticleCard id={0}>
                            <img className='art-image' src={Art0}/>
                        </ArticleCard>
                    </div>
                    <div className='grid-el '>
                        <ArticleCard id={1}>
                            <img className='art-image' src={Art1}/>
                        </ArticleCard>
                    </div>
                    <div className='grid-el '>
                        <ArticleCard id={2}>
                            <img className='art-image' src={Art2}/>
                        </ArticleCard>
                    </div>
                    <div className='grid-el '>
                        <ArticleCard id={3}>
                            <img className='art-image' src={Art3}/>
                        </ArticleCard>
                    </div>
                    <div className='grid-el '>
                        <ArticleCard id={4}>
                            <img className='art-image' src={Art4}/>
                        </ArticleCard>
                    </div>
                    <div className='grid-el '>
                        <ArticleCard id={5}>
                            <img className='art-image' src={Art5}/>
                        </ArticleCard>
                    </div>
                    <div className='grid-el '>
                        <ArticleCard id={6}>
                            <img className='art-image' src={Art6}/>
                        </ArticleCard>
                    </div>
                    <div className='grid-el '>
                        <ArticleCard id={7}>
                            <img className='art-image' src={Art7}/>
                        </ArticleCard>
                    </div>
                    <div className='grid-el '>
                        <ArticleCard id={8}>
                            <img className='art-image' src={Art8}/>
                        </ArticleCard>
                    </div>
                    <div className='grid-el '>
                        <ArticleCard id={9}>
                            <img className='art-image' src={Art9}/>
                        </ArticleCard>
                    </div>
                    <div className='grid-el '>
                        <ArticleCard id={10}>
                            <img className='art-image' src={Art10}/>
                        </ArticleCard>
                    </div>
                    <div className='grid-el '>
                        <ArticleCard id={11}>
                            <img className='art-image' src={Art11}/>
                        </ArticleCard>
                    </div>
                    <div className='grid-el '>
                        <ArticleCard id={12}>
                            <img className='art-image' src={Art12}/>
                        </ArticleCard>
                    </div>
                    <div className='grid-el '>
                        <ArticleCard id={13}>
                            <img className='art-image' src={Art13}/>
                        </ArticleCard>
                    </div>
                </DraggableDiv>
            </div>
        </AnimatedMain>
    );
}

export default ArticleGrid;
