// levantamento de variaveis e funções no escopo

function principal(){
    var texto = escreveTexto('olá', 'jovem'); // função é criada abaixo, mas pode ser chamada em qqr lugar do escopo, está içada
    console.log(texto);
    console.log(t1); // variavel criada abaixo, somente criação foi içada (existe mas é undefined)
    var t1 = 'ovo';
    console.log(t1); // atribuição de valor não é içada 
}

function escreveTexto(txt1, txt2){
    return txt1 + ', ' + txt2;
}

principal();