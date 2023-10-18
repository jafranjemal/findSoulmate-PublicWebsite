const MONTHS = [
    { name: 'January', days: 31 },
    { name: 'February', days: 29 },
    { name: 'March', days: 31 },
    { name: 'April', days: 30 },
    { name: 'May', days: 31 },
    { name: 'June', days: 30 },
    { name: 'July', days: 31 },
    { name: 'August', days: 31 },
    { name: 'September', days: 30 },
    { name: 'October', days: 31 },
    { name: 'November', days: 30 },
    { name: 'December', days: 31 },
  ];
  
 export function extractGenderAndDOB(nicNumber) {
    if (isValidNIC(nicNumber)) {
      const extractedData = extractDataFromNIC(nicNumber);
      const days = extractedData.dayList;
      const foundData = findDayAndGender(days);
  
      const month = foundData.month;
      const year = extractedData.year;
      const day = foundData.day;
      const gender = foundData.gender;
  
      const formattedDOB = formatDOB(day, month, year);
      return {
        dateOfBirth: formattedDOB,
        gender,
      };
    } else {
      throw new Error('Invalid NIC Number');
    }
  }
  
  function findDayAndGender(days) {
    let dayList = days;
    let month = '';
    let result = { day: '', month: '', gender: '' };
  
    if (dayList < 500) {
      result.gender = 'Male';
    } else {
      result.gender = 'Female';
      dayList -= 500;
    }
  
    for (const monthData of MONTHS) {
      if (monthData.days < dayList) {
        dayList -= monthData.days;
      } else {
        month = monthData.name;
        break;
      }
    }
  
    result.day = dayList;
    result.month = month;
    return result;
  }
  
  function extractDataFromNIC(nicNumber) {
    let result = { year: '', dayList: '', character: '' };
  
    if (nicNumber.length === 9) {
      result.year = nicNumber.substr(0, 2);
      result.dayList = nicNumber.substr(2, 3);
    } else if (nicNumber.length === 12) {
      result.year = nicNumber.substr(0, 4);
      result.dayList = nicNumber.substr(4, 3);
      result.character = 'no';
    }
  
    return result;
  }
  
  function isValidNIC(nicNumber) {
    return (nicNumber.length === 9 || nicNumber.length === 12) && !isNaN(nicNumber);
  }
  
  function formatDOB(day, month, year) {
    const formattedMonth = month.length > 1 ? month : '0' + month;
    const formattedDay = day.length > 1 ? day : '0' + day;
    return `${formattedMonth}/${formattedDay}/${year}`;
  }
  
  // module.exports = {
  //   extractGenderAndDOB,
  // };
  