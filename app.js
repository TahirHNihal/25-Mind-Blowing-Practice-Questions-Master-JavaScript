// 9 - Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case

const convertFirstLatterUpper = (str) => {
  let finalStr = str.split(" ").map((word) => {
    return word.charAt(0).toUpperCase() + word.substring(1);
  });
  console.log(finalStr);
};
convertFirstLatterUpper("tahir hossain nihal");
