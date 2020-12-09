// This is a Local module
/*
You can import this module locally or publish it to npm and use it over Internet 
*/

exports.process = function(){
    console.log('Launching Processing ....')
    setTimeout(()=> {
        console.log('Processing Finished !')
    }, 1000)
}