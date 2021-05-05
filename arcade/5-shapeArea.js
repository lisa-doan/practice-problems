// Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.

// A 1-interesting polygon is just a square with a side of length 1. An n-interesting polygon is obtained by taking the n - 1-interesting polygon and appending 1-interesting polygons to its rim, side by side. You can see the 1-, 2-, 3- and 4-interesting polygons in the picture below.

// https://codesignal.s3.amazonaws.com/tasks/shapeArea/img/area.png?_tm=1582090003453

// Example

// For n = 2, the output should be
// shapeArea(n) = 5;
// For n = 3, the output should be
// shapeArea(n) = 13.


function shapeArea(n) {
    let result = n + (n-1);
    for(let i = n-1; i > 0; i--) {
        result += (i + (i-1))*2;
    }
    return result
}
