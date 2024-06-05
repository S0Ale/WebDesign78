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
                <DraggableDiv className="grid article-grid" constraints={constraints}>
                    <GridModule>
                        <div className='grid-el debug1'></div>
                        <div className='grid-el debug1'></div>
                        <div className='grid-el debug1'></div>
                        <div className='grid-el debug1'></div>
                    </GridModule>
                    <GridModule className="grid-reverse">
                        <div className='grid-el debug1'></div>
                        <div className='grid-el debug1'></div>
                        <div className='grid-el debug1'></div>
                        <div className='grid-el debug1'></div>
                    </GridModule>
                    <GridModule className="grid-reverse">
                        <div className='grid-el debug1'></div>
                        <div className='grid-el debug1'></div>
                        <div className='grid-el debug1'></div>
                        <div className='grid-el debug1'></div>
                    </GridModule>
                    <GridModule>
                        <div className='grid-el debug1'></div>
                        <div className='grid-el debug1'></div>
                        <div className='grid-el debug1'></div>
                        <div className='grid-el debug1'></div>
                    </GridModule>
                    <GridModule>
                        <div className='grid-el debug1'></div>
                        <div className='grid-el debug1'></div>
                        <div className='grid-el debug1'></div>
                        <div className='grid-el debug1'></div>
                    </GridModule>
                    <GridModule className="grid-reverse">
                        <div className='grid-el debug1'></div>
                        <div className='grid-el debug1'></div>
                        <div className='grid-el debug1'></div>
                        <div className='grid-el debug1'></div>
                    </GridModule>
                </DraggableDiv>
            </div>
        </AnimatedMain>
    );
}

export default ArticleGrid;
