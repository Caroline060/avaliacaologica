/* Atividade 2 - (40 pontos)
Crie um programa que tenha 4 funções:

1º Função recebe 3 números e retorna o número maior (10 pontos)

2º Função recebe 3 números e retorna o número menor (10 pontos)

3º Função recebe o valor maior e o valor menor e retorna
a média desses números (10 pontos)

4º Função (principal) deve: (10 pontos)
- receber os três valores digitados
- receber o retorno do valor maior
- receber o retorno do valor menor
- receber a média do valor maior e menor
- exibir o número maior, o número menor e a média
*/
function verificarMaior(n1, n2, n3) {
    if (n1 > n2 && n1 > n3) {
        return n1;
    }
    else if (n2 > n1 && n2 > n3) {
        return n2;
    }
    else if (n3 > n1 && n3 > n2) {
        return n3;
    }
    else {
        return 0;
    }
}
function verificarMenor(n1, n2, n3) {
    if (n1 < n2 && n1 < n3) {
        return n1;
    }
    else if (n2 < n1 && n2 < n3) {
        return n2;
    }
    else if (n3 < n1 && n3 < n2) {
        return n3;
    }
    else {
        return 0;
    }
}
function calcMedia(numeroMaior, numeroMenor) {
    return (numeroMaior + numeroMenor) / 2;
}
function principal() {
    var teclado = require("prompt-sync")();
    var n1 = parseInt(teclado("Digite o primeiro numero: "));
    var n2 = parseInt(teclado("Digite o segundo numero: "));
    var n3 = parseInt(teclado("Digite o terceiro numero: "));
    var numeroMaior = verificarMaior(n1, n2, n3);
    var numeroMenor = verificarMenor(n1, n2, n3);
    var media = calcMedia(numeroMaior, numeroMenor);
    console.log("O numero maior \u00E9 ".concat(numeroMaior, "."));
    console.log("O n\u00FAmero menor \u00E9 ".concat(numeroMenor, "."));
    console.log("A m\u00E9dia entre o n\u00FAmero maior e menor \u00E9 ".concat(media));
}
principal();
