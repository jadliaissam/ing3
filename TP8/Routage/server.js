var express = require('express')
var app = express()
var router = require('./router')

app.route('/users')
.get((req, res)=>{
    res.send("Hello World using GET")
})
.post((req, res)=>{
    res.send("Hello World using POST")
})

app.get('/users/:ID', (req, res)=> {
    return res.send('Param value : '+req.params.ID)
})

app.use('/router', router)

app.listen(9999)