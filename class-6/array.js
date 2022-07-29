var students = "Mahadi, Rakib, Shakib, Jibon";

var studentsName = Array("Limon", "Shohan", "Tanvir", "Ibrahim");

//Array Declare of 2nd type

var studentId = [54, 43, 32, 21, 90, 56];

console.log(studentsName);
console.log(students);
console.log(studentId);

// Cheack the array up variable 
console.log(Array.isArray(studentId));
console.log(Array.isArray(students));
console.log(Array.isArray(studentsName));

// Chack the length of Array 
console.log(studentId.length);

// Array Position 
console.log(studentId.indexOf(21));

// Array altarnative Value 
studentId[4] = "Kalam"
console.log(studentId);
studentId[0] = 100;
console.log(studentId);