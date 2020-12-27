const express = require('express')
const bodyParser= require('body-parser')
const app = express()
var products=[
    {id:1,title:"ordinteur",prix:4000},
    {id:2,title:"Telephone",prix:5000},
    {id:3,title:"Imprimante",prix:2000}
]

app.get('/products',(req,res)=>{
    res.render('list.ejs',{
        products:products
    })

})
app.get('/products/new',(req,res)=>{
    return res.render('new.pug');
}) 
app.get('/products/:id',(req,res)=>{
    const prod=products.filter(p=>p.id===req.params.id)[0];
    return res.render('detail.pug',{product:prod});
})
app.use(bodyParser.urlencoded({extended:false}))
app.post('/products',(req,res)=>{
    products.push(req.body)
    res.redirect('/products')
})
app.get('/products/:id/delete',(req,res)=>{
products=products.filter(p=>p.id!=req.params.id)
res.redirect('/products')

})
app.get('/products/:id/edit', (req, res)=>{
    const prod=products.filter(p=>p.id==req.params.id)[0];
    return res.render('edit.pug',{product:prod});
})
app.post('/products/:id/edit', (req, res )=>{
    products=products.filter(p=>p.id!=req.params.id)
    products.push(req.body)
    res.redirect('/products')
})
app.listen(9999)