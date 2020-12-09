/*
Create a local module that exports a function (process)
Create a second script that imports the exported function and executes it
*/

var mod = require('./TP3_module')

mod.process()

// publish to npm using npm publish
// to update the module if there are changes change the version
// of the module with :   npm version XX.XX.XX
// then :  npm publish

