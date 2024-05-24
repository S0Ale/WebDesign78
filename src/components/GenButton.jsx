const GenericButton = (props) => {
    return (
        <button onClick={props.onClick} className={`gen-btn
        ${props.className ? props.className : ''}
        `}>
            {props.children}
        </button>
    );
}

export default GenericButton;