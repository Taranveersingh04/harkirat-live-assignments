const express=require("express");
const fs=require("fs");
const path=require("path");
const app=express();

app.get('/files',(req,res)=>{
    fs.readdir(path.join(__dirname,"./files/"),"utf-8",(err,files)=>{
        if(err){
            res.status(500).json({
                msg:"Something went wrong"
            })
        }
        res.json({files})
    })
})
app.get('/files/:fileName',(req,res)=>{
    const name=req.params.fileName;
    console.log(name);
    fs.readFile(path.join(__dirname,'./files/',name),"utf-8",(err,data)=>{
        if(err){
            res.status(404).send('Not Found');
        }
        res.status(200).json({data})
    })
})
app.listen(5000,()=>{
    console.log("App listening on port 5000");
})