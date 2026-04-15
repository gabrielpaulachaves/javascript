palindromo('ovo')
/*Estamos chamando a função antes de ser criada, isso é chamado de hoisting */
/*Uma function declaration permite ser utilizada antes mesmo de ser criada */

function palindromo (n){
    let receberpalavra = n
    let quebrarpalavra = receberpalavra.split('')
    let inverterpalavra = quebrarpalavra.reverse()
    inverterpalavra = inverterpalavra.join('')
    if(inverterpalavra == receberpalavra){
        console.log(`${receberpalavra} é palindromo`)
    }else{
        console.log(`${receberpalavra} não é palindromo`)
    }
}

const palidromo = function(n){
    let receberpalavra = n
    let quebrarpalavra = receberpalavra.split('')
    let inverterpalavra = quebrarpalavra.reverse()
    inverterpalavra = inverterpalavra.join('')
    if(inverterpalavra == receberpalavra){
        console.log(`${receberpalavra} é palindromo`)
    }else{
        console.log(`${receberpalavra} não é palindromo`)
    }
} /*No entanto, não é possível executar a function expression antes da sua declaração. Ela não aceita hoisting igual a declaration */