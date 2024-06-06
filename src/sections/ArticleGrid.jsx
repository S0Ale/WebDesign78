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
                            <div className='grid-el '></div>
                            <div className='grid-el '></div>
                            <div className='grid-el '></div>
                            <div className='grid-el '></div>
                        </GridModule>
                        <GridModule className="grid-reverse">
                            <div className='grid-el '></div>
                            <div className='grid-el '></div>
                            <div className='grid-el '></div>
                            <div className='grid-el '></div>
                        </GridModule>
                        <GridModule>
                            <div className='grid-el '></div>
                            <div className='grid-el '></div>
                            <div className='grid-el '></div>
                            <div className='grid-el '></div>
                        </GridModule>
                    </div>
                    <div className="grid-column">
                        <GridModule className="grid-reverse">
                            <div className='grid-el '></div>
                            <div className='grid-el '></div>
                            <div className='grid-el '></div>
                            <div className='grid-el '></div>
                        </GridModule>
                        <GridModule>
                            <div className='grid-el '></div>
                            <div className='grid-el '></div>
                            <div className='grid-el '></div>
                            <div className='grid-el '></div>
                        </GridModule>
                        <GridModule className="grid-reverse">
                            <div className='grid-el '></div>
                            <div className='grid-el '></div>
                            <div className='grid-el '></div>
                            <div className='grid-el '></div>
                        </GridModule>
                    </div>
                </DraggableDiv>
            </div>
        </AnimatedMain>
    );
}

export default ArticleGrid;
