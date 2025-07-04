// 0
// 11
// 000
// 1111
// 00000

let n = 5;
for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        if (i % 2) {
            row += '0 ';
        } else {
            row += '1 ';
        }
    }
    console.log(row);
}