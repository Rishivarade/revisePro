//    1
//   121
//  12321
// 1234321

let n = 5;
for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= n - i; j++) {
        row += ' ';
    }
    for (let j = 1; j <= i; j++) {
        row += j;
    }
    for (let j = i - 1; j >= 1; j--) {
        row += j;
    }
    console.log(row);
}
