// Write a function that logs the third item in an array it is given. 
// if there are less than three, log: "There is no third item"

let example = [1, 2, 3, 4, 'five', 6, 7];

let example2 = [1, 2];

const logThird= function (arr) {
    if (arr.length < 4) {
        console.log("there is no third item")
    } else {
        console.log(arr[3]);
    }
};

logThird(example);

// answer should be 3

logThird(example2);

//answer should be 'There is no third item'