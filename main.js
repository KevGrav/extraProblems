function isEvenlyDivisible(num1, num2) {
  return num1 % num2 === 0
}

function halfSquare(num) {
  return num**2 /2;
}

function isLong(str) {
  return str.length >= 15
}

//my answer was
// function exclaim(str) {
//  if(!str.endsWith("!")) {
//   return str + "!";
// } else if( str.endsWith ("!!!!!!")){
//    return str.replace("!!!!!!", "!")
// } else if( str.endsWith ("!!")){
//   return str.replace("!!", "!")
// }
// return str;
// }
//or
function exclaim(str) {
  return str.split('!')[0] + "!"
}


function countWords(str) {
  return str.split(" ").length;
}

function containsDigit(str) {
  const digits = '0123456789';
  for(let char of str){
    if(digits.includes(char)){
      return true;
    } 
  }
  return false
    // return /\d/.test(str);
}

function containsLowerCase(str) {
  return str !== str.toUpperCase()
}

function containsUpperCase(str) {
  return str !== str.toLowerCase()
}

function containsNonAlphanumeric(str) {
  const nonAlpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ';
  for (let char of str) {
    if(validator.includes(char.toLowercase())) {
      continue
    }else{
      return true
    }
  }
  return false
}

function containsSpace(str) {
  return str.includes(" ")
}

function digits(num) {
  let numStr = num.toString()
  const results = [];
  for(let char of numStr){
    if(!('.-'.includes(char))){
      results.push(parseInt(char))
    }
  }
  return results    
}

function truncate(str) {
  if(str.length >= 15){
    return str.slice(0, 8) + "...";
  } else {
    return str;
  }
}

function isVaidPassword(str){
  return containsDigit(str) &&
    containsLowerCase(str) &&
    containsUpperCase(str) &&
    containsNonAlphanumeric(str) &&
    !containsSpace(str)
}
   

function onlyPunchy(arr){
  resultsArr = []
  for (let title of arr){
  let newStr = exclaim(title)
    if(!isLong(newStr)){
      resultsArr.push(newStr)
    }
  }
  return resultsArr
}


module.exports = {
  isEvenlyDivisible,
  halfSquare,
  exclaim,
  isLong,
  containsDigit,
  containsLowerCase,
  containsUpperCase,
  containsNonAlphanumeric,
  containsSpace,
  countWords,
  digits,
  truncate,
  isValidPassword,
  onlyPunchy,
}
