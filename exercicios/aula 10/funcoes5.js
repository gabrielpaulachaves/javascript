function fatorial(n){
    if(n==1){
        return 1
    }else{
       return n * fatorial(n-1)   /*é como se fosse para outra dimensão, onde o n é 4, e na dimensão onde n é 4, possui essa mesma fatorial(n-1) onde representa uma outra dimensão onde n é 3, e assim por diante. Só que, para mostrar o resultado da 5, antes teve que ter o resultado da 4, e antes de ter o resultado do 4, teve que haver o resultado do 3 e assim por diante.*/
    }

}

console.log(fatorial(5))