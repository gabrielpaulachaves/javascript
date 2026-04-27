//separa arrays e string
// tambem representado por ...
//ele expande o valor da array

let num = [1, 3, 5, 9, 6]

//nesse exemplo, dividimos os valores da array, e depois disso o Math. consegue pegar qual o maior valor. Pois sem separar, vai dar erro
let maximo = Math.max(...num)
                //max aqui vai trazer o maior valor, e o min, o minimo
console.log(maximo)

//separando string

let nome = 'Armin Alert'

let separar = [...nome].join(" não junte ")
    //aqui, ele vai separar TODAS as letras, mas o join vai juntar tudo de novo igual a antes SE eu nao colocar nada dentro dos "". Mas se eu colocar qualquer coisa, eles vao se juntar com esse caracter(ou frase) escolhido

console.log(separar)

//podemos tbm usar para combinar arrays

let frutas = ['uva', 'pera', 'abacaxi']
let legumes = ['batata', 'cenoura', 'xuxu']

let comidas = [...frutas, ...legumes]

console.log(comidas)