function reverse(str) {
  let reversedStr = "";

  for (i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }

  return reversedStr;
}

module.exports = reverse;

// function reverse(str) {
//   return str.split("").reverse().join("");
// }

// function reverse(str) {
//   let reversedStr = "";

//   for (let character of str) {
//     reversedStr = character + reversedStr;
//   }

//   return reversedStr;
// }

// function reverse(str) {
//   return str
//     .split("")
//     .reduce((reversed, character) => character + reversed, "");
// }
