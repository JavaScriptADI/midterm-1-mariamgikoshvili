// Write your code here

// არვიცი დედლაინი როდის არის ამიტომ რაც მაქვს ჯერ მაგას ავტივრთავ 


// 1. Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday. Current time is : 10 PM : 30 : 38

function toDay(){
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let now = new Date();

    let day = days[now.getDay()];
    let hours = now.getHours();
    let minutes = now.getMinutes()
    let seconds = now.getSeconds()
    period = 'AM'
    if (hours > 12){
        period = 'PM'
    }
    else
        period = 'AM'
    console.log(`Today is : ${day}. Current time is : ${hours} ${period} : ${minutes} : ${seconds}`)
}  
    
// 2. Write a JavaScript program to print the current window contents.

function printWindowContents() {
    window.print();
}

// 3.Write a JavaScript program to get the current date.

function getCurrentDate() {
    const now = new Date();

    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const year = now.getFullYear();

    const format1 = `${month}-${day}-${year}`; // mm-dd-yyyy
    const format2 = `${month}/${day}/${year}`; // mm/dd/yyyy
    const format3 = `${day}-${month}-${year}`; // dd-mm-yyyy
    const format4 = `${day}/${month}/${year}`; // dd/mm/yyyy

    // console.log(`Format 1 (mm-dd-yyyy): ${format1}`);
    // console.log(`Format 2 (mm/dd/yyyy): ${format2}`);
    // console.log(`Format 3 (dd-mm-yyyy): ${format3}`);
    // console.log(`Format 4 (dd/mm/yyyy): ${format4}`);
}

// 4.Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.
function calculateAreaOfTriangle(a, b, c) {
    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
}

// const area = calculateAreaOfTriangle(5, 6, 7);

// 5. Write a JavaScript program to rotate the string 'w3resource' in the right direction. This is done by periodically removing one letter from the string end and attaching it to the front.
//აქ ვერ მივხვდი რა უნდა გავაკეთო 

// 6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

function isLeap(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(`${year} is a leap year`)
    }
    else
        console.log(`${year} is not a leap year`)
}

// 7. Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.
//კარგად ვერ მივხვდი მარა ალბათ ყველა კვირა 1 იანვარი უნდა ვიპოვოთ ამ წლებში, ნუ მე ეგრე ამოვხსნი

function findSundays(start,end){
    let dates = []
    for (let i = start; i <= end; i++){
        let date = new Date(i, 0, 1)
        if (date.getDay() === 0){
            dates.push(i)
        }
    }
    console.log(`1 January that are also Sundays are in these years: ${dates} `)
}

// findSundays(2014, 2050)

// 8. Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".

function guessNum(){
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    const userGuess = parseInt(prompt("Guess a number between 1 and 10:"));
    if (userGuess === randomNumber) {
        console.log("Good Work!");
    } else {
        console.log(`Not matched. The number was ${randomNumber}`);
    }
}
// guessNum()

// 9.Write a JavaScript program to calculate the days left before Christmas.

function daysBefChristmas(){
    const today = new Date()
    const year = today.getFullYear()
    const Christmas = new Date(year + 1 , 0, 7)

    const diff = Christmas - today
    const diffdays = parseInt(diff / 86400000)
    // console.log(today)
    console.log(`${diffdays} days left before Christmas!`)
}
// daysBefChristmas()

// 10. Write a JavaScript program to calculate multiplication and division of two numbers (input from the user). Sample form : sample form

function calculator() {
    const num1 = parseFloat(prompt("Type the 1st number: "));
    const num2 = parseFloat(prompt("Type the 2nd number: "));
    const operator = prompt("Type 'divide' or 'multiplicate':").toLowerCase();

    if (operator === "divide") {
        if (num2 === 0) {
            console.log("Cannot divide by zero!");
        } else {
            console.log(`Result: ${num1} / ${num2} = ${num1 / num2}`);
        }
    } else if (operator === "multiplicate") {
        console.log(`Result: ${num1} * ${num2} = ${num1 * num2}`);
    } else {
        console.log("Please choose a correct operator: 'divide' or 'multiplicate'.");
    }
}

// calculator()


// 11.Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit. [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ] 
// Expected Output : 60°C is 140 °F ,  45°F is 7.222222222222222°C
// c = (f-32)/9 *5
// f = (9c /5 ) + 32

function temperature(){
    const number = parseFloat(prompt("please enter the temperature in numbers"))
    const scale = prompt("please choose scale: 'F' or 'C.'").toLowerCase();

    if(scale === "c"){
        const f = (9 * number / 5) + 32;
        console.log(`${number} °C is ${f} °F`)
    }
    else if(scale === 'f'){
        const c = (number - 32) * 5 / 9;
        console.log(`${number}°F is ${c}°C`)
    }
    else 
    console.log("Please choose a correct scale: 'F' or 'C'.")
}

// temperature()

// 12.Write a JavaScript program to get the website URL (loading page).

function getURL() {
    const url = window.location.href; // Get the full URL of the current page
    console.log(`The current website URL is: ${url}`);
    return url;
}

// 13.Write a JavaScript exercise to create a variable using a user-defined name.

function createVariable() {
    const Name = prompt("Enter the name of the variable:"); 
    const Value = prompt("Enter the value of the variable:");
    const variables = {}

    variables[Name] = Value
    
    console.log(`Variable '${Name}' created with value: ${variables[Name]}`)
}
// createVariable()

