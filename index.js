//!Question-1 : Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype

//Defining the class name as parent,The parent class has a constructor inside it, which takes two parameters FirstName and LastName. It stores these values in the FirstName and LastName properties of the object 
class parent {
    constructor(FirstName, LastName) {
        this.FirstName = FirstName;
        this.LastName = LastName;
    }
}

// Here, i define a function name as UserIntro in the prototype of parent. This userIntro function simply create a variable intro which stores  string which created with  FirstName, LastName, Age and Address.
parent.prototype.UserIntro = function () {
    let intro = `Myself ${this.FirstName} ${this.LastName}. I am ${this.Age} years old. I am from ${this.Address}`;
    return intro;
}

// Here, defines a child class which extends the all properties and method of a parent class.The child class also has a constructor inside it , which takes four parameters FirstName, LastName, Age and Addres. Inside the constructor function we call a super method with two argument FirstName and LastName, which calls the parent's constructor function  of child class.
class child extends parent {
    constructor(FirstName, LastName, Age, Address) {
        super(FirstName, LastName);
        this.Age = Age;
        this.Address = Address;
    }
}

// Here, we created two new instances of child  using new keyword.
let newChildFirst = new child("Ms", "Dhoni", 42, "Bihar");
let newChildSecond = new child("Virat", "Kohli", 38, "Delhi");

// As the newChildFirst and newChildSecond is created from child, so it can access the properties and method from it's parent class. Here we call the UserIntro function, which is created in parent prototype.

console.log(newChildFirst.UserIntro()); //Output: Myself Ms Dhoni. I am 42 years old. I am from Bihar  
console.log(newChildSecond.UserIntro());//Ouptut: Myself Virat Kohli. I am 38 years old. I am from Delhi 

//!Question-2 Write code to explain prototype chaining 

// The prototype chain is a mechanism that allows objects to inherit properties and methods from other objects.

// Parent object constructor
function vehicles(name) {
    this.name = name;
}
// Adding a method to the prototype of vehicles
vehicles.prototype.printvehiclesName = function () {
    console.log(`vehicles name is ${this.name}.`);
};
// Child object constructor
function car(name, make) {
    vehicles.call(this, name); // Call the parent constructor
    this.make = make;
}

// Setting up the prototype chain: car inherits from vehicles
car.prototype = Object.create(vehicles.prototype);

// Adding a method specific to car
car.prototype.start = function () {
    console.log(`${this.name} starting...`);
};

// Create instances of Dog
const car1 = new car("BOLARO", "Mahendra");
const car2 = new car("THAR", "Mahendra");

// Using inherited methods
car1.start(); // Output: BOLARO starting...
car2.start(); // Output: THAR starting...

// Using the method specific to car
car1.printvehiclesName(); // Output: vehicles name is BOLARO.
car2.printvehiclesName(); // Output: vehicles name is THAR.



//! Question-3 Add a method to calculate sum of all elements in Array in array's protype, use that method to calculate sum for multiple arrays
//Here, defines the userDefind sum function in the prototype of Array. So we can use it with every array inside this program.
Array.prototype.sum = function () {
    let sum = this.reduce((acc, currentValue) => acc + currentValue);
    return `SUM OF ARRAY [ ${this} ] is : ${sum}`;
}
let firstArray = [10, 50, 70, 80];
let secondArray = [-2, -3, -4, -5];
let thirdArray = [20, 20.20, 40.20, -5, 120];
console.log(firstArray.sum());//Output: SUM OF ARRAY [ 10,50,70,80 ] is : 210 
console.log(secondArray.sum()); //Output : SUM OF ARRAY [ -2,-3,-4,-5 ] is : -14 
console.log(thirdArray.sum()); //Output: SUM OF ARRAY [ 20,20.2,40.2,-5,120 ] is : 195.4 


//!Question-4 Write a JavaScript function to retrieve all the names of object's own and inherited properties.

// Defines a class secondParent with constructor function, which accepts two parameter CarColor and carWheel
class secondParent {
    constructor(CarColor, carWheel) {
        this.CarColor = CarColor;
        this.carWheel = carWheel;
    }
}
// Here set the new proerties names in the prototype of parent with the name of newPropertiesOne, newPropertiesTwo, newPropertiesThree with values as following  newPropertiesOneValue, newPropertiesTwoValue, newPropertiesThreeValue.
secondParent.prototype.newPropertiesOne = "newPropertiesOneValue";
secondParent.prototype.newPropertiesTwo = "newPropertiesTwoValue";
secondParent.prototype.newPropertiesThree = "newPropertiesThreeValue";

// created a class secondChild which inherties the properties of secondParent. Inside secondChild class with constructor function, which accepts 5 parameters as CarColor, carWheel, carName, carMaker, carYear. in constructor, we call the parent consturctor with two parameters CarColor and carWheel using super keyword.
class secondChild extends secondParent {
    constructor(CarColor, carWheel, carName, carMaker, carYear) {
        super(CarColor, carWheel);
        this.carName = carName;
        this.carMaker = carMaker;
        this.carYear = carYear;
    }
}

// Create a instance of secondChild class as name of newsecondChild using new keyword 
let newsecondChild = new secondChild("Black", "4", "THAR", "Mahindra", 2019);
// Iterate over the newsecondChild using for in loop
for (let property in newsecondChild) {
    // This condition checks the current property is  newsecondChild's own property or not
    if (newsecondChild.hasOwnProperty(property)) {
        // IF the condition is true, it will print  the current property which is  the own property of newsecondChild, along with the string provided.
        console.log("newsecondChild Own Properties List: ", property);
    }
    else {
        // IF the condition is flase, it will will the current property which is not the own property of newsecondChild , with along with the string provided.
        console.log("newsecondChild inherited Properties List From parent Prototype:", property);
    }
}
