class Exemple {
    //constructeur
    constructor(name,value){
        this.name = name;
        this.value = value;
    }
showExemple(){
    return
    `name : ${this.name}
    value : ${this.value}
    `;
}
}
const instance1 = new Exemple("Nouveau 1", 5);
const instance2 = new Exemple("Nouveau 2", 10);
