let n1 = 123;
let txt1 = '123';
let txt2 = 'abc';
let nula = null;

// Implicitas
    console.log(n1 + txt1); // '123123'
    console.log(nula + txt1); // 'null123'
    console.log(n1 == txt1); // true
    console.log(n1 === txt1); // false 

// Explicitas
    console.log(Number(null)); // 0
    console.log(String(null)); // 'null'
    console.log(Number(txt1) + n1); // 246
    console.log(Number(txt2)); // NaN

    // toString()
    let valor = 1000;
    let salario = valor.toString();

    // + converte para number
    let number = +'5';
    console.log(typeof number);

    // Number(boolean) -> retorna 0 ou 1