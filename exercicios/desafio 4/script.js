let inicio = document.getElementById('inicio')
let fim = document.getElementById('fim')
let calcular = document.getElementById('calcular')
let resultado = document.getElementById('resultado')

calcular.addEventListener("click", () =>{
const parte1 = inicio.value.split(':')
let hora1 = Number(parte1[0])
let min1 = Number(parte1[1])

const parte2 = fim.value.split(':')
let hora2 = Number(parte2[0])
let min2 = Number(parte2[1])
    
let InicioMinutos = hora1 * 60 + min1
let FimMinutos = hora2 * 60 + min2
if(FimMinutos < InicioMinutos){
    FimMinutos += 1440
}

let horatrabalhada = FimMinutos - InicioMinutos
let cargahorariamax = 480
if(horatrabalhada > 480){
    console.log("positivado")
}else if( horatrabalhada == 480){
    console.log('Trabalho normal')
}else{
    console.log('negativado')
}

let saldo = horatrabalhada - cargahorariamax

let divisasaldo = 
let restosaldo = 

})






















