const numbers = [2, 3, 4, 5, 3, 2];
const emptyArr = [2];

// Length check function
const len = (array) => {
  console.log(array.length);
};

len(numbers);

// Get the last element of an array without using .length
const last = (array) => {
  // check if array is empty - Another way: Array.isArray(names) && names.length === 0;
  if (array != []) console.log("This is an empty array");
  console.log(array.slice(-1));
};

last(emptyArr);

// but last function
const butLast = (array) => {
  if (array[2] === undefined) console.log("This is an empty array");
  console.log(array.slice(-2, -1)[0]);
};

butLast(emptyArr);

// Create a reverse copy
const reverse = (array) => {
  reverseArr = array.slice().reverse();
  console.log(reverseArr);
};

reverse(numbers);

// Check if array is Palindrome function
const isPalindrome = (array) => {
  if (array[0] === array[array.length - 1]) {
    console.log(true);
  } else {
    console.log(false);
  }
};
isPalindrome(numbers);

// filter duplicated
const compress = (array) => {
  newArr = new Set(array); //arrays with unique values
  console.log(newArr);
};
compress(numbers);

// pack duplicated elements in different arrays
const arrayExample = [3, 3, 3, 2, 2, 5, 5, 5, 4, 1, 1, 1];

const pack = (array) => {
  packedArray = [];
  for (let i = 0; i < array.length - 1; i++) {
    if (
      packedArray.length > 0 &&
      packedArray[packedArray.length - 1][0] === array[i]
    ) {
      packedArray[packedArray.length - 1].push(array[i]);
      continue;
    }
    packedArray.push([array[i]]);
  }
  console.log(packedArray);
  return packedArray;
};

// Create encode function to show duplicated data and its quantity
const encode = (array) => {
  const packedArrays = pack(array);
  const encodeArr = [];
  packedArrays.forEach((packedArray) => {
    encodeArr.push([packedArray.length, packedArray[0]]);
  });
  return encodeArr;
};

const encode2a = (array) => {
  const packedArrays = pack(array);
  const encodeArr = [];
  packedArrays.forEach((packedArray) => {
    if (packedArray.length === 1) {
      encodeArr.push(packedArray[0]);
    } else {
      encodeArr.push([packedArray.length, packedArray[0]]);
    }
  });
  return encodeArr;
};

/*  for (let i=0 ; i < (array.length-1); i++) {
   if (array[i] !== array[i+1] && array[i] !== array[i-1]) {
     // Logic for handling single numbers.
     continue;
   }
 } */

console.log(encode2a(arrayExample));
