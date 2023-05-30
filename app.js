// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function plus(number) {
    return function (plusNumber) {
        return plusNumber + number;
    }
}

let plus15 = plus(15)
console.log(plus15(10));

console.log("EXERCISE 2:\n==========\n");

let users = [
    {
      name: "Frodo",
      age: 50,
      score: 85,
      isActive: false,
    },
    {
      name: "Sam",
      age: 38,
      score: 94,
      isActive: true,
    },
    {
      name: "Merry",
      age: 36,
      score: 82,
      isActive: true,
    },
    {
      name: "Pippin",
      age: 26,
      score: 77,
      isActive: false,
    },
  ];

  users.forEach((hobbits) => {
    console.log(hobbits.name);
  });

  console.log("EXERCISE 3:\n==========\n");

let mappedHobbits = users.map((hobbits) => {

    return {name: hobbits.name, score: hobbits.score}
})

console.log(mappedHobbits)

console.log("EXERCISE 4:\n==========\n");

let activeHobbits = users.filter((hobbits)=>{return hobbits.isActive==true});

console.log(activeHobbits);

console.log("EXERCISE 5:\n==========\n");

let sortedHobbits = users.sort((a, b) => {return b.score - a.score});

console.log(sortedHobbits);

console.log("EXERCISE 6:\n==========\n");

let reducedHobbits = users.reduce((sum, hobbits) => {return sum + hobbits.score}, 0);
let avgScore = reducedHobbits / users.length;

console.log(avgScore);