//target diz qual elemento disparou o evento, podendo ser uma class, um id ou o nome do elemento(div, h1, etc..)
//currenttarget é o elemento que ouviu o evento, nesse exemplo, a div, que é o pai do h1 e do p. Mas pode ser onde esse evento está registrado

let elementos = document.getElementsByClassName("elemento")

        //esse e é o parametro com todos os objetos do evento, quando passado como argumento (seja qualquer nome), ele vai trazer as informacoes do evento que ocorreu após o acionamento, ele sempre se refere ao evento ocorrido. O target se refere ao elemento que acionou aquele evento (ou seja, o h1 se eu clicar nele e ele disparar tal evento), o target é apenas uma propriedade dentro desse grande objeto. E o target possui varias outras propriedades e métodos. ou seja "parametro">target>outra propriedade/metodo só que dentro do target
        
document.addEventListener("mouseout", (e)=>{
    console.log(e.relatedTarget.tagName)
})

//relatedtarget:
// relatedtarget se refere ao elemento relacionado com o ultimo elemento
//da forma como entendi, ele traz o ultimo elemento que executou um evento antes do elemento que executou um evento mais recente
// no exemplo com o mouseover, imagine a situacao, eu tenho a div1 e a div2, quando eu passar o mouse na div1 provavelmente dará erro ou irá aparecer HTML (que foi o ultimo elemento que eu passei pelo mouse), porém quando eu passar o mouse no div2 LOGO APOS ter executado o evento de mouseover sobre a div1, ele irá retornar a div1.(nesse exemplo, quem executa o evento pela primeira vez foi o div1, mas ele retornou erro ou HTML que está relacionado a ele)
//Agora com mouseout: 
//meu mouse está sobre o HTML, porém, quando passo encima de uma div, ele não irá retornar o HTML, irá retornar essa div que estou sobre o mouse agora, pois o evento só é executado quando o mouse sai de cima do elemento(mas nesse caso, quem executou foi o HTML, mas a div está relacionada)