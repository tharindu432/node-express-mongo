const express= require('express');
const path=require('path')
const app= express();
const logEvents= require('./middleware/logEvents');
const cors=require('cors');


const PORT= process.env.PORT || 3500;

//built in middleware
app.use(express.json());

app.use(cors());

//custom middleware logger
app.use((req,res,next)=>{
    logEvents( `${req.method}\t ${req.headers.origin}\t${req.url}`,'reqlog.txt');
    console.log(`${req.method} ${req.path}`);
    next();
})





app.get('/',(req,res)=>{
   // res.send("hello world!");
   res.sendFile(path.join(__dirname,'reply.txt'));
})

app.get('/old-page(.html)?',(req,res)=>{
    res.redirect(301,'/new-page.html'); //301
})

//route handler
app.get('old-pages(.html)?',(req,res,next)=>{
    console.log("attempted to load hello.html");
    next();
},(req,res)=>{
    res.send("hello world!");
})

app.get('/*',(req,res)=>{
    res.status(404).sendFile(path.join(__dirname,"starter.txt"))
})

app.listen(PORT,()=>{console.log(`server is running on port ${PORT}`)});



