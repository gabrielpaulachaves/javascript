function retornaralgo(){

   return function(){
        return "!"

    }
}

let resultado = retornaralgo() //*OU retornaralgo()() */
console.log(resultado())

/*Não chega a ser closure pois não há nada na função externa que a função interna esteja guardando, não está guardando o ambiente, mas uma closure pode ser uma high order function*/