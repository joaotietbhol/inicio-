///function

function imprimirOlamundo(){
    console.log("ola mundo")

}
imprimirOlamundo


function calcularArea(altura , largura){
    const area = altura * largura
    console.log(area)
}

calcularArea(5,6)
calcularArea(5,8)


///escopo

const num1 = 10

function Fun( ){

const num2 = 5

    function fun2(){
console.log(num2)
const num3 = 2
    }
}



//retorno

function calcularArea1(altura , largura){
    const area = altura * largura
    return area

}
const area = calcularArea1(2 * 7)
console.log(area)