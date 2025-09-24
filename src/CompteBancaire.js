export default class CompteBancaire {
    constructor (nom, solde) {
        this.nom = nom;
        this.solde = solde;
    }

consultation (){
    console.log(`Titulaire : ${this.nom}, solde: ${this.solde}€`);
}

crediter (montant) {
    console.log(`Ajout de: ${(montant)}€ pour : ${this.nom}`);
    return this.solde += montant;
}

debiter (montant){
    if (montant < this.solde) {
        console.log(`Retrait de : ${montant}€ pour : ${this.nom}`);
        return this.solde -= montant;
    } else {
        throw new Error(`----->${this.nom}, retrait de ${montant}€ refusé avec solde : ${this.solde}`);
    }
}

virement (beneficiare, montant) {
    if (montant > this.solde) {
        throw new Error(`----->${this.nom}, virement de ${montant}€ refusé avec solde : ${this.solde}€`)
    }if (montant <0){
        throw new Error(`----->${this.nom}, virement de ${montant}€ car montant négatif`);
    } else {
        console.log(`Virement: ${montant}€ de : ${this.nom} pour : ${beneficiare.nom}`);
    }
    return this.solde -= montant;
    }
    
}

