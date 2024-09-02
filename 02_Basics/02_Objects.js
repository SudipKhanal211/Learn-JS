// An object is a collection of key:value pairs, wghere key are known as the properties and values can be of any type of data including objects and finctions.

// lets see how to create object by creating one object .

obj={
    name: "hari",
    age: 50
}

/* Objcet acn be defined in many ways:
1.Literal Notation,
2.Using newObject() syntax,
3.Using constructor function.(this makes object singleton)
*/

// lets create each object in all ways.

//Literal Notation 
let person1= {
    name:"Sudip",
    age: 20,
    profession: "developer"
}

// Using newObject() syntax,
let person2 = new Object();
person2.name = "Sudip";
person2.age = 20;
person2.profession = "Developer";


// Using constructor function
function Person(name,age,profession){
    this.name=name
    this.age=age
    this.profession=profession
}
let person3= new Person("Sudip",20,"Developer");


console.log(person1);
console.log(person2);
console.log(person3);


// We can access, modify and delete key of objects.

// access

console.log(person1.age)


// modify
person1.name ="Khanal"
person1.age= 21 

console.log(person1.age)
console.log(person1.name)

// We can delete property of object:

delete person1.profession

console.log(person1)




// Lets jump on singleton object.

let app = new Object();
//new Object() creates singleton object

app.id="abc";
app.name="Sudip";
app.isLogedIn= true;

console.log(app);



// Nested Object.

obj1= {
    email:"Sudip@gmail.com",
    fullName:{
        userName:{
            firstName:"Sudip",
            lastName:"Khanal",
        }
    }
}
// print lastname:
console.log(obj1.fullName.userName.lastName);

// Merge Objects:

let object1={
    address:"Nepal",
    religion: "Hindu",
}
let object2={
    language:"Nepali"
}

let mergeObj={...object1,...object2}
console.log(mergeObj);

// NOTE: If the name of properties are same in both object it overwites the value.



// Get Key or values of object:
key=Object.keys(object1)
values= Object.values(object2)
console.log(key);
console.log(values);

// NOTE: It return the collection of key or object in array.


// Object De-Structure: Object destructuring is a convenient way to extract specific properties from an object and assign them to variables. This technique is particularly useful when working with objects with many properties, allowing you to pick out the ones you need in a clean and concise way.

deStructure ={
    Course: "JS for fullstack",
    Duration: "3 Months",
    Practice: "5 Projects"
}

let {Duration}= deStructure 
console.log(Duration)

