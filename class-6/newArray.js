const studentName = ["Ariful", "Shohsn", "Kobir", "Kibriya"];
const newArray = Array.from(studentName);
console.log(newArray);
newArray[0] = "Torikul"
newArray[1] = "Hasibul"
newArray[2] = "Shanto"
newArray[3] = "Pranto"
console.log(newArray);

// Push is the Array Method 
const hereMe = [890, 43, 21, 65, 90];
hereMe.push("W3Codevs is a best institute of programming institute");
console.log(hereMe);

// pop Method 
const number = [54, 78, 89, 06, 40, 32];
number.pop()
console.log(number);

// unShift Method 
const data = [32, 78, 90, 65, 21];
data.shift()
data.shift()
data.unshift(1290)

console.log(data);