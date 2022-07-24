
// Comparison and Conditional operator and Logical operator

// #3 variable and selected the big Number 
let a = 120;
let b = 160;
let c = 10;
if (a > b && a > c) {
    console.log("A is bigger Number")
}
else if (b > a && b > c) {
    console.log("B is bigger Number")
} else {
    console.log("C is bigger Number");
}

// Number of odd and even and zero 
let mathNumber = 45;
if (mathNumber % 2 == 0 && mathNumber / 2 != 0) {
    console.log("This Number is Even")
} else if (mathNumber % 2 == 0) {
    console.log("This Number is Zero")
} else {
    console.log("This number is Odd");
}

// Mark You got GPA 
let mark = 56;
if (mark >= 33 && mark <= 39) {
    console.log("You got D")
} else if (mark >= 40 && mark <= 49) {
    console.log("You got C")
} else if (mark >= 50 && mark <= 59) {
    console.log("You got B")
} else if (mark >= 60 && mark <= 69) {
    console.log("You got A-")
} else if (mark >= 70 && mark <= 79) {
    console.log("You got A")
} else if (mark >= 80 && mark <= 100) {
    console.log("You got A+")
} else {
    console.log("F")
};
