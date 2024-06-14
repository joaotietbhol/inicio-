const readlineSync = require('readline-sync');

let i = 0;
let soma = 0;
while (i < 5) {
  const resposta = Number(readlineSync.question(`Digite o número ${i + 1}: `));
  soma += resposta;
  i++;

  soma = soma + resposta
console.log(`A soma dos números é: ${soma}`);


}


