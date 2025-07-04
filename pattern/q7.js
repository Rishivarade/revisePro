// 0
// 0 1
// 0 1 0
// 0 1 0 1
// 0 1 0 1 0

let n = 5;
for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        if (j % 2) {
            row += '0 ';
        } else {
            row += '1 ';
        }
    }
    console.log(row);

}