let produtos = [
    {nome: "teclado", valor: 200, cor: "preto", emloja: true},
    {nome: 'monitor', valor: 550, cor: 'cinza', emloja: false},
    {nome: 'mouse', valor: 112, cor:'branco', emloja: true},
    {nome: 'impressora', valor: 300, cor: 'preto', emloja: true},
    {nome: 'headset', valor: 150, cor: 'preto', emloja: false}
]

let total = produtos.filter(produto => produto.emloja).map(produto => produto.valor * 0.5).reduce((acc, atual)=>{
    return acc + atual
}, 0)

console.log(total)