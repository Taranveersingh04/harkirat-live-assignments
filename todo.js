const express=require("express");
const fs=require("fs");
const app=express();
const toDos=[];
app.use(express.json());

fs.readFile('todo.json', "utf-8", (err, data) => {
    if (err) {
        // Handle the case where the file doesn't exist or there is an error reading it
        console.error("Error reading todo.json:", err.message);
        return;
    }

    try {
        const storedData = JSON.parse(data);
        // Check if the parsed data is an array
        if (Array.isArray(storedData)) {
            toDos.push(...storedData);
        } else {
            console.error("Invalid data format in todo.json. Expected an array.");
        }
    } catch (parseError) {
        // Handle the case where JSON parsing fails
        console.error("Error parsing JSON in todo.json:", parseError.message);
    }
});


app.get('/todos',(req,res)=>{
    res.json(toDos);
})

app.get('/todos/:id',(req,res)=>{
    const givenId=req.params.id;
    const object=toDos.find(toDo=>toDo.id==givenId);
    if(!object){
        res.status(404).send("Not Found");
    }
    else{
        res.json({object})
    }
})
app.post('/todos',(req,res)=>{
    const newToDo={
        id:Math.floor(Math.random() * 1000000),
        title:req.body.title,
        description:req.body.description
    }
    toDos.push(newToDo);
    writeToFile();
    res.json({
        msg:"Hogya veere"
    })
})
app.put('/todos/:id',(req,res)=>{
    const givenId=parseInt(req.params.id);
    console.log(givenId);
    let found=false;
    for(let i=0;i<toDos.length;i++){
            if(toDos[i].id===givenId){
            toDos[i].title=req.body.title;
            toDos[i].description=req.body.description;
            found=true;
            break;
        }
    }
    if(found){
        writeToFile();
        res.json({
            msg:"Veere kam hogya"
        })
    }
    else{
        res.status(404).send("Not found")
    }
    
})
app.delete("/todos/:id", (req, res) => {
    const myId = parseInt(req.params.id);
    const foundIndex = toDos.findIndex((todo) => todo.id === myId);

    if (foundIndex !== -1) {
        toDos.splice(foundIndex, 1);
        writeToFile();
        res.json({
            msg: "Item deleted successfully"
        });
    } else {
        res.status(404).send("Not found");
    }
});
app.use((req, res, next) => {
    res.status(404).send();
  });
  


function writeToFile(){
    fs.writeFileSync("todo.json",JSON.stringify(toDos,null,2),"utf-8")
}
app.listen(3000,()=>{
    console.log("Example app listening on port 3000");
})