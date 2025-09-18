import {Pme} from "./pme";
import {Employe} from "./employe"

const pme = new Pme ("Nintendo", [
    new Employe ("Duval", "Paul",30, 2000),
    new Employe ("Durand", "Alain", 40, 3000),
    new Employe ("Doisl", "Sylvia", 50, 4000),]
,12, 300000, 20000, 50000);

console.log (pme);
pme.calculBilan();