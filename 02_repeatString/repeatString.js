const repeatString = function(string, num) {
    og_string = string;
    if(num === 0) {
        return "";
    }else if(num < 0) {
        return "ERROR";
    } else {
        for(let i = 0; i < num - 1; i++) {
            string += og_string;
       }
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;


// Done!