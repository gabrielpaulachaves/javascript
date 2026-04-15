    /*Esse n se refere ao valor que iremos invocar, ou seja, o valor lá de fora substituirá esse n do human(n), que irá colocar um valor na const e todo o resto será influenciado */
function human(n){
    const name = n
    function digaOi(){
        console.log(`Olá, meu nome é ${name}, a adeptus do cavalo branco de liyue`)
    }
    function comoSente(){
        console.log(`${name} está se sentindo bem.... um pouco cansada pois ficou anos descansando em outra dimensão...`)
    }
    digaOi()
    comoSente()
}
/*Ambas as funções digaOi() e comoSente() possuem acesso a const name pois estão em um escopo superior */
human('Zibai')

/*Toda vez que chamarmos a const skirk, será executada essa função human('skirk'), que irá colocar o valor recebido dentro do n lá na criação e passar pra const name, e todo o resto será influenciado */
const skirk = human('skirk')

console.log(skirk)

/*6:52 */