/*
    item = dados/informação no array
    index = posição dele (o indice)
    array = retorna o array inteiro
*/

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