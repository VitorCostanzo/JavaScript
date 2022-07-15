// var

// pode ser declarada sem palavra reservada var
n1 = 0; 
console.log(n1); 

// hoisting da var
console.log(hoist); // undefined -> criação içada
var hoist = "variável declarada";
console.log(hoist); // declarada