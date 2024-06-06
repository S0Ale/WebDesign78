import { useRef } from 'react';
import ArticleCard from '../components/ArticleCard';
import GridModule from '../components/GridModule';
import AnimatedMain from '../animations/AnimatedMain';
import DraggableDiv from '../animations/DraggableArea';
import '../css/grid.css';

const ArticleGrid = () => {
    const constraints = useRef(null);

    return (
        <AnimatedMain className="main-grid">
            <div className='h-fluid constraint-area debug2' ref={constraints}>
                <DraggableDiv className="flex row article-grid" constraints={constraints}>
                    <div className="grid-column">
                        <GridModule>
                            <ArticleCard className='medium'>
                            </ArticleCard>
                            <ArticleCard>
                                <div className="line">Alza un</div>
                                <div className="line down"><span className="highlight1">MURO</span> e passa la</div>
                                <div className="line right"><span className="highlight1">PAURA</span></div>
                            </ArticleCard>
                            <div className='grid-el '></div>
                            <ArticleCard className='big blue'>
                                <div className="line">Ma perchè non un</div>
                                <div className="line"><span className="highlight1">MURO</span></div>
                                <div className="line"><span className="highlight2">GALLEGGIANTE</span></div>
                            </ArticleCard>
                        </GridModule>
                        <GridModule>
                            <div className='grid-el big'></div>
                            <div className='grid-el '></div>
                            <div className='grid-el '></div>
                            <div className='grid-el medium'></div>
                        </GridModule>
                        <GridModule>
                            <div className='grid-el medium'></div>
                            <div className='grid-el '></div>
                            <div className='grid-el '></div>
                            <div className='grid-el big'></div>
                        </GridModule>
                    </div>
                    <div className="grid-column">
                    </div>
                </DraggableDiv>
            </div>
        </AnimatedMain>
    );
}

export default ArticleGrid;
