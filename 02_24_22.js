// // Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
//  var sortedSquares = function(nums) {
//     //first square all the numbers
//     var minNum = Number.MAX_VALUE
//     var minNumIndex = 0
//     if(nums.length == 0)
//     {
//         return null;
//     }
//     for(var i = 0; i < nums.length; i++)
//     {
//         nums[i] = Math.pow(nums[i], 2);
        
//         if(nums[i] < minNum)
//         {
//             minNum = nums[i];
//             minNumIndex = i;
//         }
//     }
//     var left = minNumIndex - 1;
//     var right = minNumIndex + 1;
//     var newArr = [];
//     var start = 1
//     var end = nums.length
//     if(nums.length == 1)
//     {
//         newArr = [minNum];
//         return newArr;
//     }
//     newArr[0] = minNum
//     while(start < end)
//     {
//         if(left < 0)
//         {
//             newArr[start] = nums[right];
//             right++;
//             start++;
//         }
//         else if(right > nums.length-1)
//         {
//             newArr[start] = nums[left];
//             left--;
//             start++;
//         }
//         else if(nums[left] <= nums[right])
//         {
//             newArr[start] = nums[left];
//             left--;
//             start++;
//         }
//         else if(nums[right] < nums[left])
//         {
//             newArr[start] = nums[right];
//             right++;
//             start++;
//         }
//     }
//     return newArr;
// };

// console.log(sortedSquares([-4,-1,0,3,10]));
// console.log(sortedSquares([-7,-3,2,3,11]));
// console.log(sortedSquares([-5,-3,-2,-1]));
// console.log(sortedSquares([-3,0,2]));

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
    var newIndex = null;
    var temp = null;
    var temp2 = null;
    var currentIndex = 0;
    newIndex = (currentIndex+k) % nums.length;
    temp = nums[newIndex];
    nums[newIndex] = nums[currentIndex];
    currentIndex = newIndex
    while(currentIndex != 0)
    {
        newIndex = (currentIndex+k) % nums.length;
        temp2 = nums[newIndex];
        nums[newIndex] = temp;
        temp = temp2;
        currentIndex = newIndex;
    }
    console.log(nums);
};

var x = rotate([1,2,3,4,5,6,7], 3)
var x = rotate([-1,-100,3,99],2)