const data = require('../data/zoo_data');

const { species } = data;
const locations = ['NE', 'NW', 'SE', 'SW'];
const animalMapNoParams = {
  NE: ['lions', 'giraffes'],
  NW: ['tigers', 'bears', 'elephants'],
  SE: ['penguins', 'otters'],
  SW: ['frogs', 'snakes'],
};

const animalMap = () => {
  const aswr = {};
  locations.forEach((element) => {
    aswr[element] = species.filter(((element1) => element1.location === element))
      .map((element1) => {
        const news = {};
        news[element1.name] = element1.residents;
        return news;
      });
  });
  return aswr;
};

const namesMap = () => { // includeNames
  const map = animalMap();
  locations.forEach((element) => {
    map[element].forEach((element1) => {
      const entries = Object.entries(element1);
      element1[entries[0][0]] = entries[0][1].map((element2) => element2.name);
    });
  });
  return map;
};

const sortedByName = () => { // sorted
  const namedMap = namesMap();
  locations.forEach((element) => {
    namedMap[element].forEach((element1) => {
      const entries = Object.entries(element1);
      element1[entries[0][0]] = entries[0][1].sort();
    });
  });
  return namedMap;
};

const sortedBySex = (arg) => { // sex
  const map = animalMap();
  locations.forEach((element) => {
    map[element].forEach((element1) => {
      const entries = Object.entries(element1);
      element1[entries[0][0]] = entries[0][1]
        .filter((element2) => element2.sex === arg)
        .map((element3) => element3.name);
    });
  });
  return map;
};

function getAnimalMap(options = {}) {
  if (Object.keys(options).includes('includeNames')) {
    return namesMap();
  }
  if (Object.keys(options).includes('sorted')) {
    return sortedByName();
  }
  if (Object.values(options).includes('male')) {
    return sortedBySex('male');
  }
  if (Object.values(options).includes('female')) {
    return sortedBySex('female');
  }
  return animalMapNoParams;
}

console.log(getAnimalMap({ sex: 'female' }));

module.exports = getAnimalMap;
