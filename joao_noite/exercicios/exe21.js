//numeros de 1 a 100

let i = 1

while (i <= 100) {
    console.log(i)
    i = i + 1;
}

//2

for (let i = 1; i <= 200; i++) {
    if (i % 2 === 0) {
        console.log(`par  ${i}`)
    }
}


//crie um laço que imprima a tabuada do 10



let num2 = 5
let num = 0


while (num <= 10) {
    console.log(`${num}  ${num2 * num}`)

num = num + 1
}



const numeros = [10, 20, 30, 40, 50, 60];

for (let numero of numeros)
    console.log(`exercicio 4:     ${numero}`);
