// Importa a classe Exam do arquivo 'exam.js'
import { Exam } from './exam.js';

// Define os pesos das questões
const weight = { q1: 0.5, q2: 1, q3: 0.5, q4: 1, q5: 2, q6: 0.5, q7: 1, q8: 0.5, q9: 1, q10: 2 };

// Define as respostas corretas e o autor das respostas
const answer = {
  person: 'Professor',
  values: { q1: 'e', q2: 'b', q3: 'd', q4: 'c', q5: 'a', q6: 'e', q7: 'b', q8: 'd', q9: 'c', q10: 'a' },
};

// Cria um novo exame com as respostas corretas e os pesos das questões
const exam = new Exam(answer, weight);

// Adiciona um exame de um aluno chamado Aline
exam.add({
  student: 'Aline',
  values: { q1: 'e', q2: 'b', q3: 'd', q4: 'c', q5: 'b', q6: 'e', q7: 'b', q8: 'd', q9: 'c', q10: 'a' },
});

// Adiciona um exame de um aluno chamado Ana Luisa
exam.add({
  student: 'Ana Luisa',
  values: { q1: 'e', q2: 'b', q3: 'a', q4: 'c', q5: 'b', q6: 'e', q7: 'b', q8: 'd', q9: 'c', q10: 'a' },
});

// Adiciona um exame de um aluno chamado Eduardo
exam.add({
  student: 'Eduardo',
  values: { q1: 'd', q2: 'b', q3: 'd', q4: 'c', q5: 'a', q6: 'e', q7: 'b', q8: 'd', q9: 'b', q10: 'c' },
});

// Adiciona um exame de um aluno chamado Laura
exam.add({
  student: 'Laura',
  values: { q1: 'e', q2: 'c', q3: 'd', q4: 'c', q5: 'a', q6: 'e', q7: 'b', q8: 'd', q9: 'c', q10: 'b' },
});

// Adiciona um exame de um aluno chamado Miguel
exam.add({
  student: 'Miguel',
  values: { q1: 'e', q2: 'c', q3: 'e', q4: 'c', q5: 'a', q6: 'e', q7: 'd', q8: 'd', q9: 'c', q10: 'c' },
});

// Adiciona um exame de um aluno chamado Pedro
exam.add({
  student: 'Pedro',
  values: { q1: 'e', q2: 'b', q3: 'd', q4: 'c', q5: 'a', q6: 'e', q7: 'b', q8: 'd', q9: 'c', q10: 'a' },
});

// Adiciona um exame de um aluno chamado Rute
exam.add({
  student: 'Rute',
  values: { q1: 'd', q2: 'c', q3: 'd', q4: 'c', q5: 'b', q6: 'd', q7: 'b', q8: 'c', q9: 'c', q10: 'c' },
});

// Encontra e imprime as notas iguais ou maiores que 7
console.log('As notas iguais ou maiores que 7 são: ', exam.gt(7)); // Deve imprimir: [7, 7.5, 8, 10]
// Encontra e imprime as notas menores que 7
console.log('As notas abaixo de 7 são: ', exam.lt(7)); // Deve imprimir: [3.5, 5.5, 6.5]
// Encontra e imprime a menor nota dos exames
console.log('A menor nota da avaliação é: ', exam.min()[0]); // Deve imprimir: 3.5
// Encontra e imprime a maior nota dos exames
console.log('A maior nota da avalaiação é: ', exam.max()[0]); // Deve imprimir: 10
// Calcula e imprime a média das notas dos exames
console.log('A média da avaliação é: ', exam.avg()); // Deve imprimir: 6.86