
function fibo (num){
    let n1 = 0, n2 = 1, nextTerm;
    const lista = []

    for (let i = 1; i <= num; i++) {
        
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
        lista.push(n1)      
    }
    return lista
}

console.log(fibo(6))