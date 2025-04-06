function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, ""); // Remove non-alphanumeric characters
  return str === str.split("").reverse().join("");
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));

function isNumberPalindrome(num) {
  num = num.toString();
  return num === num.split("").reverse().join("");
}

console.log(isNumberPalindrome(12321));
console.log(isNumberPalindrome(123));

let x = 7,
  y = 9;
[x, y] = [y, x];

console.log(x, y);
