const http= require('http');
const EventEmitter=require('events');
const fs= require('fs');
const fsPromises= require('fs').promises;

const logEvents = require('./middleware/logEvents');

class Emmiter extends EventEmitter{};

//intialize object
const myEmitter=new Emmiter();

const PORT=process.env.PORT || 3500;

const server =http.createServer((req,res)=>{
    console.log(req.url,req.method);

    
})

server.listen(PORT,()=>{console.log(`server is running on port ${PORT}`)});
