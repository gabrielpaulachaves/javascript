//fetch = funcao que faz requesicoes HTTP
//simplifica dados assincronos
//sintaxe:
// fetch(url, {metodo: "GET"}) get é padrao para pegar dados, post é para enviar, put é para substituir, e delete é pra deletar

//*********************
//fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//.then(Response => console.log(Response))
//.catch(error => console.log(error))
//*********************

//achamos entao essas informacoes no console 
/*Response
body: (...)
bodyUsed: false
headers: Headers {}
ok: true
redirected: false
status: 200
statusText: ""
type: "cors"
url: "https://pokeapi.co/api/v2/pokemon/ditto"
[[Prototype]]: Response */
//devemos transformar isso em uma forma legivel, há metodos dentro desse texto que podem nos ajudar
//abra o prototype e encontraremos: arraybuffer, blob, json, text. Entao

/*
*********************************************
fetch("https://pokeapi.co/api/v2/pokemon/superxandao")
.then(Response => {if(!Response.ok){
        throw new Error("Esse dado não existe")
    }
        return Response.json()
}
)
.then(data => console.log(data.name)) 
.catch(error => console.log(error))
*********************************************
*/

//pegamos entao o formato json, dentro do json, temos todos os dados que queremos(nesse exemplo)
//no if, verifiquei se possui erro ou nao(superxandao não é um pokemon)

//usando async e await com fetch

async function pegardado(){
    try{
       const fetching = await fetch("https://pokeapi.co/api/v2/pokemon/charizard")
       if(!fetching.ok){
        throw new Error("Esse pokemon nao existe")
       }else{
            const awaiting = await fetching.json();
            console.log(awaiting);
       }
    }
    catch(error){
       console.log(error)
    }
}
pegardado()
