function geraCriptografia(){
    let alfabeto = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvXxWwYyZz ';
    alfabeto = alfabeto.split('');
    let simbolos = '!@#$%¨&*()_+}{^?/ASDFGHJKLQWERTYUIOZXCVBN789456123~. ';
    simbolos = simbolos.split('');
    const crypto = [];
    for (let i = 0; i < 53; i++){
        const indexSimbolo = Math.floor(Math.random()*simbolos.length);
        const indexAlfabeto = Math.floor(Math.random()*alfabeto.length);
        const atual = {letra: alfabeto[indexAlfabeto], simbolo: simbolos[indexSimbolo]};
        crypto.push(atual);
        alfabeto.splice(indexAlfabeto, 1);
        simbolos.splice(indexSimbolo, 1);
    }
    return crypto;
}

function criptografa(nome, crypto){
    const nomeArray = nome.split('');
    const nomeCriptografadoArray = [];
    nomeArray.forEach(letra => {
        crypto.forEach(elem => {
            if (elem.letra === letra){
                nomeCriptografadoArray.push(elem.simbolo);
            }
        });
    });
    const nomeCriptografado = nomeCriptografadoArray.join('');
    return nomeCriptografado;
}

function descriptografa(nomeCriptografado, crypto){
    const nomeCriptografadoArray = nomeCriptografado.split('');
    nomeDescriptografadoArray = [];
    nomeCriptografadoArray.forEach(simbolo => {
        crypto.forEach(elem => {
            if (elem.simbolo === simbolo){
                nomeDescriptografadoArray.push(elem.letra);
            }
        });
    });
    const nomeDescriptografado = nomeDescriptografadoArray.join('');
    return nomeDescriptografado;
}

const crypto = geraCriptografia();
const nomeCriptografado = criptografa('Vitor Cordeiro Costanzo', crypto);
const nomeDescriptografado = descriptografa(nomeCriptografado, crypto);

console.log(crypto);
console.log(nomeCriptografado);
console.log(nomeDescriptografado);