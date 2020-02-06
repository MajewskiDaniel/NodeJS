function uniq(tab){
    const result = [];
    tab.forEach(function (element) {        
        if (result.indexOf(element) === -1) {
            result.push(element);
        }
    }); 
    return result;
}

module.exports = {
    uniq: uniq,
};