var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('./input.txt')
    // input: require('fs').createReadStream('./input_test.txt')
});

var frequency = 0;

lineReader.on('line', (line) => {
    var fUpDown = line.substring(0,1);
    var ammount = parseInt(line.substring(1,line.length));
    // console.log(fUpDown);
    if (fUpDown == '+') {
        // console.log(`Add ${ammount}`);
        frequency += parseInt(ammount);
        // console.log(`Total: ${frequency}`);
    } else {
        // console.log(`Minus ${ammount}`);
        frequency -= parseInt(ammount);
        // console.log(`Total: ${frequency}`);
    }
    console.log(`The Frequency is: ${frequency}`);
});

