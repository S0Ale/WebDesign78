const ArticleCard = (props) => {
    return (
        <div className='article debug2' id={props.id}>
            <h2 className="debug1">{props.children}</h2>
        </div>
    );
}
export default ArticleCard;
