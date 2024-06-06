/*Atividade 4 (10 pontos)
 Encontre os 5 erros
 - Se inserir erros -2 pontos por erro
 - indique as linhas que estão com problemas no código

Aplicação abaixo recebe 10 números, armazena em um vetor
e ordene esses 10 números crescente utilizando for
*/
console.clear();
var teclado = require("Prompt-sync")();
var numeros = new Array();
for (var x = 0; x <= 9; x++) {
    numeros[x] = parseInt(teclado("Digite o n\u00FAmero do \u00EDndice ".concat(x, " do Array: ")));
}
for (var z = 0; z <= 9; z++) {
    for (var y = z + 1; y <= 9; y++) {
        if (numeros[z] > numeros[y]) {
            var temporario = numeros[z];
            numeros[z] = numeros[y];
            numeros[y] = temporario;
        }
    }
}
console.log("O Array em ordem crescente ".concat(numeros));
