// Definição da classe Exam
export class Exam {
  // Construtor da classe Exam
  constructor(answer, weight) {
    // Inicializa as propriedades weight e answer com os valores passados como argumento
    this.weight = weight;
    this.answer = answer;
    // Inicializa a propriedade exams como um array vazio
    this.exams = [];
  }


  // Método para adicionar um exame à lista de exames
  add(exam) {
    // Calcula a nota do exame com base nas respostas e pesos das questões
    exam.grade = Object.keys(exam.values).reduce((total, q) => {
      return (
        total + (exam.values[q] === this.answer.values[q] ? this.weight[q] : 0)
      );
    }, 0);

    // Adiciona o exame à lista de exames
    this.exams.push(exam);
  }

  // Método para calcular a média das notas dos exames
  avg() {
    // Soma as notas de todos os exames
    let sum = Object.values(this.exams).reduce(
      (sum, exame) => sum + exame.grade,
      0
    );

    // Retorna a média das notas
    let average = sum / this.exams.length

    // Retorna a média das notas com duas casas decimais
    return parseFloat(average.toFixed(2));
  }

  // Método para encontrar as notas mínimas dos exames
  min(count = 1) {
    // Obtém as notas de todos os exames
    let grades = this.exams.map((answer) => answer.grade);

    // Ordena as notas em ordem crescente
    grades.sort((a, b) => a - b);

    // Retorna a menor nota
    return grades.slice(0, count);
  }

  // Método para encontrar as notas máximas dos exames
  max(count = 1) {
    // Obtém as notas de todos os exames
    let grades = this.exams.map((answer) => answer.grade);

    // Ordena as notas em ordem crescente
    grades.sort((a, b) => a - b);

    // Retorna a maior nota
    return grades.slice(-count);
  }

  // Método para encontrar as notas menores que um limite dado
  lt(limit) {
    // Obtém as notas de todos os exames
    let grades = this.exams.map((answer) => answer.grade);

    // Ordena as notas em ordem crescente
    grades.sort();

    // Retorna as notas menores que o limite
    return grades.filter((grade) => grade < limit);
  }

  // Método para encontrar as notas maiores que um limite dado
  gt(limit) {
  // Obtém as notas de todos os exames
    let grades = this.exams.map((answer) => answer.grade);

  // Ordena as notas em ordem crescente
    grades.sort((a, b) => a - b);

  // Filtra as notas maiores ou igual que o limite
    let filteredGrades = grades.filter((grade) => grade >= limit);

  // Retorna as notas maiores ou igual que o limite em ordem crescente
    return filteredGrades
  }
}
