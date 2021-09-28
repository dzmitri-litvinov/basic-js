import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  if(date === undefined) return 'Unable to determine the time of year!';


  console.log(date);
  if(!isDateValid(date)) throw new Error('Invalid date!');
  
  let month = date.getMonth()
  switch(month)
  {
    case 11:
    case 0:
    case 1:
      return "winter";
    case 2:
    case 3:
    case 4:
      return "spring";
    case 5:
    case 6:
    case 7:
      return "summer";
    case 8:
    case 9:
    case 10:
      return "autumn";  
  }
}

function isDateValid(d)
{
  if (Object.prototype.toString.call(d) === "[object Date]") {
    // it is a date
    if (isNaN(d.getTime())) {  // d.valueOf() could also work
      return false;// date is not valid
    } else {
      return true;// date is valid
    }
  } else {
    return false;// not a date
  }
}