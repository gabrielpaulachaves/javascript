class Alunos{
    constructor(nome, portugues, matematica, ciencia){
       this.nome = nome, //esses this se refere ao objeto criado com o new
       this.portugues =portugues,
       this.matematica = matematica,
       this.ciencia = ciencia
    }
    tirarmedia(){
        let soma = this.portugues + this.matematica + this.ciencia
        let media = soma/3
        if(media >= 6){
            console.log(`O aluno ${this.nome} foi aprovado com uma média de ${media}`)
        }else{
            console.log(`O aluno ${this.nome} foi reprovado com uma média de ${media}`)
        }  
        console.log(this)   //se refere ao objeto que chama o metodo (a função)  
    }
}
const aluno1 = new Alunos("João", 7.5, 6, 8)

aluno1.tirarmedia()
