const fs = require('fs');

var twoTimes = 0;
var threeTimes = 0;
var boxIDs;


var contents = fs.readFileSync('./input.txt', 'utf8');
// var contents = fs.readFileSync('./input_test.txt', 'utf8');

boxIDs = contents.split('\r\n');
boxIDsSearch = contents.split('\r\n');

// console.log(`Number of boxes: ${boxIDs.length}`);

//loop though list of boxes
boxIDs.forEach((box) => {
    if(checkBox(box)) {
        console.log(`${box}`);
    }
});

function checkBox(b){
    var charCnt = 0;
    bSplit = b.split('');
    
    //loop through all boxIDs
    boxIDsSearch.forEach((boxID) => {
        charCnt = 0;
        bxSplit = boxID.split('');
        for (i = 0; i < bxSplit.length; i++) {
            if (bSplit[i] != bxSplit[i]){
                charCnt++;
            }
        }
        if (charCnt === 1) {
            console.log(b, boxID);
            return true;
        }
    });

}