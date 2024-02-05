const promise1=new Promise(function(resolve){
    setTimeout(()=>{
        resolve(2+3);
    },1000)
})
const navaVada=promise1.then((data)=>{
    return data;
})
console.log(navaVada);