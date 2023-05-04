const os=require('os')
const path=require('path')
const math=require('./math')
const fs=require('fs')



/*

console.log(os.type())
console.log(os.version())
console.log(os.homedir())

console.log(__dirname)
console.log(__filename)

console.log(path.parse(__filename))
*/

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






