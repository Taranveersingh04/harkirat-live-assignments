// Class declaration
class Dog {
    // Constructor method (initialize object properties)
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    // Method to bark
    bark() {
      console.log(`${this.name} says Woof!`);
    }
  
    // Method to get age
    getAge() {
      console.log(`${this.name} is ${this.age} years old.`);
    }
  }
  
  // Creating an instance of the Dog class
  const myDog = new Dog("Buddy", 3);
  
  // Using class methods
  myDog.bark(); // Output: Buddy says Woof!
  myDog.getAge(); // Output: Buddy is 3 years old.
  