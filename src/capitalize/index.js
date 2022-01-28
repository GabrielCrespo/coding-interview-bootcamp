function capitalize(str) {
  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }

  return result;
}

console.log(capitalize("i love breakfast at bill miller bbq"));

module.exports = capitalize;

// function capitalize(str) {
//   const words = str.split(" ");

//   for (let i = 0; i < words.length; i++) {
//     words[i] =
//       words[i][0].toUpperCase() + words[i].substring(1, words[i].length);
//   }

//   return words.join(" ");
// }
