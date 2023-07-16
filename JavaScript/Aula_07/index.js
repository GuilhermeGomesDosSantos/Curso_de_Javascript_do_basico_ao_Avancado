/*
Não podemos criar constantes com palavreas reservadas
Constantes precisam ter nomes significativos
Não pode começar o nome de uma constante com um número
Não podem conter espaços ou traços
Utilizamos camelCase
Case-sensitive
Não pdoemos modificar o valor de uma constante
NÃO UTILIZE VAR, UTILIZE CONST.
*/

const nome = 'Gui';
// console.log(nome);


// String = Text | Number = Número
const primeiroNumero = '5'; // Ao realizar soma irá ocorrer uma concatenação
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultaDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;
// console.log(resultaDuplicado);

/*
console.log(primeiroNumero);
console.log(resultaDuplicado);
console.log(resultadoTriplicado);
*/

// console.log(typeof primeiroNumero);
// console.log(typeof nome);


console.log(typeof primeiroNumero + segundoNumero);

