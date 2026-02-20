/*Receb uma função por argumento ou devolve outra função. É uma função que funciona com base em outras funções.
exemplos: map, filter, reduce */

function login(n){
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
diluc('m')
