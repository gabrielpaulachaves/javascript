/*MAP, FILTER e REDUCE */

/*MAP*/
/*sintaxe do map:   'array'.map(('array nova')=>{
    return 'array' 'operação que queremos'*/
/*Podemos colocar ele em uma variavel, como no exemplo a seguir */

let preco = [6, 6, 1, 16, 43, 82]
let precoComDesconto = preco.map((precos)=>{
    return precos * 0.5
})

console.log(preco)
console.log(precoComDesconto)






