const findTheOldest = function(people) {
    const today = new Date();
    return people.reduce((oldestPerson, currentPerson) => {
      const oldestAge = (oldestPerson.yearOfDeath || today.getFullYear()) - oldestPerson.yearOfBirth;
      const currentAge = (currentPerson.yearOfDeath || today.getFullYear()) - currentPerson.yearOfBirth;
      return currentAge > oldestAge ? currentPerson : oldestPerson;
    });
  };
  

// Do not edit below this line
module.exports = findTheOldest;
