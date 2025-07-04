// 1
// 21
// 321
// 4321
// 54321
let n = 5;
for (let i = 1; i <= n; i++) {
    let row = ""
    for (let j = i; j >= 1; j--) {
        row += j+" ";

    }
    console.log(row);

}