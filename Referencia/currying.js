// transformar uma fonção com 'n' parametros em uma função com 1 parametro. Para cada parâmetro retornamos uma função

function somar(a, b){
    return a + b;
}

console.log(somar(2,3));

//vira

function somarB(a){
    return function(b){
        return a + b;
    }
}
const somarB2 = somarB(2);
var somados = somarB2(5) // somará 2 com 5

console.log(somados);