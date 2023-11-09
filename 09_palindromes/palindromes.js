const palindromes = function (string) {
    let letters = string.toLowerCase().split("");

    for (let i = 0; i < letters.length; i++) {
        if (!!letters[i].match(/[.,:!? ]/)) {
            letters.splice(i, 1);
            --i;
        }
    }
    
    let normalWord = letters.join("");
    let reversedWord = letters.reverse().join("");
    return normalWord === reversedWord;
};

// Do not edit below this line
module.exports = palindromes;
