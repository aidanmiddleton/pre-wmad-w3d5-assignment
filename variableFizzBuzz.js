// This is the normal fizzbuzz problem with one change
// the function takes in two numbers, a value start, and a value end
// log all the numbers from start - end
// if the value is a multiple of 5, log 'fizz'
// if its a multiple of 3, log "buzz"
// if its a multiple of both log "fizzbuzz". 
// end is your upper limit and start is your lower limit. 
// if the end number is lower than the start, console.log("Improper Input");


// const isMultipleOfFive = function(num) {
//     if (num % 5 === 0) {
//         return true
//     } else {
//         return false;
//     }
// }

// const isMultipleOfThree = function(num) {
//     if (num % 3 === 0) {
//         return true
//     } else {
//         return false;
//     }
// }

const isMultipleOf = function (num, factor){
    if (num % factor === 0) {
        return true
    } else {
        return false;
    }
}

const fizzbuzz = function (start, end) {

    if (end < start) {
        return "Improper Input"
    }

    for (i = start; i <= end; i++) {
        if (isMultipleOf(i, 5) && isMultipleOf(i, 3)) {
            console.log("fizzbuzz");
        } else if (isMultipleOf(i, 5)) {
            console.log("fizz")
        } else if (isMultipleOf(i, 3)) {
            console.log("buzz")
        } else {
            console.log(i);
        }

    }
};


fizzbuzz(45, 155);
fizzbuzz(99, 220);

console.log(fizzbuzz(80, 25));
// Third one should console.log() "Improper Input";
