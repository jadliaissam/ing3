var os = require('os')
console.log(os.type())
console.log(os.arch())
console.log(os.hostname())
console.log(os.totalmem())
console.log(os.freemem())
console.log(os.cpus())

// Chemin du fichier executé
console.log(__filename)
console.log(__dirname)