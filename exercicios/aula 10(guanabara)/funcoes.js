let res = parimp(42)

function parimp(n){
    if(n%2 == 0){
        return 'par'   /*usando return pois o resultado vai para um parâmetro real */
    }else{
        return 'ímpar'
    }

}


console.log(res)
console.log(parimp(204))  /*pode ser escrito assim também */