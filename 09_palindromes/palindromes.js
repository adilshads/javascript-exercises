const palindromes = function(n) {
    const string = n;
    const array = Array.from(string.toLowerCase()).filter((char) => /[a-z]/.test(char));
    const reversedArray = [...array].reverse();
  
    return array.join("") === reversedArray.join("");
  };
  

// Do not edit below this line
module.exports = palindromes;
