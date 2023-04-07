const express = require('express');
const router =express.Router();
const bookRouter = require('./book');
const path = require('path');




router.get('/',(req,res)=>{
    res.send("hello world");
    
   // res.sendFile(path.join(__dirname,'/../pages/Home.html'))
})

router.use(bookRouter);


router.all("/*",(req,res)=>{
    res.send("404 page not found");
})

module.exports= router;
