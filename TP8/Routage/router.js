var express = require('express')

var router = express.Router()

router.get('/', (req, res)=>{
    res.send('About')
})

router.get('/:id', (req, res)=>{
    res.send('About')
})

router.post('/', (req, res)=>{
    res.send('About')
})

module.exports=router