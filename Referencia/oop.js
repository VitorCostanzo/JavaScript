// PROGRAMAÇÃO ORIENTADA A OBJETOS

// #region CLASSES
// -> modelos para criação de objetos
class Pessoa { // -> criação da classe
    constructor(nome, sobrenome, cpf, idade){ // -> construtor necessário // para propriedades
        this.nome = nome,
        this.sobrenome = sobrenome,
        this.cpf = cpf,
        this.idade = idade
    }
    // p/ metodos da classe, palavra function desnecessária
    exibirNomeCompleto(){
        console.log(`${this.nome} ${this.sobrenome}`);
    }
    fazerAniversario(){
        console.log(`${this.nome} fez ${++this.idade} anos !`);
    }
    alterarSobrenome(novoSN){
        this.sobrenome = novoSN;
    }
}
// const vitor = new Pessoa('Vitor', 'Costanzo', '123123', 26);
// console.log(vitor);
// vitor.exibirNomeCompleto();
// vitor.fazerAniversario();
// console.log(vitor);
// #endregion

// #region HERANÇA
class Programador extends Pessoa{ // extends -> a classe Programador herdará os atributos da classe Pessoa
    constructor(nome, sobrenome, cpf, idade, linguagens){
        super(nome, sobrenome, cpf, idade), // 'herda' o construtor da classe Pai
        this.linguagens = (typeof linguagens === Array) ? [...linguagens] : linguagens
    }
    aprenderNovaLinguagem(novaLing){
        this.linguagens = (typeof this.linguagens === 'string') ? this.linguagens = [this.linguagens, novaLing] : [...this.linguagens, novaLing] ;
    }
}

const vitorDev = new Programador('Vitor', 'Costanzo', '121233', 26, ['Java', 'JS']);
vitorDev.alterarSobrenome('Cordeiro Costanzo');
//console.log(vitorDev);
vitorDev.exibirNomeCompleto();
vitorDev.aprenderNovaLinguagem('MySQL');
console.log(vitorDev);
// #endregion

// #region THIS
// this fará referencia ao objeto que chama a função
// const pessoa = {
//     nome: 'vitor',
//     email: '123@email.com',
//     imprimInfo: getInfo
// }
// function getInfo(){
//     console.log(`nome: ${this.nome}, email: ${this.email}`);
// }
// pessoa.imprimInfo();
// getInfo();
//#endregion

// #region CALL
// função criada fora dos objetos
// function.call(obj_referencia_this, arg_funcao)
// function imprimeNomeEmail(tipoCliente){
//     console.log(`${tipoCliente} - nome: ${this.nome}, email: ${this.email}`)
//    }
//    const cliente1 = {
//     nome: "Carlos",
//     email: "c@email.com"
//    }
//    const cliente2 = {
//     nome: "Fred",
//     email: "f@email.com"
//    }

//    imprimeNomeEmail.call(cliente1, 'Cliente Padrão');
//    imprimeNomeEmail.call(cliente2, 'Cliente Ouro');
// #endregion

// #region APPLY
// 'espalha' uma array como argumentos
// function imprimeNomeEmail(tipoCliente, agencia){
//     console.log(`${tipoCliente} da agência ${agencia}: - nome: ${this.nome}, email: ${this.email}`);
// }
// const cliente1 = {
// nome: "Carlos",
// email: "c@email.com"
// }
// const cliente2 = {
// nome: "Fred",
// email: "f@email.com"
// }
// const clienteEspecial = ['Cliente Especial', 'Rio de Janeiro'];
// const clienteEstudante = ['Cliente Estudante', 'Paraná'];
// imprimeNomeEmail.apply(cliente1, clienteEstudante);
// imprimeNomeEmail.call(cliente2, ...clienteEspecial);
// #endregion

// #region BIND
// const personagem = {
//     nome: 'Princesa Leia',
//     apresentar: function(){
//         return `Personagem: ${this.nome}`
//     }
// }
// const personagemGenerico = personagem.apresentar; // personagemGenerico recebe a function() de apresentar
// console.log(personagemGenerico()); // como não foi chamada pelo objeto, perdeu a referencia do .this

// const personagemDefinido = personagemGenerico.bind(personagem); // 'liga' personagemGenerico ao personagem quando chamarmos a funcao personagemDefinido, muda a referencia do this
// console.log(personagemDefinido());
// #endregion

