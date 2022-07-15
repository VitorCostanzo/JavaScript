// Não alteração de variáveis/objetos originais. Copiar e alterar a cópia.

const students = [
    {
        name: "John",
        grade: 6
    },
    {
        name: "Joyce",
        grade: 8
    },
    {
        name: "Peter",
        grade: 7
    }
]
function getApprovedStudents(students){
    return students.filter(student => student.grade >= 7); // filtra estudantes que tem noma maior ou igual a 7
}
var approvedStudents = getApprovedStudents(students);
console.log(approvedStudents);


var user = {
    name: 'vitor',
    lastName: 'costanzo'
}
var userWithAge = {
    ...user, // spread
    age: 26
}
console.log(userWithAge);