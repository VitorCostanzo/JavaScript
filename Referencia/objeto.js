// OBJETOS


// #region Pares de chave: valor
const aluno = {
    nome: 'Vitor',
    turma: '1CC',
    idade: 26,
    media: 10,
    telefones: ['14 99870-1243', '14 99092-4546', '14 3237-6767'],
    mochilas: [
        {
            cor: 'azul',
            tamanho: 'grande',
            bolsos: 6
        },
        {
            cor:'cinza',
            tamamnho: 'grande',
            bolsos: 5
        }
    ],
    mudarMedia: function(novaMedia){
        this.media = novaMedia;
    }
}
// #endregion

// #region ACESSANDO VALORES
// console.log(aluno.nome);
// console.log(aluno.turma);
// console.log(aluno.idade);
// console.log(aluno.media);
// OU
// console.log(aluno['nome']);
// console.log(aluno['turma']);
// console.log(aluno['idade']);
// console.log(aluno['media']);
// OU
// const chaves = ['nome', 'turma', 'idade', 'media'];
// chaves.forEach(elem => {
//     console.log(aluno[elem]);
// });
// #endregion

// #region ADICIONANDO
// aluno.email = 'vitrr@email.com'
// aluno['altura'] = '1,38';
// console.log(aluno);
// #endregion

// #region ALTERANDO
// aluno.altura = '1,83';
// aluno['email'] = 'vitor@email.com';
// console.log(aluno);
// #endregion

// #region EXCLUINDO
// delete aluno.nome;
// delete aluno['turma'];
// console.log(aluno);
// #endregion

// #region ARRAYS EM OBJETOS
// aluno.telefones.forEach(fone => console.log(fone));
// #endregion

// #region OBJETOS EM OBJETOS
// aluno.mochila.condicao = 'usada';
// console.log(aluno.mochila);
// console.log(aluno.mochila.cor);
// console.log(aluno.mochila.tamanho);
// console.log(aluno.mochila.bolsos);
// console.log(aluno.mochila.condicao);
// #endregion

// #region FUNCOES EM OBJETOS (MÉTODOS)
// console.log(aluno);
// aluno.mudarMedia(9.5);
// console.log(aluno);
// #endregion

// #region CRIANDO UM NOVO OBJETO COM BASE NO EXISTENTE
// se criarmos 'aluno2 = aluno', ambos apontam para a mesma referencia de memoria,
// e as alterações que fizermos em um serão feitas no outro.
// aluno2 = aluno;
// aluno2.nome = 'Antedeguemon';
// aluno.idade = 120;
// console.log(aluno, aluno2);
// para evitar este comportamento:
// const aluno2 = Object.create(aluno);
// aluno2.nome = 'Antedeguemon';
// console.log(aluno, aluno2);
// #endregion

// #region FOR IN
// percorre as chaves do objeto
//let relatorio = '';
//
// for (let info in aluno){
//     relatorio += `${info}: ${aluno[info]}\n`;
// }
// console.log(relatorio); // exibirá object e function
//
// for (let info in aluno){
//     if ((typeof aluno[info] !== 'object') && (typeof aluno[info] !== 'function')){
//         relatorio += `${info}: ${aluno[info]}\n`;
//     }
// }
// console.log(relatorio);  // não exibirá objects e functions obs: array de telefones foi tratada como objeto                      
// #endregion

// #region OBJECT.KEYS, OBJECT.VALUES, OBJECT.ENTRIES
// retorna um array com todas as chaves do objeto
// function limparMochila(obj){
//     const keysAluno = Object.keys(obj);
//     console.log(keysAluno);
//     if (keysAluno.includes('mochila')){
//         console.log(`Limpar a mochila ${obj.mochila.cor} do aluno ${obj.nome}`);
//     }
// }
// limparMochila(aluno);
//
// console.log(Object.keys(aluno)); -> array de chaves
// console.log(Object.values(aluno)); -> array de valores
// console.log(Object.entries(aluno)); -> array de arrays [chave, valor]
// #endregion

// #region SPREAD OPERATOR (...)
// 'espalha' os itens de um objeto em outro
// spread em array
const clientes = [
    {
        nome: 'André',
        cpf: '123123123',
        dependentes: [
            {
                nome: 'Samia',
                parentesco: 'filha',
                dataNasc: '20/03/2011'
            },
            {
                nome: 'Sara',
                parentesco: 'filha',
                dataNasc: '21/04/2017'
            }
        ]
    },
    {
        nome: 'Juliana',
        cpf: '456456456',
        dependentes: [
            {
                nome: 'Sophia',
                parentesco: 'filha',
                dataNasc: '30/08/2020'
            }
        ]
    }
];
const dependentes = function(clientes){
    const dependentes = [];
    clientes.forEach(elem => {
        dependentes.push(...elem.dependentes);
    });
    return dependentes;
}
console.table(dependentes(clientes));
// spread em objeto
const fichaGuerreiro =  {
    nome: 'Legolas',
    classe: 'arqueiro'
}
const equipoGuerreiro = {
    arma: 'arco',
    capa: 'élfica'
}
const Guerreiro = {
    ...fichaGuerreiro,
    ...equipoGuerreiro
}
console.log(Guerreiro);
// #endregion

// #region

// #endregion