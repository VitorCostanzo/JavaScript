//(Operações básicas)
    const n1 = 30;
    const n2 = 4;
    const soma = n1 + n2;
    const sub = n1 - n2;
    const mult = n1 * n2;
    const div = n1/n2;
    const resto = n1%n2;
    const pot = n1**n2;
    const results = `Soma: ${soma}\nSubtração: ${sub}\nMultiplicação: ${mult}\nDivisão: ${div}\nResto da divisão inteira: ${resto}\nPotenciação: ${pot}`;
    console.log(results);

//(obs)
    console.log(Math.PI); // PI
    console.log(10/0); // infinity
    console.log(0/0); // NaN

//(Math.round)
    console.log(Math.round(312.34)); // arredonda para o inteiro mais próximo

//(toFixed())
    console.log(312.4567.toFixed(2)); // determina casas decimais

//(Formatando para reais)
    var salario = 1000.45;
    var salario_formatado = salario.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
    console.log(salario_formatado);


//(.sort)
    var numeros = [10, 1, 5, 9, 8, 12, 15];
    console.log(numeros.sort()); // .sort() ordena alfabeticamente
// para ordenar numericamente
    function comparaNumeros(a, b){
        if (a == b) {return 0;}
        else if (a < b) {return -1;}
        else {return 1;}
    }
    console.log(numeros.sort(comparaNumeros));
    // equivalente à função anterior
    numeros.sort((a, b) => a - b);