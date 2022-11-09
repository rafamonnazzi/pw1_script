const numeros = new Array (15, 13, 16, 22, 35 ,87, 64, 19)

function dataComNumeros(){
    numeros.push(86)
 console.log(numeros.sort(function(a, b){return a-b}))
}
let html = "";
numeros.forEach(function(valor, indice, array){
    html += valor + "posicao |" + indice + "|" 
})

console.log(html)
