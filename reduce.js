// const arr = [1, 2, 3, 4, 5, 6];

// const arrSum = arr.reduce((accuVal, currVal) => {
//   return accuVal + currVal;
// });
// console.log(arrSum);

// const marks = [
//   { sub: 'English', mark: 89 },
//   { sub: 'Maths', mark: 99 },
//   { sub: 'Social', mark: 98 },
//   { sub: 'Science', mark: 97 },
//   { sub: 'Language', mark: 100 },
// ]

// const totalMarks = marks.reduce((accuVal, currVal, i) => {
//   accuVal[currVal.sub] = currVal.mark;
//   accuVal['total'] += currVal.mark;
//   return accuVal;
// }, { total: 0 });

// console.log(totalMarks);


const arr = [1, 2, 3, 4, 5, 6];


// Output the sum of the array
/**
 * 1+2+3+4+5+6 ---> 21 OUTPUT
 * 
 */

// Noraml --> 6 times for loop runs
var sum = 0;
for (var num of arr) {
  sum += num; // sum = sum + num
}
// console.log(sum);

// [1, 2, 3, 4, 5, 6]

//                     accumulator
var arrSum = arr.reduce((prevVal, currVal) => {
  console.log(prevVal, currVal); // 1 2
  // operation 
  return prevVal + currVal;
});

console.log(arrSum);

/**
 * 1 Iteration prevVal = 1, currVal = 2 ---> prints 1 2 & return 3
 * 2 Iteration prevVal = 3, currVal = 3 ---> prints 3 3 & return 6
 * 3 Iteration prevVal = 6, currVal = 4 ---> prints 6 4 & return 10
 * 4 Iteration prevVal = 10, currVal = 5 ---> prints 10 5 & return 15
 * 5 Iteration prevVal = 15, currVal = 6 ---> prints 15 6 & return 21
 */

// Specifying Initial Prev Val (initialValue)
// taking the value provided as the prevVal for 1st iteration instead of first element
// then currVal will take first element

var arrSumTwo = arr.reduce((prevVal, currVal) => {
  console.log(prevVal, currVal); // 1 2
  // operation 
  return prevVal + currVal;
}, 0);

// [1, 2, 3, 4, 5, 6]
/**
 * 1 Iteration prevVal = 0, currVal = 1 ---> prints 0 1 & return 1
 * 2 Iteration prevVal = 1, currVal = 2 ---> prints 1 2 & return 3
 * 3 Iteration prevVal = 3, currVal = 3 ---> prints 3 3 & return 6
 * 4 Iteration prevVal = 6, currVal = 4 ---> prints 6 4 & return 10
 * 5 Iteration prevVal = 10, currVal = 5 ---> prints 10 5 & return 15
 * 6 Iteration prevVal = 15, currVal = 6 ---> prints 15 6 & return 21
 */

console.log(arrSumTwo);


var arrSumThree = arr.reduce((prevVal, currVal) => {
  console.log(prevVal, currVal); // 1 2
  // operation 
  return prevVal + currVal;
}, -10);

// [1, 2, 3, 4, 5, 6]
/**
 * 1 Iteration prevVal = -10, currVal = 1 ---> prints -10 1 & return -9
 * 2 Iteration prevVal = -9, currVal = 2 ---> prints -9 2 & return -7
 * 3 Iteration prevVal = -7, currVal = 3 ---> prints -7 3 & return -4
 * 4 Iteration prevVal = -4, currVal = 4 ---> prints -4 4 & return 0
 * 5 Iteration prevVal = 0, currVal = 5 ---> prints 0 5 & return 5
 * 6 Iteration prevVal = 5, currVal = 6 ---> prints 5 6 & return 11
 */

console.log(arrSumThree);


const marks = [
  { sub: 'english', mark: 89 },
  { sub: 'maths', mark: 99 },
  { sub: 'social', mark: 98 },
  { sub: 'science', mark: 97 },
  { sub: 'language', mark: 100 },
]

// Create Object like below,
/**
 * {
 *    total: 483,
 *    english: 89
 *    .
 *    .
 *    language: 100
 * }
 */

const totalMarks = marks.reduce((accuVal, currVal, i) => {
  accuVal[currVal.sub] = currVal.mark;
  accuVal['total'] += currVal.mark;
  return accuVal;
}, { total: 0 });

console.log(totalMarks);
