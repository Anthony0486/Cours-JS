import CompteBancaire from "./compteBancaire.js";
import * as tools from './tools.js';

//Récupération des élèments du DOM
const nomCompte = document.querySelector('#id_nom');
const btCreate = document.querySelector('#id_create');

const compteOperation = document.querySelector('#id_compte');
const montantOperation = document.querySelector('#id_montant');
const btCrediter = document.querySelector('#id_crediter');
const btRetirer = document.querySelector('#id_retirer');

const compteSource = document.querySelector('#id_source');
const compteCible = document.querySelector('#id_cible');
const montantVirement = document.querySelector('#id_montant_virement');
const btVirement = document.querySelector('#id_virement');

const message = document.querySelector('#id_message');

const btSolde = document.querySelector('#id_solde');

//Tableau de comptes bancaires
const comptes = [];

//1 Créer un compte (CompteBancaire)

//écouteur événement sur le bouton créer un compte
btCreate.addEventListener('click', () => {
    const clean = DOMPurify.sanitize(nomCompte.value);
    try {
        //Test si la saisie est "propre"
        if (clean == false) {
            throw new Error(`Les caractères ne sont pas autorisés`);
        };
         //test si le champs id_nom est remplis
        if (clean === "") {
            throw new Error(`Le champ nom est vide veuillez le remplir`);
        };
        //test si le compte existe déja
        if (tools.isCompteBancaireExist(comptes, clean)) {
            throw new Error(`Le compte ${clean} existe déja`);
        }
        //Ajout du compte bancaire au tableau (comptes)
        comptes.push(new CompteBancaire(clean));
        //Afficher le message
        message.innerText = `Le compte ${clean} a été ajouté`;
        tools.messageColorValid(message);
    } catch (error) {
        message.innerText = error.message;
        tools.messageColorError(message);
    }
    //vider les champs du formulaire
    tools.clearInput();
    //vider la zone de message
    tools.resetMessage(message);
});

//2 Opérations sur compte bancaire (credit et retrait) du tableau (comptes)

//2.1 créditer le compte

//écouteur d'événement sur le bouton créditer
btCrediter.addEventListener('click', () => {
    const cleanCompte = DOMPurify.sanitize(compteOperation.value);
    const cleanMontant = DOMPurify.sanitize(montantOperation.value);
    try {
        //Test si la saisie est "propre"
        if (cleanCompte == false || cleanMontant == false) {
            throw new Error(`Les caractères ne sont pas autorisés`);
        };
        //test si les 2 champs sont remplis
        if (cleanCompte === "" || cleanMontant === "") {
            throw new Error(`Veuillez renseigner les 2 champs nom et montant`);
        }
        //test si le montant n'est pas un nombre
        if (isNaN(cleanMontant)) {
            throw new Error(`Le montant à créditer : ${cleanMontant} n'est pas un nombre`);
        }
        //Test si le compte n'existe pas
        if (!tools.isCompteBancaireExist(comptes, cleanCompte)) {
            throw new Error(`Le compte ${cleanCompte} n'existe pas`);
        }
        //Opération credit du montant du compte
        //Récupérer le compte bancaire
        const compte = tools.trouverCompteParNom(comptes, cleanCompte);
        //Opération de credit du montant
        compte.credit(parseFloat(cleanMontant));
        //Message de confirmation
        message.innerText = `Le compte : ${cleanCompte} à été crédité de : ${cleanMontant} €, 
        ${compte.afficherCompte()}`;
        tools.messageColorValid(message);
    } catch (error) {
        message.innerText = error.message;
        tools.messageColorError(message);
    }
    //vider les champs du formulaire
    tools.clearInput();
    //vider la zone de message
    tools.resetMessage(message);
});

//2.2 retirer du compte

