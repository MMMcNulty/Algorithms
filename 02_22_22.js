/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    for(var i = 0; i < nums.length; i++)
    {
        if(target == nums[i])
        {
            return i;
        }
    }
    return -1;
};

console.log(search([-1,0,3,5,9,12], 9));
console.log(search([-1,0,3,5,9,12], 2));
