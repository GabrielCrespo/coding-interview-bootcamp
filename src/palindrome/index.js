function palindrome(str) {
  let reversed = "";

  for (i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed === str;
}

module.exports = palindrome;

// function palindrome(str) {
//   return str.split("").every((char, i) => char === str[str.length - i - 1]);
// }
