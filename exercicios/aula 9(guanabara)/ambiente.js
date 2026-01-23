let auto = [2, 4, 6, 8, 10]

console.log(auto)

for(var c=0;c<=4;c++){
    console.log(auto[c])
}
if(c==5){
    auto.push(12)
    console.log(auto)
}

console.log(`O vetor possui ${auto.length} elementos, sendo eles: `)
console.log(`O primeiro valor do vetor é ${auto[0]}`)
console.log(`O segundo valor do vetor é ${auto[1]}`)
console.log(`O terceiro valor do vetor é ${auto[2]}`)
console.log(`O quarto valor do vetor é ${auto[3]}`)
console.log(`O quinto valor do vetor é ${auto[4]}`)
console.log(`O sexto valor do vetor é ${auto[5]}`)

for(c=0;c<auto.length;c++){    /*pensando no indice */
    console.log(`A posição ${c} tem o valor ${auto[c]}`)    /*pensando no elemento */
}
for(c in auto){  /*FOR = para cada posição IN = na: para cada posição dentro do vetor:  */
    console.log(`Usando for e in: ${auto[c]}`)
}

/*Buscando valores dentro de arrays */

console.log(`O valor escolhido, número 10, está na posição: ${auto.indexOf(10)}`)
if(c == -1){
    console.log("Lamento, mas o valor não existe!")
}



