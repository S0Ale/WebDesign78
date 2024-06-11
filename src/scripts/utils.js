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

export { query, onTrigger, range };