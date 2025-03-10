const fibonacci = function(index) {
    index = Number(index);
    if(index === 0) {
        return 0;
    } else if(index === 1 | index === 2) {
        return 1;
    } else if(index > 2){
        return fibonacci(index - 1) + fibonacci(index - 2);
    }

    return "OOPS";
};

// Do not edit below this line
module.exports = fibonacci;


//done