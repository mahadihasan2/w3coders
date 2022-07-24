
// Check LeapYear for Using TernaryOperator

var year = 2054;
var YearResult = ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) ? (year + "This year is Leap Year ") : (year + " " + "This Year is not Leap Year");
console.log(YearResult);