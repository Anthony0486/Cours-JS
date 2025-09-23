export default class CompteBancaire {
    constructor (nom, solde) {
        this.nom = nom;
        this.solde = solde;
    }

consultation (){
    console.log(`Titulaire : ${this.nom}, solde: ${this.solde}€`);
}

soldePlus (montant) {
    console.log(`Ajout de: ${montant}€ pour : ${this.nom}`);
    this.solde += montant;
}

soldeMoins (montant){
    if (montant < this.solde) {
        console.log(`Retrait de : ${montant}€ pour : ${this.nom}`);
        this.solde -= montant;
    } else {
        throw new Error(`----->${this.nom}, retrait de ${montant}€ refusé avec solde : ${this.solde}`);
    }
}

virement (beneficiare, montant) {
    if (montant > this.solde) {
        throw new Error(`----->${this.nom}, virement de ${montant}€ refusé avec solde : ${this.solde}€`)
    } else {
        console.log(`Virement: ${montant}€ de : ${this.nom} pour : ${beneficiare.nom}`);
    }
    this.solde -= montant;
    }
    
}
