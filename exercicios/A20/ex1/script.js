//classlist serve pra adicionar uma class em um elemento e assim adicionar css a ele
//alguns de seus metodos
//add (adiciona)
//remove (ja aprendi anteriormente)
//toggle (vai remover se está ativo, vai adicionar se nao tiver)
//replace (class antiga, class nova)   
//contains (vai adicionar ao elemento que contem tal caracteristica) 

const h1 = document.getElementById("h1")
const botao = document.getElementById("botao")

/*botao.addEventListener("click", (e)=>{
    e.target.classList.add("ativo")

})*/
//botao.classList.add("ativo")

/*botao.addEventListener("click", (e)=>{
    e.target.classList.replace("ativo", "desativado")

})*/

/*botao.addEventListener("click", (e)=>{
    if(e.target.classList.contains("desativado")){
        botao.textContent += " clicado"
    }else{
        botao.classList.add("desativado")
    }
    e.target.classList.replace("ativo", "desativado")
})*/

botao.addEventListener("click", ()=>{
    h1.classList.add("ativo")
    botao.classList.add("ativo")
})





