const express= require("express");
const app=express();

app.use(express.json());

const users=[
    {
        name:"John",
        kidneys:[
            {
                healthy:false
            }
    ]
    }
]

app.get("/",(req,res)=>{
    const johnKidneys=users[0].kidneys;
    const numberOfKidneys=johnKidneys.length;
    let numberofHealthyKidneys=0;
    for(let i=0;i<numberOfKidneys;i++){
        if(johnKidneys[i].healthy){
            numberofHealthyKidneys+=1;
        }
    }
    const numberOfUnhealthyKidneys=numberOfKidneys-numberofHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberofHealthyKidneys,
        numberOfUnhealthyKidneys    
    })
})
app.post("/",(req,res)=>{
    const isHealthy=req.body.isHealthy;
    users[0].kidneys.push({
        healthy:isHealthy
    })
    res.json({
        msg:"Done!"
    })
})
app.put("/",(req,res)=>{
    if(isThereUnhealthyKidney()){
        for(let i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy=true;
    }
    res.json({});
}
    else{
        res.status(411).json({
            msg:"No unhealthy kidney"
        });
    }
})
app.delete("/",(req,res)=>{
    if(isThereUnhealthyKidney()){
        const newKidneys=[];
    for(let i=0;i<users[0].kidneys.length;i++){
        if(users[0].kidneys[i].healthy){
            newKidneys.push({
                healthy:true
            })
        }
    }
    users[0].kidneys=newKidneys;
    res.json({});
}
    else{
        res.status(411).json({
            msg:"No unhealthy kidney"
        });
    }
})
function isThereUnhealthyKidney(){
    let atLeastOneUnhealthyKidney=false;
    for(let i=0;i<users[0].kidneys.length;i++){
        if(!users[0].kidneys[i].healthy){
            atLeastOneUnhealthyKidney=true;
        }
    }
    return atLeastOneUnhealthyKidney;
}

app.listen(3000,()=>{
    console.log("Listening on port 3000");
})