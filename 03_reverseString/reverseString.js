const reverseString = function(string) {
    return string.split('').reverse().join('');
};

let input = 'hello';
let output = reverseString(input);
// Do not edit below this line
module.exports = reverseString;
