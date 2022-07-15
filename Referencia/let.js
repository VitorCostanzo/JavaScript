// let

// só pode ser acessada após criada
    let ovo = 3;
    console.log(ovo);

// respeita o escopo de bloco
    if (3 == 3){
        let result = 3;
    }
    console.log(result); // erro -> let deixa de existir ao final do escopo