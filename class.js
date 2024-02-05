class promiseOfMyOwn{
  constructor(callback){
    this.value=undefined;
    this.state='pending';
    this.callbackArrays=[];

    const resolve=(value)=>{
      if(this.state=='pending'){
        this.state='fullfilled';
        this.value='value';
        this.callbackArrays.forEach(callback2=>callback2(value))
      }
    }
    callback(resolve)
  }
  then(callback2){
    if(this.state=='fullfilled'){
      callback2(this.value);
    }
    else{
      this.callbackArrays.push(callback2);
    }
    return new promiseOfMyOwn((resolve)=>resolve());
  }
}

const promise1=new promiseOfMyOwn((resolve)=>{
  setTimeout(()=>{
    console.log("Data 1");
    resolve("Resolved successfully in 2 seconds")
  },2000)
})
promise1.then((result)=>{
  console.log(result);
})