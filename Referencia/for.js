// Loop For

// escrever os numeros 100, 200, 300, 400, 500, 600 com índices
const lista = [100, 200, 300, 400, 500, 600];
for (let i = 0; i < lista.length; i++){
    console.log(`${i + 1}: ${lista[i]}`);
}

// calcular média usando o for
const notas = [7, 8.3, 7.9, 5.4];
let soma = 0;
for (let i = 0; i < notas.length; i++){
    soma += notas[i];
}
const media = soma/notas.length;
console.log(media.toFixed(1));