//representado por ...
//junta os elementos separados e transforma em array
//se estão juntos e quer expandir, use ... (spread)  se estçao separados e quer juntar em uma unica array, use ... (rest)

//nesse exemplo, conseguimos colocar varios argumentos mesmo tendo apenas 1 parametro, e o que me permitiu isso foi o ...
let comida1 = 'salame'
let comida2 = 'lasanha'
let comida3 = 'macarrão'
let comida4 = 'frango'

                //aqui o ... é parametro
const juntar = (...comidas) => {
    console.log(comidas)
}

juntar(comida1, comida2, comida3, comida4);

//é possivel juntar elementos em uma array com rest 