/** product: calculate the product of an array of numbers. */

function product(nums) {
  if(nums.length ===0) return 1;
  return nums[0] * product(nums.slice(1))
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  let counter = 0;
for(let word of words){
  if(word.length > counter){
    counter = word.length
    longest(words.slice(1))
  }else{
    longest(words.slice(1))
  }
  
}
return counter
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  let word = ""
  for(let i=0; i<str.length; i++){
  if(i%2 !== 0){
    everyOther(str.slice(1))
  }else{
    word += str[i]
  }
  }
  return word
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  for(let i=0; i<str.length; i++){
    if(str[i]!==str[str.length-1-i]){
      return false
    }else{
      isPalindrome(str.slice(1,-1))
    }
  }
  return true
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  for(let i=0; i<arr.length; i++){
    if(arr[i] !== val){
      findIndex(arr.slice(1),val)
    }else{
      return i
    }
  }
  return -1
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
if(str.length===0) return "";

return str[str.length-1] + revString(str.slice(0,-1))
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let arr = [];
  for(let o in obj){
    if(obj[o] instanceof Object){
      arr.push(...gatherStrings(obj[o]))
    }if(typeof obj[o]==="string"){
      arr.push(obj[o])
    }
}
return arr
}
/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {
for(let i=0; i<arr.length; i++){
  if(arr[i]!== val) binarySearch(arr.slice(1),val)
    else{
  return i
}
}
return -1
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