// 14.Write a JavaScript exercise to get the filename extension.
function getExtension(filename) {
    indexOfDot = filename.indexOf(".")

    if (indexOfDot == 0) {
        return "No extension found";
    }
    const extension = filename.substring(indexOfDot + 1);
    return extension;
}

// console.log(getExtension('mariam.xlsx'))


// 15. Write a JavaScript program to get the difference between a given number and 13, if the number is broader than 13 return double the absolute difference.

function diff13(number){
    const diff = Math.abs(number - 13)
    if(number > 13){
        return diff * 2
    }
    else{
        return diff
    }
}

// 16. Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.

function sumNums(num1, num2){
    const sum = num1 + num2
    if(num1 === num2){
        return sum * 3
    }
    else{
        return sum
    }
}

// 17.Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple the absolute difference if the specified number is greater than 19.

function diff19(number){
    const diff = Math.abs(number - 19)
    if(number > 19){
        return diff * 3
    }
    else{
        return diff
    }
}

// 18. Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.

function checkNums(num1, num2){
    if( num1 === 50 || num2 === 50 || (num1 + num2 === 50)){
        return true
    }
    else{
        return false
    }
}

// 19. Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.

function checkWithinRange(num) {
    if (Math.abs(num - 100) <= 20 || Math.abs(num - 400) <= 20) {
        return true;
    } 
    else {
        return false;
    }
}

// 20. Write a JavaScript program to check two given integers whether one is positive and another one is negative.

function checkNegatives(num1 , num2){
    const product = num1 * num2
    if (product < 0){
        return true
    }
    else {
        return false
    }
}

// 21. Write a JavaScript program to create another string by adding "Py" in front of a given string. If the given string begins with "Py" return the original string.

function addPy(str) {
    if (str.substring(0, 2) === "Py") {
        return str;  
    } else {
        return "Py" + str; 
    }
}

// 22. Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.

function removeChar(str, index) {
    if (index < 0 || index >= str.length) {
        return "Invalid position";
    }
    return str.slice(0, index) + str.slice(index + 1);
}


// 23. Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters. The string length must be broader than or equal to 1.

function swapFirstLast(str) {
    if (str.length >= 1) {
        if (str.length === 1) {
            return str; 
        }
        return str[str.length - 1] + str.slice(1, str.length - 1) + str[0];
    }
    else{
        return str
    }
    
}
// swapFirstLast()

// 24. Write a JavaScript program to create another string from a given string with the first character of the given string added to the front and back.

function addFirst(str) {
    if (str.length >= 1) {
        return str[0] + str + str[0];
    }
    else{
        return str
    }
}

// 25. Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.

function isMultiple(num) {
    if(num % 3 === 0 || num % 7 === 0){
        return true
    }
    else {
        return false
    }
}

// 26. Write a JavaScript program to create a string from a given string. This is done by taking the last 3 characters and adding them at both the front and back. The string length must be 3 or more.

function createString(str) {
    if (str.length >= 3) {
        const last3 = str.substring(str.lenght - 3);
        return last3 + str + last3;
    }
    return str;
}

// 27. Write a JavaScript program to check whether a string starts with 'Java' if it does not otherwise.

function startsWithJava(str) {
    if (str.substring(0, 4) === "Java") {
        return true;  
    } else {
        return false; 
    }
}

// 28. Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them falls within the range.
function checkInRange(num1, num2) {

   if((num1 >= 50 && num1 <= 99) || (num2 >= 50 && num2 <= 99)){
    return true;
   }
   else{
    return false;
   }
}

// 29. Write a JavaScript program to check whether three given integer values are in the range 50..99 (inclusive). Return true if one or more of them are in the specified range.

function checkMultipleInRange(num1, num2, num3) {
    if((num1 >= 50 && num1 <= 99) || (num2 >= 50 && num2 <= 99) || (num3 >= 50 && num3 <= 99)){
        return true;
       }
       else{
        return false;
       }
}

// 30. Write a JavaScript program to check whether a string "Script" appears at the 5th (index 4) position in a given string. If "Script" appears in the string, return the string without "Script" otherwise return the original one.

function checkScript(str) {
    if (str.substring(4, 10) === 'Script') {
        return str.slice(0, 4) + str.slice(10);
    }
    else{
        return str;
    }
}

// 31. Write a JavaScript program to find the largest of three given integers.

function maxOfThree(a, b, c) {
    return Math.max(a, b, c);
}

// 32. Write a JavaScript program to find the closest value to 100 from two numerical values.

function closestTo100(a, b) {
    const absoluteA = Math.abs(a - 100)
    const absoluteB = Math.abs(b - 100)
    if (absoluteA < absoluteB) {
        return a;
    } else if (absoluteB < absoluteA) {
        return b;
    } else {
        return a; //sulertia a tu b
    }
}


// 33. Write a JavaScript program to check whether two numbers are in the range 40..60 or 70..100 inclusive.

function checkRanges(num1, num2) {
    if (((num1 >= 40 && num1 <= 60) || (num1 >= 70 && num1 <= 100)) && 
        ((num2 >= 40 && num2 <= 60) || (num2 >= 70 && num2 <= 100))){
        return true
        }
    else{
        return false
    }
}

// 34. Write a JavaScript program to find the largest number from the two given positive integers. The two numbers are in the range 40..60 inclusive.

