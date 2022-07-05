const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  if (animal === undefined) {
    const aswr = {};
    species.forEach((element) => {
      aswr[`${element.name}`] = element.residents.length;
    });
    return aswr;
  }
  if (Object.entries(animal).length === 1) {
    const filteredAnimals = species.filter((element) => element.name === animal.specie);
    return parseInt(filteredAnimals.map((element) => element.residents.length), 10);
  }
  if (Object.entries(animal).length === 2) {
    const filteredAnimals = species.filter((element) => element.name === animal.specie);
    const filteredSex = filteredAnimals[0].residents.filter((e) => e.sex === animal.sex);
    return filteredSex.length;
  }
}

module.exports = countAnimals;
