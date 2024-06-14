const valores = [`pedra`,`papel`,`tesoura`]
let resposta
do{
console.log("vamos joga! escolha sua arma \npedra(0), \npapel(1), \ntesoura(2)")
let jogador = Number(prompt(`faça sua escolha`))

jogador = valores[jogador]

let bot = Math.floor(Math.random()*3)
bot = valores[bot]

console.log("voce escolheu"+jogador+"\nseu adiversario escolheu"+bot)

if(jogador===bot){
    console.log("empate")
}else if((jogador === 'pedra'&&bot==='tesoura')||(jogador==='papel'&&bot==='pedra')||(jogador ==='tesoura'&&bot==='papel')){
    console.log("voce venceu")
}else{
    console.log("perdeu")
}
resposta = prompt ("jogue denovo")

resposta = resposta.toUpperCase()

}while(resposta ==='S')

