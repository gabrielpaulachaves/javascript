
//para criar um elemento, usamos .document.creatElement("aqui dentro o elemento que queremos, h1, div, e o que for")

const novadiv = document.createElement("div")

//agora para editar o CSS

//aqui está apenas adicionando texto
novadiv.textContent = "caixa surpresa"
//agora iremos colocar um id nele
novadiv.id = "caixa5"
//mudando a cor
novadiv.style.color = "red"
//agora caracteristicas do texto (da pra mudar praticamente tudo)
novadiv.style.textAlign = "center"

//colocando ela no DOM

        //ou outro elemento onde queremos colocar, nao só o body
//document.body.append(novadiv)
    //append vai fazer que essa novadiv seja o ultimo filho, caso queira que apareca no topo, utilize prepand
   // document.body.prepend(novadiv)

//agora, caso eu queira colocar ele como filho de um elemento ja existente no html, posso usar dessa forma
document.getElementById("caixa1").prepend(novadiv)

//para escolher o local onde queremos esse elemento, (por exemplo, no meio da caixa 3 e 4), usaremos o metodo insertbefore("elemento novo, que vamos adicionar", "elemento que vem depois ja existente")

//const caixa3 = document.getElementById("caixa3")
//document.body.insertBefore(novadiv, caixa3)

//caso esses elementos nao tenham ids

//const caixas = document.querySelectorAll(".caixa");
                        //tem que ter[] pois sao criados como nodelists, e ali a gente coloca qual caixa queremos que o novo elemento venha antes
//document.body.insertBefore(novadiv, caixas[0]);

//removendo o elemento (usando o remove a gente remove o elemento todo, usando removechild a gente remove um filho dele)

document.getElementById("caixa1").removeChild(novadiv)

//9:43