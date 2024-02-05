const promise1=new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("Promise1 resolved")
    },1000)
})
const promise2=new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("Promise2 resolved")
    },2000)
})
const promise3=new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("Promise3 resolved")
    },3000)
})
const promisesArray=[promise1,promise2,promise3];

function myWorld(){
    const start=Date.now();
    Promise.all(promisesArray).then((data)=>{
        const end=Date.now();
        const result=end-start;
        console.log(data);
        console.log(result);
})
}
myWorld();