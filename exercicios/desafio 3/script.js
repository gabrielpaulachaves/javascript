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
        window.alert("tudo ok")
    }else{
        window.alert("Insira um número válido")
    }
})

