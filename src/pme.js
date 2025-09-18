export default class Pme {
    constructor(nomPme, equipe, nMois, resultat, fraisF, fraisA) {
        this.nomPme = nomPme;
        this.equipe = equipe;
        this.resultat = resultat;
        this.fraisF = fraisF;
        this.fraisA = fraisA;
        this.nMois = nMois;
    };

calculBilan(){
let totalSalaire = 0;
for (const salarie of this.equipe){
    totalSalaire += equipe.coutSalarial;
}
console.log(this.nom + "Cout initial :" + (this.fraisA + this.fraisF));
console.log(this.nom + "Cout Salarial :" + (coutSalarial));
console.log(this.nom + "Resultat :" + this.resultat);
console.log(this.nom + "Bilan :" + (this.resultat - coutSalarial - (this.fraisA+this.fraisF)));
};
}