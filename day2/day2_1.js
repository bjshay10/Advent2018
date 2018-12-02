const fs = require('fs');

var twoTimes = 0;
var threeTimes = 0;
var boxIDs;
var checkSum = 0;

var contents = fs.readFileSync('./input.txt', 'utf8');
// var contents = fs.readFileSync('./input_test.txt', 'utf8');

boxIDs = contents.split('\r\n');

//for each boxID
for (i = 0; i < boxIDs.length; i++) {
    if (cntTwo(boxIDs[i])){
        twoTimes++;
    }
    if (cntThree(boxIDs[i])){
        threeTimes++;
    }
}

checkSum = twoTimes * threeTimes;

console.log(`Two Times: ${twoTimes}, Three Times: ${threeTimes} = ${checkSum}`);

// str.replace(/[^a]/g, "").length

//count for character only 2 times
function cntTwo(str) {
    //get character loop through string
    for (j = 0; j < str.length; j++) {
        var cnt = 0;
        // console.log(`Checking for character ${str.substring(j,j+1)}`);
        for (k = 0; k < str.length; k++){
            // console.log(`comparing ${str.substring(j,j+1)} to ${str.substring(k,k+1)}`);
            if (str.substring(j,j+1) === str.substring(k,k+1)){
                cnt++;
            }
            // console.log(`Count: ${cnt}`);
        }
        if (cnt === 2){
            return true;
        }
    }
}

//count for character only 3 times
function cntThree(str) {
    //get character loop through string
    for (j = 0; j < str.length; j++) {
        var cnt = 0;
        // console.log(`Checking for character ${str.substring(j,j+1)}`);
        for (k = 0; k < str.length; k++){
            // console.log(`comparing ${str.substring(j,j+1)} to ${str.substring(k,k+1)}`);
            if (str.substring(j,j+1) === str.substring(k,k+1)){
                cnt++;
            }
            // console.log(`Count: ${cnt}`);
        }
        if (cnt === 3){
            return true;
        }
    }
}