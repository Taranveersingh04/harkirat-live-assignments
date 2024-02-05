let n=new Promise((resolve)=>{
    resolve("go to hell");
})
n.then((data)=>{
    console.log(data);
})
console.log("n");