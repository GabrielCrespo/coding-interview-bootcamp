function steps(n, row = 0, stair = "") {
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  const add = stair.length <= row ? "#" : " ";

  steps(n, row, stair + add);
}

module.exports = steps;

// function steps(n) {
//   for (let i = 0; i < n; i++) {
//     let steps = "";
//     for (let j = 0; j < n; j++) {
//       if (j <= i) {
//         steps += "#";
//       } else {
//         steps += " ";
//       }
//     }
//     console.log(steps);
//   }
// }
