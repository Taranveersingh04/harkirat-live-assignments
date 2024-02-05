const express=require("express");
const app=express();
const port=3000;
const users=[
    {
        name:"Taranveer Singh Bagga",
        kidneys:[{
            healthy:false
        }]
    }   
]
app.get("/",((req,res)=>{
    const userKidney=users[0].kidneys;
    const noOfKidneys=userKidney.length;
    const numberofHealthyKidneys=0;
    for(let i=0;i<noOfKidneys;i++){
        if(userKidney[i].healthy){
            numberofHealthyKidneys+=1;
        }
    }
    const numberOfUnhealthyKidneys=noOfKidneys-numberofHealthyKidneys;
    res.json({
        noOfKidneys,
        numberofHealthyKidneys,
        numberOfUnhealthyKidneys
    })
})
)
app.listen(port,()=>{
    console.log("listening on port");
})