/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

var addBinary = function(a, b) {

    var stackA = [];
    var stackB = [];
    var charA = null;
    var charB = null;
    var newChar = '';
    var newBinary = "";
    var carryOver = false;

    for(var i = 0; i < a.length; i++)
    {
        var c = a.charAt(i);
        stackA.push(c);
    }
    for(var i = 0; i < b.length; i++)
    {
        var c = b.charAt(i);
        stackB.push(c);
    }
    while(stackA.length != 0 || stackB.length != 0)
    {
        charA = stackA.pop();
        charB = stackB.pop();
        while(carryOver != true) {
            if(charA == '0' && charB == '0')
            {
                newChar = '0';
            }
            else if(charA == '0' && charB == '1')
            {
                newChar = '1';
            }
            else if(charA == '1' && charB == '0')
            {
                newChar = '1';
            }
            else if(charA == '1' && charB == '1')
            {
                newChar = '0';
                carryOver = true;
            }
            newBinary = newChar + newBinary;
        }
        return newBinary;
    }

};

console.log(addBinary("1010", "1"));


// var addBinary = function(a, b) {
//     var pointer = null;
//     var otherPointer = null;
//     var longestString = null;
//     var shortestString = null;
//     if(a.length == 0){
//         return b;
//     }
//     if(b.length == 0){
//         return a;
//     }
//     if(a.length == 0 && b.length == 0) {
//         return null;
//     }
//     if(a.length >= b.length) 
//     {
//         pointer = a.length;
//         otherPointer = b.length;
//         longestString = a;
//         shortestString = b;
//     }
//     else
//     {
//         pointer = b.length;
//         otherPointer = a.length;
//         longestString = b;
//         shortestString = a;
//     }
//     for(var i = pointer - 1; i >= 0; i--)
//     {
//         if()
//     }

// };


//  var addBinary = function(a, b) {
//     var i = 0;
//     newBinary = "";
//     tempBinary = ""
//     while(a[i] != null) 
//     {
//         if(a[i] == '0' && b[i] =='0')
//         {
//             newBinary[i] == '0';
//         }
//         else if(a[i] == '1' && b[i] =='0')
//         {
//             newBinary[i] == '1';
//         }
//         else if(a[i] == '0' && b[i] =='1')
//         {
//             newBinary[i] == '1';
//         }
//         if(a[i] == '1' && b[i] == '1')
//         {
//             newBinary[i] == 0;
//             tempBinary[i+1] == 1;
//             i++
//         }
//     }
// };