// 5 4 3 2 1
// 5 4 3 2
// 5 4 3
// 5 4
// 5

let n = 5;
for (let i = 1; i <=5; i++) {
    let row = "";
    for (let j = n; j >= i; j--) {
        row += j + " ";
    }
    console.log(row);

}