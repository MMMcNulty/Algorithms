/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var middleNode = function(head) {
    var runner = head;

    var nodeCounter = 1;
    if(head == null)
        {
            return null;
        }
    while(runner.next != null)
    {
        runner = runner.next;
        nodeCounter++;
    }
    
    var midpoint = 1;
    if(nodeCounter % 2)
    {
        midpoint = Math.ceil(nodeCounter/2)
    }
    else
    {
        midpoint = (nodeCounter/2) + 1;
    }
    
    var currentNode = head;
    for( var i = 1; i<midpoint; i++)
    {
        currentNode = currentNode.next;

    }
    return currentNode;
};