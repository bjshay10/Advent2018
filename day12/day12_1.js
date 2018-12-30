const fs = require('fs');

var contents = fs.readFileSync('./input_test.txt', 'utf8').toString().split('\r\n');

var initState = contents[0].replace('initial state: ','').split('').map((s) => s === '#' ? 1 : 0);
// var initState = contents[0].replace('initial state: ','').split('');
var changedState = contents[0].replace('initial state: ','').split('').map((s) => s === '#' ? 1 : 0);
var tempState = contents[0].replace('initial state: ','').split('').map((s) => s === '#' ? 1 : 0);
var changes = [];

// console.log(`Initial State: ${initState}`);

const rules = contents.slice(2)
                .map(v => {
                    const matches = v.match(/^(.{5}) => (.)/);
                    return {
                        match: matches[1].split('').map(v => v === '#' ? 1 : 0),
                        output: matches[2] === '#' ? 1 : 0,
                    };
                });

// console.log(rules);

var liveTbl = [];
rules.forEach(r => {
    let num =  0;
    for (i = 0; i < 5; i++) {
        // console.log(`num << ${num << 1}`);
        // console.log(`r = ${JSON.stringify(r,undefined,2)}`);
        // console.log(`r.match[i] = ${r.match[i]}`);
        num = (num << 1) + r.match[i];
    }
    liveTbl[num] = r.output;
});

for (k = 0; k < 20; k++){
// console.log(rules[3]);
    for (i=2; i<changedState.length-2;i++){
        // string to match
        // console.log(`TO MATCH: ${initState[i-2]},${initState[i-1]},${initState[i]},${initState[i+1]},${initState[i+2]}`);
        var temp = changedState[i-2]+','+changedState[i-1]+','+changedState[i]+','+changedState[i+1]+','+changedState[i+2];
        // console.log(temp);
        //look through rules
        for (j = 0; j < rules.length; j++){
            // var tempRule = rules[j].toString()
            if (temp == rules[j].match.toString()){
                // console.log(`${JSON.stringify(rules[j],undefined,2)}`);
                tempState[i] = rules[j].output;
                // console.log(`Init State: ${initState}`);
                // console.log(`${changedState}`);
            }
        }
    }
    changedState = tempState.toString().split();
    console.log(`Curr: ${changedState}`);
}

console.log(`Init: ${initState}`);
console.log(`Curr: ${changedState}`);