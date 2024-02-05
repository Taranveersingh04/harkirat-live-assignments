/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function promiseT1(t1){
    return  new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Promise resolved successfully after "+t1+" milliseconds");
        },t1)
    })
}
function promiseT2(t2){
    return  new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Promise resolved successfully after "+t2+" milliseconds");
        },t2)
    })
}
function promiseT3(t3){
    return  new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Promise resolved successfully after "+t3+" milliseconds");
        },t3)
    })
}
function callPromise(){
    
}