// function sum(a,b){
//     return a+b;
// }
// function difference(a,b){
//     return a-b
// }
// function doOperation(a,b,callback){
//     const result=callback(a,b);
//     console.log(result);
// }
// doOperation(8,8,difference)

function getData(dataId,getNextData){
    setTimeout(()=>{
        console.log("Data ",dataId);
        if(getNextData){
            getNextData();
        }
       
    },2000)
}
getData(14,()=>{
    getData(16);
})


//Assume a scenario where once u get one data after 2 secs u then get another data