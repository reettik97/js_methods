// Arrays to work on
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];
var strings = ["this", "is", "a", "collection", "of", "words"];

// Use the above two arrays and practice array methods
//================================================================
// Find largest number in numbers
function max(a , b){
  return Math.max(a , b);
 }
 let large = numbers[0];
 for(let i=1 ; i<numbers.length;i++){
   large = max(large , numbers[i]);
 }
//or
var large =  Math.max(...numbers);
//=================================================================
// Find longest string in strings

var string_length_array = strings.map(len => len.length);
var max_length = Math.max(...string_length_array);

//or

var max_len = Number.NEGATIVE_INFINITY;
function max_length(len){
  if(len.length>max_len){
    max_len = len.length;
  }
}
strings.forEach(max_length);
console.log(max_len);

//====================================================================
// Find all the even numbers

var even_num_array =  numbers.filter(num => num%2==0)
console.log(...even_num_array);


//====================================================================
// Find all the odd numbers


var odd_num_array =  numbers.filter(num => num&1);
console.log(...odd_num_array);

//====================================================================
// Find all the words that contain 'is' use string method 'includes'
 
console.log(strings.includes("is"));

//====================================================================
// Find all the words that contain 'is' use string method 'indexOf'

console.log(string.indexOf("is"));
//====================================================================
// Check if all the numbers in numbers array are divisible by three use array method (every)
  
console.log(numbers.every(num => num%3==0));
//====================================================================
//  Sort Array from smallest to largest

numbers.sort((a,b)=> a-b);

//====================================================================
// Remove the last word in strings

strings.pop();

//====================================================================
// Add a new word in the array

strings.push("Reettik");

//====================================================================
// Remove the first word in the array

  strings.shift();

//====================================================================
// Place a new word at the start of the array use (upshift)

  strings.unshift("Reettik");

//====================================================================
// Make a subset of numbers array [18,9,7,11]

console.log(numbers.slice(3 , 3+4));    

//====================================================================
// Make a subset of strings array ['a','collection']

console.log(strings.slice(2 , 2+2)); 

//====================================================================
// Replace 12 & 18 with 1221 and 1881
  
numbers[numbers.indexOf(12)] = 1221;
numbers[numbers.indexOf(18)] = 1881;
  
//===================================================================
// Replace words with string in strings array

strings[strings.indexOf("words")]= "string";

// Customers Array
var customers = [
  { firstname: "Joe", lastname: "Blogs" },
  { firstname: "John", lastname: "Smith" },
  { firstname: "Dave", lastname: "Jones" },
  { firstname: "Jack", lastname: "White" }
];
// Find all customers whose firstname starts with 'J'
var start_j_name =  customers.filter(obj =>{ 
 
  var name= obj.firstname;
 
  return name.charAt(0)=='J';
});  
console.log(start_j_name);
//improve verson
var start_j_name =  customers.filter(obj => obj.firstname.charAt(0)== "J");        
console.log(start_j_name);

//=====================================================================
// Create new array with firstname and lastname

var names = customers.map(obj => { 
  str = "";
  str += obj.firstname +" "+ obj.lastname;
  return str;
}); 
// console.log(names);
//=====================================================================
// Sort the array created above alphabetically
names.sort();
// console.log(names);
//=====================================================================