import Imc from "./imc";
//Création d'une instance d'Imc:
const antho = new Imc ("Anthony", 75, 1.82);
//Appel de la methode dsiplay sur l'instance:
antho.display();
//Création d'une liste d'instances:
let list = [
    new Imc ("Sébastien", 135, 1.7),
    new Imc ("Escaladeuse", 45, 1.68),
    new Imc ("JOJO", 200, 2),
    new Imc ("Gontrand", 90, 1.75),
    new Imc ("Colonel Clock", 200, 1.75),
    new Imc ("JOsiane de la Vega" ,99, 1.55),
];
//Fonction pour parcourir la liste d'instance et y appeler la methode display:
list.forEach(personne => personne.display());