function largest(num1, num2) {
    return Math.max(num1, num2);
}

// largest(45,55)

// 35. Write a program to check whether a specified character exists between the 2nd and 4th positions in a given string.

function checkChar(str, char) {
    return str.substring(1, 4).includes(char);
}

// 36. Write a JavaScript program that checks whether the last digit of three positive integers is the same.

function sameDigits(a, b, c) {
    if ((a % 10 === b % 10) && (b % 10 === c % 10)){
        return true
    }
    else{
        return false
    }
}

// 37. Write a JavaScript program to produce a new string that has the first 3 characters in lower case from a given string. If the string length is less than 3 convert all the characters to upper case.

function transformString(str) {
    if (str.length < 3) {
        return str.toUpperCase();
    }
    else{
    return str.substring(0, 3).toLowerCase() + str.substring(3);
    }
}

// 38. Write a JavaScript program to evaluate a student's total marks across various examinations and determine their grade. The grading criteria are as follows: If the total marks fall within the range of 89 to 100 (inclusive), the student receives an A+ grade. If the examination is labeled as "Final-exam," the student will receive an A+ grade only if their total marks are 90 or greater. Assume that final examination means we pass 'true' as second parameter otherwise blank. If the student achieves an A+ grade, the program should return 'true'; otherwise, it should return 'false'.


// 39. Write a JavaScript program to compute the sum of the two given integers. If the sum is in the range 50..80 return 65 otherwise return 80.

function sumInRange(num1, num2) {
    const sum = num1 + num2;
    if (sum >= 50 && sum <= 80) {
        return 65;
    }
    else{
    return 80;
    }
}

// 40. Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8.
function isEight(num1, num2) {
    if( num1 === 8 || num2 === 8 || Math.abs(num1 - num2) === 8 || (num1 + num2)  === 8){
        return true
    }
    else{
        false
    }
}

// 41. Write a JavaScript program to check a set of three numbers; if the three numbers are the same return 30; otherwise return 20; and if two numbers are the same return 40.

function checkNumbers(a, b, c) {
    if (a === b && b === c){
        return 30;
    }
    else if (a === b || b === c || a === c){
        return 40;
    } 
    else{
    return 20;
    }
}
/* 42. Write a JavaScript program to check whether three given numbers are increasing in strict or in soft mode. Note: Strict mode -> 10, 15, 31 : Soft mode -> 24, 22, 31 or 22, 22, 31 */


function checkIncreasing(a, b, c) {
    if( (a < b && b < c) || (a <= b && b <= c)){
        return true;
    }
    else{
        return false;
    }
}

// 43. Write a JavaScript program to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit.

function sameRightmostDigit(a, b, c) {
    if( (a % 10 === b % 10) || (b % 10 === c % 10) || (a % 10 === c % 10) ){
        return true;
    }
    else{
        return false;
    }
}


// 44. Write a JavaScript program that evaluates three given integers to determine if any one of them is greater than or equal to 20 and less than at least one of the other two.

function greaterThan20(a, b, c) {
    if( (a >= 20 && (a < b || a < c)) || 
           (b >= 20 && (b < a || b < c)) || 
           (c >= 20 && (c < a || c < b)) ){
        return true
        }
    else{
        return false
    }
}

// 45. Write a JavaScript program that checks two integer values and returns true if either one is 15 or if their sum or difference is 15.

function isFifteen(num1, num2) {
    if( num1 === 15 || num2 === 15 || Math.abs(num1 - num2) === 15 || (num1 + num2)  === 15){
        return true
    }
    else{
        false
    }
}


// 46. Write a JavaScript program to check two given non-negative integers if one (not both) is a multiple of 7 or 11.

function isMultiple(num1, num2) {
    const isMultiple1 = (num1 % 7 === 0 || num1 % 11 === 0);
    const isMultiple2 = (num2 % 7 === 0 || num2 % 11 === 0);
    if(isMultiple1 === isMultiple2){
        return false
    }
    else{
        return true
    }
}


// 47. Write a JavaScript program to check whether a given number exists in the range 40..10000. For example 40 presents in 40 and 4000

function checkInRange(num) {
    return ( num >= 40 && num <= 10000)
 
}

// 48. Write a JavaScript program to reverse a given string.

function reverseStr(str){
    reversed = ""
    for let(i <= str.lenght - 1, i >= 0, i--){
        reversed += str[i]
    }
    return reversed
}

// 49. Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.

function replaceWithNextChar(str){
    replaced = ''
    for (let i = 0; i <= str.length; i++){
        nextChar = String.fromCharCode(str.charCodeAt(i) + 1);
        replaced += nextChar;
    }
    return replaced
}


// 50. Write a JavaScript program to capitalize the first letter of each word in a given string.
function capitalizeWords(str) {
    let words = str.split(' '); 
    let capitalizedWords = [];  
    for (let i = 0; i < words.length; i++) {
        let capitalizedWord = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
        capitalizedWords.push(capitalizedWord);
    }
    return capitalizedWords.join(' ');
}

// 51. Write a JavaScript application that transforms a provided numerical value into hours and minutes.

function hoursAndMinutes(num) {
    const hours = Math.floor(num / 60);
    const minutes = num % 60;
    return `${hours} hours and ${minutes} minutes`;
}

// 52. Write a JavaScript program to convert letters of a given string alphabetically.
f
unction sortString(str) {
    return str.split('').sort().join('');
}

