var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('./input.txt')
    // input: require('fs').createReadStream('./input_test.txt')
});

var frequency = 0;

lineReader.on('line', (line) => {
    var fUpDown = line.substring(0,1);
    var ammount = parseInt(line.substring(1,line.length));

    if (fUpDown == '+') {
        frequency += parseInt(ammount);
    } else {
        frequency -= parseInt(ammount);
    }
    console.log(`The Frequency is: ${frequency}`);
});

