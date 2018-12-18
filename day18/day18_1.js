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
        cntEmpty = 0;
        cntWood = 0;
        cntLumber = 0;
        
        if ((r-1 === -1) || (c-1 === -1)) {
            // console.log(`cell outside array - ignore cell ${r-1} or ${c-1}`);
            continue;
        } else if ((r+1 > array[0].length) || (c+1 > array.length)) {
            // console.log(`cell outside array - ignore cell ${r+1} or ${c+1}`);
            continue;
        } else {
            // -1, -1
            if (array[r-1][c-1] == '.'){
                cntEmpty++;
            } else if (array[r-1][c-1] == '|'){
                cntWood++;
            } else {
                cntLumber++;
            }
            // -1, 0
            if (array[r-1][c] == '.'){
                cntEmpty++;
            } else if (array[r-1][c] == '|'){
                cntWood++;
            } else {
                cntLumber++;
            }
            // -1, 1
            if (array[r-1][c+1] == '.'){
                cntEmpty++;
            } else if (array[r-1][c+1] == '|'){
                cntWood++;
            } else {
                cntLumber++;
            }
            // 0, -1
            if (array[r][c-1] == '.'){
                cntEmpty++;
            } else if (array[r][c-1] == '|'){
                cntWood++;
            } else {
                cntLumber++;
            }
            // 0, 1
            if (array[r][c+1] == '.'){
                cntEmpty++;
            } else if (array[r][c+1] == '|'){
                cntWood++;
            } else {
                cntLumber++;
            }
            // 1, -1
            if (array[r+1][c-1] == '.'){
                cntEmpty++;
            } else if (array[r+1][c+1] == '|'){
                cntWood++;
            } else {
                cntLumber++;
            }
            // 1, 0
            if (array[r+1][c] == '.'){
                cntEmpty++;
            } else if (array[r+1][c] == '|'){
                cntWood++;
            } else {
                cntLumber++;
            }
            // 1, 1
            if (array[r+1][c+1] == '.'){
                cntEmpty++;
            } else if (array[r+1][c+1] == '|'){
                cntWood++;
            } else {
                cntLumber++;
            }
        }

        console.log('-', cntEmpty);

        if (cntEmpty > 2) {
            array[r][c] = '.';
        }
        if (cntWood > 2) {
            array[r][c] = '|';
        }
        if (cntLumber > 2) {
            array[r][c] = '#';
        }
    }
}
console.log(array);


//display final?
//console.log(array);

// An open acre will become filled with trees if three or more adjacent acres contained trees. Otherwise, nothing happens.
// An acre filled with trees will become a lumberyard if three or more adjacent acres were lumberyards. Otherwise, nothing happens.
// An acre containing a lumberyard will remain a lumberyard if it was adjacent to at least one other lumberyard and at least one acre containing trees. Otherwise, it becomes open.

//check open acre
//check trees acre
//check lumberyard acres
