import { useRef } from 'react';
import ArticleCard from '../components/ArticleCard';
import GridModule from '../components/GridModule';
import AnimatedMain from '../animations/AnimatedMain';
import DraggableDiv from '../animations/DraggableArea';
import '../css/grid.css';
import '../css/card.css';

const ArticleGrid = () => {
    const constraints = useRef(null);

    return (
        <AnimatedMain className="main-grid">
            <div className='h-fluid constraint-area debug2' ref={constraints}>
                <DraggableDiv className="flex row article-grid" constraints={constraints}>
                    <div className="grid-column">
                        <GridModule>
                            <ArticleCard className='medium' id={0}/>
                            <ArticleCard className='' id={1}/>
                            <ArticleCard className='' id={2}/>
                            <ArticleCard className='big' id={3}/>
                        </GridModule>
                        <GridModule>
                            <ArticleCard className='big' id={4}/>
                            <ArticleCard className='' id={5}/>
                            <ArticleCard className='' id={6}/>
                            <ArticleCard className='medium' id={7}/>
                        </GridModule>
                        <GridModule>
                            <ArticleCard className='medium' id={8}/>
                            <ArticleCard className='' id={9}/>
                            <ArticleCard className='' id={10}/>
                            <ArticleCard className='big' id={11}/>
                        </GridModule>
                    </div>
                    <div className="grid-column">
                        <GridModule>
                            <ArticleCard className='big' id={12}/>
                            <ArticleCard className='' id={13}/>
                            <ArticleCard className='' id={14}/>
                            <ArticleCard className='medium' id={15}/>
                        </GridModule>
                        <GridModule>
                            <ArticleCard className='medium' id={16}/>
                            <ArticleCard className='' id={17}/>
                            <ArticleCard className='' id={18}/>
                            <ArticleCard className='big' id={19}/>
                        </GridModule>
                        <GridModule>
                            <ArticleCard className='big' id={20}/>
                            <ArticleCard className='' id={21}/>
                            <ArticleCard className='' id={22}/>
                            <ArticleCard className='medium' id={23}/>
                        </GridModule>
                    </div>
                </DraggableDiv>
            </div>
        </AnimatedMain>
    );
}

export default ArticleGrid;
