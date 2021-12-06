/*Micro desafio - Passo 1
Classe StudentRecord com construtor e métodos*/

module.exports = class StudentRecord {
  constructor(name, absences, grades) {
    this.name = name;
    this.absences = absences;
    this.grades = grades;
  }
  print() {
    return `Nome: ${this.name}\nFaltas: ${this.absences}\nNotas: ${this.grades[0]}, ${this.grades[1]}, ${this.grades[2]}`;
  }

  /*Micro desafio - Passo 2
  Método average (calcularMedia) e absencePlus (faltas)*/
  average() {
    let roundAverage = this.grades.reduce((total, sum) => total + sum) / 3;
    return roundAverage.toFixed(2);
  }

  absencesPlus() {
    return this.absences + 1;
  }
};
