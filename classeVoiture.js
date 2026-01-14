
class Voiture {
    constructor(couleur, nombrePorte, nombreSiege) {
        // Propriétés fixes (constantes pour toutes les voitures)
        this.roue = 4;
        this.volant = true;
        this.pedale = 3;
        this.boiteVitesse = "manuelle"; // Par défaut la voiture est manuelle 
        
        // Propriétés paramétrables avec validation
        this.couleur = couleur || "noir";
         // Ternaire  
        this.nombrePorte = nombrePorte > 0 ? nombrePorte : 4;
        this.nombreSiege = nombreSiege > 0 ? nombreSiege : 5;
        
        // État de la voiture
        this.enMarche = false;
        this.feuxAllumes = false;
        this.essuyeGlacesActifs = false;
    }

    // Méthodes
    demarrer() {
        if (this.enMarche) {
            console.log("La voiture est déjà en marche");
        } else {
            this.enMarche = true;
            console.log("La voiture démarre");
        }
    }

    arreter() {
        if (!this.enMarche) {
            console.log("La voiture est déjà arrêtée");
        } else {
            this.enMarche = false;
            console.log("La voiture s'arrête");
        }
    }

    klaxonner() {
        console.log("Bip Bip !");
    }

    allumerFeux() {
        if (this.feuxAllumes) {
            console.log("Les feux sont déjà allumés");
        } else {
            this.feuxAllumes = true;
            console.log("Les feux sont allumés");
        }
    }

    eteindreFeux() {
        if (!this.feuxAllumes) {
            console.log("Les feux sont déjà éteints");
        } else {
            this.feuxAllumes = false;
            console.log("Les feux sont éteints");
        }
    }

    activerEssuyeGlace() {
        if (this.essuyeGlacesActifs) {
            console.log("Les essuie-glaces sont déjà activés");
        } else {
            this.essuyeGlacesActifs = true;
            console.log("Les essuie-glaces fonctionnent");
        }
    }

    desactiverEssuyeGlace() {
        if (!this.essuyeGlacesActifs) {
            console.log("Les essuie-glaces sont déjà désactivés");
        } else {
            this.essuyeGlacesActifs = false;
            console.log("Les essuie-glaces s'arrêtent");
        }
    }

    afficher() {
        console.log("===== VOITURE =====");
        console.log("Couleur :", this.couleur);
        console.log("Nombre de portes :", this.nombrePorte);
        console.log("Nombre de sièges :", this.nombreSiege);
        console.log("Nombre de roues :", this.roue);
        console.log("Boîte à vitesse :", this.boiteVitesse);
        console.log("En marche :", this.enMarche ? "Oui" : "Non");
        console.log("Feux allumés :", this.feuxAllumes ? "Oui" : "Non");
        console.log("Essuie-glaces :", this.essuyeGlacesActifs ? "Actifs" : "Inactifs");
        console.log("===================");
    }
}

// Exemple d'utilisation
const maVoiture = new Voiture("vert", 5, 5);
maVoiture.afficher();
maVoiture.demarrer();
maVoiture.allumerFeux();
maVoiture.klaxonner();
maVoiture.activerEssuyeGlace();
maVoiture.afficher();
maVoiture.arreter();
