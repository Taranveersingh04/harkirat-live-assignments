function someSyncTask(x,y){
    const a=x+y;
    return a ;
}
function veersAsyncTask(){
    return new Promise((resolve)=>{
        setTimeout(function(){
            const l= someSyncTask(7,8);
            resolve(l);
        },2000)
    })
}
veersAsyncTask().then((data)=>{
    console.log("Result of the operation is ",data);
})

console.log("Hello World");