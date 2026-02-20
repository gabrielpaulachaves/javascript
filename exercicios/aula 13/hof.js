/*Recebe uma função por argumento ou devolve outra função. É uma função que funciona com base em outras funções.
exemplos: map, filter, reduce */

/*function login(n){
    let senha = []

   return function(genero){
        for(let i = 0; i<1000000;i++){
            senha.push(i)
        }
        if(genero === 'm'){
       return console.log(`Acesso autorizado ao ${n}`)
        }else{
          return console.log(`Acesso autorizado à ${n}`)  
        }
    }
}

let zibai = login("Zibai")
let diluc = login("Diluc")

zibai('f')
diluc('m')*/

const daracesso = (nome) => console.log(`Acesso autorizado para ${nome}`)

function autorizar (verificar){
    let array = []
    for(let i = 0; i<verificar; i++){
        array.push(i)
    }
    return true
}

function letperson(person, fn){
   if(person.level == 'admin'){
    fn(5000000)
   }else if(person.level == 'user'){
    fn(1000000)
   }
return daracesso(person.nome)
}

letperson({level: 'admin', nome: 'redpill'}, autorizar)

