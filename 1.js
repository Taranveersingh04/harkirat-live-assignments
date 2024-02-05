
//DRY stands for dont repeat yourself
//Passing a function as an arguement is called callback

function square(n){
    console.log("square called");
    return n*n;
}
function cube(n){
    console.log("cube called");
    return n*n*n;
}
function operationToDo(a,b,callback){
    let x=callback(a);
    let y=callback(b);
    console.log(x+y);
}
operationToDo(3,5,cube)