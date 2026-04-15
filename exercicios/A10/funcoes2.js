/* 
let n1 = soma(3)
let n2 = soma(6)                         forma errada que eu escrevi 

function soma(n1, n2){
    return n1 + n2

}

console.log(soma(n1))
*/

/*Forma certa corrigida */

let n1 = soma(3, 6)  /*Ou qualquer outro valor, tipo (9, 20) */

function soma(a=0, b=0){/*colocando =0, a gente evita o problema "NaN", que ocorre quando nao colocamos um valor em uma das variaveis*/
    return a + b
}

console.log(n1)   /*ou*/    
console.log(soma(2, 47)) /*sem criar a let ali encima */
