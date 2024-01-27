25 Mind-Blowing Practice Questions, Master JavaScript, Can You Solve Them All?

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
3 - How to empty an arrry in JavaScript?
4 - How would you check if a number is an integer?
5 - Make this work:
duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]
