const fibonacci = function(num) {
    if (+num < 3 && +num > 0) {
        return 1;
    } else if (num < 0) {
        return "OOPS";
    }
    return fibonacci(+num - 1) + fibonacci(+num - 2);
};

// Do not edit below this line
module.exports = fibonacci;
