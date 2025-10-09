function carregar(){
    var msg = document.getElementById("msg");
    var img = document.getElementById("imagem");
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `<h2>Agora são ${hora} horas</h2>`
    if (hora >= 0 && hora < 12){
        /*bom dia*/
        img.src = 'manha.png'
        document.body.style.background ='rgb(150, 229, 255)'
    }else if (hora >= 12 && hora < 18){
        /*boa tarde*/ 
        img.src = 'tarde.png'
        document.body.style.background ='rgba(156, 87, 9, 1)'
        
    }else{
        /*boa noite*/
        img.src = 'noite.png'
        document.body.style.background ='rgba(0, 1, 15, 1)'
    }
}


