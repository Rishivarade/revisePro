// 1
// 00
// 111
// 0000
// 11111

let n = 5;
for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        if (i % 2) {
            row += '1 ';
        } else {
            row += '0 ';
        }
    }
    console.log(row);
}