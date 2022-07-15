// True or False
    const n1 = 5;
    const n2 = 7;
    console.log(n1 > n2);
    console.log(n2 > n1);

// variáveis podem receber valores booleanos
    let isConnected = false; 

// Truthy e falsy -> valores não booleanos que podem se comportar como tal
    console.log(1 == true); // true
    console.log(1 === true); // false
    console.log('1' == true); // true -> conversão implicita

    console.log(0 == false); // true
    console.log(0 === false); // false

    console.log('' == false); //true
    console.log('' === false); //false
