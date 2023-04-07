const express= require('express');
const bodyparser=require('body-parser');



const app=express();
const PORT =5000;

const routes=require('./routes/index');
app.use(routes);
app.use(bodyparser.json());


app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})
