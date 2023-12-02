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
    try {
      if (isValidNIC(nicNumber)) {
        const extractedData = extractDataFromNIC(nicNumber);
        const days = extractedData.dayList;
        const foundData = findDayAndGender(days);
  
        const month = foundData.month;
        const year = extractedData.year;
        const day = foundData.day;
        const gender = foundData.gender;
  
        const formattedDOB = formatDOB(day.toString(), month, year);
        return {
          dateOfBirth: formattedDOB,
          gender,
        };
      } else {
        throw new Error('Invalid NIC Number');
      }
    } catch (error) {
      if (error instanceof RangeError) {
        // Handle invalid time value error here
        console.error('Error:', error.message);
        return {
          dateOfBirth: null, // Set default values or handle as needed
          gender: null,
        };
      } else {
        throw error; // Re-throw other errors to maintain the error propagation
      }
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
  console.log({result})
    return result;
  }
  
  function isValidNIC(nicNumber) {
    return (nicNumber.length === 9 || nicNumber.length === 12) && !isNaN(nicNumber);
  }
  
  // function formatDOB(day, month, year) {
  //   const formattedMonth = month.length > 1 ? month : '0' + month;
  //   const formattedDay = day.length > 1 ? day : '0' + day;
  //   return `${formattedMonth}/${formattedDay}/${year}`;
  // }

  function formatDOB(day, month, year) {
    const monthsMap = {
      January: '01',
      February: '02',
      March: '03',
      April: '04',
      May: '05',
      June: '06',
      July: '07',
      August: '08',
      September: '09',
      October: '10',
      November: '11',
      December: '12',
    };
  
    const formattedMonth = monthsMap[month] || 'Invalid Month'; // Convert month name to its numeric representation
  console.log("day.length", typeof(day),day, day.length)
    const formattedDay = day.length > 1 ? day : '0' + day;
  
    let formattedYear;
    if (year.length === 2) {
      const currentYear = new Date().getFullYear().toString();
      const currentCentury = parseInt(currentYear.substring(0, 2), 10);
      const inputYear = parseInt(year, 10);
  
      const inputCentury = inputYear > parseInt(currentYear.substring(2), 10) ? currentCentury - 1 : currentCentury;
  
      formattedYear = `${inputCentury}${year}`;
    } else {
      formattedYear = year;
    }
  
    return `${formattedDay}/${formattedMonth}/${formattedYear}`;
  }
  
  // module.exports = {
  //   extractGenderAndDOB,
  // };
  