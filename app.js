const http = require('http');
const fs = require('fs');
//const circule=require('./circule');

//circule.area();

const server=http.createServer((req,res)=>{

    console.log(req.url);
    if(req.url==='/'){
        res.writeHead(200,{'Content-Type':'text/html'});
        fs.readFile("pages/Home.html",'utf8',(err,data)=>{
            console.log(data);
            if(err){
                throw err;

            }
            res.write(data);
            res.end();
        })
       
    }
  else  if(req.url==='/about'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<h1>this is about page</h1>');
    }
  else  if(req.url==='/contact'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<h1>this is contact page</h1>');
    }
    else{
        res.writeHead(404,{"Content-Type":"text/html"});
        res.write('<h1>page not found</h1>');
        res.end();
    }

 
});
console.log("server is running on port 3000");
server.listen(3000);