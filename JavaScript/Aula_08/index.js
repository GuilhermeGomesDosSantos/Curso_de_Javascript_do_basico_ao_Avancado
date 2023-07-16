let nome = 'Guilherme';
let sobrenome = 'Gomes';
const idade = 20;
const peso = 95;
const alturaEmM = 1.8
let indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
let anoNascimento = 2023 - 20;

// console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg')
// console.log('tem', alturaEmM, 'de altura e seu IMC é de',imc.toFixed(2))
// console.log(nome,'nasceu em', anoNascimento);

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal.toFixed(2)}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);