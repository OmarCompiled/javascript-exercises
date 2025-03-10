const palindromes = function (string) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const newString = string.toLowerCase().split('').filter(character => alphanumerical.includes(character)).join('');
    const reversedString = newString.split('').reverse().join('');

    return newString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;

// split() splits each char and puts it into the array and join() turns all the chars in the array into a string
//done