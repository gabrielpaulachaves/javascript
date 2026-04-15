/*
    item = dados/informação no array
    index = posição dele (o indice)
    array = retorna o array inteiro
*/
//metodo para iterar elementos de uma array e executar uma funcao especifica para cada elemento

const usuarios =[
    {nome:'Diluc', poder:'pyro', genero:'M'},
    {nome:'Ayaka', poder:'cryo', genero:'F'},
    {nome:'Kinich', poder:'dendro', genero:'M'},
    {nome:'Flins', poder:'electro', genero:'M'},
    {nome:'Varka', poder:'anemo', genero:'M'}
]
                            /*Nesta ordem, o primeiro seleciona os dados, a segunda o indice, e o terceiro o array inteiro */
usuarios.forEach(function(item, index, array){
    if(item.genero =='F'){
        console.log(`A ${item.nome} é do elemento ${item.poder}`)
    }else{
        console.log(`O ${item.nome} é do elemento ${item.poder}`)
    }
})
//aqui, criamos uma funcao, e cada elemento foi passado como um parametro pra ela quando o forEach passou por cada um deles

let numeros = [1, 2, 3, 4, 5]

numeros.forEach(dobrar) //funcao sendo executada para cada elemento
numeros.forEach(cubo)   
numeros.forEach(contar)

//algo importante que percebi, se eu colocar esse foreach(cubo) logo depois do foreach(dobrar), o valor será diferente caso eu coloque ele sem o (dobrar) antes. Acontece que o valor acaba se atualizando. Ou seja, primeiro o (dobrar) é executado, e depois o (cubo) utiliza do valor que o (dobrar) deu e da outro valor.

function dobrar(elemento, index, array){
        array[index] = elemento * 2
}

function cubo(elemento, index, array){
      array[index] = Math.pow(elemento, 3) 
}

function contar(elemento){
    console.log(elemento)
}

let frutas = ["banana", "maçã", "laranja", "uva"];

frutas.forEach(caixaalta)
frutas.forEach(capitarletra)
frutas.forEach(mostrar)

function caixaalta(element, index, array){
   array[index] = element.toUpperCase();
}

function capitarletra(element, index, array){
    array[index] = element.charAt(0) + element.slice(1).toLowerCase()  //esse metodo pega a letra no indice escolhido
    // esse slice serve para recortar a partir do indice que a gente escolhe e ele retorna a partir desse indice e o resto que vem depois
    //no final, vai retornar a fruta com a letra inicial maiuscula e o resto minusculo
}

function mostrar(element){
    console.log(element)
}