import AnimatedMain from '../animations/AnimatedMain';
import '../css/article.css';

const Article = () => {
    return (
        <AnimatedMain className="h-fluid flex">
            <div className='slide_counter flex'>
                <p id='current_slide'>1</p>
                <p>/</p>
                <p id='total_slide'>5</p>
            </div>
            <div>
                <div className="article_textbox flex column">
                    <h1>Testo dell'articolo fake 1</h1>
                    <p>Sottotitolo Sottotitolo</p>
                    <button className='read_more circle'>READ MORE</button>
                </div>
            </div>
            <div className='flex column'>
                <button id='arrow_menu' className='circle'><span id="arrow" className="material-symbols-outlined circle">keyboard_arrow_up</span></button>
                <button id='arrow_menu' className='circle'><span id="arrow" className="material-symbols-outlined circle">keyboard_arrow_down</span></button>
            </div>
        </AnimatedMain>
        
    );
};

export default Article;