// 53. Write a JavaScript program to check whether the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string.

function checkAB(str) {
    for (let i = 0; i < str.length -3; i++) {
        if (str[i] === 'a' && str[i + 3] === 'b') {
            return true;
        }
    }
    return false
}

// 54. Write a JavaScript program to count the number of vowels in a given string.
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if ( vowels.indexOf(str[i]) >= 0) {
            count++;
        }
    }
    return count;
}

// 55. Write a JavaScript program to check whether a given string contains an equal number of p's and t's.

function equalPT(string){
    const str = string.toLowerCase()
    countP = 0
    countT = 0
    for (let i = 0; i < str.length; i++){
        if(str[i] === "p"){
            countP ++
        }
        else if(str[i] === "t"){
            countT ++
        }
    }
    return (countT === countP)
}

// 56. Write a JavaScript program to divide two positive numbers and return the result as string with properly formatted commas.

function divideAsString(num1, num2) {
    const result = num1 / num2;
    return result.toString()
}

// 57. Write a JavaScript program to create one string of specified copies (positive numbers) of a given string.
//აქ ვერ მივხვდი რა უნდა ვქნა :((((

// 58. Write a JavaScript program to create an updated string of 4 copies of the last 3 characters of a given original string. The string length must be 3 and above.
//აუ ვერც აქ :((((

// 59. Write a JavaScript program to extract the first half of a even string.

function extractFirstHalf(str) {
    if (str.length % 2 === 0) {
        return str.slice(0, str.length / 2);
    }
    else{
    return 'lenght is not even';
    }
}


// 60. Write a JavaScript program to create a new string without the first and last characters of a given string.
function removeFirstAndLast(str) {
    return str.substring(1, str.lenght - 1);
}


// 61. Write a JavaScript program to concatenate two strings except for their first character.

function concat(str1, str2) {
    return str1.substring(1) + str2.substring(1);
}


// 62. Write a JavaScript program to move the last three characters to the start of a given string. The string length must be greater than or equal to three.
function moveLastThreeChars(str) {
    if (str.length >= 3) {
        return str.substring(str.lenght - 3) + str.substring(0, str.lenght - 3);
    }
    else{
    return str;
    }
}


// 63. Write a JavaScript program to create a string using the middle three characters of a given string of odd length. The string length must be greater than or equal to three.

function middle3(str){
    if (str.length >= 3 && str.length % 2 !== 0) {
        const middle = Math.floor(str.length / 2);
        return str.substring(middle - 1, middle + 2);
    }
    else{
        return str;
    }
}


// 64. Write a JavaScript program to concatenate two strings and return the result. If the length of the strings does not match, then remove the characters from the longer string.

function concatenate(str1, str2) {
    if (str1.length !== str2.length) {
        const length = Math.min(str1.length, str2.length);
        str1 = str1.substring(0, length);
        str2 = str2.substring(0, length);
    }
    esle{
        return str1 + str2;
    }
}

// 65. Write a JavaScript program to test whether a string ends with "Script". The string length must be greater than or equal to 6.
function endsWithScript(str) {
    if( str.length >= 6 && str.substring(str.length - 6).toLowerCase() === 'script'){
        return true
    }
    else{
        return false
    }
}

// 66. Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank.

function checkCity(str) {
    if (str.substring(0, 3) === 'Los' || str.substring(0, 3) === 'New' ) {
        return str;
    }
    else{
    return '';
    }
}


// 67. Write a JavaScript program to create a new string from a given string. This program removes the first and last characters of the string if the first or last character is 'P'. Return the original string if the condition is not satisfied.

function removeP(str) {
    if (str[0] === 'P' || str[str.length - 1] === 'P') {
        return str.substring(1, str.length - 1);
    }
    else{
    return str;
    }
}


// 68. Write a JavaScript program to create a new string using the first and last n characters from a given string. The string length must be larger than or equal to n.

function createString(str, n) {
    if (str.length >= n) {
        return str.substring(0, n) + str.substring(str.length-n);
    }
    else{
        return str;
    }
    
}


// 69. Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3.

function sumOfArray(arr) {
    return arr[0] + arr[1] +arr[2]
}


// 70. Write a JavaScript program to rotate the elements left in a given array of integers of length 3.
// აქ როგორც მივხვდი პირიქით უნდა დავალაგოთ

function rotate(arr){
    rotatedarr= []
    for (let i = 2 ; i >= 0 ; i++){
        rotatedarr.push(arr[i])
    }
}

// 71. Write a JavaScript program to check whether 1 appears in the first or last position of a given array of integers. The array length must be larger than or equal to 1.

function checkOne(arr) {
    return arr[0] === 1 || arr[arr.length - 1] === 1;
}


// 72. Write a JavaScript program to check whether the first and last elements are the same in a given array of integers of length 3.

function checkFistLast(arr) {
    return return arr[0] === arr[arr.length - 1]
}

// 73. Write a JavaScript program to reverse the elements of a given array of integers of length 3.
// ეს ზევით გავაკეთე 70 ში. 
function rotate(arr){
    rotatedarr= []
    for (let i = 2 ; i >= 0 ; i++){
        rotatedarr.push(arr[i])
    }
}


// 74. Write a JavaScript program to find the largest value between the first and last elements and set all the other elements to that value. Display the updated array.

