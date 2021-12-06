/*Micro desafio - Passo 7
Importação do módulo criado no arquivo student
A lista de alunos (instâncias de student) está no objeto course*/
const student = require("./student");

/*Micro desafio - Passo 3
Objeto course criado para armazenar os dados do curso e a lista de alunos*/
let course = {
  name: "Certified Tech Developer",
  minGrade: 7.0,
  maxAbsences: 4,
  students: [],

  /*Micro desafio - Passo 5
Função que retorna true se alguma das condições de aprovação for cumprida*/
  approved: function (student) {
    let approved = false;

    if (
      student.absences === this.maxAbsences &&
      student.average() > (this.minGrade *= 1.1)
    )
      approved = true;

    if (
      student.average() >= this.minGrade &&
      student.absences < course.maxAbsences
    )
      approved = true;

    return `Status de aprovação de ${student.name}: ${approved}`;
  },

  /*Micro desafio - Passo 6
Função que percorre o array students e retorna outro array com os alunos aprovados*/
  approvedList: function (students) {
    let arrayAux = [];
    for (let i = 0; i < students.length; i++) {
      arrayAux[i] = this.approved(this.students[i]);
    }
    return arrayAux;
  },
};

/*Micro desafio - Passo 4
Método Record cria uma instância na classe StudentRecord
e adiciona o aluno a lista do objeto course*/
function Record(name, notas, faltas) {
  let newStudent = new student(name, notas, faltas);
  course.students.push(newStudent);
  return newStudent;
}

//Instâncias da classe student
let rafael = Record("Rafael", 2, [7.5, 10.0, 6.0]);
let camila = Record("Camila", 0, [10, 10, 10]);
let luiz = Record("Luiz", 4, [5.5, 4.0, 3.5]);

//console.log(rafael.print());
//console.log(camila.average());
//console.log(luiz.absencesPlus());
//console.log(course.approved(camila));
//console.log(course.approvedList(course.students));
