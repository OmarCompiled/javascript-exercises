const findTheOldest = function(peopleArray) {
    let newArray = [];
    peopleArray.forEach((person) => {
        person.yearOfDeath ??= new Date().getFullYear();
        newArray.push([person.name, (person.yearOfDeath - person.yearOfBirth)])
    });
    newArray.sort((a,b) => b[1] - a[1]);
    return peopleArray.find((person) => person.name === newArray[0][0]);
};

// Do not edit below this line
module.exports = findTheOldest;


//done

// NOT the most efficient method, but it works. :)