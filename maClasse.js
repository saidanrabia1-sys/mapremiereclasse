
/**
 * J'apprends à créer des classes JavaScript
 */

/**
 * Comment déclarer une classe?
 * Pour déclarer,
 * 1. je commence par le mot-clé class.
 * 2. je donne un nom à la classe. Le nom de la classe doit commencer par une lettre majuscule
 * 3. je définis les propriétés et les méthodes de la classe 
*/

// Ma classe personne 
class personne{
    /**
     * @param {*}anneeNaissance
     * @param {*} nomPersonne 
     * @param {*} villagePersonne
     */
    // Je définie le constructeur de la classe Personne 
    constructor(nomPersonne, villagePersonne, anneeNaissance) {
        this.nom = nomPersonne;
        this.village = villagePersonne;
        this.annee = anneeNaissance;

    }

    // Méthode 
    bienvenue() {
        alert("Bienvenue " + this.nom);
    }
    calculeAge() {
        let anneeCourante = new Date().getFullYear();
    return anneeCourante - this.annee;
    }

};

/**  J'utilise la classe personne pour créer une instatance
 * (exemplaire) de Personne. Notre personne s'appelle ALI.
 * Il habite à Combani. Il est né en 1999.
*/

let personne1 = new personne("Ali", "Combani", 1999);

// Je fait la méthode bienvenu() présente dans la classe 

personne1.bienvenue();
console.log("Personne1 :", personne1);


let personne2 = new personne("Fatima", "Chiconi", 2014);
console.log("Personne2 :", personne2);

console.log("personne2 :", personne2.calculeAge(), "ans");



