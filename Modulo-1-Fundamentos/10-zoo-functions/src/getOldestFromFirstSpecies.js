const data = require('../data/zoo_data');

const { employees, species } = data;

function getOldestFromFirstSpecies(id) {
  const person = employees.find((element) => element.id === id);
  const firstAnimalUnderResponsabilityId = person.responsibleFor[0];
  const AnimalGroup = species.find((element) => element.id === firstAnimalUnderResponsabilityId);
  const oldesAnimal = AnimalGroup.residents.reduce((acc, curr) => {
    if (curr.age > acc.age) {
      return curr;
    }
    return acc;
  });
  return [oldesAnimal.name, oldesAnimal.sex, oldesAnimal.age];
}
console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
module.exports = getOldestFromFirstSpecies;
