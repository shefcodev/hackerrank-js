'use strict';

const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const weekDaysText = (weekdays) => {
  const weekDaysMap = weekdays.map((weekday, idx) => ({ idx: weekday }));

  const getText = (weekNumber) => {
    if (weekDaysMap[weekNumber]) {
      return weekDaysMap[weekNumber].idx;
    } else {
      throw new Error('Invalid weekday number');
    }
  };

  return getText;
};

console.log(weekDaysText(weekDays)(0));
console.log(weekDaysText(weekDays)(1));
console.log(weekDaysText(weekDays)(2));
console.log(weekDaysText(weekDays)(3));
console.log(weekDaysText(weekDays)(4));
console.log(weekDaysText(weekDays)(5));
console.log(weekDaysText(weekDays)(6));
console.log(weekDaysText(weekDays)(7));
