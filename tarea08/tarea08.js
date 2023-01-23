function verdadero(){
    return true;
}


///******************** */


const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hola soy una promesa');
    }, 5000);
});

myPromise.then(value => console.log(value));
    
//console.log(myPromise)

//************************** */

function* pares(){
    let n = 0;
    while(true){
        yield n * 2
        n++
    }
}

const funPar = pares();

console.log(funPar.next())
console.log(funPar.next())
console.log(funPar.next())