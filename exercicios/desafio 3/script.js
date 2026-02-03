const botao = document.getElementById('bTnadd')
const tela = document.getElementById('telanalise')
const botaoan = document.getElementById('btnan')
const valores = []
let telnum = document.getElementById('telnum')
let num = document.getElementById("numero")


function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}
function inTela(n, l){       /*esse -1 significa "Não encontrado" */
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}
botao.addEventListener("click", function(){
    let n = Number(num.value)

     if(isNumero(n) && !inTela(n, valores)){
        valores.push(n)
        let opt = document.createElement('option')
        opt.text = `Você escolheu o valor ${n}`
        telnum.append(opt)
        tela.innerHTML = ''   
    }else{
        window.alert("Insira um número válido")
    }
     num.value = ``
     num.focus()
})

function analisar(){
    if(valores.length == 0){
        window.alert('Não foi adicionado nenhum número, Favor, adicione um')
    }else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let media = 0
        let soma = 0

        /*Aqui fizemos o seguinte, criamos um for especial para arrays, e a let pos que percorrerá pelos indices e o  valores[pos] vai acessar o valor de cada indice que o pos estiver. Nesse caso é o seguinte, imagine que temos [1, 6, 3, 29], o valores[pos] vai começar no 1(o valor)/indice 0, e o "maior" vai se tornar o valor desse primeiro indice. Depois o valores[pos] será 6/indice 1, o "maior" será 6 tbm pois o valores[pos] é 6. Depois vem a vez do valores[pos] ser o 3/indice 2, nesse caso, pula, pois "maior" é maior que o valores[pos] nessa situação, depois o valores[pos] vira 29/indice 3, e então o "maior" vira 29 pois o valores[pos] é maior que "maior" e a condição é que toda vez que o valores[pos] for maior que "maior", o "maior" precisa ser igual a esse valor atual do valores[pos].
        A regra é: sempre que valores[pos] for maior que maior, o maior recebe esse valor. */
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            }
            if(valores[pos] < menor){
                menor = valores[pos]
            }
        }
        media = soma / total
    tela.innerHTML = ''
    tela.innerHTML += `
    <p>Temos um total de ${total} números adicionados</p>
    <p>O maior valor informado foi ${maior}</p>
    <p>O menor valor informado foi ${menor}</p>
    <p>A soma de todos os valores é ${soma}</p>
    <p>A média de todos os valores é ${media}</p>
    `
    }

}

