import Vehicule from './vehicule'

const vehicule1 = new Vehicule("Mercedes CLK", 4, 250);
const vehicule2 = new Vehicule("Honda CBR", 2, 280);

console.log(vehicule1.detect(), vehicule2.detect());
console.log(vehicule1.boost());

//BONUS---------------------

console.log(vehicule1.plusRapide(vehicule2));

