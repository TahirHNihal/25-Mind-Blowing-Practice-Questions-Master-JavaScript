// 1 - Give a string, reverse earch word in the sentence
/**
 * input: tahir hossain nihal || output: rihat niassoh lahin
 *
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
