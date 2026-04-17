const botoes = document.querySelectorAll(".botoes")

botoes.forEach(botao => {
    botao.classList.add("ativo")
});

botoes.forEach(botao => {botao.addEventListener("mouseover",(e) =>{
    e.currentTarget.classList.toggle("hover");
})})

botoes.forEach(botao => {botao.addEventListener("mouseout",(e) =>{
    e.currentTarget.classList.toggle("hover");
})})

botoes.forEach(botao => {botao.addEventListener("click",(e) =>{
    if(e.target.classList.contains("desativado")){
        e.target.textContent = "clicado"
    }else{
       e.target.classList.replace("ativo", "desativado"); 
    }
    
})})

