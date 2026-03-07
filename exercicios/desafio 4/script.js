let calcular = document.getElementById('calcular')
let resultado = document.getElementById('resultado')

function BancoDeHoras(inicio, fim){
    this.inicio = inicio,
    this.fim = fim
}

BancoDeHoras.prototype.calculo = function(){
let iniciovalor = this.inicio.split(':')
let iniciohora = Number(iniciovalor[0])
let iniciomin = Number(iniciovalor[1])

let fimvalor = this.fim.split(':')
let fimhora = Number(fimvalor[0])
let fimmin = Number(fimvalor[1])

let iniciotempo = iniciohora * 60 + iniciomin
let fimtempo = fimhora * 60 + fimmin
if(fimtempo < iniciotempo){
    fimtempo += 1440
}
let horatrabalhada = fimtempo - iniciotempo
let horamaxima = 480

let saldo = horatrabalhada - horamaxima
let valor = Math.abs(saldo)

let divisasaldo = Math.floor(valor / 60)
let restosaldo = (valor % 60).toString().padStart(2, '0')

if(saldo > 0){
   resultado.innerHTML = `O funcionário trabalhou mais do que deveria,e agora possui +${divisasaldo}h${restosaldo}m em seu banco de horas`
}else if( saldo == 0){
    resultado.innerHTML = `trabalho normal`
}else{
    resultado.innerHTML = `O funcionário trabalhou menos do que deveria,e agora possui -${divisasaldo}h${restosaldo}m em seu banco de horas`
}
}


calcular.addEventListener('click', function(){  
let horario = new BancoDeHoras(document.getElementById('inicio').value, document.getElementById('fim').value)     
horario.calculo()
})

