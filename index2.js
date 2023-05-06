const express= require('express');
const path=require('path')
const app= express();

const PORT= process.env.PORT || 3500;


app.get('/',(req,res)=>{
   // res.send("hello world!");
   res.sendFile(path.join(__dirname,'reply.txt'));
})

app.get('/old-page(.html)?',(req,res)=>{
    res.redirect(301,'/new-page.html'); //301
})

//route handler
app.get('old-page(.html)?',(req,res,next)=>{
    console.log("attempted to load hello.html");
    next();
},(req,res)=>{
    res.send("hello world!");
})

app.get('/*',(req,res)=>{
    res.status(404).sendFile(path.join(__dirname,"starter.txt"))
})

app.listen(PORT,()=>{console.log(`server is running on port ${PORT}`)});



