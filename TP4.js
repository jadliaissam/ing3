// ### Node Events ######

/*
 Importer le module <events> intégré par défaut à NodeJS et instancier un objet EventEmitter
2) Créer une fonction nommé <handler> pour gérer un événement nommé <event> et affiche le
message « Event Fired »
3) Déclencher l’événement en utilisant la méthode setTimeout après 3 seconds.
4) Exécuter le fichier en utilisant la commande node tp4. Que constatez-vous ?
5) Ajouter un nouveau événement nommé <process> et lancer depuis la fonction handler.
6) Exécuter le fichier à nouveau. Que constatez-vous ? 
*/

var events = require('events')
var eventemitter = new events.EventEmitter()

const handler = () => {
    console.log('event Fired')
    eventemitter.emit('process')
}

eventemitter.on('event', handler)
eventemitter.on('process', () => console.log('Process Fired !'))

setTimeout(() => eventemitter.emit('event'), 3000)

// ####  Node FileSystem ####

/*
Créer un fichier data.txt contenant 5 valeurs séparées par des virgules : 25, 12, 30, 10, 2
2) Lire le fichier grâce à a méthode readFile(<FILE_NAME>, callback) et afficher son contenu. Que
constatez-vous ?
3) Pour afficher correctement le contenu du fichier, ajouter un encodage de « utf-8 » comme 2ème
paramètre à la fonction readFile() et ré-exécuter le fichier.
4) Ajouter une nouvelle valeur « 40 » au fichier data.txt en utilisant la méthode appendFile().
Vérifier le fichier texte pour voir si la donnée a été insérée correctement.
5) Créer un fichier « data2.txt » et écrire les même valeurs à l’intérieur en utilisant les méthodes open()
et write() du module fs.
6) Supprimer le fichier « data.txt » en utilisant la méthode fs.unlink()
7) Renommer le fichier « data2.txt » en « data.txt » en utilisant la méthode fs.rename()
8) Lister le contenu du Répertoire en utilisant la méthode fs.readdir() et afficher les fichiers qui y
existent.
9) Surveiller les changements dans le répertoire courant grâce à la méthode fs.watch() et afficher à
chaque fois le nouveau contenu du répertoire.
*/

var fs = require('fs')

// Create File named data.txt with content : '10,20,30'
fs.writeFile('data.txt', '10,20,30', (err) => {
    console.log('Data file Writed !')
    // Read the content of the file data.txt and put it in data variable
    fs.readFile('data.txt', 'utf-8', (err, data) => {
        console.log(data)
        // Add new Value to data.txt using fs.appendFile
        fs.appendFile('data.txt', ',40', (err) => {
            fs.open('data2.txt', 'w+', (err, fd) => {
                // Write/Create new File using open/write
                fs.write(fd, "20,30,40", (err) => {
                    console.log('write finished !')
                    //Close the file
                    fs.close(fd, (err) => {
                        console.log('File Closed !')
                        // DElete the file
                        fs.unlink('data.txt', (err) => {
                            console.log('File Deleted !')
                            // Rename the File
                            fs.rename('data2.txt', 'data.txt', (err) => {
                                console.log('File Renamed !')
                                // Read current Directory Files  
                                fs.readdir('.', (err, files) => {
                                    console.log(files)
                                    // Watch the current directory for changes and print new files list
                                    fs.watch('.', (eventname, filename) => {
                                        fs.readdir('.', (err, files) => {
                                            console.log(files)
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})