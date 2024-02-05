//Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
function passPromise(n){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Promise has resolved");
        },n)
    })
}
passPromise(2000).then((data)=>console.log("what actually has happened is ",data))