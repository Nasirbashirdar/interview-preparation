function addWords(word1, word2) {
  if (word1.length !== word2.length) {
    console.log("INVALID");
    return;
  }

  let result = "";

  for (let i = 0; i < word1.length; i++) {
    let sum = word1.charCodeAt(i) - 97 + 1 + (word2.charCodeAt(i) - 97 + 1);
    let newChar = String.fromCharCode(((sum - 1) % 26) + 97);

    result += newChar;
  }

  return result;
}

console.log(addWords("bat", "ant"));
