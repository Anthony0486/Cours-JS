export default class Vehicule {
    constructor (nomVehicule, nbrRoue, vitesse){
        this.nomVehicule = nomVehicule;
        this.nbrRoue = nbrRoue;
        this.vitesse = vitesse;
    }
detect(){
    if (this.nbrRoue > 2){
        return `${this.nomVehicule} est une voiture`;
    }else{
        return `${this.nomVehicule} est une moto`;
    }
    }
boost(){
    return `La vitesse de ${this.nomVehicule} est passée à : ${this.vitesse += 50} km/h`;
}

plusRapide(vehicule){
    if (vehicule.vitesse > this.vitesse){
        return `Le vehicule ${vehicule.nomVehicule} est le plus rapide`;

    }else{
        return `Le vehicule ${this.nomVehicule} est le plus rapide`;
    }
}

// verif(param){
//     if(param.constructor == "vehicule"){
//         return "type véhicule";
//     }
//     if (typeof param =="number"){
//         return "type nombre";
//     }
// }

}

