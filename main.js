function isEvenlyDivisible(num1, num2) {
  if (num1 % num2 === 0) {
    return true;
  } else {
    return false;
  }
}

function halfSquare(num) {
  return num**2 /2;
}

function isLong(str) {
  if (str.length >= 15) {
    return true;
  } else {
    return false;
  }
}

function exclaim(str) {
 if(!str.endsWith("!")) {
  return str + "!";
} else if( str.endsWith ("!!!!!!")){
   return str.replace("!!!!!!", "!")
} else if( str.endsWith ("!!")){
  return str.replace("!!", "!")
}
return str;
}


function countWords(str) {
  return str.split(" ").length;
}

function containsDigit(str) {
  // const digits = '0123456789';
  // for(let char of str){
  //   if(digits.includes(char)){
  //     return true;
  //   } else{
  //     return false;
  //   }
  // }

  return /\d/.test(str);
}

function containsLowerCase(str) {
  return str !== str.toUpperCase()
}

function containsUpperCase(str) {
  return str !== str.toLowerCase()
}

function containsNonAlphanumeric(str) {
  const nonAlpha = '@#*(`?!`" ';
  for(let char of str){
        if(nonAlpha.includes(char)){
          return true;
        } else{
          return false;
        }
      }
}

function containsSpace(str) {
  return str.includes(" ")
}

function digits(num) {
}

function truncate() {
}

function isValidPassword() {
}

function onlyPunchy() {
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
