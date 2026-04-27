//representado por ...
//junta os elementos separados e transforma em array
//se estão juntos e quer expandir, use ... (spread)  se estao separados e quer juntar em uma unica array, use ... (rest)

//nesse exemplo, conseguimos colocar varios argumentos mesmo tendo apenas 1 parametro, e o que me permitiu isso foi o ...
let comida1 = 'salame'
let comida2 = 'lasanha'
let comida3 = 'macarrão'
let comida4 = 'frango'

                //aqui o ... é parametro
const juntar = (...comidas) => {
    console.log(comidas)
}

juntar(comida1, comida2, comida3, comida4);

//é possivel juntar elementos em uma array com rest 

function juntarcomida(...jcomida){
    return jcomida
};

const comida = juntarcomida(comida1, comida2, comida3, comida4);

console.log(comida)

//segundo exemplo

    function somar(...numeros){
       let resultado = 0;
        for(let numero of numeros){
            resultado += numero
        }
        return resultado
    };

    const total = somar(1, 6, 2, 10, 24, 10);

    console.log(`Seu resultado final é ${total}`);

    function tirarmedia(...numeros){
        let resultado = 0;
        for(let numero of numeros){
            resultado += numero
        }
        return resultado / numeros.length
    }

    const valores = [4, 7, 23, 1, 9, 5]
    const media = tirarmedia(...valores); //aqui usei spread

    console.log(`A média dos números ${valores} é: ${media}`)

    //exemplo 3. Combinando strings 

  function combinarstring(...palavras){
        return palavras.join(' ')

       /* let frase = " "
        for(let palavra of palavras){
            frase += palavra
        };
        return frase*/ //NÃO USE ISSO, GABRIEL, KKKKK
    }

    const perfil = combinarstring('senhor', 'zona', 'sul');

    console.log(perfil)


