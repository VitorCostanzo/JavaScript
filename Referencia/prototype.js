// #region PROTOTYPE 
//
//é a base que molda o objeto criado (métodos, propriedades, ...) // classe
//__proto__ guarda as definições dos objetos criados no js // não utilizada 
//
//const arr = []; // -> objeto do tipo Array
//arr.__proto__ // -> construtor (Array[])
//
//const newArr = new Array([1, 2, 3]);
//
//const obj = {a: 1, b: 2};
//obj.__proto__ // -> construtor (Object{})
//
//function func() { return 1 };
//func.__proto__ //-> construtor (Function())
//
//const texto = 'Alura';
//texto.__proto__ // -> construtor (String {})
//
//const numero = 2;
//numero.__proto__ // -> construtor (Number{})
//
// Executar linhas acima no console do navegador
// #endregion

// #region CRIANDO UM CLIENTE GENÉRICO
function Cliente(nome, cpf, email){
    this.nome = nome,
    this.cpf = cpf,
    this.email = email
    this.saldo = 0,
    this.depositar = function(valor){
        this.saldo += valor;
    }
}

const vitor = new Cliente('Vitor', '123123123', 'vitor@email.com');
// console.table(vitor);
// #endregion

// #region REAPROVEITANDO O OBJETO CLIENTE
function ClientePoupanca(nome, cpf, email, saldoPoup){
    Cliente.call(this, nome, cpf, email);
    this.saldoPoup = saldoPoup;
    this.depositarPoup = function(valor){
        this.saldoPoup += valor;     
    }
}

const vitorPoup = new ClientePoupanca('Vitor', '123123123', 'vitor@email.com', 200);
//console.table(vitorPoup);
// #endregion

// #region ATRIBUTOS DAS PROPRIEDADES
// as propriedades (nome, cpf, email) do exemplo anterior possuem seus proprios atributos como:
// *Writable (se pode ser escrita/adicionada a um objeto)
// *Enumerable (se é enumeravel)
// *Configurable (se pode ser editada/deletada ou configurada)
// #endregion

// #region PARA SABER
console.log(Object.getOwnPropertyDescriptor(vitor, 'nome')); // -> atributos das propriedades
console.log(Function.prototype.isPrototypeOf(Cliente)); // -> verifica se têm os mesmos prototips
console.log(Cliente.constructor === Function); // -> verifica se o construtor de Cliente é uma Function
console.log(vitor instanceof Cliente); // verifica se vitor é uma instancia de cliente
console.log(typeof vitor,',', typeof vitorPoup);
console.log(vitor.hasOwnProperty('saldoPoup')); // -> verifica se o objeto vitor tem a propriedade 'saldoPoup'
console.log(vitorPoup.hasOwnProperty('saldoPoup')); // -> verifica se o objeto vitorPoup tem a propriedade 'saldoPoup'
console.log(vitor.constructor); // -> mostra o construtor do objeto vitor
console.log(vitorPoup.constructor); // -> mostra o construtor do objeto vitorPoup
// #endregion