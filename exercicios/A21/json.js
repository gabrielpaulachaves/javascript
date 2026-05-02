//serve pra trocar dados do servidor com aplicacao web

//visto como objeto ou array

//JSON.stringify() transforma um objeto de javascript em string json
//JSON.parse() transforma string json em um objeto de javascript

const nomes = ["Gabriel", "Jean", "Mikasa", "Albedo", "Lauma"]

const pessoa = {
    "nome":"Eren",
    "sobrenome":"Yeager",
    "idade": 19,
    "IsTitan": true,
    "titan": "Titan de ataque",
    "guardados-no-bolso":["Reiner", "Annie", "Bertold", "familia tybur", "Marley inteira"]}
    
const pessoas = [{ "nome":"Eren", "sobrenome":"Yeager","idade": 19,"IsTitan": true},
                {"nome": "Mikasa","sobrenome": "Ackerman","idade": 19,"IsTitan": false},
                {"nome": "Armin", "sobrenome": "Alert", "idade": 19,"IsTitan": true }]

            //aqui, json é um objeto built-in, ou seja, um objeto já embutido, e o que permite a gente trabalhar com arquivos json
const json = JSON.stringify(nomes)
const json2 = JSON.stringify(pessoa)
const json3 = JSON.stringify(pessoas)

/*console.log(nomes)
console.log(json)
console.log(json2)  //vira uma só string
console.log(json3)*/

//usando perse()

const jsonnomes = `["Gabriel", "Jean", "Mikasa", "Albedo", "Lauma"]`

const jsonpessoa = `{
    "nome":"Eren",
    "sobrenome":"Yeager",
    "idade": 19,
    "IsTitan": true,
    "titan": "Titan de ataque",
    "guardados-no-bolso":["Reiner", "Annie", "Bertold", "familia tybur", "Marley inteira"]}`

  const jsonpessoas = `[{ "nome":"Eren", "sobrenome":"Yeager","idade": 19,"IsTitan": true},
                {"nome": "Mikasa","sobrenome": "Ackerman","idade": 19,"IsTitan": false},
                {"nome": "Armin", "sobrenome": "Alert", "idade": 19,"IsTitan": true }]`

const objeto = JSON.parse(jsonnomes) 
const objeto2 = JSON.parse(jsonpessoa)  
const objeto3 = JSON.parse(jsonpessoas)  

console.log(objeto)
console.log(objeto2)
console.log(objeto3)


