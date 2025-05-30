/******************
 * YOUR CODE HERE *
 ******************/
//  =================== 1 ==================

function xify(str) {
    let result = "";
    for(let i = 0; i < str.length; i++){
        
        result = result + "x";
    }
    return result
}


//  =================== 2 ==================


function yellingChars(str){
    let result = ""
    for(let i = 0; i < str.length; i++){ 
        result = result + str[i] + "!"  
        
    }  
    return result
}

//  =================== 3 ==================

function indexedChars(str){
  let result = ""
  for(let i = 0; i < str.length; i++){
    result = result + i + str[i]  
  }
  return result
}

//  =================== 4 ==================

function numberedChars(str) {
  let result = ""
  for(let i = 0; i < str.length; i++){
    result = result + "(" + (i + 1) + ")" + str[i]  
  }
  return result
}

//  =================== 5 ==================
function exclaim(str){
  let result = ""
  for(let i = 0; i < str.length; i++){
    let char = str[i]

    if(char === "?" || char === "."){
      result += "!"
    }else {
      result += char
    }
    
  }
  return result
}
// console.log(exclaim("Why don't you get it? Are your brains melted? You are now a ZOMBIE?"))



////  =================== 6 ==================

function repeatIt(str, n){
    let result = ""
    for(let i = 0; i < n; i++){
      result += str
    }
    return result
}
// console.log(repeatIt("RedRum", 3))

////  =================== 7 ==================

function truncate(str) {
  if (str.length <= 18) {
    return str
  }
  let result = ""
  for (let i = 0; i < 15; i++) {
    result += str[i]
  }
  return result + "..."
}
// console.log(truncate("Hello, who long can this be?"))

////  =================== 8 ==================

function emailify(name){
  let firstInitial = ""
  let lastName = ""
  let spaceFound = false

  for(let i = 0; i <name.length; i++){
    let char = name[i].toLowerCase()
    if(!spaceFound){
      if( i === 0){
        firstInitial = char
      }
      if (char === " "){
        spaceFound = true
      }
    }else {
      lastName += char
    }
  }
  return firstInitial + lastName + ".prsvr@gmail.com"
}
// console.log(emailify("Adam Finnell"))

////  =================== 9 ==================

function reverse(str) {
  let result = ""
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i]
  }
  return result
}
// console.log(reverse("adamus"))

////  =================== 10 ==================

function onlyVowels(word){
  let result = ""
  for(let i = 0; i < word.length; i++){
    let char = word[i].toLowerCase()
    if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
      result += word[i]
    }
  }
  return result
}
// console.log(onlyVowels("Adam Finnell"))

////  =================== 11 ==================

function crazyCase(str) {
  let result = ""
  for (let i = 0; i < str.length; i++) {
    let char = str[i]
    if (i % 2 === 0) {
      result += char.toLowerCase()
    } else {
      result += char.toUpperCase()
    }
  }
  return result
}


// ================== 12 ======================

function titleCase(str) {
  let result = ""
  let capitalizeNext = true
  for (let i = 0; i < str.length; i++) {
    let char = str[i]
    if (char === " ") {
      capitalizeNext = true
      result += char
    } else if (capitalizeNext) {
      result += char.toUpperCase()
      capitalizeNext = false
    } else {
      result += char.toLowerCase()
    }
  }
  return result
}

// =================== 13 ====================

function camelCase(str) {
  let result = ""
  let capitalizeNext = false
  for (let i = 0; i < str.length; i++) {
    let char = str[i]
    if (char === " ") {
      capitalizeNext = true
    } else {
      if (capitalizeNext) {
        result += char.toUpperCase()
        capitalizeNext = false
      } else {
        result += char.toLowerCase()
      }
    }
  }
  return result;
}

// ================== 14 ========================

function crazyCase2ReturnOfCrazyCase(str){
  let result = ""
  let letterIndex = 0
  for(let i = 0; i < str.length; i++){
    let char = str[i]
    if(char === " "){
      result += char
    }else {
      if (letterIndex % 2 === 0){
        result += char.toLowerCase()
      }else {
        result += char.toUpperCase()
      }
      letterIndex++
    }
  }
  return result
}
console.log(crazyCase2ReturnOfCrazyCase("What I'm I doing wrong?"))

 /********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof xify === 'undefined') {
  xify = undefined;
}

if (typeof smilify === 'undefined') {
  smilify = undefined;
}

if (typeof yellingChars === 'undefined') {
  yellingChars = undefined;
}

if (typeof numberedChars === 'undefined') {
  numberedChars = undefined;
}

if (typeof indexedChars === 'undefined') {
  indexedChars = undefined;
}

if (typeof exclaim === 'undefined') {
  exclaim = undefined;
}

if (typeof repeatIt === 'undefined') {
  repeatIt = undefined;
}

if (typeof truncate === 'undefined') {
  truncate = undefined;
}

if (typeof emailify === 'undefined') {
  emailify = undefined;
}

if (typeof reverse === 'undefined') {
  reverse = undefined;
}

if (typeof onlyVowels === 'undefined') {
  onlyVowels = undefined;
}

if (typeof crazyCase === 'undefined') {
  crazyCase = undefined;
}

if (typeof titleCase === 'undefined') {
  titleCase = undefined;
}

if (typeof camelCase === 'undefined') {
  camelCase = undefined;
}

if (typeof crazyCase2ReturnOfCrazyCase === 'undefined') {
  crazyCase2ReturnOfCrazyCase = undefined;
}


module.exports = {
  xify,
  smilify,
  indexedChars,
  yellingChars, // <-- add this line here (no need for the comment, obvs)
  numberedChars,
  exclaim,
  repeatIt,
  truncate,
  emailify,
  reverse,
  onlyVowels,
  crazyCase,
  titleCase,
  camelCase,
  crazyCase2ReturnOfCrazyCase,
}
