const fs = require('fs');

var contents = fs.readFileSync('input_test.txt', 'utf-8').trim().split('\r\n');

for (i = 0; i < contents.length; i++) {
    console.log(contents[i]);
    console.log(`   ${contents[i+1]}`);
    console.log(`       ${contents[i+2]}`);
    i+=2;
}

// console.log(contents);

//would be nice to figure out how to split the array up into objects like
// { 
//      stage: before, after, of blank
//      register 0: # 0-9
//      register 1: input 1 # 0-9
//      register 2: input 2 # 0-9
//      register 3: output # 0-9      
// }

//loop through contents and find possible opcodes.  put in new array if there are 3 options

//types of opcodes

// addr (add register) stores into register C the result of adding register A and register B.
// addi (add immediate) stores into register C the result of adding register A and value B.

// mulr (multiply register) stores into register C the result of multiplying register A and register B.
// muli (multiply immediate) stores into register C the result of multiplying register A and value B.

// banr (bitwise AND register) stores into register C the result of the bitwise AND of register A and register B.
// bani (bitwise AND immediate) stores into register C the result of the bitwise AND of register A and value B.

// borr (bitwise OR register) stores into register C the result of the bitwise OR of register A and register B.
// bori (bitwise OR immediate) stores into register C the result of the bitwise OR of register A and value B.

// setr (set register) copies the contents of register A into register C. (Input B is ignored.)
// seti (set immediate) stores value A into register C. (Input B is ignored.)

// gtir (greater-than immediate/register) sets register C to 1 if value A is greater than register B. Otherwise, register C is set to 0.
// gtri (greater-than register/immediate) sets register C to 1 if register A is greater than value B. Otherwise, register C is set to 0.
// gtrr (greater-than register/register) sets register C to 1 if register A is greater than register B. Otherwise, register C is set to 0.

// eqir (equal immediate/register) sets register C to 1 if value A is equal to register B. Otherwise, register C is set to 0.
// eqri (equal register/immediate) sets register C to 1 if register A is equal to value B. Otherwise, register C is set to 0.
// eqrr (equal register/register) sets register C to 1 if register A is equal to register B. Otherwise, register C is set to 0.