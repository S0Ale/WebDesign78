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
                            <ArticleCard className='medium green' id={0}/>
                            <ArticleCard className='red' id={1}/>
                            <ArticleCard className='orange' id={2}/>
                            <ArticleCard className='big blue' id={3}/>
                        </GridModule>
                        <GridModule>
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
