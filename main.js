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
  const nonAlpha = '!@#$%^&*()_+-=[]{}|;:,.<>?`" ';
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
  const results = [];
  // if(char >=0){
    let numStr = num.toString().split('');
    for(let char of numStr){
      results.push(char)
      } 
}

function truncate(str) {
  if(str.length >= 15){
    return str.slice(0, 8) + "...";
  } else {
    return str;
  }
}

function isValidPassword(str) {
  let passwordStr = ''
  const strU = str.toUpperCase();
  const strL = str.toLowerCase();
  const nonAlpha = '!@#$%^&*()_+-=[]{}|;:,.<>?`';
  const digits = '0123456789';
  
   if((str === strU || str === strL) || str.includes(" ")){
     return false;
     } else for(let char of str){
     if(digits.includes(char) && nonAlpha.includes(char)){
      passwordStr += char;
      }
     return true
   }
}

function onlyPunchy(str) {
  let puncArr = [];
  return (str += '!').slice(0, (str.indexOf('!') + 1));
    
    } for(let title of str){
      if(title.length < 15){
        puncArr.push(title);
  }
  return puncArr;
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
