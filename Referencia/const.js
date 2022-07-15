// const

// não podem ser alteradas
  const n1 = 0;
  //n1 = 5; ERRO
  const t1 = 'Hello';
  //t1 = 'World!'; ERRO
  const teste = false;
  //teste = true; ERRO
  console.log(n1, t1, teste);


// arrays e objetos constantes podem ser manipulados, mas não podem ser apontados para outro espaço de memória (receber outro =)
  const array = [];
  array.push(5, 3, 4);
  console.log(array);
  array.sort((a, b) => a - b); // ordena numericos
  console.log(array);

  const object = {nome: 'Vitor'};
  object.idade = 26;
  // object = {nome: 'Vitor'}; ERRO
  console.log(object);
