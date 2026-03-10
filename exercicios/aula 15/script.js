/*aprendendo class */
let botao = document.getElementById('bTn')
let resultado = document.getElementById('TxtResul')

class Pessoa{
    constructor(nome, funcao){
        this.nome = nome,
        this.funcao = funcao
    }
    acao(){
     resultado.innerHTML = `o ${this.nome}, que é ${this.funcao} da empresa, está ocupado`
    }
}
botao.addEventListener('click', function(){
    const Pessoa1 = new Pessoa(document.getElementById('nome').value, document.getElementById('funcao').value);
    Pessoa1.acao();
})






