const objeto = {
    a: 1,
    b:  2,
    c:  3
}

    //funcao capaz de adicionar propriedade ao objeto
function adicionarprop(objeto, prop, valor){
    objeto[prop] = valor  //aqui, o [] pega o valor que queremos passar e adiciona no objeto
    objeto.prop = valor //aqui, ele adiciona uma propriedade com o nome que vem depois do . Essa é uma forma mais manual de criar (e com codigos grandes, isso seria muito cansativo)
}

//uma dica: use . quando vc sabe o nome da propriedade, e [] quando vem de uma variavel

//outro exemplo
    let comidafavorita = "feijão"

const objeto2 = {
    a: 1,
    b:  2,
    c:  3,
    [comidafavorita]: "abacaxi" //aqui, o nome da propriedade nao será "comidafavorita", e sim "feijão"
}

for(let i in objeto2){
    console.log(i)
}