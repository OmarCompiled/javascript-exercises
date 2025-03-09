const palindromes = function (string) {
    let reverseString = '';
    string = string.replaceAll(/(!|@|#|,|%|&| |[0-9])+/g, '').toLowerCase();
    for(let i = string.length - 1; i >= 0; i--) {
        reverseString += string.at(i);
    }
    if(string === reverseString) {
        return true;
    }
    
    return false;
};

// Do not edit below this line
module.exports = palindromes;
