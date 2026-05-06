//fetch = funcao que faz requesicoes HTTP
//simplifica dados assincronos
//sintaxe:
// fetch(url, {metodo: "GET"}) get é padrao para pegar dados, post é para enviar, put é para substituir, e delete é pra deletar

fetch("https://pokeapi.co/api/v2/pokemon/ditto")
.then(Response => console.log(Response))
.catch(error => console.log(error))