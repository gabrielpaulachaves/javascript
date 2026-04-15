//target diz qual elemento disparou o evento, podendo ser uma class, um id ou o nome do elemento(div, h1, etc..)
//currenttarget é o elemento que ouviu o evento, nesse exemplo, a div, que é o pai do h1 e do p. Mas pode ser onde esse evento está registrado

let elementos = document.getElementsByClassName("elemento")

        //esse e é o parametro com todos os objetos do evento, quando passado como argumento (seja qualquer nome), ele vai trazer as informacoes do evento que ocorreu após o acionamento, ele sempre se refere ao evento ocorrido. O target se refere ao elemento que acionou aquele evento (ou seja, o h1 se eu clicar nele e ele disparar tal evento), o target é apenas uma propriedade dentro desse grande objeto. E o target possui varias outras propriedades e métodos. ou seja "parametro">target>outra propriedade/metodo só que dentro do target
        
document.addEventListener("click", (e)=>{
    console.log(e)
})

//12:47