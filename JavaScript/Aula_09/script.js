// var nome = 'Guilherme';//Declarando uma variavel
// var nome = 'Gui';//redeclarando uma variavel, isso vai sobreescrever o valor anterior
// console.log(nome);


nome = 'Guilherme';//Irá criar uma variavel gloval
var nome = 'Gui';//redeclarando uma variavel, isso vai sobreescrever o valor anterior
console.log(nome);

/*
As declarações de var tem escopo global ou de função, enquanto as declarações de let e de const têm escopo de bloco.
Variáveis de var podem ser atualizadas e declaradas novamente dentro de seu escopo.
As variáveis de let podem ser atualizadas, mas não podem ser declaradas novamente.
Em resumo, "var" tem escopo de função ou escopo global, enquanto "let" tem escopo de bloco.
A preferência atual é usar "let" em vez de "var" na maioria dos casos, pois o escopo de bloco é mais restrito e pode evitar problemas de vazamento de variáveis ou comportamentos inesperados.
*/