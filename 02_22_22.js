// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */
//  var search = function(nums, target) {
//     for(var i = 0; i < nums.length; i++)
//     {
//         if(target == nums[i])
//         {
//             return i;
//         }
//     }
//     return -1;
// };

// console.log(search([-1,0,3,5,9,12], 9));
// console.log(search([-1,0,3,5,9,12], 2));

/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
//  * @param {function} isBadVersion()
//  * @return {function}
//  */
//     var solution = function(isBadVersion) 
//     {
//         for(var i = 1; i < n; i++)
//             {
//                 if(isBadVersion(i))
//                     {
//                         return i;
//                     }
//             };
//         return null;
//     };

//     console.log(isBadVersion(5,4));

/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
 var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n)    {
        var start = 1
        var end = n;
        while(start < end) {
            var mid = Math.floor((start + end)/2);
            if(isBadVersion(mid))
                {
                    end = mid;
                }
            else
                {
                    start = mid + 1;
                }
        }
        return end;
    };
};


