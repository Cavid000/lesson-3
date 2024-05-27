function divide(input1, input2) {
    var result = 0;
    s1= parseInt(input1);
    s2= parseInt(input2);
    if (s2!=0){
       result=s1/s2;
    }
    return result;
 }
 

 // Returns true if:
//
//    n is an integer that is evenly divisible by 2
//
// Zero (+/-0) is even
// Returns false if n is not an integer, not even or NaN
// Guard against empty string

(function (global) {

  function basicTests(n) {

    // Deal with empty string
    if (n === '') 
      return false;

    // Convert n to Number (may set to NaN)
    n = Number(n);

    // Deal with NaN
    if (isNaN(n)) 
      return false;

    // Deal with infinity - 
    if (n === Number.NEGATIVE_INFINITY || n === Number.POSITIVE_INFINITY)
      return false;

    // Return n as a number
    return n;
  }

  function isEven(n) {

    // Do basic tests
    if (basicTests(n) === false)
      return false;

    // Convert to Number and proceed
    n = Number(n);

    // Return true/false
    return n === 0 || !!(n && !(n%2));
  }
  global.isEven = isEven;

  // Returns true if n is an integer and (n+1) is even
  // Returns false if n is not an integer or (n+1) is not even
  // Empty string evaluates to zero so returns false (zero is even)
  function isOdd(n) {

    // Do basic tests
    if (basicTests(n) === false)
      return false;

    // Return true/false
    return n === 0 || !!(n && (n%2));
  }
  global.isOdd = isOdd;

}(this));

//check if the number is even
function isEven (number) {
    return (number & 1) === 0;
  }
  
  //check if the number is odd
  function isOdd (number) {
    return (number & 1) === 1;
  }
  
  //Test
  console.log(isEven(5)); //false
  console.log(isEven(4)); //true
  console.log(isOdd(5));  //true
  console.log(isOdd(4));  //false

  let inputValue= 7;
let isprime=inputValue==1? false:true;  //bcoz 1 is not prime

for(let i=2;i<inputValue;i++){
  inputValue%i==0? isprime*=false :isprime*=true;
};

alert(`${inputValue} is ${isprime? 'prime':'not prime'} number`);


function max (){

    let ans=0;

    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > ans){
            ans= arguments[i];
        }
    }
    return ans;
}


console.log(Math.min(2, 3, 1));
// Expected output: 1

console.log(Math.min(-2, -3, -1));
// Expected output: -3

const array1 = [2, 3, 1];

console.log(Math.min(...array1));
// Expected output: 1

const sum = [1, 2, 3].reduce((partialSum, a) => partialSum + a, 0);
console.log(sum); // 6

function findAverage(arr) { 
    let sum = 0; 
    for (let i = 0; i < arr.length; i++) { 
      sum += arr[i]; 
    } 
    return sum / arr.length; 
  } 
   
  let numbers = [1, 2, 3, 4, 5]; 
  let average = findAverage(numbers); 
  console.log(average); // This will output 3

  function findMedian(arr) {
    arr.sort((a, b) => a - b);
    const middleIndex = Math.floor(arr.length / 2);

    if (arr.length % 2 === 0) {
        return (arr[middleIndex - 1] + arr[middleIndex]) / 2;
    } else {
        return arr[middleIndex];
    }
}

var data = [...Array(10).keys()];
console.log(data);
    var data1 = Array(8).fill().map((_, i) => i);
console.log(data1);

// Function to reverse string
function reverseString(str) {
    const strRev =  str.split('').reverse().join('');
    console.log(strRev);
}

// Function call
reverseString("GeeksforGeeks");
reverseString("JavaScript");
reverseString("TypeScript");

function checkPalindrom(palindrom)
{

    for( var i = palindrom.length; i > 0; i-- )
    {
        if( palindrom[i] = palindrom.charAt(palindrom.length)-1 )
        {
            document.write('the word is palindrome.');
        }else{
            document.write('the word is not palindrome!');
        }
    }
}
checkPalindrom('wordthatwillbechecked');

