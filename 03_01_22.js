/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    for(var i = nums.length - 1; i >= 0; i--)
    {
        if(nums[i]==0)
        {
            var temp = null;
            for(var j = i; j <nums.length-1; j++)
                {
                    temp = nums[j+1];
                    nums[j+1] = nums[j];
                    nums[j] = temp
                }
            
        }
    console.log(nums);
    }
    console.log("the new nums is: " + nums);
};

console.log(moveZeroes([0,1,0,3,12]));