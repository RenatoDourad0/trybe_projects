const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  const aswr = [];
  aswr.push(species.find((element) => element.name === animal));
  const ret = aswr[0].residents.every((element1) => element1.age >= age);
  return ret;
}

module.exports = getAnimalsOlderThan;
