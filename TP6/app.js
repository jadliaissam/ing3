const express = require('express')
const url = require('url')
const http = require('http')
const fs = require('fs')

http.createServer((request, response)=>{
    // 1) response.write("Hello World! ")
    // 2) response.writeHead(404)
    var route = request.url
    var params = url.parse(route, true).query
    var count = params.count
    if(route.includes("/books"))
        //response.write("Books Section : count is "+count)
        fs.readFile('books.html', (err, data)=> {
            response.write(data)
            return response.end()
        })
    if(route.includes("/films")){ 
        response.write('Films Section')
        response.end()
    }
}).listen(9999)