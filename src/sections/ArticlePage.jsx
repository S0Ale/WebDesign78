import { useEffect, useRef } from 'react';
import { useParams } from "react-router-dom";

import AnimatedMain from '../animations/AnimatedMain';
import ArticleLayout from '../components/ArticleLayout';
import { ReactLenis } from 'lenis/react'
import { gsap } from '../scripts/gsap';
import '../css/article.css';
import '../css/article-content.css';

const ArticlePage = () => {
    const {id} = useParams();
    const lenisRef = useRef();

    useEffect(() => {
        function update(time) {
          lenisRef.current?.lenis?.raf(time * 1000)
        }
      
        gsap.ticker.add(update)
      
        return () => {
          gsap.ticker.remove(update)
        }
    });

    return (
        <AnimatedMain className="h-fluid flex main-art art-main-exp">
            <ReactLenis ref={lenisRef} autoRaf={false} root>
                <div className="article_textbox_expand">
                    <ArticleLayout className="flex column" id={id}/>
                </div>
            </ReactLenis>
        </AnimatedMain>
    );
}

export default ArticlePage;