//écouteur d'événement sur le bouton retirer
btRetirer.addEventListener('click', () => {
    const cleanCompte = DOMPurify.sanitize(compteOperation.value);
    const cleanMontant = DOMPurify.sanitize(montantOperation.value);
    try {
        //Test si la saisie est "propre"
        if (cleanCompte == false || cleanMontant == false) {
            throw new Error(`Les caractères ne sont pas autorisés`);
        };
        //test si les 2 champs sont remplis
        if (cleanCompte === "" || cleanMontant === "") {
            throw new Error(`Veuillez renseigner les 2 champs nom et montant`);
        }
        //test si le montant n'est pas un nombre
        if (isNaN(cleanMontant)) {
            throw new Error(`Le montant à retirer : ${cleanMontant} n'est pas un nombre`);
        }
        //Test si le compte n'existe pas
        if (!tools.isCompteBancaireExist(comptes, cleanCompte)) {
            throw new Error(`Le compte ${cleanCompte} n'existe pas`);
        }
        //Opération retrait du montant du compte
        //Récupérer le compte bancaire
        const compte = tools.trouverCompteParNom(comptes, cleanCompte);
        //Opération de retrait du montant
        compte.retrait(parseFloat(cleanMontant));
        //Message de confirmation
        message.innerText = `Le compte : ${cleanCompte} à été retirer de : ${cleanMontant} €, 
        ${compte.afficherCompte()}`;
        tools.messageColorValid(message);
    } catch (error) {
        message.innerText = error.message;
        tools.messageColorError(message);
    }
    //vider les champs du formulaire
    tools.clearInput();
    //vider la zone de message
    tools.resetMessage(message);
});

//3 virement entre compte bancaire

//écouteur sur le bouton virement
btVirement.addEventListener('click', () => {
    const cleanSource = DOMPurify.sanitize(compteSource.value);
    const cleanCible = DOMPurify.sanitize(compteCible.value);
    const cleanMontant = DOMPurify.sanitize(montantVirement.value);
    try {
        //Test si la saisie est "propre"
        if (cleanSource == false || cleanCible == false || cleanMontant == false) {
            throw new Error(`Les caractères ne sont pas autorisés`);
        };
        //test si les champs ne sont remplis
        if (cleanSource === "" || cleanCible === "" || cleanMontant === "") {
            throw new Error(`Veuillez renseigner les 3 champs compte cible, compte source et montant du virement`);
        }
        //test si me montant n'est pas un nombre
        if (isNaN(cleanMontant)) {
            throw new Error(`Le montant à retirer : ${cleanMontant} n'est pas un nombre`);
        }
        //test si le compte source n'existe pas
        if (!tools.isCompteBancaireExist(comptes, cleanSource)) {
            throw new Error(`Le compte ${cleanSource} n'existe pas`);
        }
        //test si me compte cible n'existe pas
        if (!tools.isCompteBancaireExist(comptes, cleanCible)) {
            throw new Error(`Le compte ${cleanCible} n'existe pas`);
        }
        //Opération de virement entre compte bancaire
        //Compte source
        const source = tools.trouverCompteParNom(comptes, cleanSource);
        //Compte cible
        const cible = tools.trouverCompteParNom(comptes, cleanCible);
        //opération de virement
        source.virement(parseFloat(cleanMontant), cible);
        //Message de confirmation
        message.innerText = `Le compte : ${source.nom} a viré la somme de : ${cleanMontant} € à ${cible.nom}. 
        ${source.afficherCompte()},  
        ${cible.afficherCompte()}
        `;
        tools.messageColorValid(message);
    } catch (error) {
        message.innerText = error.message;
        tools.messageColorError(message);
    }
    //vider les champs du formulaire
    tools.clearInput();
    //vider la zone de message
    tools.resetMessage(message);
});

//4 solde des comptes
btSolde.addEventListener('click', () => {
    try {
        //test si le tableau est vide
        if (comptes.length === 0) {
            throw new Error(`Il n'y à pas de compte enregistré`);
        }
        //Boucle pour afficher tous les comptes
        comptes.forEach(compte =>{
            message.innerText += `${compte.afficherCompte()} \n`;
        });
        tools.messageColorValid(message);
    } catch (error) {
        message.innerText = error.message;
        tools.messageColorError(message);
    }
    //vider la zone de message
    tools.resetMessage(message);
});