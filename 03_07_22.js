/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
    let strStack = [];
    let reversedString = "";
    for(var i = 0; i<s.length; i++)
    {
        if( s[i] != " "){
            strStack.push(s[i]);
        }
        else {
            while(strStack.length > 0)
            {
                let char = strStack.pop();
                reversedString += char;
            }
            reversedString += s[i];
        }
    }
    while(strStack.length > 0)
            {
                let char = strStack.pop();
                reversedString += char;
            }
    return reversedString;
};
console.log(reverseWords("Let's take LeetCode contest"))