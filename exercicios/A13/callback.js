//usado para organizar uma operacao ddesincronizada
//usado com coisas que levam tempo para serem finalizadas, como ler um arquivo

//o sentido aqui é criar duas funcoes, e uma delas é parâmetro de outra
//no contexto de ler um arquivo, o js nao vai terminar de ler ele para continuar o codigo, ele vai continuar o codigo e quando terminar de ler o arquivo, ele envia

//callback vai garantir que o que vc quer que venha depois, de fato venha depois

//a funcao de parametro nao pode ter os ()
oi(fiqueaqui)
esperar()
tchau()

            //se referindo a funcao colocada ali encima dentro dos ()
function oi(callback){
    console.log(`oi`)
    callback()  //aqui sim colocar () para executar a funcao
}

function esperar(){
    console.log(`esperando`)
}

function fiqueaqui(){
    console.log("fiquei")
}

function tchau(){
    console.log("tchau")
}

//nesse caso, passamos uma funcao como argumento (funcao mostrar), o parametro callback recebe essa funcao, e quando usamos callback() executamos essa funcao que é passada. E o valor passado dentro da execucao callback() vai passar como parametro para a funcao mostrar.

somar(mostrar, 2, 7)

            //aqui eu criei a variavel callback, e logo depois coloquei ela para executar a funcao que ela vai receber, mesma coisa de fazer um const fn = mostrar;    fn()
function somar(callback, x, y){
    let resultado = x + y 
    callback(resultado)   
}

function mostrar(res){
    console.log(res)

}

