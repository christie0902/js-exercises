const numbers = [2, 3, 4, 5, 3, 2];
const emptyArr = [2];

// Length check function
// const len = (array) => {
//   console.log(array.length);
// };

// len(numbers);

//  Get the last element of an array without using .length
// const last = (array) => {
//   // check if array is empty - Another way: Array.isArray(names) && names.length === 0;
//   if (array != []) console.log("This is an empty array");
//   console.log(array.slice(-1));
// };

// last(emptyArr);

// but last function
const butLast = (array) => {
  if (array[2] === undefined) console.log("This is an empty array");
  console.log(array.slice(-2, -1)[0]);
};

butLast(emptyArr);

// // Create a reverse copy
// const reverse = (array) => {
//   reverseArr = array.slice().reverse();
//   console.log(reverseArr);
// };

// reverse(numbers);

// // Check if array is Palindrome function
// const isPalindrome = (array) => {
//   if (array[0] === array[array.length - 1]) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// };
// isPalindrome(numbers);

// // filter duplicated
// const compress = (array) => {
//   newArr = new Set(array); //arrays with unique values
//   console.log(newArr);
// };
// compress(numbers);

// // pack duplicated elements in different arrays
