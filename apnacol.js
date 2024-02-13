// let obj1={
//     fullName:"Taranveer Singh Bagga",
//     marks:67.6,
//     printMarks:function(){
//         console.log(`${this.fullName} scored ${this.marks}`);
//     }
// }
// let student={
//     fullName:"Jaskirat Singh Bagga",
//     marks:98,
//     printMarks(){
//         console.log("Jaggu sada padhda likhda nahi ji");
//     }
// }
// student.__proto__=obj1;

class Car{
    constructor(brand,mileage){
        console.log("Gaddi theek thak chaldi payi hai");
        this.brand=brand;
        this.mileage=mileage;
    }
    start(name){
        console.log(`${name} Car in on`);
    }
    stop(name){
        console.log(`${name} Car in off`);
    }
}
class Bike extends Car{
    constructor(brand,mileage,engine){
        super(brand,mileage);
        this.engine=engine;
    }
    chalja(){
        console.log("Chalja hun Chalda kyo ni");
    }
    khaloja(){
        console.log("Khaloja hun khalonda kyo ni");
    }
}
// let fortuner=new Car("Toyota",12);
// fortuner.color="Black";
// fortuner.price="5000000"
// console.log(fortuner);
// let Harrier=new Car("Tata",10);
// console.log(Harrier);

let Ris=new Bike("Yamaha",14,"v8");