const fs = require('fs');

var contents = fs.readFileSync('./input.txt', 'utf8');
// var contents = fs.readFileSync('./input_test.txt', 'utf8');

// function part1(data) {
//     const guardLog = generateGuardLogs(data);

//     const totalSleepTimes = getTotalSleepTimes(guardLog);
//     const longestSleeper = getEntryWithLargestValue(totalSleepTimes);

//     const sleepyGuardsLog = guardLog.get(longestSleeper[0]);
//     const longestMinute = getEntryWithLargestValue(sleepyGuardsLog);

//     return Number(longestSleeper[0]) * longestMinute[0];
// }

///makes a const guardLog = function generateGuardLogs(data);

var logs = contents.split('\r\n');

logs.forEach((log) => {
    const timestampRe = /(?<=\[).*?(?=\])/;
    const timeStamp = new Date(timestampRe.exec(input));
    // console.log(timeStamp);

    const beginsRe = /begins/;
    const isBeginShift = beginsRe.test(input);
    // console.log(isBeginShift);
    
    const sleepRe = /sleep/;
    const isSleep = sleepRe.test(input);
    // console.log(isSleep);

    const idRe = /(?<=#)\d+/;
    const guard = isBeginShift ? idRe.exec(input)[0] : null;
    // console.log(guard);


});