function updateWithMax(arr) {
    const maxVal = Math.max(arr[0], arr[arr.length - 1]);
    const updated = []
    for (let i = 0; i < arr.lenght ; i++){
        updated.push(maxVal)
    }  
    return updated
}

// 75. Write a JavaScript program to create an array taking the middle elements of the two arrays of integer and each length 3.

function middleElements(arr1, arr2) {
    if (arr1.length === 3 && arr2.length === 3) {
        return [arr1[1], arr2[1]];
    }
}



// 76. Write a JavaScript program to create an array by taking the first and last elements from a given array of integers. The length must be larger than or equal to 1.

function firstAndLast(arr) {
    if (arr.length >= 1) {
        return [arr[0], arr[arr.length - 1]];
    }
    else{
    return [];
    }
}



// 77. Write a JavaScript program to test whether an array of integers of length 2 contains 1 or 3.

function containsOneOrThree(arr) {
    return arr.includes(1) || arr.includes(3);
}

// 78. Write a JavaScript program to test whether an array of integers of length 2 does not contain 1 or 3.

function notOneOrThree(arr) {
    return !arr.includes(1) && !arr.includes(3);
}

// 79. Write a JavaScript program to test whether a given array of integers contains 30 and 40 twice. The array length should be 0, 1, or 2. 
// აქ ალბათ ან უნდა იყოს თორე 3 მოანცემიან ერეიში 30 და 40 ორივე ორჯერ როგორ იქნება

function hasThirtyAndForty(arr) {
    if (arr.length > 2) {
        throw new Error("The array length must be 0, 1, or 2.");
    }
    else{
        let count30 = 0;
        let count40 = 0;
    
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === 30) {
                count30++;
            } else if (arr[i] === 40) {
                count40++;
            }
        }

        return count30 === 2 || count40 === 2;
    }

}

// 80. Write a JavaScript program to swap the first and last elements of a given array of integers. The array length should be at least 1.

function swapFirstAndLast(arr) {
    if (arr.length >= 1) {
        arr[0] = arr[arr.length - 1]
        arr[arr.length - 1] = arr[0]
    }
    else{
    return arr;
    }
}


// 81. Write a JavaScript program to add two digits to a given positive integer of length two.

function addTwoDigits(num) {
    if (num < 10 || num > 99) {
        return "The input must be a two-digit positive integer."
    }
    else{
        const firstDigit = Math.floor(num / 10);
        const secondDigit = num % 10;          
        return firstDigit + secondDigit;       
    }
}

// 82. Write a JavaScript program to add two positive integers without carrying.
// ეს ვერ გავიგე რას ნიშნავს

// 83. Write a JavaScript program to find the longest string from a given array of strings.
function longestString(arr) {
    let longestIndex = 0;
    let maxLength = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > maxLength) {
            maxLength = arr[i].length;
            longestIndex = i;
        }
    }
    return arr[longestIndex];
}

// 84. Write a JavaScript program to replace each character in a given string with the next in the English alphabet. Note: 'a' will be replace by 'b' or 'z' would be replaced by 'a'. 

function replaceWithNextChar(str){
    replaced = ''
    for (let i = 0; i <= str.length; i++){
        nextChar = String.fromCharCode(str.charCodeAt(i) + 1);
        replaced += nextChar;
    }
    return replaced
}

// 85. Write a JavaScript program to divide a given array of positive integers into two parts. First element belongs to the first part, second element belongs to the second part, and third element belongs to the first part and so on. Now compute the sum of two parts and store it in an array of size two.

function divideAndSum(arr) {
    let part1 = 0; 
    let part2 = 0; 

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            part1 += arr[i]; 
        } 
        else {
            part2 += arr[i]; 
        }
    }
    return [part1, part2];
}


// 86. Write a JavaScript program to find the types of a given angle.Types of angles: Acute angle: An angle between 0 and 90 degrees. Right angle: An 90 degree angle. Obtuse angle: An angle between 90 and 180 degrees. Straight angle: A 180 degree angle.

function angleType(angle) {
    if (angle < 0 || angle > 180) {
        return "Invalid angle"; 
    }
    else if (angle === 90) {
        return "Right angle";
    } 
    else if (angle === 180) {
        return "Straight angle"; 
    } 
    else if (angle > 0 && angle < 90) {
        return "Acute angle"; 
    } 
    else if (angle > 90 && angle < 180) {
        return "Obtuse angle"; 
    }
}


// 87. Write a JavaScript program to determine if two arrays of integers of the same length are similar. The arrays will be similar if one array can be obtained from another array by swapping at most one pair of elements.

function simmilarArrays(arr1, arr2){
    if (arr1.length !== arr2.length) {
        return false; 
    }
    diff = 0
    for (let i = 0; i < arr1.lenght, i++){
        if (arr1[i] !== arr2[i]){
            diff ++
        }
    }
    return (diff ===0 || diff === 2)
}



// 88. Write a JavaScript program that takes two integers and a divisor. If the given divisor divides both integers and does not divide either, two specified integers are similar. Check whether two integers are similar or not.

function areSimilar(num1, num2, divisor) {
    if (num1 % divisor === 0 && num2 % divisor === 0) {
        return true;
    }
    else if (num1 % divisor !== 0 && num2 % divisor !== 0) {
        return true;
    }
    else {
        return false;
    }


}


