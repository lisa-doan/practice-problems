// Given an array of strings, return another array containing all of its longest strings.

// Example

// For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
// allLongestStrings(inputArray) = ["aba", "vcd", "aba"].

function allLongestStrings(inputArray) {
    let arr = [];
    let maxLength = 0;
    for(let i = 0; i < inputArray.length; i++) {
        if(inputArray[i].length > maxLength) {
            maxLength = inputArray[i].length
        }
    }
    for(let j = 0; j < inputArray.length; j++) {
        if(inputArray[j].length === maxLength) {
            arr.push(inputArray[j])
        }
    }
return arr
}
