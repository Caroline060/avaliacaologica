/* Atividade 1 (30 pontos)
Faça um programa que tenha 3 funções:

1º Função recebe 5 números e retorne a média desses números (10 pontos)

2º Função recebe a média e define se esse número é PAR ou IMPAR,
o retorno dessa função deve ser P para par e I para impar (10 pontos)

3º Função principal aonde: (10 pontos)
- o usuário digita os 5 números
- aonde é chamada a função que retorna a média
- aonde é chamada a função que retorna P ou I
- nessa função é exibido a mensagem com o valor médio e se o número
é par ou impar
*/
var teclado = require("prompt-sync")();
function mediaCalc(n1, n2, n3, n4, n5) {
    return (n1 + n2 + n3 + n4 + n5) / 5;
}
function verificar(mediaCalc) {
    console.log("Verificando se ".concat(mediaCalc, " \u00E9 \u00EDmpar ou par..."));
    console.log("Se o valor for par -> P; caso seja \u00EDmpar -> I");
    var resto = mediaCalc % 2;
    if (resto == 0) {
        return "P";
    }
    else {
        return "I";
    }
}
function principal() {
    console.clear;
    var teclado = require("prompt-sync")();
    var n1 = parseInt(teclado("Digite o 1\u00BA n\u00FAmero: "));
    var n2 = parseInt(teclado("Digite o 2\u00BA n\u00FAmero: "));
    var n3 = parseInt(teclado("Digite o 3\u00BA n\u00FAmero: "));
    var n4 = parseInt(teclado("Digite o 4\u00BA n\u00FAmero: "));
    var n5 = parseInt(teclado("Digite o 5\u00BA n\u00FAmero: "));
    var media = mediaCalc(n1, n2, n3, n4, n5);
    var verificacao = verificar(media);
    console.log();
    console.log("O valor da m\u00E9dia dentre os n\u00FAmeros \u00E9 ".concat(media, ".\n   Portanto, ").concat(media, ", \u00E9 um n\u00FAmero ").concat(verificacao, "."));
}
principal();
