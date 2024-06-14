const  readlineSycn = require(`readline-sycn`)



for (let segundos = 20;segundos >= 0 ;segundos = segundos -1) {
    if(segundos === 0){
  console.log("BOMMMMMM")
}
else if(segundos % 2 === 0){
    console.log("tik")
}
else{
    console.log("tak")
}
}