function someAsyncFunction(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Data 1");
            resolve("Success");
        },4000)
    })
}
function someAsyncFunction2(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Data 2");
            resolve("Success");
        },4000)
    })
}
console.log("Fetching Data1");
someAsyncFunction().then((result)=>{
    console.log(result);
    return someAsyncFunction2();
}).then((result)=>{
    console.log(result);
})
