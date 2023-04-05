const http=require('http');
//const circule=require('./circule');

//circule.area();

const server=http.createServer((req,res)=>{
   res.writeHead(200,{'Content-Type':'application/json'});
    res.end(
    JSON.stringify({
        data:"hello world",
   })
);
});
console.log("server is running on port 3000");
server.listen(3000);