const repeatString = function(string, num) {
    let a = "";
    if (num < 0) {
        return "ERROR";
    }
    for (let i = 0; i < num; i++) {
        a += string;
    }
    return a;
};

// Do not edit below this line
module.exports = repeatString;

