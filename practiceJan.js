// /**
//  * @param {string[]} strs
//  * @return {string}
//  */
// var longestCommonPrefix = function(strs) 
// {
//     var prefix="";
//     for(var L = 0; L < strs[0].length; L++) 
//     {
//         var match = true;
//         for(var i = 1; i < strs.length; i++) 
//         {
//             if(strs[0][L] != strs[i][L]) 
//             {
//                 match = false;
//                 break;
//             }
//         }
//         if (match) 
//         {
//             prefix = prefix + strs[0][L];
    
//         }
//         else 
//         {
//             return prefix;
//         }
//     }
//     return strs[0];
// };

// console.log(longestCommonPrefix(["flower","flow","flight"]))

/**
//  * @param {number[]} nums
//  * @return {number}
 */
//  var removeDuplicates = function(nums) {
//     var count = 1;
//     for(var i = 1; i < nums.length; i++) 
//     {
//         if(nums[i] != nums[count-1]) 
//         {
//             nums[count] = nums[i]
//             count++
//         }
//     }
//     return count;
// };

// console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))

// function isPal(arr) {
//     for(var left=0; left<arr.length/2; left++) {
//         var right = arr.length-1-left;
//         if(arr[left] != arr[right]) {
//             return "Not a pal-indrome!";
//         }
//     }
//     return "Pal-indrome!";
// }
    
// var result1 = isPal( [1, 1, 2, 2, 1] );
// console.log(result1);
    
// var result2 = isPal( [3, 2, 1, 1, 2, 3] );
// console.log(result2);

/**
//  * @param {string} s
//  * @return {boolean}
//  */
// var isValid = function(s) {
//     var openParen = 0;
//     var closedParen = 0;
//     var openBrac = 0;
//     var closedBrac = 0;
//     var openSquare = 0;
//     var closedSquare = 0;
//     output = false;
//     for(var i = 0; i <s.length; i++) {
//         if(s[i]=='(') {
//             openParen++
//         }
//         if(s[i]==')' ) {
//             closedParen++
//         }
//         if(s[i]=='[') {
//             openSquare++
//         }
//         if(s[i]==']' ) {
//             closedSquare++
//         }
//         if(s[i]=='{') {
//             openBrac++
//         }
//         if(s[i]=='}' ) {
//             closedBrac++
//         }

//         if(closedParen > openParen || closedBrac > openBrac || closedSquare > openSquare)
//         {
//             break;
//         }
//     }
//     if(closedParen == openParen & closedBrac == openBrac & closedSquare == openSquare) {
//         output =  true;
//     }
//     return output;
// };

// console.log(isValid("))(("));
// console.log(isValid("())[]{}"));
// console.log(isValid("](]"));
// console.log(isValid("([])"));
// console.log(isValid("([)]"));

// 

// var isValid = function(s) {
//     output = true;
//     var stack = [];
//     var top = 0;
//     if(s.length == 0) {
//         return false;
//     }
//     if(s.length % 2 != 0) {
//         return false;
//     }
//     for(var i = 0; i <s.length; i++) {
//         if(s[i] =='(' || s[i] =='[' || s[i] =='{')
//         {
//             stack.push(s[i]);
//         }
        
//         else if(s[i] ==')')
//         {
//             top = stack.pop();
//             if (top != '(') {
//                 return false;
//             }
//         }
//         else if(s[i] ==']')
//         {
//             top = stack.pop();
//             if (top != '[') {
//                 return false;
//             }
//         }
//         else if(s[i] =='}')
//         {
//             top = stack.pop();
//             if (top != '{') {
//                 return false;
//             }
//         }
//     }
//     if (stack.length != 0) {
//         return false;
//     }
//     return output;
// };

// console.log(isValid("([])))"));
// console.log(isValid("))(("));
// console.log(isValid("()[]{}"));
// console.log(isValid("](]"));
// console.log(isValid("([])"));
// console.log(isValid("([)]"));

// /**
//  * @param {number[]} nums
//  * @param {number} val
//  * @return {number}
//  */
//  var removeElement = function(nums, val) {
//     var pointer = 0;
//     for(var i = 0; i < nums.length; i++) {
//         if(nums[i] != val){
//             nums[pointer] = nums[i];
//             pointer++;
//         }
//     }
//     console.log(nums);
//     return pointer;
// };

// console.log(removeElement([3,2,2,3], 3))
// console.log(removeElement([0,1,2,2,3,0,4,2], 2))

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
//  var mergeTwoLists = function(list1, list2) {
//     let startNode = null;
//     let currentNode = null;
//     if(list1 === null){
//         return list2;
//     }
//     if(list2 === null){
//         return list1;
//     }
//     if( list1.val > list2.val ) {
//         startNode = list2;
//         currentNode = startNode;
//         list2 = list2.next;
//     }
//     else {
//         startNode = list1;
//         currentNode = startNode;
//         list1 = list1.next;
//     }
//     while(true) {
//         if(list1 == null) {
//             currentNode.next = list2;
//             break;
//         }
//         if(list2 == null) {
//             currentNode.next = list1;
//             break;
//         }
//         if(list1.val > list2.val) {
//             currentNode.next = list2;
//             currentNode = list2;
//             list2 = list2.next;
//         }
//         else {
//             currentNode.next = list1;
//             currentNode = list1;
//             list1 = list1.next;
//         }

//     }
//     return startNode;
// };





/**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */
//  var searchInsert = function(nums, target) {
//     for(var i = 0; i < nums.length; i++) 
//     {
//         if(target > nums[nums.length-1])
//         {
//             console.log("nums is: " + nums + " target is: " + target + " output is: " + nums.length )
//             return nums.length;
//         }
//         if (target <= nums[i])
//         {
//             console.log("nums is: " + nums + " target is: " + target + " output is: " + i )
//             return i;
//         }
//     }
// };
// console.log(searchInsert([1,3,5,6], 5))
// console.log(searchInsert([1,3,5,6], 2))
// console.log(searchInsert([1,3,5,6], 7))

/**
//  * @param {number[]} nums
//  * @return {number}
//  */
 var maxSubArray = function(nums) {
    largestSum = nums[0];
    if(nums.length == 0) {
        return null;
    }
    if(nums.length == 1) {
        return largestSum;
    }
    for(i=0; i < nums.length; i++) {
        let sum = nums[i];
        if(largestSum < sum) {
            largestSum = sum;
        } 
        for(j = i+1 ; j < nums.length; j++){
            sum = sum + nums[j];
            if(largestSum < sum) {
                largestSum = sum;
            }  
        }
        if(sum > largestSum) {
            largestSum = sum;
        }
    }
    return largestSum;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
//  * @param {ListNode} head
//  * @return {ListNode}
//  */
//  var reverseList = function(head) {
//     let runner = head;
//     let stack = [];
//     newNode = null;
//     if(head == null) {
//         return null;
//     }
//     while(runner != null){
//         stack.push(runner);
//         runner = runner.next;
//     }
//     head = stack.pop();
//     runner = head;
//     while(stack.length != 0) {
//         newNode = stack.pop();
//         runner.next = newNode;
//         runner = newNode
//     }
//     runner.next = null;
//     return head;
// };

