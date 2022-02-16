/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    for(var j = digits.length-1; j >= 0; j--)
        {
            if(digits[j] != 9)
            {
                digits[j] = digits[j] + 1;
                break;
            }
            else
            {
                digits[j] = 0;
            }
        }
    if(digits[0] == 0)
        {
            var array2 = [1];
            digits = array2.concat(digits);
        }
    return digits;
};

console.log(plusOne([5,2,2,6,5,7,1,9,0,3,8,6,8,6,5,2,1,8,7,9,8,3,8,4,7,2,5,8,9]));
console.log(plusOne([1,2,3]));
console.log(plusOne([4,3,2,1]));
console.log(plusOne([9]));


