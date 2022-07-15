// FUNÇÕES DECLARADAS - Nomeadas e chamadas

    // function escreveLog(){
    //     console.log('Funcionou');
    // }
    // escreveLog();



// EXPRESSÕES DE FUNÇÕES
    // geralmente não nomeada (anônima)

    // const soma = function(n1, n2) { return n1 + n2; }; // a const soma recebe a função e os parametros, e armazena o return na variável
    // console.log(soma(3, 6));
    // por estar atrelada a uma variável, só pode ser chamada após criada, diferentemente da função declarada(que é içada ao início do código).



// ARROW FUNCTION
    // sempre anônima e atrelada a uma variável (não sofre hoisting)

    // Arrow Function de uma só linha (não precisa de {})
    // const apresentar = nome => `Meu nome é ${nome}!`;
    // console.log(apresentar('Vitor'));
    // const soma = (n1, n2) => n1 + n2;
    // console.log(soma(3, 5));



    // Arrow Function de mais de uma linha
    // const somaPequena = (n1, n2) => {
    //     if (n1 > 9 || n2 > 9){
    //         return 'Valores fora do intervalo';
    //     } else {
    //         return n1 + n2;
    //     }
    // }
    // console.log(somaPequena(5, 20));
    // console.log(somaPequena(13, 7));
    // console.log(somaPequena(8, 6));



// recebendo parâmetros
    // function somaDoisNumeros(a, b){
    //     console.log(a + b);
    // }
    // somaDoisNumeros(3, 7);



// retornando valores
    // function criaObjetoPessoa(name, lastName, age){
    //     return {
    //         nome: name,
    //         sobreNome: lastName,
    //         idade: age
    //     };
    // }
    // let pessoa1 = criaObjetoPessoa('Vitor', 'Costanzo', 26);
    // console.log(pessoa1);



// Função como parâmetro
    // function  retornaIdade(anoNascimento){
    //     return 2022 - anoNascimento;
    // }
    // function retornaNomeCompleto(nome, sobreNome){
    //     return nome + ' ' + sobreNome;
    // }
    // function retornaPessoa(age, fullName){
    //     return {
    //         nomeCompleto: fullName,
    //         idade: age
    //     };
    // }
    // console.log(retornaPessoa(retornaIdade(1995), retornaNomeCompleto('Vitor', 'Costanzo')));



// Função dentro de função
    // function cumprimentar(greeting){
    //     return `${greeting}`;
    // }
    // function seApresentar(name){
    //     return `${cumprimentar('Olá pessoal')}, meu nome ${name}!`;
    // }
    // console.log(seApresentar('Vitor'));



// Numero errado de parametros
    // function multiplica(n1 , n2){ // espera 2 parametros
    //     return n1 * n2;
    // }
    // console.log(multiplica(5)); // recebe 1 parametro
    // //retorna NaN
    // // Podemos definir valor padrão para parâmetros
    // function multiplicaPadrao(n1 = 1, n2 = 1){
    //     return n1 * n2;
    // }
    // console.log(multiplicaPadrao(7)); // n1 recebe 7, n2 permanece com valor 1



// High Order Function
    // Funções que recebem outras como parâmetro ou executam outras funções dentro de si

    // // funções que serão chamadas detro da função login 
    // const accessGranted = (name) => `${name} has successfully logged on the system!`;
    // const accessDenied = (name) => `${name} is not allowed to access this system!`;
    
    // // função que verifica se a pessoa é gerente ou não (será passada como argumento)
    // const isManager = (person) => {
    //     if (person.position === 'Manager'){
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    // // executa ou não o login, dependendo do cargo (HighOrder)
    // const login = (person, isManager) => {
    //     let logged;
    //     if (isManager){
    //         logged = accessGranted(person.name);
    //     } else {
    //         logged = accessDenied(person.name);
    //     }
    //     return logged;
    // }

    // people = [
    //     {name: 'Vitor', position: 'Manager'},
    //     {name: 'John', position: 'Employee'}
    // ]

    // // Chama a função login, passando isManager() como argumento
    // console.log(login(people[0], isManager(people[0])));
    // console.log(login(people[1], isManager(people[1])));