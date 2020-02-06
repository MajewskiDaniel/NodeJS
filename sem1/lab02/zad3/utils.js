function uniq(tab){
    const result = [];
    tab.forEach(function(element) {        
        if (result.indexOf(element) === -1) {
            result.push(element);
        }
    }); 
    return result;
}

function diff(a, b) {
    const result = [];
    a.forEach(function(element){
        if (b.indexOf(element) ===-1){
            result.push(element);
        }
    });
    return result;
}

module.exports = {
    uniq: uniq,
    diff: diff,
};