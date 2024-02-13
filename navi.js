class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    viewData(){
        console.log(`Name is ${this.name} , Email-id is ${this.email} , Hogya hun bai baike niklo`);
    }
}
class Admin extends User{
    editData(){
        super.viewData();
        console.log("Thoda beda baije saleyo");
    }
}
const user1=new User("Taranveer Singh Bagga","baggagreat5@gmail.com");
const navaBanda=new Admin("Jaskirat Singh Bagga","jaskirat.bgin@gmail.com");