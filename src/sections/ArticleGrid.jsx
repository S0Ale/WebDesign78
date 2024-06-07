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
                            <ArticleCard className='medium green' id={0}>
                                <div className="line">Se non hai i</div>
                                <div className="line"><span className="highlight2">MATTONI</span></div>
                                <div className="line">usa i</div>
                                <div className="line"><span className="highlight1 vert">DRONI</span></div>
                            </ArticleCard>
                            <ArticleCard className='red' id={1}>
                                <div className="line">Alza un</div>
                                <div className="line down"><span className="highlight1">MURO</span> e passa la</div>
                                <div className="line right"><span className="highlight1">PAURA</span></div>
                            </ArticleCard>
                            <ArticleCard className='orange' id={2}>
                                <div className="line">Europei del</div>
                                <div className="line"><span className="highlight2">SALTO DEL</span></div>
                                <div className="line right"><span className="highlight1">MURO</span></div>
                            </ArticleCard>
                            <ArticleCard className='big blue' id={3}>
                                <div className="line">Ma perchè non un</div>
                                <div className="line"><span className="highlight1">MURO</span></div>
                                <div className="line"><span className="highlight2">GALLEGGIANTE</span></div>
                            </ArticleCard>
                        </GridModule>
                        <GridModule>
                            <ArticleCard className="big"></ArticleCard>
                            <ArticleCard className=""></ArticleCard>
                            <ArticleCard className=""></ArticleCard>
                            <ArticleCard className="medium"></ArticleCard>
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
