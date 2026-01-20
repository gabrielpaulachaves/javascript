
let c = 10;


while(c > 0){
    console.log("Contagem regressiva para lançamento em: ", c) 
    c-- 
}
if(c == 0){
    console.log(c)
    console.log("Bomba lançada!")
}

let pizza = 8

do{
    console.log(`Há ${pizza} fatias de pizza, comi uma fatia`)
     pizza-- 
    console.log(`Agora existem só ${pizza} fatias de pizza`)
}while(pizza > 0)
if(pizza == 0){
    console.log("As fatias acabaram!")
}

/*do-while executa o bloco e depois verifica a condição, garantindo pelo menos uma execução, já o while ele verifica a condição primeiro antes de executar o bloco */















