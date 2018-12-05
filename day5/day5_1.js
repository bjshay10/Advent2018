const fs = require('fs');

var contents = fs.readFileSync('./input.txt', 'utf8');
// var contents = fs.readFileSync('./input_test.txt', 'utf8');
console.log(contents.length);

for (i=0; i < contents.length; i++) {
    var charA = contents.substring(i,i+1);
    var charB = contents.substring(i+1,i+2);
    
    // check if characters match
    if(charA.toUpperCase() == charB.toUpperCase()) {
        //check polarity
        if (charA != charB) {
            contents = contents.slice(0,i)+contents.slice(i+2,contents.length);
            i = -1;
        }
    }
}
console.log(contents.length);