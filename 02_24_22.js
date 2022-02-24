// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
    //first square all the numbers
    var minNum = Number.MAX_VALUE
    var minNumIndex = 0
    if(nums.length == 0)
    {
        return null;
    }
    for(var i = 0; i < nums.length; i++)
    {
        nums[i] = Math.pow(nums[i], 2);
        
        if(nums[i] < minNum)
        {
            minNum = nums[i];
            minNumIndex = i;
        }
    }
    var left = minNumIndex - 1;
    var right = minNumIndex + 1;
    var newArr = [];
    var start = 1
    var end = nums.length
    if(nums.length == 1)
    {
        newArr = [minNum];
        return newArr;
    }
    
    if(minNumIndex == nums.length - 1)
    {
        for(var i = nums.length-1; i >= 0; i--)
        {
            newArr.push(nums[i]);
            nums.pop();
        }
        return newArr;
    }
    newArr[0] = minNum
    while(start < end)
    {
        if(left < 0)
        {
            newArr[start] = nums[right];
            right++;
            start++;
        }
        if(right >= nums.length)
        {
            newArr[start] = nums[left];
            left--;
            start++;
        }
        if(nums[left] <= nums[right])
        {
            newArr[start] = nums[left];
            left--;
            start++;
        }
        if(nums[right] < nums[left])
        {
            newArr[start] = nums[right];
            right++;
            start++;
        }
    }
    return newArr;
};

console.log(sortedSquares([-4,-1,0,3,10]));
console.log(sortedSquares([-7,-3,2,3,11]));
console.log(sortedSquares([-5,-3,-2,-1]));
console.log(sortedSquares([-3,0,2]));