function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("iano")
    var res = document.getElementById("res")
    if(fano.value.length == 0 || fano.value.length > ano){
        alert("você não inseriu um valor válido!")
    }else{
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ``
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = `Homem`
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'meninobebe.jpg')
            }else if (idade >= 10 && idade < 22){
                img.setAttribute('src', 'jovemhomem.jpg')
            }else if (idade >= 22 && idade < 50){
                img.setAttribute('src', 'adultohomem.jpg')
            }else if (idade >= 50 && idade < 100){
                img.setAttribute('src', 'homemidoso.jpg')
            }else if (idade > 100){
                var spoiler = document.getElementById('spoiler')
                img.setAttribute('src', 'skeletron.jpg')
                spoiler.innerHTML = `Você morreu faz tempo...`
            }
        }else if (fsex[1].checked){
            genero = `Mulher`
             if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'meninabebe.jpg')
            }else if (idade >= 10 && idade < 22){
                img.setAttribute('src', 'jovemgarota.jpg')
            }else if (idade >= 22 && idade < 50){
                img.setAttribute('src', 'adultamulher.jpg')
            }else if (idade >= 50 && idade < 100){
                img.setAttribute('src', 'mulheridosa.jpg')
            }else if (idade > 100){
                var spoiler = document.getElementById('spoiler')
                img.setAttribute('src', 'skeletron.jpg')
                spoiler.innerHTML = `Você morreu faz tempo...`
            }
        }
        res.style.textAlign = "Center"
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
};