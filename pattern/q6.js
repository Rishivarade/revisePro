// 1
// 23
// 4  6
// 7      10
// 11 12 13 14 15

let n = 5;
let num = 1;

for (let i = 1; i <= n; i++) {
  let row = "";

  for (let j = 1; j <= i; j++) {
    if (i === 1 || i === n || j === 1 || j === i) {
      row = row + num + " ";
    } else {
      row = row + "  ";
    }
    num++;
  }

  console.log(row);
}
