// 🧠 Day 4 of Problem Solving – Two Sum (Brute Force Approach)

// Problem: Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

var twoSum = function (nums, target) {
  for (let num1 = 0; num1 < nums.length; num1++) {
    for (let num2 = num1 + 1; num2 < nums.length; num2++) {
      if (nums[num1] + nums[num2] === target) {
        return [num1, num2];
      }
    }
  }
  return [];
};
console.log(twoSum([2, 7, 11, 15], 9));

//   var addTwoNumbers = function (l1, l2) {
//     function reverseArray(arr) {
//       const reversed = [];
//       for (let i = arr.length - 1; i >= 0; i--) {
//         reversed.push(arr[i]);
//       }
//       return reversed;
//     }

//     let num1 = Number(reverseL1);
//     let num2 = Number(reverseL2);
//     let sum = (num1 + num2).toString().split("").reverse()
//     return sum;
//   };

//   addTwoNumbers([2, 4, 3], [5, 6, 4]);
//   addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]);
