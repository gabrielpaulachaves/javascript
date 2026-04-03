let resultado = document.getElementById('resultado')
let botao = document.getElementById('bTnjuntar')

botao.addEventListener('click', function juntar(){
    let nome = document.getElementById('nomeprimario').value.trim(); //trim é um metodo de string que evita entrada de valor apenas de espaço vazio, como "     "
    let sobrenome = document.getElementById('sobrenome').value.trim();
    let nomesemicompleto = [nome, sobrenome];
    let nomecompleto = [...nomesemicompleto]
    let juntado = nomecompleto.join(' ')
    if(nome === '' || sobrenome === ''){
        resultado.innerHTML = 'Adicione nome em ambos os campos'
    }else{
    resultado.innerHTML = `Parabéns! você descobriu seu nome: ${juntado}`
     }
});



