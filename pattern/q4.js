// 5
// 4 5
// 3 4 5
// 2 3 4 5
// 1 2 3 4 5


for (let i = 5; i >= 1; i--) {
  let row = "";
  for (let j = i; j <= 5; j++) {
    row += j + " ";
  }
  console.log(row);
}
