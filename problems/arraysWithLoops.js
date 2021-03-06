/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a for loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @returns {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

function shoutForLoop(array) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push([array[i]] + '!');
  }
  return newArray
}

/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a while loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @return {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

function shoutWhileLoop(array) {
  let newArray = [];
  let i = 0;

  while (i < array.length) {
    newArray.push(array[i++] + '!')
  }
  return newArray
}

/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a [for/of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @returns {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

function shoutForOfLoop(array) {
  let newArray = [];
  let i = 0

   for (let element of array) {
     newArray.push([array[i++]] + '!')
   }
   return newArray
}

/**
 * Takes in an array and returns the sum of all values
 * @param {number[]} nums
 * @returns {number} sum
 */

function sumArray(nums) {
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
  }
  return sum
}

/**
 * Takes in an array and returns an array of all the odd valued elements
 * @param {number[]} nums
 * @returns {array} odds
 */

function oddArray(nums) {
  let newArr = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {

    } else {
      newArr.push(nums[i])
    } 
  }
  return newArr
}

/**
 * Takes in an array and returns an array of all the even valued elements
 * @param {number[]} nums
 * @returns {array} evens
 */

function evenArray(nums) {
  let newArr = [];

  for (let i =0; i < nums.length; i++) {
    if (nums[i] % 2 === 0){
     newArr.push(nums[i])
    }
  }
  return newArr
}

/**
 * Takes in array and returns the smallest number in the array
 * @param {number[]} nums
 * @returns {number} smallest value
 */

function findSmallest(nums) {
  let smallNumber = Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < smallNumber) {
      smallNumber = nums[i]
    }
  }
  return smallNumber
}

/**
 * Takes in array and returns the second smallest number in the array
 * You may NOT use sort
 * @param {number[]} nums
 * @returns {number} second smallest value
 */

function findSecondSmallest(nums) {
  let smallestNumber = Infinity;
  let secondSmallestNumber = Infinity;
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < smallestNumber) {
      secondSmallestNumber = smallestNumber
      smallestNumber = nums[i]
    } else if (nums[i] < secondSmallestNumber) {
      secondSmallestNumber = nums[i]
    }
  }
  return secondSmallestNumber
}

/**
 * Takes in array and returns the second largest number in the array
 * @param {number[]} nums
 * @returns {number} second largest value
 */

function findSecondLargest(nums) {
  let largestNumber = -Infinity;
  let secondLargestNumber = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > largestNumber) {
       secondLargestNumber = largestNumber;
       largestNumber = nums[i]
    } else if (nums[i] > secondLargestNumber) {
      secondLargestNumber = nums[i]
    }
  }
  return secondLargestNumber
}
 

/**
 * Takes in array and returns an array with all the values but with no duplicates.
 * Exp Input: [4,2,6,2,2,6,4,9,2,1] Output: [4, 2, 6, 9, 1]
 * @param {number[]} nums
 * @returns {array} nums without the duplicates
 */
// Hint: Look into the `.includes` method.
function removeDups(nums) {
  let arr = [];
  for (let i = 0; i < nums.length; i++){
    if (arr.includes(nums[i])){}
    else {
      arr.push(nums[i])
    }
  }
  return arr;
}

module.exports = {
  shoutForLoop,
  shoutWhileLoop,
  shoutForOfLoop,
  sumArray,
  oddArray,
  evenArray,
  findSmallest,
  findSecondSmallest,
  findSecondLargest,
  removeDups,
};
