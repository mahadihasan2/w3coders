
// switch-Case Practice 

var color = "red";
switch (color) {
    case "green":
        console.log("My Favorite Color is Green");
        break
    case "red":
        console.log("My Favorite color is RED");
        break
    case "white":
        console.log("My favorite color is White");
        break
    default:
        console.log("My Favorite is not Matching")

}

// odd and even number using switch-case 

var number = 30;
var result = number % 2;
switch (result) {
    case 0:
        console.log("This Number is Even ");
        break
    default:
        console.log("This number is Odd");

}

//JavaScript Date Function 

var date = new Date();
console.log(date);
console.log(date.toDateString())
console.log(date.toTimeString())
console.log(date.toLocaleDateString())
