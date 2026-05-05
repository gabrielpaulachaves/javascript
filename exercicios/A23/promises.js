//promises = objeto que mexe com operacoes assincronos
//assincrono = vc espera por algo e enquanto isso vai fazendo o resto que tem que ser feito

//const { reject } = require("async");

//new promises((resolve, reject) => {codigo assincrono})

/* essa é uma forma repetitiva de fazer codigos assincronos

function cachorro(callback){

    setTimeout(()=>{
        console.log("cachorro caminhado com sucesso");
        callback()
    }, 2000)
}

function cozinha(callback){
    setTimeout(()=>{
        console.log("cozinha limpa");
        callback()
    },5000)
}
function lixo(callback){
    setTimeout(()=>{
        console.log("lixo levado");
        callback()
    }, 500)
}

cachorro(()=> {
    cozinha(()=>{
        lixo(()=> {console.log("tudo feito")})
    })
})*/

//Essa é a forma de executar codigos essincronos

function cachorro(){
            //passa a linha de codigo pra dentro do promise, entao ele vai retornar se foi resolvido ou nao. E com isso, podemos tirar as callbacks
   return new Promise((resolve, reject)=>{
     setTimeout(()=>{
        const cachorrocaminhado = true;
        if(cachorrocaminhado){
            resolve("cachorro levado à rua com sucesso")
        }else{
            reject("o cachorro ainda nao foi para a rua")
        }
        ; //se quiser mostrar uma mensagem quando der como resolvido, basta trocar o console.log por resolve
    }, 2000)
   })
}

function cozinha(){
 
  return new Promise ((resolve, reject)=>{
           setTimeout(()=>{
            const cozinhalimpa = false;

            if(cozinhalimpa){
                resolve("cozinha limpa");
            }else{
                reject("cozinha nao foi limpa")
            }       
    },5000)
    })
}
function lixo(){
 
   return new Promise((resolve, reject)=>{
       setTimeout(()=>{
        const lixolevado = true;

        if(lixolevado){
            resolve("lixo levado");
        }else{
            reject("o lixo nao foi levado")
        }     
     }, 1500)
   })
}

//agora para chamar na ordem
            //o then retorna o resultado daquela promise. a promise comeca como pendente, e retorna como resolvido ou rejeitado depois do tempo adicionado
            //se o codigo foi rejeitado, use .catch
            //se esse erro foi em uma promise que ainda tem outras promises pra vir, o resto das promises nao serao executadas
cachorro().then(value => {console.log(value); return cozinha()})
          .then(value => {console.log(value); return lixo()})
          .then(value => {console.log(value)})
          .catch(error => {console.log(error)})

          //na promise, nao é obrigatorio criar um settimeout, pode ser qualquer outro codigo assincrono 
          //promise guarda o resultado de algo assincrono, ou seja, vc vai fazendo o resto enquanto esse resultado ainda nao chega. Ou seja, o codigo nao vai esperar esse codigo assincrono chegar
            //o then espera o codigo sincrono (codigo seguido em ordem) terminar para ser executado
//exemplo

function falaroi(){
    return new Promise((resolve, reject)=>{
        resolve("Oi")
    })
}
console.log("tchau")
console.log("voltei")
console.log("tchau de novo kkkkkkk")
                //esses parametros serao sempre o valor da promise
falaroi().then(resultado => console.log(resultado))

//perceba que o tchau e voltei e tchau de novo foram executados antes da promise, mesmo a promise nao tendo tempo