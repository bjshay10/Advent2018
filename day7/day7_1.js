const fs = require('fs');

var contents = fs.readFileSync('./input.txt', 'utf8');
// var contents = fs.readFileSync('./input_test.txt', 'utf8');

var steps = contents.split('\r\n');
var preStep = '';
var postStep = '';
var stepArr = [];
var stepsByAlpha = [];
var numPreSteps = [];

steps.forEach((step) => {
    //parse the string
    preStep = step.substring(5,6);
    postStep = step.substring(36,37);

    //create an array of steps
    stepArr.push({
        PreStep: preStep,
        PostStep: postStep
    });    
});

//get a count of number of preSteps to get where to start
for (i = 65; i < 91; i++){
    var str = String.fromCharCode(i);
    var stepsByAlpha = stepArr.filter((step) => {
        if (str === step.PostStep) {
            return true;
        }
    });
    console.log(`Step ${str} has ${JSON.stringify(stepsByAlpha)}`);
    numPreSteps.push({
        Step: str,
        NumPreSteps: stepsByAlpha.length
    });
}

// console.log(`${numPreSteps}`);

numPreSteps.sort((a,b) => (a.NumPreSteps > b.NumPreSteps) ? 1 : ((b.NumPreSteps > a.NumPreSteps) ? -1 : 0));

// console.log(numPreSteps);
var string = '';

for (j = 0; j < numPreSteps.length; j++) {
    var temp = numPreSteps.filter((step) => {
        if (j === step.NumPreSteps) {
            return true;
        }
    });
    temp.sort((a,b) => (a.Step > b.Step) ? 1 : ((b.Step > a.Step) ? -1 : 0));
    temp.forEach((a) => {
        string += a.Step;
    });
}

// console.log(string);
