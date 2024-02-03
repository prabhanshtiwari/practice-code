
/*
const person1 = {
    firstName : "John",
    lastName : "Doe",
}

const person2 = {
    fullName : function(city, country) {
        console.log(`${this.firstName} ${this.lastName} lives in ${city}, ${country}`);
    }
}

// using call()
person2.fullName.call(person1, "New Delhi", "India");

// using apply()
person2.fullName.apply(person1, ["Washington", "US"]);

// using bind()
const bound =person2.fullName.bind(person1);
bound("New Delhi", "India");
bound("London", "UK");

console.log(Math.random() * 100)
*/
/*

// strings and its methods

const hello = 'hello world';
console.log(hello)
console.log(hello.length)
console.log(hello[2])   

hello[2] = "W"  // it doesn't throw error
*/
/*
// string methods
const hello = 'hello world';
console.log(hello.at(-1))

console.log(hello.charAt(0))    // doesn't take negative index as arguments

console.log(hello.endsWith("rld"))  // true

console.log(hello.endsWith("or", 9))    // true

console.log(hello.includes("lo", 3))    //true // second argument is starting point of the index
*/
/*
const hello = 'hello world';

console.log(hello.padStart(20, "."))

console.log(hello.padEnd(20, "*"))

console.log(hello.repeat(2))    // returns the number of copies of the string

console.log(hello.replace("l", "@"))    // replaces only first matched string or character

console.log(hello.replaceAll("l", "*")) // replaces all the matched characters and string

console.log(hello.search("world"))  // returns the first occurence

console.log(hello.slice(3, 8))  // returns the substring , 2nd argument is excluded // we can also use negative index

console.log(hello.split(" "))   // returns a list of substrings that are created by the given separator in argument

console.log(hello.split(""))    // returns a list of each characters in the string

console.log(hello.startsWith(hello))    // returns if the given string is present in the original string or not

console.log(hello.substring(0, 11)) // returns only substring // negative index can not be used

console.log(hello.substr(3, 5)) // Gets a substring beginning at the specified location and having the specified length.

console.log(hello.toLowerCase())    // Gets a substring beginning at the specified location and having the specified length.

console.log(hello.toUpperCase())    // Converts all the alphabetic characters in a string to uppercase.

*/
/*
const hello = 'hello world';

console.log(hello.trim())   // return a string by removing leading and trailing whitespaces
*/
/*
const abc = "Hello World";
if(abc === "" || abc === null || abc === undefined || abc === false) {

}

if("abc".includes("", null, undefined, false)) {

}
*/
/*
const abc = "Hello World";
console.log(["", null, undefined, false].includes(abc))
*/

// when something is created using constructors --> a object is created
let date = new Date()
console.log(date)
console.log(typeof date)    // object

console.log(date.getDate())

console.log(date.getDay())

console.log(date.getFullYear())

console.log(date.getYear())

console.log(date.getHours())