// 89. Write a JavaScript program to check whether it is possible to replace $ in a given expression x $ y = z with one of the four signs +, -, * or / to obtain a correct expression. For example x = 10, y = 30 and z = 300, we can replace $ with a multiple operator (*) to obtain x * y = z

function replaceDollar(x, y, z) {
    if (x + y === z) {
        return "Addition (+)";
    } 
    else if (x - y === z) {
        return "Subtraction (-)";
    } 
    else if (x * y === z) {
        return "Multiplication (*)";
    } 
    else if (y !== 0 && x / y === z) {
        return "Division (/)";
    } 
    else {
        return "$ cannot be replaced";
    }
}


// 90. Write a JavaScript program to find the kth greatest element in a given array of integers.

function findKth(arr, k) {
    arr.sort((a, b) => b - a);
    
    if (k > 0 && k <= arr.length) {
        return arr[k - 1];
    } 
    else {
        return "Invalid k";
    }
}

// 91. Write a JavaScript program to find the maximum possible sum of some of its k consecutive numbers (numbers that follow each other in order) in a given array of positive integers.


function maxSum(arr, k){
    maxsum = 0
    for (let i = 0; i < arr.length; i++){
        let sumofk = arr[i] + 
    }
}


// 92. Write a JavaScript program to find the maximum difference between any two adjacent elements of a given array of integers.

function maxADiff(arr) {
    if (arr.length < 2) {
        return "Array must contain at least two elements.";
    }
    else{
    let maxDiff = 0;
    for (let i = 1; i < arr.length; i++) {
        let diff = Math.abs(arr[i] - arr[i - 1]);  
        maxDiff = Math.max(maxDiff, diff); 
    }
    return maxDiff;
    }
}

// 93. Write a JavaScript program to find the maximum difference among all possible pairs of a given array of integers.
function maxDifference(arr) {
    if (arr.length < 2) {
        return "Array must contain at least two elements.";
    } 
    else{
    let maxVal = arr[0]
    let minVal = arr[0]
    for (let i = 0 ; i < arr.length; i++){
        if (arr[i] > maxVal){
            maxVal === arr[i]
        }
        else {
            (arr[i] < minVal){
                minVal === arr[i]
            }
        }
    }
    return maxVal - minVal;
    }
}

// 94. Write a JavaScript program to find the number appearing most frequently in a given array of integers.

function mostAppearing(arr){
    
}

// 95. Write a JavaScript program to replace all numbers with a specified number in an array of integers.

function replaceNumbers(arr, number) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = number;  
    }
    return arr;
}

// 96. Write a JavaScript program to compute the sum of the absolute differences of consecutive numbers in a given array of integers.

function sumDifferences(arr) {
    let sum = 0;  
    for (let i = 0; i < arr.length - 1; i++) {
        sum += Math.abs(arr[i] - arr[i + 1])
    }
    return sum;
}


// 97. Write a JavaScript program to find the shortest possible string. This can be converted into a string and converted into a palindrome by adding characters to the end of it.

//ვერ მივხვდი პირობას :(((

// 98. Write a JavaScript program to change the case of the minimum number of letters to make a given string written in upper case or lower case. Fox example "Write" will be write and "PHp" will be "PHP"

function changeCase(str) {
    let lowerCount = 0;
    let upperCount = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toLowerCase()) {
            lowerCount++;
        } else {
            upperCount++;
        }
    }

    if (lowerCount >= upperCount) {
        return str.toLowerCase();
    } else {
        return str.toUpperCase();
    }
}

// 99. Write a JavaScript program to check whether it is possible to rearrange the characters of a given string. This is in such a way that it will become equal to another given string.
function canRearrange(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    else{
    let sortedStr1 = str1.split('').sort().join('');
    let sortedStr2 = str2.split('').sort().join('');
    return sortedStr1 === sortedStr2;
    }
}

// 100. Write a JavaScript program to check if there is at least one element in two given sorted arrays of integers. ალბათ საერთო ერთი ემენეტი? 

function commonElement(arr1, arr2){
    minlength = Math.min(arr1.length, arr2.length)

    for (let i = 0 ; i < minlength; i++){
        if(arr2.includes(arr1[i])){
            return true
        }
    }
    return false;
}

// 101. Write a JavaScript program to check whether a given string contains only Latin letters and no two uppercase and no two lowercase letters are in adjacent positions.
function checkString(str) {
    
    for (let i = 0; i < str.length; i++) {
        const code = str.charCodeAt(i);
        if (!( (code >= 65 && code <= 90) || (code >= 97 && code <= 122) )) {
            return false; 
        }
    }
    return true; 

    for (let i = 1; i < str.length; i++) {
        if ((str[i - 1] === str[i - 1].toUpperCase() && str[i] === str[i].toUpperCase()) || 
            (str[i - 1] === str[i - 1].toLowerCase() && str[i] === str[i].toLowerCase())) {
            return false;
        }
    }

    return true;
}

// 102. Write a JavaScript program to find the number of inversions of a given array of integers. Note: Two elements of the array a stored at positions i and j form an inversion if a[i] > a[j] and i < j.

function countInversions(arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                count++; 
            }
        }
    }
    return count;
}

// 103. Write a JavaScript program to find the maximum number of a given positive integer by deleting exactly one digit of the given number.

function maxNumber(num) {
    const numStr = num.toString();
    let maxNum = 0;

    for (let i = 0; i < numStr.length; i++) {
        const newNum = parseInt(numStr.substring(0, i) + numStr.substring(i + 1));
        maxNum = Math.max(maxNum, newNum);
    }

    return maxNum;
}

