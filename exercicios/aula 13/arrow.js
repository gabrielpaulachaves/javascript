function subtracao(a, b){
    return a - b

}

subtracao(4, 2)

const somar2 = a => a + 2; 
            /*Nesse caso aqui, quando ela possui apenas um parametro (a exemplo, o aparâmetro a), vc não precisa colocar parênteses entre os parâmetros */

somar2(4)

console.log(subtracao(4, 2), somar2(4))

const diadomes = () => (new Date()).getDate();
      /*Quando colocamos esses parenteses entre o new date, significa que vc quer, daquela informação, acessar o .(qualquer coisa que vem depois, e nesse exemplo a data, e possui () no getdate pois está executando um método daquela informação(o new date))*/
/*Quando a função não pede parametro nenhum, apenas coloque parenteses vazio */

console.log(diadomes())

/*arrow function te permite já guardar aquela função em uma variável sem precisar escreve "function". E quando a função possui apenas uma instrução (a instrução de retorno), vc não precisa de return */
/*Diferencial da arrow function: quando uma função possui apenas uma instrução, e essa instrução é apenas de returno (return), vc pode usar arrow */

function superfuncao(a,b){
    let subtracao = a - b
    subtracao -= 2
    let dia = (new Date()).getDate()
    return dia;
}

const superfuncao2 = (a,b) => {
    let subtracao = a - b
    subtracao -= 2
    let dia = (new Date()).getDate()
    return dia; 
}

/*Nesse caso, nenhuma deles muda, vc decide qual usar */