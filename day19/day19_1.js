const fs = require('fs');

var contents = fs.readFileSync('input_test.txt', 'utf-8').split('\r\n');
// var contents = fs.readFileSync('input.txt', 'utf-8').split('\r\n');

//register [ip, input1, input2, input3, output]
var register = [[0,0,0,0,0,0]];
var ip, i;

//registers
var r0,r1,r2,r3,r4,r5 = 0;

//get IP value
var m = contents[0].toString().split(' ');
ip = parseInt(m[1]);
// console.log(instructionPointer);

//increase ip to correct instruction pointer
ip++;

// //loop through contents starting at i(instructionPointer)
// for (ip; ip < contents.length; ip++){

//     var instruction = contents[ip].toString().split(' ');
//     console.log(instruction);

//     //use instruction[0] to get instruction type addi, seti, etc.
//     switch (instruction[0]) {
//         case 'seti': 
//         default: console.log(`default`);
            
//     } 

// }


