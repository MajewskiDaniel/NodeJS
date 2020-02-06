console.log('start');
const helloPromise = new Promise((resolve, reject)=> {
    resolve('yeah!')
})                              //promis jest odłożony na bok i wraca na koniec

helloPromise
    .then(text => {
        console.log(text);      
    });
console.log('end')