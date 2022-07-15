// Funcões callback

// FOREACH
// const nomes = ['Michael', 'Dwight', 'Kevin', 'Andy'];

// nomes.forEach((nome, index, array) => {
//     console.log(`${nome} é o elemento ${index} da array ${array}`)
// })
// //igual a
// nomes.forEach(imprimeNomes);
// function imprimeNomes(nome, index, array){
//     console.log(`${nome} é o elemento ${index} da array ${array}`);
// } 
// // a função foreach espera até 3 parametros
// // forEach(função(obrigatória), indice, array)



// MAP
// retorna array com novos valores
// tambem pode ter como parametro (func, index, array)

// const notas = [10, 9, 8, 7, 6];

// const notasAtualizadas = notas.map(nota => nota <= 9 ? nota + 1 : nota);
// console.log(notasAtualizadas);
// // igual a
// const notasAtualizadas = notas.map(atualizaNotas);
// function atualizaNotas(nota){
//     return nota <= 9 ? nota + 1 : nota;
// }
// console.log(notasAtualizadas);

// const alunos = ['anA', 'LuCaS', 'OswAldO'];
// const alunosPadronizados = alunos.map(aluno => aluno.toUpperCase());
// console.log(alunosPadronizados);



// FILTER
// const nomes = ['Vitor', 'Ozzy', 'Lara', 'Zakk', 'Rosi'];
// const idades = [26, 5, 13, 4, 55];
// const maiorIdade = nomes.filter((nome, indice) => idades[indice] >= 18);
// console.log(maiorIdade);
// igual a
// const maiorIdade = nomes.filter(filtraMaiores);
// function filtraMaiores(nome, indice){
//     return idades[indice] >= 18 ? nome : null;
// }
// console.log(maiorIdade);

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const pares = numeros.filter(num => num%2 === 0);
// const impares = numeros.filter(num => num%2 !== 0);
// console.log(`Pares: ${pares}\nImpares: ${impares}`);



// REDUCE
// const rockets = [
//     {pais: 'Brasil', qtd: 5},
//     {pais: 'EUA', qtd: 3},
//     {pais: 'Cuba', qtd: 4}
// ];
// const totalFoguetes = rockets.reduce((tot, elem) => tot += elem.qtd, 0);
// console.log(totalFoguetes);

// const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
// const salaJava = [6, 5, 8, 9, 5, 6];
// const salaPython = [7, 3.5, 8, 9.5];
// function mediaSala(notasSala){
//     const somaNotas = notasSala.reduce((soma, nota) => soma += nota, 0);
//     return somaNotas/notasSala.length;
// }
// console.log(mediaSala(salaJS));
// console.log(mediaSala(salaJava));
// console.log(mediaSala(salaPython));

// const notas = [9.9, 9.2, 8.3 ,3.8];
// const media = notas.reduce((acum, atual) => acum += atual, 0) / notas.length;
// console.log(media.toFixed(1));