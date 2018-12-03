const fs = require('fs');

var contents = fs.readFileSync('./input.txt', 'utf8');
// var contents = fs.readFileSync('./input_test.txt', 'utf8');

var claims = contents.split('\r\n');
var claimNum = 0;
var fromEdgeX = 0;
var fromEdgeY = 0;
var distX = 0;
var distY = 0;

class Sheet {
    constructor (width = 1000, height = 1000) {
        this._grid = Array
            .from({length: height})
            .map(() => Array
                .from({length: width})
                .map(() => 0));
    }

    reserve (claim) {
        for (let y = 0; y < claim.height; y++) {
          for (let x = 0; x < claim.width; x++) {
            this._grid[y + claim.top][x + claim.left] += 1;
          }
        }
    }

    get reservedSquareInches () {
        return this._grid.reduce((a, b) => {
          return a + b.filter((x) => x >= 2).length;
        }, 0);
    }
}

const fabric = (input, width = 1000, height = 1000) => {
    const sheet = new Sheet(width, height);
    console.log(input);
    input
        .split('\n')
        .map((x) => {
            const parts = x.match(/#(\d+) @ (\d+),(\d+): (\d+)x(\d+)/);

            return {
                id: +parts[1],
                top: +parts[3],
                left: +parts[2],
                width: +parts[4],
                height: +parts[5],
            };
        })
        .forEach((claim) => sheet.reserve(claim));

    return sheet.reservedSquareInches;
};

var result = fabric(contents,1000,1000);
console.log(result);

// claims.forEach((claim) => {
//     //breaking up the claim strings
//     claimNum = claim.substring(1,claim.indexOf('@'));
//     fromEdgeX = claim.substring(claim.indexOf('@')+2,claim.indexOf(','));
//     fromEdgeY = claim.substring(claim.indexOf(',')+1, claim.indexOf(':'));
//     distX = claim.substring(claim.indexOf(':')+2,claim.indexOf('x'));
//     distY = claim.substring(claim.indexOf('x')+1,claim.length);

//     console.log(`Claim #: ${claimNum}`);
//     console.log(`   Starting at: ${fromEdgeX} x ${fromEdgeY}`);
//     console.log(`   Dimensions: ${distX}x${distY}`);
//     // go to fromEdgeX by fromEdgeY 
//     // check to see if value exists
//     // if no create a new "square"
//     // if yes increment used and move to next square
// });
