var data = [
  {
    name: "Butters",
    age: 3,
    type: "dog"
  },
  {
    name: "Lizzy",
    age: 6,
    type: "dog"
  },
  {
    name: "Red",
    age: 1,
    type: "cat"
  },
  {
    name: "Joey",
    age: 3,
    type: "dog"
  },
  {
    name: "Pochi",
    age: 3,
    type: "dog"
  }
];

// write a function that will sum all of the dogs ages in dog years using for loop.
// 1 human year = 7 dog year
// your code goes here

var totalDogAges =(data)=>{
let totalAge = 0;
  for(let i=0;i<data.length;i++){
     if(data[i].type == "dog"){
      totalAge += data[i].age;
     }
 }
  return totalAge*7;
}
console.log(total_dog_ages(data));

// Solution is 105

// Write the same function using
// 1. filter - for filtering the cat or dog

var filterDogAge = data.filter((currentObject)=>{  
  return (currentObject.type == 'dog')?true:false;
})

// 2. map - to multiply human year to dog year

var convertToDogYears = filterDogAge.map((currentObject)=>{
  currentObject.age = currentObject.age * 7;
 return currentObject;
})

// 3. reduce - to accumulate total age.

var totalAge = convertToDogYears.reduce((acc , currentObject)=>{     
  acc+=currentObject.age;
  return acc;
}, acc = 0)



// Solution 105
