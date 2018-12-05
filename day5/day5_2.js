const fs = require('fs');

var contents = fs.readFileSync('./input.txt', 'utf8');
// var contents = fs.readFileSync('./input_test.txt', 'utf8');
console.log(`Initial length: ${contents.length}`);
var string = '';

//var test = 'a';

string = contents.replace(/z/g, '');
string = string.replace(/Z/g,'');

console.log(`After removing characters: ${string.length}`);
for (i=0; i < string.length; i++) {
    var charA = string.substring(i,i+1);
    var charB = string.substring(i+1,i+2);
    
    // check if characters match
    if(charA.toUpperCase() == charB.toUpperCase()) {
        //check polarity
        if (charA != charB) {
            string = string.slice(0,i)+string.slice(i+2,string.length);
            i = -1;
        }
    }
}

// test removeing A/a, B/b


console.log(`Final length: ${string.length}`);

//