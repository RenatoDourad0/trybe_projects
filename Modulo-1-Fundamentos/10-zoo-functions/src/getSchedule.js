const data = require('../data/zoo_data');

const { species, hours } = data;

const hoursText = (weekDay) => `Open from ${hours[weekDay].open}am until ${hours[weekDay].close}pm`;

const exhibitionDays = (weekday) => species.filter((element) => element.availability
  .includes(weekday))
  .map((element) => element.name);

const weekDaysArgument = (scheduleTarget) => {
  if (scheduleTarget === 'Monday') {
    return {
      Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
    };
  }
  const animalsNames = species.filter((element) => element.availability
    .includes(scheduleTarget))
    .map((element) => element.name);
  return {
    [scheduleTarget]: {
      officeHour: hoursText(scheduleTarget),
      exhibition: animalsNames,
    },
  };
};

function randomArgument() {
  return {
    Tuesday: { officeHour: hoursText('Tuesday'), exhibition: exhibitionDays('Tuesday') },
    Wednesday: { officeHour: hoursText('Wednesday'), exhibition: exhibitionDays('Wednesday') },
    Thursday: { officeHour: hoursText('Thursday'), exhibition: exhibitionDays('Thursday') },
    Friday: { officeHour: hoursText('Friday'), exhibition: exhibitionDays('Friday') },
    Saturday: { officeHour: hoursText('Saturday'), exhibition: exhibitionDays('Saturday') },
    Sunday: { officeHour: hoursText('Sunday'), exhibition: exhibitionDays('Sunday') },
    Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
  };
}

function getSchedule(scheduleTarget) {
  const speciesNames = species.map((element) => element.name);
  if (speciesNames.includes(scheduleTarget)) {
    return species.find((element) => element.name === scheduleTarget).availability;
  }
  const weekDays = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];
  if (weekDays.includes(scheduleTarget)) {
    return weekDaysArgument(scheduleTarget);
  }
  return randomArgument();
}
console.log(getSchedule('nada'));
module.exports = getSchedule;
