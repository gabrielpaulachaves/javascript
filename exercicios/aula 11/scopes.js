
/*Aqui estamos usando variáveis locais, pois elas só funcionam a partir do "nível" que elas estão ou superior, caso algo de fora esteja chamando, não vai funcionar, Por exemplo um console.log fora da função da variavel que queremos chamar */



function funcao1(){
    let x = 1;
    console.log(x)

}
function funcao2(){
    let x = 2;                      
    console.log(x)
}

/*Exemplo que daria errado: */

/*Aqui daria erro pois, devido ao escopo, a let X só irá funcionar dentro do escopo dela ou um escopo superior (um outro escopo criado dentro do escopo de onde ela se encontra). Ou seja, com esse exemplo, podemos ver que a funcao1 Não consegue "ver" a let y, pois está em outro escopo de mesmo nível */
function funcao1(){
    let x = 1;
    console.log(y)

}
function funcao2(){
    let y = 2;                      
    console.log(x)
}

/*fora do escopo (escopo global) */

/*nesse exemplo, é possivel ver a let, pois ela está na primeira camada de escopo, ou seja, qualquer um pode ver ela, até mesmo o alto nível de escopo. Ou seja, a regra é a seguinte: Quem pode ver? o escopo do mesmo nível ou superior, abaixo disso não consegue ver */
    let x = 1;

    funcao1()

function funcao1(){
    console.log(y)

}
function funcao2(){                
    console.log(x)
}

/*No uso profissional, não é recomendado usar um escopo global, pois se houver outra variável local com o mesmo nome de uma variável global, a local será a prioridade.*/