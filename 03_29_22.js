function palindromeIndex(s) {
    if(isPalindrome(s))
    {
        return -1;
    }
    else
    {
        for(var i = 0; i < s.length; i++)
        {
            let newStr = s.split('');
            newStr.splice(i,1);
            newStr = newStr.join('');
            if(isPalindrome(newStr))
            {
                return i;
            }
        }
    }

}

function isPalindrome(s) {
    let palindrome = true;
    let mid = 0;
    let left = 0;
    let right = 0;
    if (s.length % 2)
    {
        mid = Math.floor(s.length/2);
        left = mid - 1;
        right = mid + 1;
    }
    else
    {
        mid = s.length/2;
        left = mid - 1;
        right = mid
    }
    while(left >= 0 && right <= s.length)
        {
            if( s[left] === s[right])
            {
                left--;
                right++;
            }
            else
            { 
                palindrome = false;
                break;
            }
        }
        return palindrome;
    };

// console.log(isPalindrome("racecar"));
// console.log(isPalindrome("rrrrr"));
// console.log(isPalindrome("aabaa"));
// console.log(isPalindrome("baabb"));
// console.log(isPalindrome("abba"));
// console.log(isPalindrome("aaaa"));
console.log(palindromeIndex("bacb"));
console.log(palindromeIndex("baa"));
console.log(palindromeIndex("aaa"));
console.log(palindromeIndex("aaaba"));