//vai retornar true ou false
//verifica se todos os elementos passam em uma condicao

let cadastro = [
    {nome: "João", idade: 17},
    {nome: "Marcela", idade:22},
    {nome: "Bruce", idade: 30},
    {nome: "Guts", idade: 18}
]

let ehMaior = cadastro.every(pessoa => 
    pessoa.idade >= 18
)
console.log(ehMaior)

let ehNum = cadastro.every(idade =>  typeof idade.idade == 'number')

console.log(ehNum)

