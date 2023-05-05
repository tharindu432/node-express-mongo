const os=require('os')
const path=require('path')
const math=require('./math')
//const fs=require('fs')
const fsPromises= require('fs').promises;
const {format} = require('date-fns');
const {v4:uuid}= require('uuid');
const logEvents=require('./logEvents');
const EventEmitter=require('events');

class myEmitter extends EventEmitter{};

//intialize an object
const myEmitter1=new myEmitter();

//add listner for the log event
myEmitter1.on('log',(msg)=>logEvents(msg));

setTimeout(()=>{
    //emit event
    myEmitter1.emit('log','log event emitted!');
},2000);





console.log(format(new Date(),'yyyyMMdd\tHH:mm:ss'))

console.log(uuid());

const fileops=async()=>{
    try{
        const data= await fsPromises.readFile('./reply.txt','utf8');
        console.log(data);
    }catch(err){
        console.error(err);
    }
}

fileops();



/*

console.log(os.type())
console.log(os.version())
console.log(os.homedir())

console.log(__dirname)
console.log(__filename)

console.log(path.parse(__filename))
*/


/*

console.log(math.add(1,2))
console.log(math.div(4,5))

//read the txt file

fs.readFile('./starter.txt','utf8',(err,data)=>{
    if(err) throw err;
   // console.log(data.toString());
   console.log(data)
})

console.log("hello...") //this print first before the .txt file read

//write files
fs.writeFile('./reply.txt','nice to meet you',(err)=>{
    if(err) throw err;
    console.log("write complete")

    //update files
    fs.appendFile('./reply.txt','\n\n yes it is',(err)=>{
        if(err) throw err;
        console.log('append complete')
    })
})





//exit on uncaught error
process.on('uncaughtException',err=>{
    console.error(`there is an uncaught error: ${err}`);
    process.exit(1);
})





*/
