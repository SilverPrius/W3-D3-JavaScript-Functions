/* 
1. Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.
*/

// maxOfTwoNumbers = (a,b) => {
//   if(a > b){
//     return a;
//   }else{
//     return b;
//   }
// };
// console.log(maxOfTwoNumbers(100,90))


// /*
// 2. Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
// */
// maxOfThree = (a,b,c) => {
// if (a > b && a > c){
//   return a;
// }else if (b > a && b > c){
//   return b;
// }else{
//   return c
// }

// };
// console.log(maxOfThree(5,4000,300))
// /*
// 3. Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// */
// const isCharacterAVowel = (char) => {
//   if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' || char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U'){
//     return true
//   }else{

//   }return false
//   }
// console.log(isCharacterAVowel('A'))
// console.log(isCharacterAVowel('e'))
// console.log(isCharacterAVowel('z'))
// /*
// 4. Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
// */

// const sumArray = () => {
// myArray = [2,3,4,14]
// let sum = 0
// for( let i = 0; i < myArray.length; i++){
//   sum += myArray[i]
// }
//   return sum
// };
// console.log(sumArray())

// const multiplyArray = () => {
// myArray = [1,2,3,5]
// let multiplied = 1
// for( let i = 0; i < myArray.length; i++){
//   multiplied *= myArray[i]
// }
//   return multiplied
// };
// console.log(multiplyArray())
  
// /*
// 5.Write a function that returns the number of arguments passed to the function when called.


// const numberOfArguments = () => {
// 	return arguments.length;
// }


// console.log(numberOfArguments('happy', 'joy', 'joy')); // I don't know why it returns 5, when it should be 3 >.<


// */

// /*
// 6. Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
// */

// const reverseString = (string) => {
//   let result = ""
//   for (let i = string.length - 1; i >= 0; i -= 1) {
//     result += string[i]
//   }
//   return result;
// };
// console.log(reverseString("It is what it is."))

// /*
// 7. Write a function findLongestWord that takes an array of words and returns the length of the longest one.
// */

// let myArray = ['bat', 'ball', 'billionaire']
// const findLongestWord = (myArray) => {
//   let longestWord = '';
//   for (i = 0; i < myArray.length; i++) {
//     if (myArray[i].length > longestWord.length) {
//       longestWord = myArray[i];
//     }
//   }
//   return longestWord
// }
// console.log(findLongestWord(myArray).length)

// /*
// 8. Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.
// */
// filterLongWords = (arr, i) => {
//  let newWords = [];
//   for( let z = 0; z < arr.length; z++){
//     if (arr[z].length > i){
//       newWords.push(arr[z])
//     }

//   }
//  return newWords;
// };

// let words = ['first','second','third','fourth']
// console.log(filterLongWords(words, 5))
