class Habitation {
//Constructeur
    constructor(nom_maison, largeur_maison, longueur_maison, nbrEtage_maison) {
        this.nom = nom_maison;
        this.largeur = largeur_maison;
        this.longueur =longueur_maison;
        this.nbrEtage = nbrEtage_maison
    }
//Méthode
    superficie() {
      return this.largeur * this.longueur * this.nbrEtage;
    }
}

const appartement = new Habitation("Appartement", 8, 8, 1);
const maison = new Habitation("Maison", 10, 12, 2);
const loft = new Habitation("loft", 10, 4, 1);

console.log(`L'habitation : ${appartement.nom} à une superficie de : ${appartement.superficie()} m²`);
console.log(`L'habitation : ${maison.nom} à une superficie de : ${maison.superficie()} m²`);
console.log(`L'habitation : ${loft.nom} à une superficie de : ${loft.superficie()} m²`);


