const botao = document.getElementById('bTncontar')



botao.addEventListener('click', function(){

   let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo') 
    let display = document.getElementById('display')

    console.log(inicio.value);
    console.log(fim.value);
    console.log(passo.value);

    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)

    if(p <= 0){
        window.alert('Como você pretende alcançar seu objetivo sem se quer dar um passo? Considere pelo menos um passo por vez!')
        p = 1;
    }
    if(i < f){
    for(let c=i;c<=f;c+=p){
        display.innerHTML += `${c}\u{1F449}`
    }
    }else{
        for(let c=i;c>=f;c-=p){
        display.innerHTML += `${c}\u{1F449}`
    }
    }
     display.innerHTML += `\u{1F3C1}`

})