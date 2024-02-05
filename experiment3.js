//Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
//During this time the thread should not be able to do anything else.
//the function should return a promise just like before
function haltJsThread(mil){
    return new Promise((resolve)=>{
        const startTime=Date.now();
        console.log("start");
        while(Date.now()-startTime<mil){
            //do nothing just wait
        }
        resolve(`finally waited for ${mil}`);
        console.log("Hello world");
    })
}

haltJsThread(3000).then((data)=>{
    console.log("Thread paused : ", data);
})