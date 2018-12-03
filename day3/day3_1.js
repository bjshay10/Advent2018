const fs = require('fs');

// var contents = fs.readFileSync('./input.txt', 'utf8');
var contents = fs.readFileSync('./input_test.txt', 'utf8');

var claims = contents.split('\r\n');
var claimNum = 0;
var fromEdgeX = 0;
var fromEdgeY = 0;
var distX = 0;
var distY = 0;

var square = {
    x: 0,
    y: 0,
    used: 0
};

claims.forEach((claim) => {
    //breaking up the claim strings
    claimNum = claim.substring(1,claim.indexOf('@'));
    fromEdgeX = claim.substring(claim.indexOf('@')+2,claim.indexOf(','));
    fromEdgeY = claim.substring(claim.indexOf(',')+1, claim.indexOf(':'));
    distX = claim.substring(claim.indexOf(':')+2,claim.indexOf('x'));
    distY = claim.substring(claim.indexOf('x')+1,claim.length);

    console.log(`Claim #: ${claimNum}`);
    console.log(`   Starting at: ${fromEdgeX} x ${fromEdgeY}`);
    console.log(`   Dimensions: ${distX}x${distY}`);
    // go to fromEdgeX by fromEdgeY 
    // check to see if value exists
    // if no create a new "square"
    // if yes increment used and move to next square
});
