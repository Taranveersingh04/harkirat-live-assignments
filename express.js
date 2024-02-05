const express=require("express");

function calculateSum(n){
    let ans=0;
    for(let i=1;i<=n;i++){
        ans+=i;
    }
    return ans;
}

const app=express();

app.get("/",function(req,res){
    const n= req.query.n;
    const ans= calculateSum(n);
    res.send(ans.toString());
})

app.listen(3000,()=>{
    console.log(`Example app listening on port 3000`);
});