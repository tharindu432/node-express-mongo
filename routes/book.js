const express = require('express');
const bookRouter = express.Router();
const connect = require('../database/db');


bookRouter.route('/book')
.get(async(req,res)=>{
    const db= await connect();
    const books= await db.collection('book').find().toArray();
    res.send(books);
})

.post(async (req,res)=>{
   // console.log(req.body);
    const db=await connect();
  //  const data={
     //   title:"power of consistency",
     //   author:'jim rohn',
   // };
   await db.collection('book').insertOne(req.body);
    res.json({data:'book stored'})
});

bookRouter
.route("/book/:id")
.get((req,res)=>{
    console.log(req.params.id);
    res.send("single book");
})

.patch((req,res)=>{
    console.log(req.params.id);
    res.send("single book update");
})
.delete((req,res)=>{
    console.log(req.params.id);
    res.send("single book delete");
})

module.exports=bookRouter;