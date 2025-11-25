// créer un écouteur d'évenement clic sur le bouton
// créer un programme qui va au clic :
// vérifier si les 3 champs sont remplis,
// calculer le montant TTC :
// prix_ht x quantite,

// Afficher dans le dom (div id resultat) le résultat du calcul.
// ou une erreur si les champs ne sont pas tous remplis

//TODO
//Inputs
const nomProduit = document.getElementById("nomProduit");
const quantite = document.getElementById("quantite");
const prix = document.getElementById("prixHt");
//Button
const calculButton = document.getElementById("calculer");
//Result
const resultat = document.querySelector("#resultat");
let result=0;
//Function
calculButton.addEventListener("click", (evenement) => {
    evenement.preventDefault();
    if(nomProduit.value ==""){
        alert("Veuillez remplir les champs");
    }else if (quantite.value ==""){
        alert("Veuillez remplir les champs");
    }else if (prix.value ==""){
        alert("Veuillez remplir les champs");
    }else{
    result = quantite.value*prix.value*1.2;
    resultat.innerText = `Voici le prix :${result} €TTC`; 
    }   
});