const map = {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz"
  };
  
  var x = "hello"
  var y = x.replace(/(.)/g, match => map.uppercase[map.lowercase.indexOf(match)]);
  
  console.log(y);

  const lowerCaseName = "Your Name".toLowerCase(); // your name

  function titleCase(str) {
    var splitStr = str.toLowerCase().split(" ");
  
    for (var i = 0; i < splitStr.length; i++) {
      if (splitStr.length[i] < splitStr.length) {
        splitStr[i].charAt(0).toUpperCase();
      }
  
      str = splitStr.join(" ");
    }
  
    return str;
  }
  
  console.log(titleCase("I'm a little tea pot"));

  function getVowels(str) {
    var vowelsCount = 0;
  
    //turn the input into a string
    var string = str.toString();
  
    //loop through the string
    for (var i = 0; i <= string.length - 1; i++) {
  
    //if a vowel, add to vowel count
      if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") {
        vowelsCount += 1;
      }
    }
    return vowelsCount;
  }

  function consonants(str) {
    var countConsonants = 0;
  
    for (var i = 0; i <= str.length; i++) {
  
      if (str[i] !== "a" || str[i] !== "e" || str[i] !== "i" ||
        str[i] !== "o" || str[i] !== "u" || str[i] !== " ") {
        countConsonants += 1;
      }
    }
    return (countConsonants);
  }
  consonants("asdfghaaa");


  
{
     length = str.length();
     consonant = 0;

        for (int i = 0; i < length; i++)
        {
            if(str[i] == 'b'&& str[i] == 'c' && str[i] == 'd'&& str[i] == 'f'
                && str[i] == 'g'&& str[i] == 'h'&& str[i] == 'j' && str[i] == 'k'&& str[i] == 'l'&& str[i] == 'm'
                && str[i] == 'n'&& str[i] == 'p'&& str[i] == 'q'&& str[i] == 'r'&& str[i] == 's'&& str[i] == 't'
                && str[i] == 'v'&& str[i] == 'w'&& str[i] == 'x'&& str[i] == 'y'&& str[i] == 'z')

                consonant = consonant + 1;
        }
        return consonant;
}

const scoobyDoo = str => {
    if(typeof str !== 'string'){
        return 'This function accepts strings only';
    }   
    let newStr = str.toLowerCase().split('');
    let arrWord = newStr.length;
    let regex = /[aeiou]/gi;
    for (let i = 0; i < arrWord; i++){
        if (newStr[0].match(regex)) {
            let nothing = newStr.join('');
            return nothing;
        }
        else {
            let vowelIndex = newStr.indexOf(str.match(regex)[0]);
            newStr.splice(0, vowelIndex, 'r');
            return newStr.join('');
        }
    }
}
console.log(scoobyDoo('scOoby')); 

console.log(scoobyDoo('scooby'));//works as expected returns 'rooby'
console.log(scoobyDoo('ethane'));//works as expected returns 'ethane'
console.log(scoobyDoo('why'));// should return 'why'
console.log(scoobyDoo('          '));// should return trimmed space and a 

var isANumber = isNaN(theValue) === false;

if (isANumber){
    
}

function makeid(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

console.log(makeid(5));

function factorial(n){
  if(n==1){
    return 1;
  } else {
   while(n>=0){
    n = n * (n-1);
   }
   return n;
 }
}

num % 1 != 0
// 23 % 1 = 0
// 23.5 % 1 = 0.5

isSquare(-12) // => false
isSquare( 5) // => false
isSquare( 9) // => true
isSquare(25) // => true
isSquare(27) // => false

var x = 0;
var y = 1;
var z;

fib[0] = 0;
fib[1] = 1;

for (i = 2; i <= 10; i++) {
  alert(x + y);
  fib[i] = x + y;
  x = y;
  z = y;
}