function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function division(a,b){
    return a/b;
}
const callbacks=[add,subtract,multiply,division];

callbacks.forEach(operation=>{
    const value=operation(2,3);
    console.log("The value of your operation is : ", value);
})