const readLine = require("readline");
const input = '37';
//1st guess 9094419137129913 => 9137129913

//creating new score
var newScore = input;
var vNewScore = newScore;

//starting recipies e1 = 9, e2 = 0
var e1 = input.substring(0,1);
var e1ToMove = e1;
var e1CurrIndx = 0;
var e2 = input.substring(1,2);
var e2ToMove = e2;
var e2CurrIndx = 1;
var newCnt = 0;
var recipeSum = 0;

//for visulization
vNewScore = '('+newScore.substring(0,1)+')'+'['+newScore.substring(1,2)+']'+newScore.substring(2,newScore.length);

console.log(vNewScore);

//create 10 new recipies
do {
    // create new recipies e1 + e2
    recipeSum = parseInt(e1) + parseInt(e2);
    // add new recipies to newScore
    newScore += recipeSum;
    //add new recipies to newCnt
    if (recipeSum < 10) {
        newCnt += 1;
    } else {
        newCnt += 2;
    }

    // calculate how many to move (current recipe score + 1)
    e1ToMove = parseInt(e1) + 1;
    e2ToMove = parseInt(e2) + 1;
    // console.log(e1ToMove, e2ToMove);

    //move call move twice once for e1 and once for e2
    //move e1
    // console.log(`Current e1 index = ${e1CurrIndx}`);
    // console.log(`Move #: ${e1ToMove}`);
    // console.log(`Current e2 index = ${e2CurrIndx}`);
    // console.log(`Move #: ${e2ToMove}`);

    //check length
    var chkLength = e1ToMove + e1CurrIndx;
    // console.log(`Checking e1 length: ${chkLength}`);
    if (chkLength > newScore.length){
        var tempe1 = (e1ToMove + e1CurrIndx) % newScore.length;
        e1CurrIndx   = tempe1;
        e1 = newScore.substring(tempe1,tempe1+1);
    } else if (chkLength == newScore.length){
            var tempe1 = 0;
            e1 = newScore.substring(tempe1, tempe1 + 1);
            e1CurrIndx = tempe1;
    } else {
        var tempe1 = e1ToMove + e1CurrIndx;
        e1 = newScore.substring(tempe1, tempe1 + 1);
        e1CurrIndx = tempe1;
    }
    // console.log(`new e1 index: ${e1CurrIndx}`);
    // console.log(`new e1 value: ${e1}`);
    
    var chkLength = e2ToMove + e2CurrIndx;
    // console.log(`Checking e2 length: ${chkLength}`);
    if (chkLength > newScore.length){
        var tempe2 = (e2ToMove + e2CurrIndx) % newScore.length;
        //make sure recipe isn't being used by e1
        if (tempe2 === e1CurrIndx){
            tempe2++;
        }
        e2CurrIndx   = tempe2;
        e2 = newScore.substring(tempe2,tempe2+1);
    } else if (chkLength == newScore.length){
            var tempe2 = 0;
            if (tempe2 === e1CurrIndx){
                tempe2++;
            }
            e2 = newScore.substring(tempe2, tempe2 + 1);
            e1CurrIndx = tempe2;
    } else {
        var tempe2 = e2ToMove + e2CurrIndx;
        if (tempe2 === e1CurrIndx){
            tempe2++;
        }
        e2 = newScore.substring(tempe2, tempe2 + 1);
        e2CurrIndx = tempe2;
    }
    // console.log(`new e2 index: ${e2CurrIndx}`);
    // console.log(`new e2 value: ${e2}`);

    // newCnt = 10;
    
// } while (newCnt < 909441);
} while (newCnt < 15);


console.log(newScore.substring(5, 15));


// move to the next recipe rToMove = Number of recipes to mov



