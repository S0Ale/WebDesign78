import { MotionPathPlugin } from './gsap';

function query(selector, asArray = false){
    let list = document.querySelectorAll(selector);
    
    if(asArray || list.length > 1) return Array.from(list);
    if(list.length == 0) return null;
    return list[0];
}

function onTrigger(el, event, handler, capture=false){
    el.addEventListener(event, handler, capture);
}

function range(size, startAt = 0) {
    return [...Array(size).keys()].map(i => i + startAt);
}

function elementChildren (element) {
    var childNodes = element.childNodes,
        children = [],
        i = childNodes.length;

    while (i--) {
        if (childNodes[i].nodeType == 1) {
            children.unshift(childNodes[i]);
        }
    }
    return children;
}

function calculateMotionPath(startX, startY, motionPath = {path:[]}){
    let start = query('.start-checkpoint');
    let lines = query('.art-line', true);

    lines.forEach(element => {
        let checkpoints = elementChildren(element).filter(child => child.classList.contains('path-checkpoint'));
        checkpoints.forEach((checkpoint, i) => {
            let coord = MotionPathPlugin.getRelativePosition(start, checkpoint, {x: 0, y: 0});
            //console.log({element: checkpoint, c: coord});
            coord.x += startX;
            coord.y += startY;

            motionPath.path.push(coord);
        });
    });
    motionPath.path.pop();

    return motionPath;
}

export { query, onTrigger, range, calculateMotionPath };