const removeFromArray = function(array, ...elements) {
    for (const element of elements) {
        if (array.indexOf(element) !== -1) {
            array.splice(array.indexOf(element), 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
