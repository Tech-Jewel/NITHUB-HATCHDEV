// ASSIGNMENT
var colours = ["red", "blue", "green", "black", "white"];
var fruits = ["apple", "mango", "pawpaw", "banana"];
// Adds extra elements to the back of the array
colours.push("purple", "yellow");
console.log(colours);
//  Removes the last element
colours.pop();
console.log(colours);
// Removes the first element
colours.shift();
console.log(colours);
// Adds an extra element to the front of the array
colours.unshift("orange");
console.log(colours);
// Combines two or more arrays
var ColorsAndFruits = colours.concat(fruits);
console.log(ColorsAndFruits);
// Returns a new array from the start position to the end position gotten from the original array
var slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits);
// Joins all elements into a string
var input = ["I", "am", "learning", "typescript"];
console.log(input.join(" "));
// Checks if an element is included in an array and returns a boolean value
console.log(ColorsAndFruits.includes("orange"));
//Creates new array based on codition attached
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var evenNums = nums.filter(function (num) { return num % 2 === 0; });
console.log(evenNums);
var oddNums = nums.filter(function (num) { return num % 2 !== 0; });
console.log(oddNums);
// Cretes a new array by applying a function to every element.
var numbers = [1, 2, 3, 4, 5];
var squares = numbers.map(function (a) { return a * a; });
console.log(squares);
var myArray = /** @class */ (function () {
    function myArray(userArray) {
        this.length = 0;
        this.userArray = [];
        var i = 0;
        while (i !== undefined) {
            this.length === userArray[i];
        }
        // return userArray[i];
    }
    return myArray;
}());
var arr1 = new myArray([1, 2, 3, 4]);
console.log(arr1);
