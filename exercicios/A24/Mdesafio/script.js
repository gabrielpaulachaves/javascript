const btn = document.getElementById("bTnfetch")

const img = document.getElementById("imagem")

btn.addEventListener("click", async()=>{
    try{
    const pesquisa = document.getElementById("pesquisa").value.toLowerCase()    
    const pegardado = await fetch(`https://pokeapi.co/api/v2/pokemon/${pesquisa}`)
    if(!pegardado.ok){
        throw new Error("esse pokemon não existe")
        }
        
        const dadojson = await pegardado.json()
        const pokemonimagem = dadojson.sprites.front_default;
        img.src = pokemonimagem
        img.style.display = "block"
    }

    catch(error){
        console.log(error)
    }
    
})