// maxNumber(543)

// 104. Write a JavaScript program to find two elements of an array such that their absolute difference is not larger than a given integer. However, it is as close as possible to the integer.

function findClosest(arr, target) {
    arr.sort((a, b) => a - b);
    
    let left = 0;  
    let right = arr.length - 1;
    let closestDiff = Infinity; 
    let closestPair = [];

    while (left < right) {
        const diff = Math.abs(arr[left] - arr[right]);

        if (Math.abs(diff - target) < Math.abs(closestDiff - target)) {
            closestDiff = diff;
            closestPair = [arr[left], arr[right]];
        }
        if (diff < target) {
            left++; 
        } else {
            right--;
        }
    }

    return closestPair;
}

// 105. Write a JavaScript program to find the number of times to replace a given number with the sum of its digits. This is until it converts to a single-digit number.

function replaceWithSum(num) {
    let numStr = num.toString();
    let count = 0;
    while (numStr.length > 1) {
        let sum = 0;
        
        for (let i = 0; i < numStr.length; i++) {
            sum += parseInt(numStr[i]);
        }
        numStr = sum.toString();
        count++;
    }
    return count;
}

// 106. Write a JavaScript program to divide an integer by another integer as long as the result is an integer and return the result.

function dividewhileInteger(number, divisor) {
    if (divisor === 0) {
        return "Error: Division by zero is not allowed.";
    }
    else{
        while (number % divisor === 0) {
            number = dividend / divisor;
        }
    return number;
    }
}


// 107. Write a JavaScript program to find the number of sorted pairs formed by arrays of integers. This is such that one element in the pair is divisible by the other one. For example - The output of [1, 3, 2] ->2 - (1,3), (1,2). The output of [2, 4, 6] -> 2 - (2,4), (2,6) The output of [2, 4, 16] -> 3 - (2,4), (2,16), (4,16)
function countSortedPairs(arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] % arr[j] === 0 || arr[j] % arr[i] === 0) {
                count++;
            }
        }
    }
    
    return count;
}


// 108. Write a JavaScript program to create the dot products of two given 3D vectors. Note: The dot product is the sum of the products of the corresponding entries of the two sequences of numbers.
function dotProduct(vectorA, vectorB) {
    if (vectorA.length !== 3 || vectorB.length !== 3) {
        throw new Error("Both vectors must be 3D vectors.");
    }
    else{
        let dotProduct = 0;
        for (let i = 0; i < 3; i++) {
            dotProduct += vectorA[i] * vectorB[i];
        }
        return dotProduct;
    }
}

// 109. Write a JavaScript program to sort an array of all prime numbers between 1 and a given integer.

// 110. Write a JavaScript program to find the number of even values in sequence before the first occurrence of a given number.

// 111. Write a JavaScript program to check a number from three given numbers where two numbers are equal. Find the third one.

// 112. Write a JavaScript program to find the number of trailing zeros in the decimal representation of the factorial of a given number.

// 113. Write a JavaScript program to calculate the sum of n + n/2 + n/4 + n/8 + .... where n is a positive integer and all divisions are integers.

function calculateSum(n) {
    let sum = 0;
    while (n > 0) {
        sum += n;
        n = Math.floor(n / 2); 
    }
    return sum;
}


// 114. Write a JavaScript program to check whether a given string represents a correct sentence or not. A string is considered a correct sentence if it starts with a capital letter and ends with a full stop (.)

function isCorrect(str) {
    if (str.length > 0 && str[0] === str[0].toUpperCase() && str[str.length - 1] === '.') {
        return true;
    }
    return false;
}

// 115. Write a JavaScript program to check whether a matrix is a diagonal matrix or not. In linear algebra, a diagonal matrix is a matrix in which the entries outside the main diagonal are all zero (the diagonal from the upper left to the lower right). Example:
// [1, 0, 0], [0, 2, 0], [0, 0, 3] ]) = true
// [1, 0, 0], [0, 2, 3], [0, 0, 3] ]) = false


// 116. Write a JavaScript program to find all the possible options to replace the hash in a string (Consists of digits and one hash (#)) with a digit to produce an integer divisible by 3. For a string "2*0", the output should be : ["210", "240", "270"]

function divisibleBy3(str) {
    let result = [];
    let hashIndex = str.indexOf('#');

    for (let i = 0; i <= 9; i++) {
        let newStr = str.replace('#', i.toString());  
        let num = parseInt(newStr); 

        if (num % 3 === 0) {
            result.push(newStr); 
        }
    }
    return result;
}


// 117. Write a JavaScript program to check whether a given matrix is an identity matrix. Note: In linear algebra, the identity matrix, or sometimes ambiguously called a unit matrix, of size n is the n ? n square matrix with ones on the main diagonal and zeros elsewhere.
// [[1, 0, 0], [0, 1, 0], [0, 0, 1]] -> true
// [[1, 0, 0], [0, 1, 0], [1, 0, 1]] -> false



// 118. Write a JavaScript program to check whether a given number is in a given range.
function numInRange(num, start, end) {
    return num >= min && num <= max;
}

// 119. Write a JavaScript program to check if a given integer has an increasing digit sequence.

