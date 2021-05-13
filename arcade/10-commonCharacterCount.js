// Given two strings, find the number of common characters between them.

// Example

// For s1 = "aabcc" and s2 = "adcaa", the output should be
// commonCharacterCount(s1, s2) = 3.

// Strings have 3 common characters - 2 "a"s and 1 "c".

function commonCharacterCount(s1, s2) {
    s1 = s1.split('');
    s2 = s2.split('');
    s1Obj = {};
    s2Obj = {};
    for(let i = 0; i < s1.length; i++) {
        if(!s1Obj[s1[i]]) {
            s1Obj[s1[i]] = 1
        }
        else {
            s1Obj[s1[i]]++
        }
    }
     for(let i = 0; i < s2.length; i++) {
        if(!s2Obj[s2[i]]) {
            s2Obj[s2[i]] = 1;
        }
        else {
            s2Obj[s2[i]]++;
        }
    }
    let total = 0;
    for(let prop in s1Obj){
        if(s2Obj.hasOwnProperty(prop)) {
            if(s2Obj[prop] < s1Obj[prop]){
                total += s2Obj[prop];
            } else {
                total += s1Obj[prop];
            }
        }
    }
    return total;
}
