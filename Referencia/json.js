// #region JSON
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
            tamanho: 'grande',
            bolsos: 5
        }
    ],
    mudarMedia: function(novaMedia){
        this.media = novaMedia;
    }
}

const alunoJson = JSON.stringify(aluno);
console.log(alunoJson);

const objAluno = JSON.parse(alunoJson);
console.log(objAluno);
// #endregion