/*
arr = [3, 4, 5, 6, 7, 8]

console.log(arr)

// pop() - used to remove the last element of array at the end

console.log(arr.pop()) // returns 8

console.log(arr)

// add 11 at the end
// push() - used to add element at the end of array

arr.push(11)

console.log(arr)

*/
/*
fruits = ["apple", "mango", "papaya"]

console.log(fruits.pop())

fruits.push("WaterMelon")

console.log(fruits)

f = fruits.pop()
console.log(f)
*/

/*
// Remove from the first position

arr = [5, 2, 1, 9, 7, 6]

x = arr.shift() // element at the 0 index gets removed, elements gets shifted left by 1 position

console.log(x)
console.log(arr)

console.log(arr.unshift(51)) // add the element at index 0

console.log(arr)
*/
/*
// concat() - used to concatenate two array

arr1 = [3, 4, 5, 6]
arr2 = [7, 8, 9, 6]

arr = arr1.concat(arr2)
console.log(arr)
console.log(arr.length) // returns the length of the array

arr_new = arr1 + arr2 // using + operator creates a new string

console.log(arr_new)
console.log(typeof arr_new)
*/
/*
// join()

let fruits = ["apple", "banana", "carrot"]

let result = fruits.join() // it return comma-separated string but does not affect the original string

console.log(result)
console.log(typeof result)

let result2 = fruits.join("-")

console.log(result2)
console.log(typeof result2)

arr = [1, 2, 3, 4]
console.log(arr.join("&"))
*/
/*
// slice()

let arr = [5, 7, 1, 2, 9, 11, 15, 12, 6]

sliced_arr = arr.slice(2, 5) // returns the sliced array but does not affect the original array
// returns sliced array from index 2 to index 4 as last limit is excluded

console.log(arr)
console.log(sliced_arr)


console.log(arr.slice()) // if no argument then no action -- entire array will be returned

console.log(arr.slice(2))   // take out the array starting from the second index

console.log(arr.slice(0, 4, 2)) // third element doesn't do anything, but does not raisse any error

console.log(arr.slice(-1))  // returns only last element of array

console.log(arr.slice(-1, -4))  // returns the last element

console.log(arr.slice(-4, -1))

console.log(arr.slice(-10, -1))
*/
/*
// splice() method - used to add or remove elements at any index

arr = [3, 2, 1, 5, 4, 9, 11, 8]

arr.splice(4, 1, 51, 56, 59)

console.log(arr)
*/
/*
// reverse() method - it reverses the original array, change the original array

arr = [1, 5, 8, 7, 6, 8, 4]
arr.reverse()

console.log(arr)
*/
/*
// sort() method - sort the array in ascending order
// it changes the original array

arr = [5, 4, 1, 2, 9]

arr.sort() // sorts in ascending order

console.log(arr)
*/
/*
// Sorting in descending order
arr = [5, 4, 1, 2, 9]

arr.sort((a, b) => b-a)

console.log(arr)
*/

/*
// Sorting in ascending order
arr = [5, 4, 1, 2, 9]

arr.sort((a, b) => a-b)

console.log(arr)
*/
/*
// converting array into string
arr = [3, 4, 5, 1, 7]

str = arr.toString()

console.log(str)
console.log(typeof str)
*/
/*
// flattening the array, originaal array remains unchanged

arr = [3, 4, 5, [7, 9, 1]]

flat_array = arr.flat()

console.log(flat_array)
console.log(arr)
*/
/*
// flat() method does first level of flattenning by default

arr2 = [1, 2, 3, [4, 5, [6, 7, [8, 9, 10]]]]

console.log(arr2.flat()) // single level flattenning
console.log(arr2.flat(2)) // two level flattenning
console.log(arr2.flat(4)) //four level of flattenning

console.log(arr2.flat().flat().flat()) // three level of flattenning
*/

// how to identify the given object is an array

arr = [1, 2, 3, 4, 5]

console.log(Array.isArray(arr)) // true

str = "I am Vishwa"

console.log(Array.isArray(str)) // false

