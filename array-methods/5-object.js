// 1. Write a JavaScript program to list the properties and values of a JavaScript object. (Object.keys)

console.log(Object.keys(student));
console.log(Object.values(student));


// 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
var student = { 
  name : "David Rayy", 
  sclass : "VI", 
  rollno : 12
};

console.log(student);
delete student.rollno;
console.log(student);


// 3. Write a function to get the length of an object.

var object_length = (object) =>{
  return  Object.keys(object).length;
}
console.log(object_length(student));
