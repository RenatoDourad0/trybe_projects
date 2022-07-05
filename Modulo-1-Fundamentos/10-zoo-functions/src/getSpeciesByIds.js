const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const animals = data.species.filter((element) => ids.includes(element.id));
  return animals;
}

module.exports = getSpeciesByIds;
