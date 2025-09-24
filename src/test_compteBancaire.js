import CompteBancaire from "./CompteBancaire";
const create = document.getElementById("create");
const nom = document.getElementById("nom");
const message = document.getElementById("message");
const crediter = document.getElementById("crediter");
const debiter = document.getElementById("debiter");
const compte = document.getElementById("compte");
const montant = document.getElementById("montant");
const source = document.getElementById("source");
const cible = document.getElementById("cible");
const virement = document.getElementById("virement");
const montantVirement = document.getElementById('montantVirement');
const comptes = [
    new CompteBancaire ("Alex")
];


// for (const compte of comptes) compte.crediter(1000);
// comptes[0].debiter(100);
// comptes[2].virement(comptes[1], 500);
// for (const compte of comptes) compte.consultation();

// try {
//     comptes[2].virement(comptes[1], 1500);
// } catch (error) {
//     console.log(error.message);
// };


create.addEventListener("click", (e) =>{
    e.preventDefault();
    const nouveauCompte = new CompteBancaire (nom.value);
    comptes.push(nouveauCompte);
    message.innerText = (`${nouveauCompte.nom} à été ajouté aux comptes`);
    nouveauCompte.consultation();
})



crediter.addEventListener("click", (e) => {
    e.preventDefault();
    for (let i=0; i< comptes.length; i++){
        if (comptes[i].nom == compte.value){
        comptes[i].crediter(montant.value);
        comptes[i].consultation();
        }
    message.innerText = (`${montant.value}€ ont été crédités sur ${compte.value}`);
    
    }
});

debiter.addEventListener("click", (e) => {
    e.preventDefault();
    for (let i=0; i< comptes.length; i++){
        if (comptes[i].nom == compte.value){
        comptes[i].debiter(montant.value);
        comptes[i].consultation();
        }
    message.innerText = (`${montant.value}€ ont été débités sur ${compte.value}`);
    
    }
});

virement.addEventListener("click", (e) =>{
    e.preventDefault();
    for (let i=0; i< comptes.length; i++){
    if (comptes[i].nom == cible.value){
        comptes[i].virement(montantVirement.value);
        comptes[i].consultation();
        }
    message.innerText = (`Virement: ${montantVirement.value}€ de : ${source.value} pour : ${cible.value}`);
    
    }
})



