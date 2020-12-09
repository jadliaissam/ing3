// Instal Typescript :  npm install -g typescript 
// Copmpile File using : tsc TP3.ts
// Run File using : node TP3.js

/*
Déclarer une fonction mutiply() qui reçoit en paramètre 2 entiers a et b et renvoie leurs
produit.
* Appeler la fonction multiply() en utilisant les paramètres 2 et 3 et afficher le résultat.
* Appeler la fonction en utilisant les paramètres "2" et 3. Compilez et exécutez, que se passet-il ?
* Créer un interface nommé Vehicule et contenant deux attributs : modèle (string) et entier
(année) et une méthode afficher() sans arguments.
* Créer une Classe Voiture qui implémente l’interface Véhicule et:
    - Créer Un constructeur qui va initialiser les valeurs ;
    - Définir la méthode afficher() dans la classe pour afficher les détails d’une voiture
* Redéfinir la méthode afficher() pour rendre le paramètre année optionnel et le remplacer
par défaut avec 2020.
* Créer une nouvelle classe appelée VoitureElectrique qui hérite de la classe Voiture. Ajouter
un nouveau attribut nommé capaciteBattery et Redéfinir la méthode afficher() dans la
nouvelle classe pour inclure le nouveau membre et modifier le constructeur.
* Instancier des objets de types Voiture et VoitureElectrique et afficher leurs détails. 
*/

function multiply(a:number, b:number){
    return a * b
}

// mulptiply(3, "2") => Compilation Error

interface Vehicule {
    model:string,
    annee:number,
    afficher():void
}

class Voiture implements Vehicule {
    model:string;
    annee:number
    constructor(modelName:string, year:number=2020){
        this.model = modelName;
        this.annee = year
    }
    afficher(){
        console.log("Car Characteristics : Model : "+this.model+", Year : "+this.annee)
    }
}

class VoitureElectrique extends Voiture {
    capacityBattery:number;
    constructor(modelName:string, year:number=2020, capacity:number=1000){
        super(modelName, year)
        this.capacityBattery = capacity
    }
    afficher(){
        console.log("Car Characteristics : Model : "+this.model+", Year : "+this.annee+", Capacity : "+this.capacityBattery)
    }
}

let car = new Voiture('JETTA', 2018)
let car2 = new Voiture('Tesla') // Default Parameter year
let car3 = new VoitureElectrique('Tesla', 2019, 2000) // Default Parameter year

car.afficher()
car2.afficher()
car3.afficher()