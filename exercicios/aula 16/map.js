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

/*podemos simplificar esse codigo, quando a callback function possui apenas um return
ficaria assim
preco.map(precos => precos * 0.5)
*/

/*nesse exemplo aqui, só queremos mudar as propriedades "valor" */
let produtos = [
    {nome: "teclado", valor: 200, cor: "preto"},
    {nome: 'monitor', valor: 550, cor: 'cinza'},
    {nome: 'mouse', valor: 112, cor:'branco'},
    {nome: 'impressora', valor: 300, cor: 'preto'},
    {nome: 'headset', valor: 150, cor: 'preto'}
]
let desconto = produtos.map((produto)=>{
    return {
        ...produto,
        valor: produto.valor * 0.5
    }
})

console.log(produtos)
console.log(desconto)

/*Podemos tbm usar dessa forma para simplificar uma lista e nos trazer apenas os nomes, Exemplo: */
let nomeProd = produtos.map((produto)=>{
    return produto.nome
})
console.log(nomeProd)

/*Podemos adicionar mais propriedades ao objeto */
let categoriaProd = produtos.map((produto) =>{
    let categoria;
    if(produto.valor <= 120) categoria = "custo-beneficio";
    else if(produto.valor < 300) categoria = "mediano";
    else categoria = "caro";
    return {...produto, categoria }; /*esses ... serve para copiar o resto das propriedades */
})

console.log(categoriaProd)
/*Nesse exemplo acima, criamos nova propriedade pro objeto, e copiamos o resto usando o ... */


/*
    Resumindo map: ele cria novo array baseado no array original
*/
