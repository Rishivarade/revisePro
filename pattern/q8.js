// 1
// 1 0
// 1 0 1
// 1 0 1 0
// 1 0 1 0 1

let n = 5;
for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        if (j % 2) {
            row += '1 ';
        } else {
            row += '0 ';
        }
    }
    console.log(row);

}