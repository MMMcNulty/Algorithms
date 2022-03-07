/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
//  * @param {ListNode} head
//  * @param {number} n
//  * @return {ListNode}
//  */
//  var removeNthFromEnd = function(head, n) {
//     var runner = head;
//     var current = head;
//     if(head.next == null)
//     {
//         return null;
//     }
//     for(var i = 0; i < n; i++)
//     {
//         runner = runner.next;
//         if(runner.next == null)
//         {
//             while(current.next != runner)
//             {
//                 current = current.next;
//             }
//             current.next = null;
//             return head;
//         }
//     }

//     while(runner.next != null)
//     {
//         runner = runner.next;
//         current = current.next;
//     }
//     let newNextNode = current.next.next
//     current.next = newNextNode
//     return head;
// };

// var removeNthFromEnd = function(head, n) {
//     var runner = head;
//     var listLength = 1;
//     while(runner.next != null)
//     {
//         runner = runner.next;
//         listLength++
//     }
//     if(listLength == 2 && n == 1)
//     {
//         head.next = null;
//         return head;
//     }
//     var current = head;
//     for(var i = 0; i <listLength-n; i++)
//     {
//         current = current.next;
//     }
//     current.next = runner;
//     return head;

// }


/**
//  * @param {character[]} s
//  * @return {void} Do not return anything, modify s in-place instead.
//  */
var reverseString = function(s) {
    let left = 0;
    let right = s.length - 1;
    let temp = "";
    let temp2 = "";
    while(left < right)
    {
        temp = s[left];
        temp2 = s[right];
        s[left] = temp2;
        s[right] = temp;
        left++;
        right--;
    }
};
console.log(reverseString("h","e","l","l","o"))

