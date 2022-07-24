
// Check LeapYear for Using TernaryOperator

var year = 2050;
var YearResult = ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) ? "This year is Leap Year " : "This Year is not Leap Year";
console.log(YearResult);