const sumAll = function(minLimit, maxLimit) {
    let sum = 0; // very important!
    let notNums = (typeof(minLimit) != "number" || typeof(maxLimit) != "number");            // I chose to put each constraint into a bool
    let isDecimal = (minLimit.toString().includes('.') || maxLimit.toString().includes('.'));// just for readability sake.
    let isNegative = (minLimit < 0 || maxLimit < 0);                                            
    if(notNums || isDecimal || isNegative) {
        return "ERROR";
    } else {
        let compare = (a, b) => {a-b;};
        const Limits = [minLimit, maxLimit];
        Limits.sort(compare());
        for(let i = Limits[0]; i <= Limits[1]; i++) {
            sum += i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

// Done!