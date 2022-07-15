// MATRIZES - Arrays de arrays
const students = ['Jim', 'Dwight', 'Michael', 'Kevin'];
const grades = [8, 7, 6, 5];

// Buscando valores -> nome_da_matriz[indexArray][indexElementInArray]

const infoStudents = [students, grades];

const studentsComplete = [];
for (let i = 0; i < 4; i++){
    let info = {};
    info.name = infoStudents[0][i]; // buscando valores
    info.grade = infoStudents[1][i]; // buscando valores
    studentsComplete.push(info);
}
console.log(studentsComplete);