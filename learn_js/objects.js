/*
// object = a collection of keys and values
// keys consist of symbol or string
// value could be any datatype

// creating objects
const person = {
    name : "Vishwa",
    age : 99,
    city : "Banglore"
}

console.log(typeof person)
console.log(person)
*/


/*
const user = {
    1 : "Vishwa",
    2 : "Mohan",
    3 : "Sheetal"
}
console.log(user)
console.log(typeof user)
// in the above example, JavaScript internally converts int into string and doesn'y raise any error
// JavaScript is so sweet
*/

/*
// inside an object these value could also be a function

const person = {
    name : "Vishwa",
    age : 99,
    greet : function (){
        console.log("Hello Students")
    }
}

console.log(person)
*/
/*
// Second way of creating object - using object constructor

const obj = new Object() // creates an empty object

console.log(obj)
*/
/*
// Third way of creating object - using functions

function emp(id, name, salary){
    this.id = id;
    this.name = name;
    this.salary = salary;
}

const emp_obj = new emp(1, "Vishwa", 7000)

console.log(emp_obj)

*/
/*
const student = {
    name : "Rohan",
    age : 19,
    address : {
        city : "Banglore",
        state : "Karnataka",
        pincode : 560049
    }
}
console.log(student)

// I would like to read the properties of the student
// object followed by .key name
console.log(student.name) // return the value if the given key - name

console.log(student.age) // return the value of the given str - age

// Using the [] bracket notation

console.log(student["name"])

// Print the city of the student
console.log(student.address.city)   // output = Banglore
console.log(student["address"].city)    // output = Banglore
console.log(student["address"]["city"]) // output = Banglore
*/

// Insert new fields

const person = {}   // creates an empty object

person.name = "Vishwa";
person.hobby = "Cricket";
person["country"] = "India"

console.log(person)

person.name = "Kareena" // update the fields of the object

console.log(person)

// Delete certain fields

delete person["name"]   // name field gets deleted here

console.log(person)

delete person;  // not able to delete the entire object with delete keyword

console.log(person)