let dadosZibai = {
    nome: "zibai",
    idade: 2000,
    local: "Liyue",
    visao: "Geo",
    arma: "espada"
}
console.log(`A personagem ${dadosZibai.nome} possui o elemento ${dadosZibai.visao}, é uma adeptus de ${dadosZibai.local}, utiliza ${dadosZibai.arma}, e tem ${dadosZibai.idade} anos aproximadamente.`)

/*Objetos são variáveis capazes de guardar varios valores dentro (esses valores são chamados de propriedades) */

let carro = {
    marca: "BMW",
    modelo: "M3",
    ano: 2030,
    placa: "AB123C",
    acelerar: function(){ console.log("vrum") },
    completo: function(){ 
        return `a marca é ${this.marca} e seu modelo é ${this.modelo}`
    }
}

carro.acelerar()

console.log(carro.completo())