function increasingDigits(num) {
    const numStr = num.toString();
    for (let i = 1; i < numStr.length; i++) {
        if (parseInt(numStr[i]) <= parseInt(numStr[i - 1])) {
            return false; 
        }
    }

    return true; 
}


// 120. Write a JavaScript program to check if a point lies strictly inside the circle.
// Input:
// Center of the circle (x, y)
// Radius of circle: r
// Point inside a circle (a, b)

function isPointInsideCircle(circleX, circleY, radius, pointX, pointY) {
    const distance = Math.sqrt(
        Math.pow(pointX - circleX, 2) + Math.pow(pointY - circleY, 2)
    );
    return distance < radius;
}

// 121. Write a JavaScript program to check whether a given matrix is lower triangular or not. Note: A square matrix is called lower triangular if all the entries above the main diagonal are zero.


// 122. Write a JavaScript program to check whether a given array of integers represents a strictly increasing or decreasing sequence.
function isIncrOrDecr(arr) {
    if (arr.length < 2) {
        return false; 
    }
    let isIncreasing = true;
    let isDecreasing = true;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] <= arr[i - 1]) {
            isIncreasing = false;
        }
        if (arr[i] >= arr[i - 1]) {
            isDecreasing = false;
        }
    }
    return isIncreasing || isDecreasing;
}

// 123. Write a JavaScript program to find out if the members of a given array of integers are a permutation of numbers from 1 to a given integer.


// 124. Write a JavaScript program to create the NOR value of two given booleans. Note: In boolean logic, logical nor or joint denial is a truth-functional operator which produces a result that is the negation of logical or. That is, a sentence of the form (p NOR q) is true precisely when neither p nor q is true - i.e. when both of p and q are false Sample Example: For x = true and y = false, the output should be logical_Nor(x, y) = false; For x = false and y = false, the output should be logical_Nor(x, y) = true.

// 125. Write a JavaScript program to find the longest string in a given array.

function findLongestString(arr) {
    if (arr.length === 0) {
        return ""; 
    }
    let longest = arr[0]; 

    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > longest.length) {
            longest = arr[i]; 
        }
    }

    return longest;
}

// 126. Write a JavaScript program to get the largest even number from an array of integers.

function findLargestEvenNumber(arr) {
    let largestEven = 0; 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            if (arr[i] > largestEven) {
                largestEven = arr[i]; 
            }
        }
    }

    return largestEven
}


// 127. Write a JavaScript program to reverse the order of bits in a integer.
// 14 -> 00001110 -> 01110000 -> 112
// 56 -> 00111000 -> 00011100 -> 28
// 234 -> 11101010 -> 01010111 -> 87



// 128. Write a JavaScript program to find the smallest round number not less than a given value. Note: A round number is informally considered to be an integer that ends with one or more zeros.[3] So, 590 is rounder than 592, but 590 is less round than 600.


// 129. Write a JavaScript program to find the smallest prime number strictly greater than a given number.


// 130. Write a JavaScript program to find the number of even digits in a given integer.


// 131. Write a JavaScript program to create an array of prefix sums of the given array. In computer science, the prefix sum, cumulative sum, inclusive scan, or simply scan of a sequence of numbers x0, x1, x2, ... is a second sequence of numbers y0, y1, y2, ..., the sums of prefixes of the input sequence:
// y0 = x0
// y1 = x0 + x1
// y2 = x0 + x1+ x2
// ...



// 132. Write a JavaScript program to find all distinct prime factors of a given integer.


// 133. Write a JavaScript program to check whether a given fraction is proper or not. Note: There are two types of common fractions, proper or improper. When the numerator and the denominator are both positive, the fraction is called proper if the numerator is less than the denominator, and improper otherwise.


// 134. Write a JavaScript program to change the characters (lower case) in a string where a turns into z, b turns into y, c turns into x, ..., n turns into m, m turns into n, ..., z turns into a.


// 135. Write a JavaScript program to remove all characters from a given string that appear more than once.


// 136. Write a JavaScript program to replace the first digit in a string (should have at least one digit) with the $ character.


// 137. Write a JavaScript program to test whether a given integer is greater than 15 and return the given number, otherwise return 15.


// 138. Write a JavaScript program to reverse the bits of a given 16-bit unsigned short integer.


// 139. Write a JavaScript program to find the position of the rightmost round number in an array of integers. If there are no round numbers, the function returns 0. Note: A round number is informally considered to be an integer that ends with one or more zeros.


// 140. Write a JavaScript program to check whether all the digits in a given number are the same or not.


// 141. Write a JavaScript program to find the number of elements in both arrays.


// 142. Write a JavaScript program to simplify a given absolute path for a file in Unix-style.


// 143. Write a JavaScript program to sort the strings of a given array of strings in order of increasing length. Note: Do not change the order if the lengths of two string are same.


// 144. Write a JavaScript program to break an URL address and put its parts into an array. Note: url structure : ://.org[/] and there may be no part in the address.


// 145. Write a JavaScript program to find the maximum integer n such that 1 + 2 + ... + n <= a given integer.


// 146. Write a JavaScript program to compute the sum of cubes of all integers from 1 to a given integer.


// 147. Write a JavaScript program to compute the sum of all the digits that occur in a given string.


// 148. Write a JavaScript program to swap two halves of a given array of integers of even length.


// 149. Write a JavaScript program to change the capitalization of all letters in a given string.


// 150. Write a JavaScript program to swap pairs of adjacent digits of a given integer of even length.
