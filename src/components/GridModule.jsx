const GridModule = (props) => {
    let names = props.className ? `grid grid-module ${props.className}` : 'grid grid-module';
    return (
        <div className={names}>
            {props.children}
        </div>
    );
};

export default GridModule;
