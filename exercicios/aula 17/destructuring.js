//forma de passar valores de um array ou objeto de forma mais facil para variaveis

//fazendo troca de valores entre variaveis

let a = 10;
let b = 20;

[a, b] = [b, a];

console.log(a);
console.log(b);

//trocar dois valores em um array

const cores = ['vermelho', 'verde', 'azul', 'preto', 'branco'];

[cores[0], cores[4]] = [cores[4], cores[0]];

console.log(cores)
cores.forEach((cor, index) => {
    console.log(`${cor} pertence ao índice ${index}`)
});

//colocando os valores em variaveis

const cor = ['vermelho', 'verde', 'azul', 'preto', 'branco'];

const [primeiracor, segundacor, terceiracor, ...resto] = cor;

console.log(primeiracor)
console.log(segundacor)
console.log(terceiracor)
console.log(resto)

//extraindo valores de objetos

const pessoa1 = {
    nome: 'Eren',
    sobrenome: 'yeager',
    idade: 19,
    tita: 'titã de ataque'
};

const pessoa2 = {
    nome: 'Mikasa',
    sobrenome: 'akerman',
    idade: 19
};

const {nome, sobrenome, idade, tita} = pessoa1; /*o nome da variavel tem que ser o mesmo nome da propriedade */
//mas da pra mudar o nome da variavel
const {nome: Nome, sobrenome: Sobrenome, idade: Idade, Tita='sem titã' } = pessoa2;

console.log(nome);
console.log(sobrenome);
console.log(idade);
console.log(tita);

console.log(Nome);
console.log(Sobrenome);
console.log(Idade);
console.log(Tita);

// destructuring em parametros de função

function display({nome, sobrenome, idade, titan='matadora de titans'}){
    console.log(`${nome} é da família ${sobrenome}, tem ${idade} anos e é o(a) ${titan}`)
}

display(pessoa2)