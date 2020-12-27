var express = require('express')
var app = express()
const users =[
{id:1,name:"user1",age:25},
{id:2,name:"user2",age:35},
{id:3,name:"user3",age:45}
]

app.get('/home',(req,res)=>{
    res.render("home.ejs",{
        message:"hello world"
    })
})

app.get('/users',(req,res)=>{
    console.log(req.params)
    res.render("users.pug",{
        users:users
    })
})
app.listen(9999)