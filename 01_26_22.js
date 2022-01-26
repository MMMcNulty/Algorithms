/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    var charCounter = 0;
    var pointer = s.length-1;
    if(s.length == 0) {
        return null;
    }
    if(s.length == 1) {
        if(s[0] == ' ') {
            return charCounter;
        }
        else {
            return 1;
        }
    }
    while(s[pointer] == ' ') {
        pointer--;
    }
    while(s[pointer] != ' ' && pointer >= 1){
        charCounter++;
        pointer--;
    }
    if(s[pointer] != ' '){
        charCounter++;
    }
    console.log("last word is: ");
    return charCounter;
};

console.log(lengthOfLastWord("a"));
console.log(lengthOfLastWord("a "));
console.log(lengthOfLastWord("day"));
console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("luffy is still joyboy"));