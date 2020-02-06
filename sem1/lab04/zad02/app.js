console.log('start');
const helloPromise = new Promise((resolve, reject)=> {
    setTimeout (()=>{
    resolve('yeah!')
    }, 5000)
});                              //promis jest odłożony na bok i wraca na koniec

helloPromise
    .then(text => {
        console.log(text);      
    });
console.log('end')