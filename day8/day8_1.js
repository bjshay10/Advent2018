const fs = require('fs');

// var contents = fs.readFileSync('./input.txt', 'utf8');
var contents = fs.readFileSync('./input_test.txt', 'utf8');

//current item in the contentsArr
var index = 0;

function splitContents(arr) {
    return arr.split(" ");
}

const contentsArr = splitContents(contents);

//loop through array
do {
    


    index += 2;
} while (index < contentsArr.length)

