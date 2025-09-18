export default class Imc {
    constructor (nom, poids, taille){
        this.nom = nom;
        this.poids = poids;
        this.taille = taille;
    }
imcCalcul(){
    return Math.round(this.poids / (this.taille * this.taille)*100)/100;
    }
display (){
    console.log(`${this.nom} mesure ${this.taille} cm, pèse ${this.poids} et son IMC est de ${this.imcCalcul()}.`);
}
}


