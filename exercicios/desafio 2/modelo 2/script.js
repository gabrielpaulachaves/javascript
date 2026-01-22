const gerar = document.getElementById('bTntabela')
const tela = document.getElementById('telatabela')

tela.style.display = "none"

gerar.addEventListener('click', function(){
    let numero = document.getElementById('numero')
    let table = document.getElementById('seltab')
    let n = Number(numero.value)

    tela.style.display = 'block'

    table.innerHTML = ' '
    for(let c=1;c<=10;c++){
        let item = document.createElement('option')
        item.text = `${n} x ${c} = ${n*c}`
        table.appendChild(item)
    }
})

/*
gerar.addEventListener('click', function(){
    let numero = document.getElementById('numero')
    let tabela = document.getElementById('seltab')
    let n = Number(numero.value)
    let c = 1;
 

    tela.style.display = "block"
    while(c <= 10){
        let item = document.createElement('option')
        item.text = `${n} x ${c} = ${n*c}`
    tabela.appendChild(item)
        c++
    }
    
}) 
    */