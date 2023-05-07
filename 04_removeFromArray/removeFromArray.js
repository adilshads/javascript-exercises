const removeFromArray = function(array, ...arg) {
    for (let i = 0; i < array.length; i++) {
        if (arg.includes(array[i])) {
            array.splice(i, 1);
            i--;
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
