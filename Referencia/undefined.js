// Valor não definido

let n1;
console.log(n1);

// Função sem return faz sua função e retorna undefined
function semReturn(){
    let soma = 3 + 3;
}
console.log(semReturn());

// OBS
console.log(undefined == null); // true
console.log(undefined === null); // false
