// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// var twoSum = function (nums, target) {
//     twoSumArr = [];
//     for (var i = 0; i < nums.length; i++) {
//         for (var j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] == target)
//             {
//                 twoSumArr.push(i);
//                 twoSumArr.push(j);
//                 return twoSumArr;
//             }
//         }
//     }

// };

// console.log(twoSum([1,2,4,6], 3));
// console.log(twoSum([1,2,4,6], 10));

/**
//  * @param {number} x
//  * @return {boolean}
//  */
//  var isPalindrome = function(x) 
//  {
//     y = x.toString()

//     firstIndex = 0;
//     lastIndex = y.length - 1;
//     while(firstIndex < y.length/2) 
//     {
//         if(y[firstIndex] != y[lastIndex])
//         {
//             return false;
//         }
//         firstIndex++;
//         lastIndex--;
//     }
//     return true;
// };

// console.log(isPalindrome(x = 1235321));

/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    var sum = 0;
    for(var i = 0; i <s.length; i++)
    {
        switch(s[i]) {
            case 'I':
                if(s[i+1]== 'V' || s[i+1] == 'X') 
                {
                    sum -= 1;
                }
                else 
                {
                    sum += 1;
                }
                break;
            case 'V':
                sum += 5;
                break;
            case 'X':
                if(s[i+1]== 'L' || s[i+1] == 'C') 
                {
                    sum -= 10;
                }
                else 
                {
                    sum += 10;
                }
                break;
            case 'L':
                sum += 50;
                break;
            case 'C':
                if(s[i+1]== 'D' || s[i+1] == 'M') 
                {
                    sum -= 100;
                }
                else 
                {
                    sum += 100;
                }
                break;
            case 'D':
                sum += 500;
                break;
            case 'M':
                sum += 1000;
                break;
            default:
                return false;
            }
        
    }
    return sum;
};

console.log(romanToInt("MCMXCIV"))