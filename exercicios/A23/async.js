//async = faz uma funcao retornar uma promise, faz essa funcao ser uma funcao assincrona
//await = faz o codigo esperar o resultado da promise antes de continuar

//await depende de async
//permite vc escrever um codigo assincrono de forma sincrona
//tudo que vem depois de um await é colocado em uma fila de eventos
// o async não tem os parametros "resolve" e "reject"

function correr(km){
    
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(`${km}kms percorridos`)
        }, 1500)     
    })
}
function descansar(){

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const descansarVouF = false
            if(descansarVouF){
               resolve("descansando") 
            }else{
                reject("voce não descansou")
            }
            
        }, 2000)
    })
}

function voltarpracasa(){

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("voce voltou pra casa")
        },5000)
    })
}
/*
async function exercicio(){

        const kmscorridos = await correr(5) //entrou na fila
        console.log(kmscorridos)

        const descanso = await descansar()
        console.log(descanso)

        const pracasa = await voltarpracasa()
        console.log(pracasa)

        console.log("parabéns")
}*/

exercicio()
//caso um desses seja false, usaremos try (o nome ja diz tudo), e catch que vai mostrar outro valor caso dê erro.

async function exercicio(){
    try{
           const kmscorridos = await correr(5) //entrou na fila
        console.log(kmscorridos)

        const descanso = await descansar()
        console.log(descanso)

        const pracasa = await voltarpracasa()
        console.log(pracasa)

        console.log("parabéns") 
    }
    catch(error){
        console.error(error)  
    }
}

//é uma forma mais limpa de escrever sem precisar usar um monte de .then

