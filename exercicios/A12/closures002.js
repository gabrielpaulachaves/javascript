
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

/*É guardado a função interna na variavel */

/*Executa → atualiza hp
Mas você não vê o valor retornado. */
jogador1()

/*Executa → atualiza hp
E mostra o valor retornado.*/
console.log(jogador1())


/*Resumo final da closure, quando criamos const jogador1 = vida("jogador 1"), a função vida() executa e cria um ambiente. Normalmente, quando a função termina, esse ambiente é apagado, porém, a função interna ainda está ali utilizando deste ambiente(utilizando as variaveis desse ambiente), então ele não pode ser apagado. O ambiente não é descartado  */
/*O ambiente é criado quando a função externa é criada, mas permanece quando alguem ainda lembra da função interna */


