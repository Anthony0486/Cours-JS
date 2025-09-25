import { apiKey } from "./env.js"

const blocMeteo = document.querySelector("#bloc_meteo");
const city = document.querySelector("#city");
const chargerBtn = document.querySelector("#charger");
const box = document.createElement("box");

box.style.display = "flex";
box.style.flexDirection = "column";
const divAjout = blocMeteo.appendChild(box);

console.log(blocMeteo)

// Créer une boucle qui va répéter 3 fois les étapes ci-dessous :
// - 11 Créer un élément HTML de type h2,
// - 12 Lui assigner les les propriétés de style suivantes (.style) :\
// width : auto, height : 10vh, backgroundColor : grey, textAlign : center,\
// alignContent : 'center', paddingTop : 20px, paddingBottom : 20px
// 13 Ajouter avec textContent le texte suivant : vide,
// - 14 Ajouter un attribut (setAttribute) id qui aura comme valeur :
// id_title1 (premier), puis id_title2 et id_title3 (incrémenter avec i + 1)
// - 15 Ajouter a box le titre (appendChild)

for (let i=1; i<4; i++){
    const ajoutH2 = document.createElement("h2");
    ajoutH2.style.width = "auto";
    ajoutH2.style.height = "10vh";
    ajoutH2.style.backgroundColor = "grey";
    ajoutH2.style.textAlign = "center";
    ajoutH2.style.alignContent = "center";
    ajoutH2.style.paddingTop = "20px";
    ajoutH2.style.paddingBotom = "20px";
    ajoutH2.textContent = "vide";
    ajoutH2.setAttribute("id",`id_title${i}`)
    box.appendChild(ajoutH2);
    console.log(ajoutH2, box)
};


//  16 Créer une méthode **getMeteoJson** en **async** qui va prendre en paramètre un nom de ville\
// La méthode va devoir réaliser les étapes suivantes :
// - fetch l'API météo avec dans le queryParm **q** la ville passée en paramètre, 
// - retourner une promise au format JSON (méthode json()).
// - 17 Ajouter un écouteur d'événement click sur le bouton charger,\
// Ajouter la logique suivante dans le callback de l'écouteur :
// - 18 Récupérer la value de la ville (city),
// - 19 Vérifier si elle n'est pas vide,
// - 20 Appeler la méthode **getMeteoCity** et lui passer la ville en paramètre
// - 21 Ajouter un **then** à l'appel de la méthode **getMeteoCity** 
// ```js
// getMeteoCity("ville").then(data => {
//     //traitement
// })

async function getMeteoJson(nomVille){
    return await fetch("https://api.openweathermap.org/data/2.5/weather?lang=fr&units=metric&appid=" + apiKey + `&q=${nomVille}`)
    .then(response => {
        if (response.status === 200){
            return response.json();
        }else {
            return response
            }
    }).catch(error => {
        throw new Error ("le serveur ne reponds pas");
    }).finally();
};

getMeteoJson("saint-jory").then(json =>{
    console.log(json.weather[0].description);
});



chargerBtn.addEventListener("click", () => {
    const title1 = document.getElementById("id_title1");
    const title2 = document.getElementById("id_title2");
    const title3 = document.getElementById("id_title3");

getMeteoJson(city.value).then(json =>{
        console.log(json);
        title1.textContent = `Ville : ${json.name}`;
        title2.textContent = `Température : ${json.main.temp}°C`;
        title3.textContent = `Météo : ${json.weather[0].description}`;   
        const img = document.createElement("img");
        img.setAttribute("style","width : 100px; height : 100px; alignSelf : start");
        img.setAttribute("src", `https://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png`);
        box.appendChild(img);
});
});
;


// - 22 Assigner au title1 le texte suivant concaténé avec la valeur name du JSON :
// `Ville : ${name du JSON}`
// - 23 Assigner au title2 le texte suivant concaténé avec la valeur de temp du JSON :
// `Température : ${temperature du JSON} ° `
// - 24 Assigner au title3 le texte suivant concaténé avec la valeur temps qu'il fait (decription) du JSON:
// `Temps : ${description du JSON}`
// **BONUS** :
// - Tester le cas ou la ville n'existe pas (tester avant sous bruno ce que retourne l'API valide ou pas),
// Si la ville n'existe pas afficher une erreur dans le **title1** à la place du nom de la ville,
// - Dans le **then** de la méthode **getMeteoJson** créer une image (createElement) avec les propriétés suivantes :\
// width : 90px, height : 90px, alignSelf : start,\
// dans la source de l'image la concaténation de l'url et de la valeur icon dans le JSON:
// https://openweathermap.org/img/wn/*valeur icon du JSON*@2x.png\
// Ajouter à la box avec appendChild l'image.