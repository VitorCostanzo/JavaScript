// ForEach
// é uma função callback -> chama uma função como parametro

// calcular medias
const notas = [3.5, 9.5, 7, 7.5];
let soma = 0;
notas.forEach(nota => {
    soma += nota;
});
const media = soma/notas.length;
console.log(media.toFixed(1));
