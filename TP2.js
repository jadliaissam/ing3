/*
I- Rappels JavaScript
* Déclarer une fonction som() qui reçoit en paramètre 2 entiers a et b et renvoie leurs somme.
* Ajouter à la méthode som() un test de tel façon que la fonction retourne zéro (0) si la somme
est négatif sinon elle retourne la somme.
* Appeler la fonction som() comme suivant : som(1, "2")
Que se passe-t-il ?
* Corriger le code de telle façon que la fonction retourne la valeur correct en convertissant les
deux paramètres de la fonction en nombre avant de sommer en utiliser la méthode Number().
* Appeler la fonction som() comme suivant : som(1)
Que se passe-t-il ?
* Corriger le code pour gérer le cas où un seul paramètre est passé à la fonction som().
* Changer le code de la fonction pour qu’elle retourne un objet contenant les attributs suivants :
    - somme : contient la somme des 2 paramètres
    - date : contient la date d’aujourd’hui
Exemple : som(1, 2) doit retourner { somme: 3, date: 2020-11-25T14:45:04.657Z }
*/

//Correction 

function som(a, b) {
    if (b === undefined)
        b = 0
    var somme = Number(a) + Number(b)
    if (somme < 0)
        return 0
    else
        return { somme: somme, date: new Date() }
}

console.log(som(1, 2))


// #####   RAPPELS ECMASCRIPT 6 ######
/*
A l’intérieur d’une fonction fléché (Arrow) nommée maFunc:
* Déclarer une variable constante maVar en utilisant le mot-clé const et y assigner la
valeur 10.
* Redéclarer la variable maVar avec la valeur 2. Que constatez-vous ?
* Déclarer un object en utilisant const et en y initialisant un attribut value à 1.
* Changer la valeur de l’attribut value à 2. Que constatez-vous ?
* Utiliser la nouvelle syntaxe ES6 pour déclarer une fonction qui reçoit un entier et renvoi
son double. Minimiser la déclaration de la fonction.
*/

// Correction

const maFunc = ()=> {
    const maVar = 10;
    // maVar = 2 => Error 
    const myObj = {value : 1}
    myObj.value = 2 // OK, we can change object attributes 
}

const double = (a) => {
    return a * 2
}

const doubleMin = a => a * 2 // Function Double Minimized 

// ###### Callback, Promise et Async/await ########

/*

On Constate que l'Ordre d'éxecution est maintenu en utilisant les callbacks et les promises 
La sytaxe verticale des promesses est plus clair et directe à utiliser

*/

