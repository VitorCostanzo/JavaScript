// Array - Vetor de n elementos

    const notas = [10, 10, 10, 10]; // declaração da array
    const notas2 = [4, 5, 6, 7];
// metodos
    
    // CONCAT
    // const todas = notas.concat(notas2); // -> retorna as arrays concatenadas
    // console.log(todas);

    //FILTER
    // const aprovados = todas.filter(nota => nota >= 7); // -> retorna notas maiores ou iguais a 7
    // console.log(aprovados);

    // PUSH, POP, UNSHIFT, SHIFT
    // notas.push('elemento'); // -> adiciona o elemento no final da array
    // console.log(notas);
    // notas.pop(); // Remove o ultimo elemento da array
    // console.log(notas);
    // notas.unshift('elemento'); // -> adiciona o elemento no inicio da array
    // console.log(notas);
    // notas.shift(); // -> remove o primeiro elemento da array
    // console.log(notas);
    
    // DELETE
    // delete notas[2]; // -> apaga o valor de notas[2], mas não apaga a posição
    // console.log(notas);

    // SPLICE
    // notas.splice(0, 2, 1,2,3,4); // -> (starting_index, how_many_to_remove, [elements to add: any_number])
    // console.log(notas);
    //
    // const instruments = ['Guitar', 'Banjo', 'Bass', 'Bass', 'Piano', 'Violin'];
    // instruments.splice(instruments.indexOf('Bass'), 1, 'Drums', 'Cello')
    // console.log(`Lista de instrumentos: ${instruments}`);

    // REDUCE - chamando função declarada
    // const media = notas2.reduce(calcMedia, 0);
    // console.log(media);
    // function calcMedia(med, nota){
    //     return med + nota/notas2.length;
    //}

    // REDUCE - arrow function
    // const rockets = [
    //     {country: "Russia", launch: 5},
    //     {country: "EUA", launch: 3},
    //     {country: "Brasil", launch: 1},
    //     {country: "China", launch: 4},
    //     {country: "Australia", launch: 12}
    // ];
    // const totalLaunches = rockets.reduce((tot, each) => tot + each.launch, 0);
    // console.log(totalLaunches);

    // SLICE
    // const office = ['Michael', 'Jim', 'Pam', 'Dwight', 'Kevin', 'Oscar', 'Andy', 'Meredith', 'Creed', 'Darryl', 'Toby', 'Kelly'];
    // const bullpen = office.slice(0, office.length/2); // do indice 0 até metade(exclusivo)
    // const annex = office.slice(office.length/2); // da metade ao fim
    // console.log(`Bullpen: ${bullpen}\nAnnex: ${annex}`);
    