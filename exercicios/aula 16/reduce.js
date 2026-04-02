/*Transforma uma lista de valores em apenas uma unica lista de valor */
/*funciona como um ForEach, a diferença é que o foreach apenas percorre pelos elementos, já o reduce percorre pelos elementos e obtem um resultado final */
/*reduce itera */

let valores = [4,5,42,12,64,55]

/* 
no reduce, o primeiro parâmetro da função é o acumulador (resultado acumulado até aquele momento).
o segundo parâmetro é o elemento atual do array na iteração.
os nomes não importam, o que importa é a ordem dos parâmetros.
*/
let valortotal = valores.reduce((total, valoratual) =>{
    return total + valoratual
}, 0) /*é recomendado colocar um valor inicializador, que nesse caso é o 0 */
console.log(valortotal)


/*reduce é a mais poderosa entre os tres, um exemplo bom é "filtrar" a quantidade de valores iguais que existe em uma propriedade, vejamos*/
let produtos = [
    {nome: "teclado", valor: 200, cor: "preto"},
    {nome: 'monitor', valor: 550, cor: 'cinza'},
    {nome: 'mouse', valor: 112, cor:'branco'},
    {nome: 'impressora', valor: 300, cor: 'preto'},
    {nome: 'headset', valor: 150, cor: 'preto'}
]
/**
 Nesse exemplo que estou fazendo, estou acessando uma propriedade dinamica do objeto usando contador[atual.cor], onde o contador é o objeto e os [] é a forma de acessar uma propriedade do objeto, usaremos o parametro atual que representa o valor da posição de onde estamos.
 */
/*o contador[] é uma forma diferente de acessar as propriedades dos objetos */
let numcorprod = produtos.reduce((contador, atual) =>{
    if(contador[atual.cor]){ 
        contador[atual.cor]++
    }else{
        contador[atual.cor] = 1
    }
    return contador
/*Nesse exemplo é o seguinte
SE a cor atual (a posição onde estamos) é verdadeira(ou seja, se já existe uma propriedade com essa cor), entao adicione um a mais para ela, SENAO, adicione o valor 1 pra ela
*/
/*Ele irá passar por cada objeto e verificar a cor */
}, {})
/*usando {} a gente começa com objeto, pois nesse array tem objetos, nao numeros como o exemplo anterior */
/*o contador é o objeto parcial, ou seja, o inicial definido lá embaixo pelo {}, o [] é uma forma de acessar a propriedade desse objeto que estamos, e o atual é o valor atual daquela array que estamos Entao se ja estamos no segundo objeto, o contador é objeto anterior ainda e o atual é o objeto atual nessa fase, sendo o segundo */
console.log(numcorprod)

let somavalor = produtos.reduce((contador, atual) =>{
    return contador + atual.valor;
}, 0);

console.log(somavalor)

let palavra = ['olá',', ','mundo!']

let juntarpalavra = palavra.reduce((resultado, palavraatual)=>{
    return resultado + palavraatual
},'')
console.log(juntarpalavra)


