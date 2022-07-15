const clientes = [
    {
        nome: 'Pedro',
        idade: 30,
        familia: [
            {nome: 'Zelia', parentesco: 'mae', dataNasc: '13/06/1960'},
            {nome: 'Oswaldo', parentesco: 'pai', dataNasc: '23/11/1959'},
            {nome: 'Andre', parentesco: 'irmao', dataNasc: '12/10/1995'},
            {nome: 'Julia', parentesco: 'prima', dataNasc: '11/10/1995'},
            {nome: 'Diogo', parentesco: 'filho', dataNasc: '26/03/2020'}
        ]
    },
    {
        nome: 'Carlos',
        idade: 45,
        familia: [
            {nome: 'Neusa', parentesco: 'mae', dataNasc: '13/06/1950'},
            {nome: 'Altair', parentesco: 'pai', dataNasc: '13/11/1949'}
        ]
    },
    {
        nome: 'Rosangela',
        idade: 50,
        familia: [
            {nome: 'Maria', parentesco: 'mae', dataNasc: '10/03/1939'},
            {nome: 'Pedro', parentesco: 'pai', dataNasc: '23/05/1940'},
            {nome: 'Roberto', parentesco: 'irmao', dataNasc: '12/10/1975'},
            {nome: 'Eduardo', parentesco: 'filho', dataNasc: '20/08/2002'}
        ]
    }
];

console.log(getFamiliarMaisNovo('Carlos'));

function getClientePeloNome(nome){
    let cliente = 'XXXX';
    clientes.forEach(elem => {
        if (elem.nome === nome){
            cliente = elem;
        }
    })
    return cliente;
} // chamada em getFamiliarMaisNovo()

function getDatasArray(cliente){
    const datasArray = [];
    cliente.familia.forEach(pessoa => {
        datasArray.push(pessoa.dataNasc.split('/'));
    });
    return datasArray;
} // chamada em getMaisNovoArray()

function getMaisNovoArray(cliente){
    const datasArray = getDatasArray(cliente);

    let ano = 3000;
    let mes = 13;
    let dia = 32;
    let maisnovo;
    datasArray.forEach(data => {
        if (Number(data[2]) < ano) {
            maisnovo = data;
        } else if (Number(data[2] === ano) && (Number(data[1] < mes))) {
            maisnovo = data;
        } else if (Number(data[2] === ano) && (Number(data[1] === mes)) && Number(data[0] < dia)){
            maisnovo = data;
        }
    });
    return maisnovo;
} // chamada em getFamiliarMaisNovo()

function getFamiliarMaisNovo(nome){

    const cliente = getClientePeloNome(nome);

    if ((typeof cliente) === 'string'){
        return 'Cliente não cadastrado!';
    } else {
        const maisNovoArray = getMaisNovoArray(cliente);
        const dataMaisNovo = maisNovoArray.join('/');

        let maisNovo;
        cliente.familia.forEach(pessoa => {
            if (pessoa.dataNasc === dataMaisNovo){
                maisNovo = pessoa;
            }
        });
        return maisNovo;
    }
}