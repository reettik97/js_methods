var words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot'
];
//=================================================================================
//Write a function findLongestWord that takes an array of words and returns the longest one.
//If there are 2 with the same length, it should return the first occurrence.

let longestWord = words.reduce((acc , cw )=>{
  // console.log(acc +" "+ cw);
    if(acc.length < cw.length)
      {acc=cw;}
      return acc;
 })
 
 console.log(longestWord)  //crocodile

//==================================================================================
var numbers1 = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
// Create a sumArray function that takes an array of numbers1 as a parameter, and calculate the sum of all its numbers
// Use reduce method of array
// Use the above sum and calculate the average.

var sum = numbers1.reduce((acc , currentValue) =>{
  acc+=currentValue;
  return acc;
} , acc = 0);

var average = sum / (numbers1.length)

console.log(sum);       //87
console.log(average);   //8.7

//==================================================================================
var numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
//Write a function averageNumbers that receives an array of numbers2 and calculate the average of the numbers

var averageNumbers = numbers2 =>{

  let sum = numbers2.reduce((acc , currentValue) =>{
        acc+=currentValue;
        return acc;    
  }, acc=0)

//   console.log(sum);
  return sum/(numbers2.length);
}
console.log(averageNumbers(numbers2));
 
//==================================================================================
var words2 = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace'
];
//Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.

var averageWordLength = words2 =>{
  
  let totalLength = words2.reduce((acc , currentWord) =>{
      acc += currentWord.length;
    return acc;
  },acc = 0);
//   console.log(total_length);
  return totalLength/(words2.length);
}

console.log(averageWordLength(words2)); //5.3


