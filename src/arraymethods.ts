// ASSIGNMENT

let colours: string[] = ["red", "blue", "green", "black", "white"];
let fruits: string[] = ["apple", "mango", "pawpaw", "banana"];

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
const ColorsAndFruits = colours.concat(fruits);
console.log(ColorsAndFruits);

// Returns a new array from the start position to the end position gotten from the original array
let slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits);

// Joins all elements into a string
let input: string[] = ["I", "am", "learning", "typescript"];
console.log(input.join(" "));

// Checks if an element is included in an array and returns a boolean value
// console.log(ColorsAndFruits.includes("orange"));

//Creates new array based on codition attached
let nums: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNums: number[] = nums.filter((num) => num % 2 === 0);
console.log(evenNums);
let oddNums: number[] = nums.filter((num) => num % 2 !== 0);
console.log(oddNums);

// Cretes a new array by applying a function to every element.
let numbers: number[] = [1, 2, 3, 4, 5];
let squares: number[] = numbers.map(a => a * a);
console.log(squares);

class myArray{

    length = 0;
    userArray = [];

    constructor(userArray: number[]) {
        let i = 0;
        while (i !== undefined) {
            this.length === userArray[i];
        }
        // return userArray[i];
    }

}

const arr1 = new myArray([1, 2, 3, 4]);
console.log(arr1);
