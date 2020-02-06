const sub = (a, b) => {
    return new Promise((resolve, reject)=> {
        const subResult = a-b;
        if (subResult>=0) {
            resolve(subResult)
        } else {
            reject('wynik poniżej 0')
        }
    })    
}


sub(3, 4)
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log(error)
    });

