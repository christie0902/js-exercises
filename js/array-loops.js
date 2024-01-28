const numbers = [18, 8, -24, 28, -17, 14, -10, 24, 12, -31, 19, 32, -14, -10, 13, 8, -15, -2, 17]

console.log (numbers[Math.ceil((numbers.length-1)/2)]);


numbers.forEach (number => {
    const result = number*number;
    console.log(result);
})

numbers.forEach (number => {
    if (number < 0) {
        console.log (number);
    }
})

console.log (numbers.indexOf(-10));

// Even number
numbers.forEach (number => {
    if (number%2==0) {
        console.log (number);
    }
})

// distance from 5
numbers.forEach (number => {
    if (number > 0) {
        console.log (number-5);
     } else if (number <= 0) {
        console.log(Math.abs(number)+5);
     };
    })


// count negative numbers
let negativeNum = 0;
numbers.forEach ((number) => {
        if (number < 0) {
            negativeNum+=1
        }
        
    })
//     console.log (negativeNum);

// Calculate average, .reduce() - 0. The initialValue represents the initial value of the accumulator
let sum = numbers.reduce ((accumulator, currentValue) => {
    return accumulator + currentValue
},0);
console.log (sum/numbers.length);

// Output all the numbers which are greater than their predecessor
for (i=0; i < (numbers.length-1); i++) {
    if (numbers[i] > numbers[i-1]) {
        console.log (numbers[i]);
    }

}

// Output all the peaks
for (i=0; i < numbers.length; i++) {
    if (numbers[i] > numbers[i-1] && numbers[i] > numbers[i+1]) {
        console.log (numbers[i]);
    }
}

// compute the sum of squared differences from the average.
let sumOfArr = numbers.reduce ((accumulator, currentValue) => {
    return accumulator + currentValue
},0);
const averageValue = sumOfArr/numbers.length;

let sumDifference = 0;
let squareDifference;

numbers.forEach (number => {
    if (number > 0) {
        squareDifference = Math.pow(number-averageValue,2);
     } else if (number <= 0) {
        squareDifference = Math.pow(Math.abs(number)+averageValue,2);;
     };
     sumDifference += squareDifference;
    })

console.log (sumDifference);

// Compute the variance of the array
let sumOfNumbers = numbers.reduce ((accumulator, currentValue) => {
    return accumulator + currentValue
},0);
const average =  sumOfNumbers/numbers.length;

let sumDiff = 0;
let squareDiff;

numbers.forEach (number => {
    if (number > 0) {
        squareDiff = Math.pow(number-average,2);
     } else if (number <= 0) {
        squareDiff = Math.pow(Math.abs(number)+average,2);;
     };
     sumDiff += squareDiff;
    })

console.log (sumDiff/numbers.length);

// Find the biggest element in the array
console.log (Math.max(...numbers));

// 2nd way to do it
let maxNum = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxNum) {
        maxNum = numbers[i];
    }
}

console.log(maxNum);

// FInd the biggest element which is less than 16.
let maxValue=0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 16) {
        continue;
    }
    if (numbers[i] > maxValue) {
        maxValue = numbers[i];
    }
}

console.log(maxValue);


const reverseArr = numbers.reverse();
console.log(reverseArr);

// Find the length of the longest ascending sequence of consecutive numbers in the array.

let currentLen = 1;
let maxLen= 1;

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > numbers[i-1]) {
        currentLen++;
    } else {
        maxLen = Math.max(maxLen,currentLen);
        currentLen=1;
    }
}

// Update maxLength one more time in case the longest sequence is at the end of the array
maxLen = Math.max(maxLen, currentLen);
console.log("Length of the longest ascending sequence:", maxLen);

// Find the longest sequence of consecutive numbers that are either ascending or descending.
let currentLength = 1;
let maxLength= 1;

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > numbers[i-1] || numbers[i] < numbers[i-1]) {
        currentLength++;
    } else {
        maxLength = Math.max(maxLength,currentLength);
        currentLength=1;
    }
}
maxLength = Math.max(maxLength, currentLength);
console.log("Length of the longest ascending sequence:", maxLength);

// Find the second biggest element in the array.
let max=0;
let secondMax;
for (let i = 0; i < numbers.length; i++) {
if (numbers[i] > max) {
    secondMax = max;
    max = numbers[i];
}
}

console.log( secondMax);

//Find the lowest peak and the highest valley in the array.
let peakArr = [];
let valleyArr =[];
for (i=0; i < numbers.length; i++) {
        if (numbers[i] > numbers[i-1] && numbers[i] > numbers[i+1]) {
           peakArr.push (numbers[i]);
        }
    }


for (i=0; i < numbers.length; i++) {
        if (numbers[i] < numbers[i-1] && numbers[i] < numbers[i+1]) {
            valleyArr.push (numbers[i]);
        }
    }

const lowestPeak = Math.min(...peakArr);
const highestValley = Math.max(...valleyArr);
console.log(`Lowest Peak: ${lowestPeak}, Highest Valley: ${highestValley}`);

