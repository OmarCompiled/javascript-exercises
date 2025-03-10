const getTheTitles = function(booksArray) {
    const titles = Array.from(booksArray, book => book.title);
    //alt // return booksArray.map(book => book.title);

    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;


//done