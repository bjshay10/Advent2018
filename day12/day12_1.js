const fs = require('fs');

var contents = fs.readFileSync('./input_test.txt', 'utf8').toString().split('\r\n');

var initState = contents[0].replace('initial state: ','').split('').map((s) => s === '#' ? 1 : 0);
// var initState = contents[0].replace('initial state: ','').split('');
var changedState = initState;
var changes = [];

console.log(`Initial State: ${initState}`);

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

// console.log(rules[3]);
for (i=2; i<initState.length-2;i++){
    // string to match
    // console.log(`TO MATCH: ${initState[i-2]},${initState[i-1]},${initState[i]},${initState[i+1]},${initState[i+2]}`);
    var temp = initState[i-2]+','+initState[i-1]+','+initState[i]+','+initState[i+1]+','+initState[i+2];
    // console.log(temp);
    //look through rules
    for (j = 0; j < rules.length; j++){
        // var tempRule = rules[j].toString()
        if (temp == rules[j].match.toString()){
            // console.log(`${JSON.stringify(rules[j],undefined,2)}`);
            changedState[i] = rules[j].output;
            // console.log(`Init State: ${initState}`);
            console.log(`change state: ${changedState}`);
        }
    }
}

console.log(`Init: ${initState}`);
console.log(`Curr: ${changedState}`);