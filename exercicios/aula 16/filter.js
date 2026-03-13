let numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]

numeros.filter(n => n % 2 === 0)

/*Nesse exemplo, todo numero, onde em sua divisao por 2 for igual a 0, ele será verdadeiro */

let produtos = [
    {nome: "teclado", valor: 200, cor: "preto"},
    {nome: 'monitor', valor: 550, cor: 'cinza'},
    {nome: 'mouse', valor: 112, cor:'branco'},
    {nome: 'impressora', valor: 300, cor: 'preto'},
    {nome: 'headset', valor: 150, cor: 'preto'}
]
let valorproduto = produtos.filter(produto => produto.valor < 200)
let corproduto = produtos.filter(produto => produto.cor == 'preto')
let nomeproduto = produtos.filter(produto => produto.nome.includes('or')) /*esse .includes basicamente vai filtrar por propriedades com algumas caracteres que fazem aquela combinação que colocamos,
No nosso caso, irá aparecer monitOR e impressORa
*/
let valorycorprod = produtos.filter(produto => produto.valor >= 200  && produto.cor === "preto")

console.log(valorproduto)
console.log(corproduto)
console.log(nomeproduto)
console.log(valorycorprod)



