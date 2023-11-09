const findTheOldest = function(people) {
    people.sort((a, b) => {
        let yearA = a.yearOfDeath || new Date().getFullYear();
        let yearB = b.yearOfDeath || new Date().getFullYear();
        return (yearB - b.yearOfBirth) - (yearA - a.yearOfBirth);
    });
    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
