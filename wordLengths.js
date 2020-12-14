// Create a function that takes an array of words and transforms it into an array of each word's length.

let testArray = ["Halloween", "Thanksgiving", "Christmas"];


const wordLengths = function(arr) {

    for (i = 0; i < arr.length; i++) {
       let wordLength = arr[i].length;
       arr[i] = wordLength;
    }

    return arr;
};

console.log(testArray);
console.log(wordLengths(testArray));
console.log(testArray);



// Create a function that takes an array of words and returns an array of each word's length.

let testArray2 = ["She", "sells", "seashells", "down", "by", "the", "seashore"];

const wordLengthNewArray = function(arr) {
    let resultArray = [];


    for (i = 0; i < arr.length; i++) {
       resultArray.push(arr[i].length);
    }

    return resultArray;
};

console.log(testArray2);
console.log(wordLengthNewArray(testArray2));
console.log(testArray2);




// example ["Halloween", "Thanksgiving", "Christmas"] --> [9, 12, 9]