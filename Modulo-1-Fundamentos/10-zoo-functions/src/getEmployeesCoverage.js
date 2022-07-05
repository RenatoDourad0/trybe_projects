const data = require('../data/zoo_data');

const { species, employees } = data;

function findSpecies(responsibleFor) {
  const aswr = [];
  responsibleFor.forEach((element) => {
    aswr.push(species.find((element1) => element1.id === element).name);
  });
  return aswr;
}

function findLocations(responsibleFor) {
  const aswr = [];
  findSpecies(responsibleFor).forEach((element) => {
    aswr.push(species.find((element1) => element1.name === element).location);
  });
  return aswr;
}

function generateReport({ id, firstName, lastName, responsibleFor }) {
  const report = {
    id,
  };
  report.fullName = `${firstName} ${lastName}`;
  report.species = findSpecies(responsibleFor);
  report.locations = findLocations(responsibleFor);
  return report;
}

function employeeCovarageByName(name) {
  const employee = employees
    .find((element) => element.firstName === name || element.lastName === name);
  if (employee === undefined) { throw new Error('Informações inválidas'); }
  return generateReport(employee);
}

function employeeCovarageById(id) {
  const employee = employees.find((element) => element.id === id);
  if (employee === undefined) { throw new Error('Informações inválidas'); }
  return generateReport(employee);
}

function emplyeeCovarageAll() {
  return employees.map((element) => generateReport(element));
}

function getEmployeesCoverage(obj = {}) {
  const { name = 'und', id = 'und' } = obj;
  if (id === 'und' && name !== 'und') {
    return employeeCovarageByName(name);
  }
  if (name === 'und' && id !== 'und') {
    return employeeCovarageById(id);
  }
  return emplyeeCovarageAll();
}

module.exports = getEmployeesCoverage;
