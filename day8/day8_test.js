const fs = require('fs');

const inp1 = fs.readFileSync('input.txt').toString().split(' ').map(x => +x);
const inp2 = inp1.slice();

function part1() {
    const count = inp1.shift();
    const meta = inp1.shift();

    let ans = 0;
    for (let _ = 0; _ < count; _ ++)
        ans += part1();

    for (let _ = 0; _ < meta; _ ++)
        ans += inp1.shift();
    
    return ans;
}

function part2() {
    const count = inp2.shift();
    const meta = inp2.shift();

    if (count) {
        const chtr = [];
        for (let _ = 0; _ < count; _ ++)
            chtr.push(part2());
        const metr = [];
        for (let _ = 0; _ < meta; _ ++)
            metr.push(inp2.shift());

        let ans = 0;
        for (const u of metr) {
            const ix = u - 1;
            if (ix >= 0 && ix < chtr.length)
                ans += chtr[ix];
        }
        return ans;
    } else {
        let ans = 0;
        for (let _ = 0; _ < meta; _ ++)
            ans += inp2.shift();
        return ans;
    }
}

console.log(part1());
console.log(part2());