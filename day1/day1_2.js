const fs = require('fs');

var frequency = 0;
var frequecies = [0];
var dupFreq = 0;
var changes = [];
var matchFound = 'N';
var fUpDown = '';
var ammount = 0;

var contents = fs.readFileSync('./input.txt', 'utf8');
changes = contents.split('\r\n');

for (i=0; matchFound != 'Y'; i++) {
    fUpDown = changes[i].substring(0,1);
    
    ammount = parseInt(changes[i].substring(1,changes[i].length));

    if (fUpDown == '+') {
        frequency += parseInt(ammount);
    } else {
        frequency -= parseInt(ammount);
    }

    if (frequecies.indexOf(frequency) > -1) {
        console.log('found ', frequency);
        matchFound = 'Y';
        break;
    } else {
        frequecies.push(frequency);
    }

    if (i === changes.length-1) {
        i = -1;
    }

}
