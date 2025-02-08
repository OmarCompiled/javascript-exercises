const removeFromArray = function(array, ...args) {
    const new_args = [...args];
    let new_array = [];
    array.forEach(element => {
        if(!new_args.includes(element)) {
            new_array.push(element);
        }    
    });
    return new_array;
}

// Do not edit below this line
module.exports = removeFromArray;


// Done!