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

function verificarMaior (n1:number, n2:number, n3:number): number{
    if(n1 > n2 && n1 > n3){
        return n1;
    }
    else if(n2 > n1 && n2 > n3){
        return n2;
    }
    else if(n3 > n1 && n3 > n2){
        return n3;
    }
    else{
        return 0;

    }
}


function verificarMenor (n1:number, n2:number, n3:number): number{
    if(n1 < n2 && n1 < n3){
        return n1;
    }
    else if(n2 < n1 && n2 < n3){
        return n2;

    }
    else if(n3 < n1 && n3 < n2){
        return n3;
    }
    else{
        return 0;
    }
   
}

function calcMedia (numeroMaior: number, numeroMenor: number) : number {
    return (numeroMaior + numeroMenor )/2;

}


function principal (): void {
    const teclado  = require(`prompt-sync`)();

    let n1: number = parseInt(teclado(`Digite o primeiro numero: `));
    let n2: number = parseInt(teclado(`Digite o segundo numero: `));
    let n3: number = parseInt(teclado(`Digite o terceiro numero: `));

    let numeroMaior: number = verificarMaior(n1, n2, n3);
    let numeroMenor: number = verificarMenor(n1, n2, n3);
    let media: number = calcMedia(numeroMaior,numeroMenor);

    console.log(`O numero maior é ${numeroMaior}.`);
    console.log(`O número menor é ${numeroMenor}.`);
    console.log(`A média entre o número maior e menor é ${media}`);
}

principal();