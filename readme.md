# 25 Mind-Blowing Practice Questions, Master JavaScript, Can You Solve Them All?

1 - Give a string, reverse earch word in the sentence

```
/**
 * input: tahir hossain nihal || output: rihat niassoh lahin
 */

const reverseWords = (sentence) => {
  // Split the sentence into an array of words
  const words = sentence.split(" ");
  // Reverse each word in the array
  const reversedWords = words.map((word) => word.split("").reverse().join(""));
  // Join the reversed words back into a sentence
  const reversedSentence = reversedWords.join(" ");

  return reversedSentence;
};
// Example usage:
const reversedSentence = reverseWords("tahir hossain nihal");
console.log(reversedSentence);
```

2 - How to check if and object is an array or not? Provide some code.

```
const checkArr = (element) => {
  return Array.isArray(element);
};
console.log(checkArr([]));
console.log(checkArr({}));
```

3 - How to empty an arrry in JavaScript?

```
/**
 * Don't reset array and don't loop
 */

const arr = [1, 2, 3, 4, 5];

//Way 1 without reset and loop
// arr.length = 0;

//Way 2 without reset and loop
arr.splice(0, arr.length);

console.log(arr);
```

4 - How would you check if a number is an integer?

```
const isIntigerNum = (num) => {
  if (num % 1 === 0) {
    console.log(`The number ${num} is an integer number`);
  } else {
    console.log(`The number ${num} isn't an integer number`);
  }
};
isIntigerNum(29);
```

5 - Make this work:
duplicate([1,2,3]); // [1,2,3,1,2,3]

```
const duplicateArr = (arr) => {
  return arr.concat(arr);
};
console.log(duplicateArr([1, 2, 3]));
```

## Functions Problems

6 - Write a JavaScript function that reverse a number

```
//Way 1
const reverseNum = (num) => {
  return Number(num.toString().split("").reverse().join(""));
};
console.log(reverseNum(123));

//Way 2
const reverseNumFunc = (num) => {
  let reverseNum = 0;
  while (num > 0) {
    let reminder = num % 10;
    reverseNum = reverseNum * 10 + reminder;
    num = Math.floor(num / 10);
  }
  return reverseNum;
};
console.log(reverseNumFunc(123));
```

7 - Write a JavaScript function that checks wherher a passed string is palindrome or not

```
const checkPal = (str) => {
  let reverseStr = str.split("").reverse().join("");
  if (str === reverseStr) {
    console.log(`The string (${str}) are palindrome`);
  } else {
    console.log(`The string (${str}) aren't palindrome`);
  }
};
checkPal("lol");
```

8 - Write a JavaScript function that returns a passed string with latters in alphabetival order

```
const stringToAlphaOrder = (str) => {
  return str.split("").sort().join("");
};
let output = stringToAlphaOrder("dcba");
console.log(output);
```

9 - Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case

```
const convertFirstLatterUpper = (str) => {
  let finalStr = str.split(" ").map((word) => {
    return word.charAt(0).toUpperCase() + word.substring(1);
  });
  console.log(finalStr);
};
convertFirstLatterUpper("tahir hossain nihal");
```

10 -
