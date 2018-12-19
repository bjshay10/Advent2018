const fs = require('fs');

var contents = fs.readFileSync('input_test.txt', 'utf-8').split('\r\n');
// var contents = fs.readFileSync('input.txt', 'utf-8').split('\r\n');

var cntEmpty, cntWood, cntLumber = 0;

// console.log(`X axis of contents = ${contents[0].length}`);
// console.log(`Y axis of contents = ${contents.length}`);

var array = Array(contents.length).fill().map(() => Array(contents[0].length).fill(0));
console.log(array);

//pushing contents into an 2d array
for (j = 0; j < contents.length; j++){
    // console.log(contents[j]);
    for (i = 0; i < contents[0].length; i ++){
        // console.log(`i = ${i} = ${contents[j].toString().substring(i,i+1)}, j = ${j}`);
        array[i][j] = contents[i].toString().substring(j,j+1);
    }
}

//display 1st time
console.log(array);

//loop through array
// 
//  |  i-1,j-1 | i-1,j  | i-1,j+1   |
//  |  i,j-1 | i,j  | i,j+1   |
//  |  i+1,j-1 | i+1,j  | i+1,j+1  |
//

// loop rows
for (r = 0;  r < array[0].length; r++){
    //loop columns
    for (c = 0; c < array.length; c++) {
        // top row
        if (r === 0) {
            //left side
            if (c === 0) {
                //to right i,j+1
                //to bottom i+1,j
                //to lower right diag i+1,j+1
            //not left or right 
            } else if ((c != 0) && (c < array[0].length - 1)){
                //left
                //left diag down
                //bottom
                //right diag down
                //right
            // right
            } else if (c = array[0].length - 1) {
                //left
                //left diag down
                //bottom
            }
        // not top or bottom row
        } else if ((r < 0) && (r < array.length -1)) {
            //if left side
            if (c === 0){
                //top
                //right diag up
                //right
                //right diag down
                //bottom
            //any
            } else if ((c != 0) && ( c < array[0].length - 1)) {
                //left diag up
                //top
                //right diag up
                //left
                //right
                //left diag down
                //bottom
                //right diag down
            //right side
            } else if (c === array[0].length - 1) {
                //left diag up
                //top
                //left
                //left diag down
                //bottom
            }            
        //bottom row
        } else if (r === array.length -1) {
            //left
            if (c === 0) {
                //top
                //right diag up
                //right
            //center
            } else if ((c != 0) && (c < array[0].length -1)){
                //left
                //left diag up
                //top
                //right diag up
                //right
            //right    
            } else if (c === array[0].length) {
                //left
                //left diag up
                //top
            }
            
        }
    }
}
console.log(array);

function countChar(char) {
    if (char == '.') {
        cntEmpty++;
    } else if (char == '|') {
        cntWood++;
    } else {
        cntLumber++;
    }
}