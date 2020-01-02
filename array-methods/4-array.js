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

var total_dog_ages =(data)=>{
  var total_age = 0;
  for(let i=0;i<data.length;i++){
     if(data[i].type == "dog"){
       total_age+= data[i].age;
     }
 }
  return total_age*7;
}
console.log(total_dog_ages(data));

// Solution is 105

// Write the same function using
// 1. filter - for filtering the cat or dog

var filter_dog_age = data.filter((current_object)=>{  
  return (current_object.type == 'dog')?true:false;
})

// 2. map - to multiply human year to dog year

var convert_to_dog_years = filter_dog_age.map((current_object)=>{
  current_object.age = current_object.age * 7;
 return current_object;
})

// 3. reduce - to accumulate total age.

var total_age = convert_to_dog_years.reduce((acc , current_object)=>{     
  acc+=current_object.age;
  return acc;
}, acc = 0)



// Solution 105
