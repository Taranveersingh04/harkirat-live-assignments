/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */


function pehla(t1){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Resolved in "+t1+" milliseconds")
        },t1)
    })
}
function dooja(t2){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Resolved in "+t2+" milliseconds")
        },t2)
    })
}
function teeja(t3){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Resolved in "+t3+" milliseconds")
        },t3)
    })
}

// console.log(promisesArray);


function waitForPromisesToResolve(){
    const startTime=Date.now();
    const promisesArray=[
        pehla(1000),
        dooja(2000),
        teeja(3000)
    ]
    return Promise.all(promisesArray).then((data)=>{
        const endTime= Date.now();
        const totalTime= endTime-startTime;
        console.log(data);
        return `Total time taken for all three promises to resolve is ${totalTime}`
    })
}
waitForPromisesToResolve().then((data)=>{
    console.log(data);
})
