
function vida(n){
    let hp = 3
    let jogador = n
    return function tomardano(){
        if(hp > 0){
            hp--
        console.log(`${jogador} tomou 1 HIT, agora ele possui ${hp} pontos de vida`)
        
        if(hp==0){
            console.log(`game over`)
        }
    }else{
            console.log(`${jogador} já foi derrotado`)
        }
        return hp
        }
}
   



const jogador1 = vida("jogador 1")
const jogador2 = vida("jogador 2")

jogador1()
jogador1()
jogador1()
jogador1()
jogador2()
jogador2()



