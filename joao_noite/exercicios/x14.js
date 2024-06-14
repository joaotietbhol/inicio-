// tabuada 7

let num = 0
const num2 = 4

while (num < 11) {
    console.log(num2 * num);
    num = num + 1;
}

//2

const numeros  = [10, 11, 12, 14, 13]

    let maiornumero = 0 
    for (let i = 0; i < numeros.length; i++ ) {
            let numeroatual = numeros[i];

            if(numeroatual >= maiornumero){
                maiornumero = numeroatual;
            }
        }
        console.log(`o maior numeor do array é ${maiornumero}`)


//3

const frase = ["eu" , "gosto" , "de" , "livros"]

let resultado = ""

for (let palavra of frase) {
 resultado += palavra;
}
    
console.log(resultado)

//4

