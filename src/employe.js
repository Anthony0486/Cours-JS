export default class Employe {
    constructor (nom,prenom,age,salaire,){
        this.nom = nom;
        this.prenom = prenom;
        this.salaire = salaire; 
        this.coutSalarial = this.coutSalarial(); 
    };

coutSalarial(){
    const nbMois = 12;
    const taxe = 0.90;
    return this.coutSalarial * nbMois * (1 + taxe);
}

};