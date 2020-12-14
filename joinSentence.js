// write a function that joins the array items together into one string, and log it to the console
let brokenSentence = ['I', 'am', 'a', 'broken', 'sentence'];


const joinSentence = function (arr) {
    let result = '';

    for (i = 0; i < arr.length; i ++) {

        result += `${arr[i]} `
    }

    return result
};

console.log(joinSentence(brokenSentence));

// output = "I am a broken string"