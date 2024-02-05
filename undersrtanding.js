const promise1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("my work is done for the day")
    },2000)
})

promise1.then((data)=>{
    console.log(data);
})