// object.keys("obj")
// object.values("obj")
// object.entries("obj")

//eles permitem criar um objeto iteravel(uma array) de um objeto já existente

let herdeiros = {
    Eren: "Titã de ataque",
    Reiner:  "titã blindado",
    Annie: "Titã femea",
    Armin: "Titã colossal",
    Peack: "titã carrosseria",
    Falco: "titã mandibula",
    Zeke: "titã bestial"
}


//sintaxe
let keys = Object.keys(herdeiros)
//keys irá me dar um array com o nome de todas as propriedades
console.log(keys)

let values = Object.values(herdeiros)
//irá me dar um array contendo apenas os valores das propriedades
console.log(values)

let entries = Object.entries(herdeiros)
//irá me dar um array com tudo do objeto, mas no entanto, nao serao separados, por exemplo, se eu escrever console.log(entries[2]), ele nao vai retornar apenas "Reiner", ele vai retornar ["Annie", "Titã femea"]

console.log(entries)

console.log(entries[4])

//além disso, podemos pegar o indice do indice, ou seja, se escolhemos o indice 4, ele possui 2 indices, o nome da propriedade e o valor da propriedade, ["Annie", "Titã femea"]. No entanto, se queremos escolher o indice exato desse indice, usamos:

console.log(entries[5][1])