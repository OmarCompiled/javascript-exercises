const leapYears = function(year) {
    let leap = (year % 4 == 0 && year % 100 != 0 || year % 400 == 0);
    if(leap) {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;

// Done!