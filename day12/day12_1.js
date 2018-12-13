const fs = require('fs');

var contents = fs.readFileSync('./input.txt', 'utf8').toString().split('\r\n');

var initState = contents[0].replace('initial state: ','').split('').map((s) => s === '#' ? 1 : 0);
//
var newState = initState;
var newStateb = initState;

var rules = contents.slice(2)
    .map(v => {
        const matches = v.match(/^(.{5}) => (.)/);
        return {
            match: matches[1].split('').map(v => v === '#' ? 1 : 0),
            output: matches[2] === '#' ? 1 : 0,
        };
    });

//loop through initState (0-4, 1-5, 2-6, ...)
//compare the five to each rule
    //if it matches make change to newState
    //if not move on
for (i = 3; i < initState.length-3; i++){
    var tempStr = initState[i-2].toString()+initState[i-1].toString()+initState[i].toString()+initState[i+1].toString()+initState[i+2].toString()
    tempStr = tempStr.split('').join(',');
    rules.forEach((rule) => {
        if (tempStr == rule.match){
            console.log(`${tempStr} - ${rule.match}; ${i}`);
            newStateb[i] = rule.output;
            console.log(newState);
            console.log(newStateb);

        }
    });
}

