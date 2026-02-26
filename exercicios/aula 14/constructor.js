function Perso(nome, arma, elemento, regiao, ult){
    this.nome = nome;
    this.arma = arma;
    this.elemento = elemento;
    this.regiao = regiao;
    this.ult = ult;
    this.ultmate = function(){
        return `${this.nome} usou ${this.ult} e tirou 1000 de dano`
    }
}

const perso1 = new Perso("Ayaka", "Espada", "Cryo", "Inazuma", "spin de gelo");

console.log(perso1.ultmate())










