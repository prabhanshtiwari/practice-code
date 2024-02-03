/*
const emp = {
    name : "Vishwa",
    age : 99, 
    salary : 1000,
    address : {
        city : "Banglore",
        country : "India"
    }
}
*/
/*
// List of all the keys in the given object
console.log(Object.keys(emp))

// list of all the values in the given object
console.log(Object.values(emp))

// List of all the key-value pairs
console.log(Object.entries(emp))
*/
/*
console.log(emp)

// assign() - creates a new empty object, adds all the attributes of the existing object and other additional objects

emp_new = Object.assign({}, emp, {role : "developer"})
console.log(emp_new)
*/

/*

// Adding new fields in the original object 
emp.jobType = "Remote";
console.log(emp)
*/

/*
const person = {
    name : "Vishwa",
    age : 19
}
console.log(person)
Object.seal(person)
console.log(Object.isSealed(person))

person.name = "Ritik";  // updation is possible after seal()
person.hobby = "cricket";   // addition of new key-value pairs is not allowed after seal()
delete person["hobby"]


console.log(person)
*/


/*
console.log(person)
Object.freeze(person)   // changes are not possible in object if freeze() method is used
// Object is now freezed and cannot be changed
person.name = "Ritik"   // value of name gets changed here only when freeze() is not used
person.hobby = "cricket"
delete person["name"]
console.log(person)

// To check if the object is frozen or not
console.log(Object.isFrozen(person))    // returns true if the object is frozen otherwise false
*/

const person = {
    name : "Vishwa",
    age : 19,
    salary : 7000
}


Object.defineProperties(person, {
    salary : {
        value : 700,
        enumerable : false  // to stop salary key from being iterated we make it property enumerable : false
    }
})


// To iterate over the keys of the object
for (k in person){
    console.log(k)
}




/*
// getOwnPropertyNames() - returns the list of all the keys
// similar to Object.keys(person)
console.log(Object.getOwnPropertyNames(person))
*/

/*
// getOwnPropertyDescriptors() - to get detailed info about each key
Object.freeze(person)
console.log(Object.getOwnPropertyDescriptors(person))
*/






/*
// hasOwn() - used to check if the given key in present in the given array or not

console.log(Object.hasOwn(person, "name")) // true
console.log(Object.hasOwn(person, "company"))   // false
*/




































